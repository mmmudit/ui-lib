import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "w-full rounded-2xl border-3 border-border px-4 py-3 shadow-inset bg-linear-to-tl",
  {
    variants: {
      variant: {
        default: "from-muted/10 to-muted/30 text-foreground",
        info: "from-primary/5 to-primary/20 text-primary",
        success: "from-emerald-500/5 to-emerald-500/20 text-emerald-600",
        warning: "from-warning/5 to-warning/20 text-warning",
        destructive: "from-destructive/5 to-destructive/20 text-destructive",
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
