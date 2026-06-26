export { useReducedMotion } from "framer-motion";

/**
 * Returns true when the user prefers reduced motion.
 * Every motion-driven primitive reads this to decide whether to animate
 * or snap to the final state (animation as progressive enhancement).
 *
 * Re-exported here so call sites import from "@/lib/useReducedMotion"
 * and we keep one source of truth for the motion-access contract.
 */
