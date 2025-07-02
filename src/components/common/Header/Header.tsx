import { Logo } from "@components/ui";
import RightContainer from "./RightContainer/RightContainer";

export default function Header() {
  return (
    <header className="mb-5">
      <nav className="container py-2 d-flex justify-content-between align-items-center">
        <Logo />
        <RightContainer />
      </nav>
    </header>
  );
}
