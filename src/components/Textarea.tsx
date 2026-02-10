import { mergeProps, useRender } from "@base-ui/react";
import { cva } from "class-variance-authority";

const textareaVariants = cva(
  "flex w-full min-h-24 rounded-md border border-border bg-white/6 px-3 py-2 text-sm text-foreground backdrop-blur-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/25 shadow-inset disabled:opacity-50 resize-none",
);

interface TextareaProps extends useRender.ComponentProps<"textarea"> {}

export default function Textarea(props: TextareaProps) {
  const mergedProps = mergeProps(props, {
    className: textareaVariants(),
  });

  const element = useRender({
    defaultTagName: "textarea",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
