import { mergeProps, Switch, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  " inline-flex cursor-pointer h-5.5 w-12 rounded-full border border-border bg-white/6 backdrop-blur-md shadow-inset focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-white/25 focus-visible:ring-2 data-[checked]:bg-white/16 data-[checked]:border-primary/40",
);
const thumbVariants = cva(
  "h-5 w-5 bg-white/12 backdrop-blur-md relative rounded-full block ease-out transition-all duration-350 border border-border after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:bg-white/40 after:rounded-full shadow-inset translate-x-0 data-[checked]:translate-x-6.5 data-[checked]:after:bg-primary",
);
interface SwitchProps
  extends
    useRender.ComponentProps<"switch">,
    VariantProps<typeof switchVariants> {}

export default function NeuSwitch(props: SwitchProps) {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });
  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
}
