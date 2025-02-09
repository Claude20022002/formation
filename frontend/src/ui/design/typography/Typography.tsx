interface TypographyProps {
    variant?:
        | "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "lead"
        | "caption1"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption2"
        | "caption3"
        | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    component: Component = "div",
    children,
}: TypographyProps) => {
    return (
        <Component className={`typography-${variant}`}>{children}</Component>
    );
};
