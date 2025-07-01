import { useState } from "react";
import BottomBar from "./BottomBar/BottomBar";
import MiddleBar from "./MiddleBar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="mb-5">
      <MiddleBar
        sidebarOpen={sidebarOpen}
        onSidebarOpen={() => setSidebarOpen(true)}
        onSidebarClose={() => setSidebarOpen(false)}
      />
      <BottomBar onSidebarOpen={() => setSidebarOpen(true)} />
    </header>
  );
}
