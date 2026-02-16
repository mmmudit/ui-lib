import { useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "group relative inline-flex justify-center items-center cursor-pointer overflow-hidden focus-visible:ring-white/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none shadow-raised bg-white/8 backdrop-blur-md text-foreground hover:bg-white/12 disabled:opacity-50 disabled:pointer-events-none font-medium active:shadow-inset transition-all duration-250 ease-out active:scale-97",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary border-primary/40",
        destructive: "text-destructive border-destructive/40",
        warning: "text-warning border-warning/40",
      },
      size: {
        default: "h-12 px-4",
        icon: "h-12 w-12",
      },
      shape: {
        default: "rounded-xl",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);

interface ButtonProps
  extends
    useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  shine?: boolean;
}

export default function Button(props: ButtonProps) {
  const [mouseX, setMouseX] = useState(0.5);
  const [mouseY, setMouseY] = useState(0.5);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const shineEnabled = props.shine ?? true;

  const setRefs = (node: HTMLButtonElement | null) => {
    buttonRef.current = node;
    if (typeof props.ref === "function") {
      props.ref(node);
      return;
    }
    if (props.ref && "current" in props.ref) {
      props.ref.current = node;
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    props.onPointerMove?.(event);
    if (!shineEnabled || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    setMouseX((event.clientX - rect.left) / rect.width);
    setMouseY((event.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    props.onPointerLeave?.(event);
    if (!shineEnabled) return;
    setMouseX(0.5);
    setMouseY(0.5);
  };

  const mergedStyle = shineEnabled
    ? ({
        ...(props.style ?? {}),
        "--mx": `${mouseX * 100}%`,
        "--my": `${mouseY * 100}%`,
      } as React.CSSProperties)
    : props.style;

  const shineLayers = shineEnabled ? (
    <>
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-0 glow" />
        <span className="absolute inset-0 shine mix-blend-screen" />
      </span>
      <span className="absolute inset-0.5 rounded-[inherit] bg-black/35" />
    </>
  ) : null;

  const {
    render,
    className,
    variant,
    size,
    shape,
    shine,
    children,
    onPointerMove,
    onPointerLeave,
    style,
    ...restProps
  } = props;

  const mergedProps = {
    ...restProps,
    className: twMerge(
      buttonVariants({
        variant,
        size,
        shape,
      }),
      className,
    ),
    tabIndex: 0,
    ref: setRefs,
    style: mergedStyle ?? style,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    children: (
      <>
        {shineLayers}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </>
    ),
  };

  const element = useRender({
    defaultTagName: "button",
    render,
    props: mergedProps,
  });
  return element;
}
