export { useReducedMotion } from "framer-motion";

/**
 * Returns true when the user prefers reduced motion. Re-exported from
 * framer-motion so primitives import from one place. Gates WebGL/animation
 * primitives to render a static fallback when true.
 */
