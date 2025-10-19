import React from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const baseClasses = 'p-4 rounded-lg border-l-4 my-6';

  const typeClasses = {
    info: 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200',
    error: 'bg-red-50 border-red-500 text-red-800 dark:bg-red-900/20 dark:text-red-200',
    success: 'bg-green-50 border-green-500 text-green-800 dark:bg-green-900/20 dark:text-green-200',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {children}
    </div>
  );
}