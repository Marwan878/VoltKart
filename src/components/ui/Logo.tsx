import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Logo({
  theme = "light",
}: {
  readonly theme?: "light" | "dark";
}) {
  return (
    <Link to="/" className={style.logo}>
      <img
        src={theme === "dark" ? "/brand.png" : "/brand-light.png"}
        alt=""
        className=""
      />
    </Link>
  );
}
