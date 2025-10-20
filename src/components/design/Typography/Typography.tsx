import type { Variant } from "~/types/typography";
import "./Typography.css"

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant: Variant;
}

export default function Typography({ children, variant, ...props }: TypographyProps) {
    const variants = {
        h: 'typography-h',
        link: 'typography-link',
        body1: 'typography-body1',
        body2: 'typography-body2',
    };

    return (
        <div className={variants[variant]} {...props}>
            {children}
        </div>
    )
}
