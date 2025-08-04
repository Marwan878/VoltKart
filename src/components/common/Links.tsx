import { NAVIGATION_LINKS } from "@constants";
import useSession from "@hooks/useSession";
import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

type LinksProps = {
  containerClassName?: string;
  linkClassName?: string;
  linkStyle?: CSSProperties;
  activeClassName?: string;
};

export default function Links({
  containerClassName = "",
  linkClassName = "",
  linkStyle,
  activeClassName = "",
}: Readonly<LinksProps>) {
  const { session, loading } = useSession();

  if (loading) {
    return null;
  }

  return (
    <ul className={containerClassName}>
      {NAVIGATION_LINKS.map((link) => {
        if (link.visibleFor === "logged_in" && !session) {
          return null;
        }

        if (link.visibleFor === "logged_out" && session) {
          return null;
        }

        return (
          <li key={link.text}>
            <NavLink
              to={link.href}
              style={{
                color: "inherit",
                width: "100%",
                display: "inline-block",
                ...linkStyle,
              }}
              className={({ isActive }) =>
                isActive
                  ? `${activeClassName} active ${linkClassName}`
                  : linkClassName
              }
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
