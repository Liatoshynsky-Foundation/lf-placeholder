import './Typography.css';

import type { Variant } from '~/types/typography';

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant: Variant;
}

export default function Typography({ children, variant, className, ...props }: TypographyProps) {
  const variants = {
    h: 'typography-h',
    link: 'typography-link',
    body1: 'typography-body1',
    body2: 'typography-body2'
  };

  const classNames = variants[variant] + ' ' + className;

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
