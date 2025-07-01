import { Logo, Overlay } from "@components/ui";
import RightContainer from "./RightContainer/RightContainer";
import Sidebar from "./Sidebar/Sidebar";

type MiddleBarProps = {
  readonly sidebarOpen: boolean;
  readonly onSidebarOpen: () => void;
  readonly onSidebarClose: () => void;
};

export default function MiddleBar({
  sidebarOpen,
  onSidebarOpen,
  onSidebarClose,
}: Readonly<MiddleBarProps>) {
  return (
    <nav className="container py-2 d-flex justify-content-between align-items-center">
      <Logo />
      <Sidebar open={sidebarOpen} onClose={onSidebarClose} />
      {sidebarOpen && <Overlay />}
      <RightContainer onSidebarOpen={onSidebarOpen} />
    </nav>
  );
}
