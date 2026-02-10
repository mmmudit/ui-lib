import { mergeProps, Progress, type useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "relative overflow-hidden rounded-full border border-border bg-white/6 backdrop-blur-md shadow-inset p-0.25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
  {
    variants: {
      orientation: {
        horizontal: "w-full h-5",
        vertical: "h-full w-5",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

const progressIndicatorVariants = cva(
  "h-full rounded-full transition-all duration-300 ease-out",
  {
    variants: {
      orientation: {
        horizontal: "bg-linear-to-l",
        vertical: "bg-linear-to-t",
      },

      variant: {
        default: "from-primary/80 to-primary/35",
        secondary: "from-white/50 to-white/20",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
    },
  },
);

interface ProgressProps
  extends
    useRender.ComponentProps<"progress">,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressIndicatorVariants> {}

export default function NeuProgress(props: ProgressProps) {
  const rootMerge = mergeProps(props, {
    className: progressVariants({ orientation: props.orientation }),
  });
  const { value, ...otherProps } = rootMerge;

  return (
    <Progress.Root value={value} {...otherProps}>
      <Progress.Track className="w-full h-full">
        <Progress.Indicator
          className={progressIndicatorVariants({
            variant: props.variant,
            orientation: props.orientation,
          })}
          style={
            props.orientation === "vertical"
              ? {
                  height: `${props.value}%`,
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                }
              : {}
          }
        />
      </Progress.Track>
    </Progress.Root>
  );
}
