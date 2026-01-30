import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-starbucks-green">
          Blog Post Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-starbucks-green text-white px-6 py-3 rounded-lg hover:bg-starbucks-green-light transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
