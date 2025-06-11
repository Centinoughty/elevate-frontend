// components/GoogleLoginButton.jsx
import { signIn } from "next-auth/react";

export default function GoogleLoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Sign in with Google
    </button>
  );
}
