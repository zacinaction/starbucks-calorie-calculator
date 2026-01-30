import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Starbucks Calorie Calculator Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Helper function to parse HTML tags in text
  const parseHTML = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /<b>(.*?)<\/b>/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the tag
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add the bold element
      parts.push(<b key={`bold-${parts.length}`}>{match[1]}</b>);
      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  // Simple markdown-like rendering with HTML support
  const formatContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;
    let listType: "ul" | "ol" = "ul";

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim();
        if (text) {
          const parsedContent = parseHTML(text);
          elements.push(
            <p key={`p-${elements.length}`} className="mb-4 text-gray-700 leading-relaxed">
              {parsedContent}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        const ListComponent = listType === "ul" ? "ul" : "ol";
        elements.push(
          <ListComponent
            key={`list-${elements.length}`}
            className={`mb-4 ml-6 ${listType === "ul" ? "list-disc" : "list-decimal"} space-y-2 text-gray-700`}
          >
            {listItems.map((item, idx) => {
              const parsedContent = parseHTML(item.trim());
              return <li key={idx}>{parsedContent}</li>;
            })}
          </ListComponent>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("# ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h1
            key={`h1-${elements.length}`}
            className="text-3xl font-bold mb-6 mt-8 text-starbucks-green"
          >
            {trimmed.substring(2)}
          </h1>
        );
      } else if (trimmed.startsWith("## ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h2
            key={`h2-${elements.length}`}
            className="text-2xl font-bold mb-4 mt-6 text-starbucks-green"
          >
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3
            key={`h3-${elements.length}`}
            className="text-xl font-semibold mb-3 mt-4 text-starbucks-green"
          >
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        flushParagraph();
        if (!inList) {
          listType = "ul";
          inList = true;
        }
        listItems.push(trimmed.substring(2));
      } else if (/^\d+\.\s/.test(trimmed)) {
        flushParagraph();
        if (!inList) {
          listType = "ol";
          inList = true;
        }
        listItems.push(trimmed.replace(/^\d+\.\s/, ""));
      } else if (trimmed === "") {
        flushParagraph();
        flushList();
      } else {
        if (inList) {
          flushList();
        }
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-starbucks-green hover:underline mb-8"
      >
        <ArrowLeft size={20} />
        Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-starbucks-green">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8 md:p-12">
          {formatContent(post.content)}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-starbucks-green hover:underline font-semibold"
          >
            <ArrowLeft size={20} />
            View All Blog Posts
          </Link>
        </div>
      </article>
    </div>
  );
}
