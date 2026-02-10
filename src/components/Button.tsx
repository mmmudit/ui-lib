import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex justify-center items-center cursor-pointer focus-visible:ring-white/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border border-border shadow-raised bg-white/8 backdrop-blur-md text-foreground hover:bg-white/12 disabled:opacity-50 disabled:pointer-events-none font-medium active:shadow-inset transition-all duration-250 ease-out active:scale-97",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary border-primary/40",
        destructive: "text-destructive border-destructive/40",
        warning: "text-warning border-warning/40",
      },
      size: {
        default: "h-12 px-4",
        icon: "h-12 w-12",
      },
      shape: {
        default: "rounded-xl",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);

interface ButtonProps
  extends
    useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function Button(props: ButtonProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      buttonVariants({
        variant: props.variant,
        size: props.size,
        shape: props.shape,
      }),
    ),
    tabIndex: 0,
  });

  const element = useRender({
    defaultTagName: "button",
    render: props.render,
    props: mergedProps,
  });
  return element;
}
