import { NAVIGATION_LINKS } from "@constants";
import { useAppSelector } from "@store/hooks";
import { CSSProperties } from "react";

type LinksProps = {
  containerClassName?: string;
  linkClassName?: string;
  linkStyle?: CSSProperties;
};

export default function Links({
  containerClassName,
  linkClassName,
  linkStyle,
}: Readonly<LinksProps>) {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ul className={containerClassName}>
      {NAVIGATION_LINKS.map((link) => {
        if (link.visibleFor === "logged_in" && !user?.id) {
          return null;
        }

        if (link.visibleFor === "logged_out" && user?.id) {
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
