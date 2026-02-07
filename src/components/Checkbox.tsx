import { Checkbox, mergeProps, useRender } from "@base-ui/react";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "inline-flex h-5 w-5 shrink-0 relative rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 data-[checked]:bg-linear-to-tl duration-350 ease-out transitio-all data-[checked]:from-primary/5 data-[checked]:to-primary/25 data-[checked]:shadow-raised data-[checked]:border-primary/50 cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
);

const checkIndicatorVariants = cva(
  "flex items-center justify-center h-5 w-5 absolute top-1/2 left-1/2 -translate-1/2",
);

interface CheckboxProps extends React.ComponentProps<typeof Checkbox.Root> {}

export default function Neucheckbox(props: CheckboxProps) {
  const mergedProps = mergeProps(props, {
    className: checkboxVariants(),
  });
  const mergedIndicatorProps = mergeProps(props, {
    className: checkIndicatorVariants(),
  });
  return (
    <Checkbox.Root {...mergedProps}>
      <Checkbox.Indicator {...mergedIndicatorProps}>
        <Check className="w-3 h-3" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
