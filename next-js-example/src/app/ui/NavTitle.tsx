import React from 'react';

interface NavTitleProps {
  title: string;
}

export function NavTitle({ title }: NavTitleProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold dark:text-gray-900">{title}</h1>
    </div>
  );
}
