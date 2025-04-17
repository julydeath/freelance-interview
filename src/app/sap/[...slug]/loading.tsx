export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="w-16 h-16 animate-spin text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <div className="text-xl font-medium text-gray-700 animate-pulse">
          Generating personalized SAP page…
        </div>
        <p className="text-sm text-gray-500 max-w-md text-center">
          We&apos;re analyzing the URL and generating module-specific content
          using AI. This may take a few seconds.
        </p>
      </div>
    </main>
  );
}
