import { useState } from "react";
import BottomBar from "./BottomBar/BottomBar";
import MiddleBar from "./MiddleBar/MiddleBar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="mb-5">
      <MiddleBar
        sidebarOpen={sidebarOpen}
        onSidebarOpen={handleSidebarOpen}
        onSidebarClose={handleSidebarClose}
      />
      <BottomBar onSidebarOpen={handleSidebarOpen} />
    </header>
  );
}
