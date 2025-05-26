import style from "./style.module.css";

export default function Logo({
  theme = "light",
}: {
  theme?: "light" | "dark";
}) {
  return (
    <a href="#" className={style.logo}>
      <img
        src={theme === "dark" ? "/brand.png" : "/brand-light.png"}
        alt=""
        className=""
      />
    </a>
  );
}
