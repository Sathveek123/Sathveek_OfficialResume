"use client";

import { cn } from "@/lib/cn";
import type React from "react";
import { forwardRef, useRef, useState } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: "md" | "xl" | "full";
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  magnetic?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      rounded = "xl",
      loading,
      iconLeft,
      iconRight,
      magnetic,
      disabled,
      children,
      onPointerDown,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLButtonElement | null>(null);
    const resolvedRef = (node: HTMLButtonElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    const [ripple, setRipple] = useState<null | { x: number; y: number; key: number }>(null);
    const [magnet, setMagnet] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const sizes: Record<ButtonSize, string> = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-11 px-5 text-sm",
      xl: "h-12 px-6 text-base",
    };

    const radii: Record<NonNullable<ButtonProps["rounded"]>, string> = {
      md: "rounded-md",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const variants: Record<ButtonVariant, string> = {
      primary:
        "text-white shadow-[0_14px_36px_rgba(124,58,237,0.25)] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] hover:brightness-[1.03]",
      secondary:
        "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-[var(--shadow-sm)] hover:bg-[color-mix(in_oklab,var(--card),var(--foreground)_6%)]",
      ghost:
        "text-[var(--foreground)] hover:bg-[color-mix(in_oklab,var(--card),var(--foreground)_6%)]",
      link: "h-auto px-0 text-[var(--foreground)] underline-offset-4 hover:underline",
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={resolvedRef}
        disabled={isDisabled}
        className={cn(
          "relative inline-flex select-none items-center justify-center gap-2 overflow-hidden transition-transform duration-200",
          variant !== "link" && "active:scale-[0.98] hover:scale-[1.02]",
          fullWidth && "w-full",
          radii[rounded],
          sizes[size],
          variants[variant],
          isDisabled && "cursor-not-allowed opacity-60",
          className,
        )}
        style={magnetic ? { transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0)` } : undefined}
        onPointerDown={(e) => {
          onPointerDown?.(e);
          if (variant === "link" || isDisabled) return;
          const el = innerRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          setRipple({ x: e.clientX - r.left, y: e.clientY - r.top, key: Date.now() });
        }}
        onMouseMove={(e) => {
          onMouseMove?.(e);
          if (!magnetic) return;
          const el = innerRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          setMagnet({ x: dx * 0.06, y: dy * 0.06 });
        }}
        onMouseLeave={(e) => {
          onMouseLeave?.(e);
          if (!magnetic) return;
          setMagnet({ x: 0, y: 0 });
        }}
        {...props}
      >
        {ripple ? (
          <span
            key={ripple.key}
            className="pointer-events-none absolute opacity-0"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              borderRadius: 9999,
              transform: "translate(-50%, -50%) scale(0)",
              background: "rgba(255,255,255,0.35)",
              animation: "btn-ripple 650ms var(--ease-out, cubic-bezier(0, 0, 0.2, 1))",
            }}
            onAnimationEnd={() => setRipple(null)}
          />
        ) : null}
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden="true"
          />
        ) : null}
        {iconLeft ? <span className="-ml-0.5">{iconLeft}</span> : null}
        <span className={cn(loading && "opacity-80")}>{children}</span>
        {iconRight ? <span className="-mr-0.5">{iconRight}</span> : null}
      </button>
    );
  },
);

Button.displayName = "Button";
