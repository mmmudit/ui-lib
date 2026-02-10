import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-3 border-border shadow-raised bg-linear-to-tl from-background to-highlight/75 text-foreground",
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        md: "h-14 w-14 text-sm",
        lg: "h-20 w-20 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface AvatarProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export default function NeuAvatar(props: AvatarProps) {
  const { src, alt, fallback, size } = props;
  const content = src ? (
    <img className="h-full w-full object-cover" src={src} alt={alt ?? ""} />
  ) : (
    <span className="font-semibold">{fallback ?? "?"}</span>
  );

  const mergedProps = mergeProps(props, {
    className: avatarVariants({
      size,
      className: props.className,
    }),
    children: content,
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
