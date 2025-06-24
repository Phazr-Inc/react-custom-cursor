"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Home",
    description: "Get started with @phazr/react-custom-cursor",
  },
  {
    href: "/getting-started",
    label: "Getting Started",
    description: "Quick start guide and basic usage",
  },
  {
    href: "/api",
    label: "API Reference",
    description: "Detailed API documentation",
  },
  {
    href: "/examples",
    label: "Examples",
    description: "Common usage examples and patterns",
  },
  {
    href: "/customization",
    label: "Customization",
    description: "Style and behavior customization",
  },
  {
    href: "/contributing",
    label: "Contributing",
    description: "How to contribute to the project",
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "Common questions and answers",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar hidden md:flex flex-col w-72 p-6 overflow-y-auto sticky top-[73px] max-h-[calc(100vh-73px)]">
      <div className="text-xl font-bold mb-8">
        <Link
          href="/"
          className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          @phazr/react-custom-cursor
        </Link>
      </div>
      <nav className="flex flex-col gap-2 text-base">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative px-3 py-2 rounded-lg transition-all duration-200 ease-out ${
                isActive
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              <div className="font-medium mb-0.5">{item.label}</div>
              <div
                className={`text-xs transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-300"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                }`}
              >
                {item.description}
              </div>
              {isActive && (
                <div className="absolute left-0 top-[50%] -translate-y-[50%] w-1 h-8 bg-blue-500 dark:bg-blue-400 rounded-r" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
