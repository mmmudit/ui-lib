import { mergeProps, useRender } from "@base-ui/react";
import { cva } from "class-variance-authority";

const statVariants = cva(
  "rounded-2xl border-3 border-border px-4 py-3 shadow-raised bg-linear-to-tl from-background to-highlight/75",
);

interface StatProps extends useRender.ComponentProps<"div"> {}

export function Stat(props: StatProps) {
  const mergedProps = mergeProps(props, {
    className: statVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

const statLabelVariants = cva(
  "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
);

interface StatLabelProps extends useRender.ComponentProps<"div"> {}

export function StatLabel(props: StatLabelProps) {
  const mergedProps = mergeProps(props, {
    className: statLabelVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

const statValueVariants = cva("text-2xl font-semibold");

interface StatValueProps extends useRender.ComponentProps<"div"> {}

export function StatValue(props: StatValueProps) {
  const mergedProps = mergeProps(props, {
    className: statValueVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
