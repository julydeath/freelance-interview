import Link from "next/link";

export default function NotFound({ slug }: { slug: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          404 - Module Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We couldn&apos;t find a module with the slug &quot;{slug}&quot;. It
          may have been removed or doesn&apos;t exist.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
