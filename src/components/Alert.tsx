import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "w-full rounded-2xl border border-border bg-white/6 backdrop-blur-xl px-4 py-3 shadow-inset",
  {
    variants: {
      variant: {
        default: "text-foreground",
        info: "text-primary border-primary/30",
        success: "text-emerald-300 border-emerald-400/30",
        warning: "text-warning border-warning/30",
        destructive: "text-destructive border-destructive/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface AlertProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof alertVariants> {}

export function Alert(props: AlertProps) {
  const mergedProps = mergeProps(props, {
    className: alertVariants({
      variant: props.variant,
      className: props.className,
    }),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

const alertTitleVariants = cva("text-sm font-semibold");

interface AlertTitleProps extends useRender.ComponentProps<"div"> {}

export function AlertTitle(props: AlertTitleProps) {
  const mergedProps = mergeProps(props, {
    className: alertTitleVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

const alertDescriptionVariants = cva("text-sm text-muted-foreground");

interface AlertDescriptionProps extends useRender.ComponentProps<"div"> {}

export function AlertDescription(props: AlertDescriptionProps) {
  const mergedProps = mergeProps(props, {
    className: alertDescriptionVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
