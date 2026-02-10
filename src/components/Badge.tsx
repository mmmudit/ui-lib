import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border bg-white/8 px-2.5 py-0.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/25 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "shadow-raised hover:shadow-inset",
        primary:
          "text-primary border-primary/40 shadow-raised hover:shadow-inset",
        destructive:
          "text-destructive border-destructive/40 shadow-raised hover:shadow-inset",
        warning:
          "text-warning border-warning/40 shadow-raised hover:shadow-inset",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

export function NeuBadge(props: BadgeProps) {
  const { render, className, variant, ...otherProps } = props;

  const mergedProps = mergeProps(otherProps, {
    className: badgeVariants({
      variant,
      className,
    }),
  });

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });
  return element;
}
