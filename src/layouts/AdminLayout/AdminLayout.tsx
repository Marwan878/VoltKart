import { Logo } from "@components/ui";
import { Nav } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";

import { ADMIN_NAV_LINKS } from "@constants";

import styles from "./style.module.css";
import { ToastList } from "@components/feedback";

const AdminLayout = () => {
  const location = useLocation();
  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className="d-flex align-items-center gap-2">
          <Logo theme="dark" />
          <h1 className={styles.brand}>Admin Panel</h1>
        </div>
        <Nav className="flex-column" variant="pills">
          {ADMIN_NAV_LINKS.map((item) => (
            <Nav.Item key={item.path} className="fs-6 mb-1">
              <Nav.Link
                as={Link}
                to={item.path}
                active={location.pathname === item.path}
                className={`d-flex align-items-center gap-2 py-2 ${styles.navLink}`}
              >
                <item.icon size={26} />
                <span>{item.label}</span>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>

      <ToastList />
    </div>
  );
};

export default AdminLayout;
