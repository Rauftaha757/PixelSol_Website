"use client";

import {
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/useReducedMotion";

const SETTLE = [0.625, 0.05, 0, 1] as const;

export const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap select-none overflow-hidden transition-[color,box-shadow,border-color] duration-300 focus-visible:outline-none disabled:opacity-40 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "rounded-pill bg-energy text-canvas font-semibold px-6 py-3 hover:shadow-[0_16px_50px_rgba(251,48,129,0.35)]",
        secondary:
          "rounded-pill border border-hair px-6 py-3 text-t-90 bg-white/[0.02] hover:border-hair-energy hover:text-t-100",
        ghost: "rounded-pill px-4 py-2 text-t-70 hover:text-t-100",
        linkArrow:
          "font-mono uppercase text-xs tracking-[0.14em] text-t-70 hover:text-t-100 px-1 py-1",
      },
      size: { sm: "text-xs", md: "text-sm", lg: "text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Ripple = { id: number; x: number; y: number };

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  children: ReactNode;
  magnetic?: boolean;
}

/**
 * Button — the primary interactive primitive of "The Thinking System".
 * - Magnetic: on fine pointers the button drifts toward the cursor (±clamp),
 *   its label counter-translates 40% for parallax. Disabled under reduced-motion.
 * - Ripple: a radial energy bloom spawns at the click point on pointer-down.
 * - Variants: primary (energy gradient fill) / secondary (hairline ghost) /
 *   ghost / linkArrow (mono label + arrow + energy underline).
 */
export default function Button({
  href,
  children,
  variant,
  size,
  magnetic = true,
  className,
  ...rest
}: ButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const counter = useRef(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConf = { stiffness: 150, damping: 15, mass: 0.1 };
  const sx = useSpring(mx, springConf);
  const sy = useSpring(my, springConf);
  const childX = useTransform(sx, (v) => v * 0.4);
  const childY = useTransform(sy, (v) => v * 0.4);

  const onMove = (e: ReactPointerEvent) => {
    if (reduce || !magnetic) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 16);
    my.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 16);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  const onPointerDown = (e: ReactPointerEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const id = counter.current++;
    setRipples((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    window.setTimeout(
      () => setRipples((rs) => rs.filter((rp) => rp.id !== id)),
      650
    );
  };

  const isLinkArrow = variant === "linkArrow";
  const useMagnetic = magnetic && !reduce;

  const inner = (
    <>
      <motion.span
        className="relative z-10 inline-flex items-center gap-2"
        style={{ x: useMagnetic ? childX : 0, y: useMagnetic ? childY : 0 }}
      >
        {children}
        {isLinkArrow && <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />}
      </motion.span>

      {!reduce &&
        ripples.map((rp) => (
          <motion.span
            key={rp.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-white/25"
            style={{ left: rp.x, top: rp.y, x: "-50%", y: "-50%" }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 320, height: 320, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}

      {isLinkArrow && (
        <motion.span
          aria-hidden
          className="absolute bottom-0 left-1 right-1 h-px bg-energy"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: SETTLE }}
        />
      )}
    </>
  );

  const sharedClass = cn(buttonVariants({ variant, size }), className);
  const dataCursor = variant === "primary" ? "node" : "link";

  if (href) {
    const MotionA = motion.a;
    return (
      <MotionA
        href={href}
        ref={ref as never}
        className={sharedClass}
        data-cursor={dataCursor}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onPointerDown={onPointerDown}
        {...(rest as object)}
      >
        {inner}
      </MotionA>
    );
  }

  const MotionButton = motion.button;
  return (
    <MotionButton
      ref={ref as never}
      className={sharedClass}
      data-cursor={dataCursor}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerDown={onPointerDown}
      {...rest}
    >
      {inner}
    </MotionButton>
  );
}
