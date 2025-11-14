import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarClass = [styles.sidebar, collapsed ? styles.collapsed : undefined].join(' ');
  return (
    <aside className={sidebarClass}>
      <button
        className={styles.toggle}
        aria-label={collapsed ? 'Mở menu' : 'Thu gọn menu'}
        onClick={() => setCollapsed((v) => !v)}
      >
        <span className={styles.hamburger} />
      </button>
      <div className={styles.brand}>THP ERP</div>
      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          title="Dashboard"
          className={({ isActive }) => [styles.link, isActive ? styles.active : undefined].join(' ')}
        >
          <span className={styles.dot} />
          <span className={styles.linkLabel}>Dashboard</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;


