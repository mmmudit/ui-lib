import { mergeProps, useRender } from "@base-ui/react";
import { cva } from "class-variance-authority";

const radioGroupVariants = cva("flex flex-col gap-3");

interface RadioGroupProps extends useRender.ComponentProps<"div"> {}

export function RadioGroup(props: RadioGroupProps) {
  const mergedProps = mergeProps(props, {
    className: radioGroupVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

const radioItemVariants = cva("inline-flex items-center gap-3 text-sm");
const radioInputVariants = cva("peer sr-only");
const radioControlVariants = cva(
  "relative h-5 w-5 rounded-full border border-border bg-white/6 backdrop-blur-md shadow-inset flex items-center justify-center transition-all duration-200 peer-checked:border-primary/50 peer-checked:shadow-raised after:absolute after:h-2.5 after:w-2.5 after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity after:duration-200 peer-checked:after:opacity-100",
);

interface RadioItemProps extends useRender.ComponentProps<"input"> {
  label: string;
}

export function RadioItem(props: RadioItemProps) {
  const inputProps = mergeProps(props, {
    className: radioInputVariants(),
    type: "radio",
  });

  return (
    <label className={radioItemVariants()}>
      <input {...inputProps} />
      <span className={radioControlVariants()} />
      <span>{props.label}</span>
    </label>
  );
}
