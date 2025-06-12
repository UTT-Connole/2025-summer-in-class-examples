"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  let classes = "flex items-center gap-2 px-4 py-2 text-sm font-medium";
  classes += " rounded-md transition-colors duration-200";

  if (isActive) {
    classes += " bg-sky-100 text-blue-600 dark:bg-sky-900 dark:text-blue-100";
  } else {
    classes += " text-gray-700 bg-gray-100 hover:bg-gray-400";
  }

  classes +=
    " dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800";

  return (
    <li>
      <Link href={href} className={classes}>
        {children}
      </Link>
    </li>
  );
}
