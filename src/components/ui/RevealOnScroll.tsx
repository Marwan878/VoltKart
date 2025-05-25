import { motion } from "framer-motion";
import useInView from "@hooks/useInView";
import type { ReactNode } from "react";

export default function RevealOnScroll({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useInView({
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: "100%", opacity: 0, zIndex: -1 }}
      whileInView={{ zIndex: 1 }}
      animate={isInView ? { y: "0%", opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
