import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md mt-auto">
      MIT © Phazr Inc &middot;{" "}
      <Link
        href="https://github.com/phazr-xyz/react-custom-cursor"
        className="underline hover:text-blue-600"
      >
        GitHub
      </Link>
    </footer>
  );
}
