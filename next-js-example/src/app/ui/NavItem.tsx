import React, { ReactNode } from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function NavItem({ href, icon, label }: NavItemProps) {
    let classes ="block py-2.5 px-6 hover:bg-gray-700 transition duration-200"
    classes += " dark:text-gray-900";
  return (
    <li>
      <Link href={href} className={classes}>
        <div className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </div>
      </Link>
    </li>
  );
}
