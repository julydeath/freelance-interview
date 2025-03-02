"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="hover:cursor-pointer text-white px-4 py-2 bg-blue-800 rounded-lg"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
