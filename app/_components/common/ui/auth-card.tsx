import type { ReactNode } from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

interface AuthCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <Card className={`w-full max-w-md h-full flex flex-col ${className || ''}`}>
      <CardHeader className='flex-shrink-0'>
        <CardTitle className='text-h3! font-900! mb-2 text-center'>{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className='flex-1 p-6 overflow-y-auto'>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className='flex-shrink-0 justify-center p-6 pt-0 text-sm'>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
