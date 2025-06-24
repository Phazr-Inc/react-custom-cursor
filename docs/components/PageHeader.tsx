'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

function getBreadcrumbs(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  return parts.map((part, index) => {
    const href = `/${parts.slice(0, index + 1).join('/')}`;
    const label = part
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return { href, label };
  });
}

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
      {breadcrumbs.length > 0 && pathname !== '/' && (
        <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Link
            href="/"
            className="hover:text-blue-700 dark:hover:text-blue-300"
          >
            Docs
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <span className="text-gray-400 dark:text-gray-600">/</span>
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 dark:text-gray-100">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
