import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={styles.scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUp aria-hidden />
    </button>
  );
}

export default ScrollToTop;
