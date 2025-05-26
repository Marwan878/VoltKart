import { NAVIGATION_LINKS } from "@constants";
import { useAppSelector } from "@store/hooks";
import { CSSProperties } from "react";

export default function Links({
  containerClassName,
  linkClassName,
  linkStyle,
}: {
  containerClassName?: string;
  linkClassName?: string;
  linkStyle?: CSSProperties;
}) {
  const { accessToken } = useAppSelector((state) => state.auth);
  return (
    <ul className={containerClassName}>
      {NAVIGATION_LINKS.map((link) => {
        if (link.visibleFor === "logged_in" && !accessToken) {
          return null;
        }

        if (link.visibleFor === "logged_out" && accessToken) {
          return null;
        }

        return (
          <li key={link.text} className={linkClassName} style={linkStyle}>
            <a href={link.href} style={{ color: "inherit" }}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
