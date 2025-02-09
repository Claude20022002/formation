import clsx from "clsx";

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
    theme?:
        | "black"
        | "white"
        | "red"
        | "green"
        | "blue"
        | "yellow"
        | "primary"
        | "secondary";
    weight?:
        | "regular"
        | "normal"
        | "medium"
        | "semibold"
        | "bold"
        | "extrabold";
    className?: string;
}

export const Typography = ({
    variant = "h3",
    component: Component = "div",
    children,
    theme = "black",
    weight = "regular",
    className,
}: TypographyProps) => {
    let variantStyle = "";

    switch (variant) {
        case "display":
            variantStyle = "text-red-500";
            break;
        case "h1":
            variantStyle = "text-green-500";
            break;
        case "h2":
            variantStyle = "text-blue-500";
            break;
        case "h3":
            variantStyle = "text-yellow-500";
            break;
        case "h4":
            variantStyle = "typography-h4";
            break;
        case "h5":
            variantStyle = "typography-h5";
            break;
    }
    return (
        <Component
            className={clsx(
                variantStyle,
                weight === "medium" && "font-medium",
                className
            )}
        >
            {children}
        </Component>
    );
};
