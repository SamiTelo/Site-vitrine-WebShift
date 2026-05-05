import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};