import { mergeProps, Slider } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const sliderVariants = cva("w-full h-4");

const trackVariants = cva(
  "relative w-full rounded-full border border-border bg-white/6 backdrop-blur-md shadow-inset h-4",
);

const rangeVariants = cva("absolute h-full rounded-full bg-primary", {
  variants: {
    variant: {
      default: "bg-linear-to-tl from-primary/80 to-primary/35",
      secondary: "bg-linear-to-tl from-white/50 to-white/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const thumbVariants = cva(
  "rounded-full border border-border bg-primary-/80 backdrop-blur-lg shadow-inset active:shadow-raised duration-350 transition-shadow h-5 w-7 cursor-pointer",
);

interface SliderProps
  extends
    React.ComponentProps<typeof Slider.Root>,
    VariantProps<typeof rangeVariants> {}

export default function NeuSlider(props: SliderProps) {
  const rootMerge = mergeProps(props, {
    className: sliderVariants(),
  });
  return (
    <Slider.Root {...rootMerge}>
      <Slider.Control className="relative">
        <Slider.Track className={trackVariants()}>
          <Slider.Indicator
            className={rangeVariants({ variant: props.variant })}
          />
        </Slider.Track>
        <Slider.Thumb className={thumbVariants()} />
      </Slider.Control>
    </Slider.Root>
  );
}
