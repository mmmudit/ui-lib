import { mergeProps, useRender } from "@base-ui/react";
import { cva } from "class-variance-authority";

const selectVariants = cva(
  "flex w-full appearance-none rounded-md border-1 border-highlight bg-background px-3 py-2 pr-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground shadow-inset disabled:opacity-50",
);

interface SelectProps extends useRender.ComponentProps<"select"> {}

export default function Select(props: SelectProps) {
  const mergedProps = mergeProps(props, {
    className: selectVariants(),
  });

  const element = useRender({
    defaultTagName: "select",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
