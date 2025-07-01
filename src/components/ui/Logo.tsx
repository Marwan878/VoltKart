import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Logo() {
  return (
    <Link to="/" className={style.logo}>
      <img src="/brand.png" alt="VoltKart logo." className="" />
    </Link>
  );
}
