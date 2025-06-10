import { createSignal } from "solid-js";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav class={styles.navbar}>
      <div class={styles.logo}>⚡სანტექნიკა</div>

      <div
        class={`${styles.hamburger} ${menuOpen() ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen())}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class={`${styles.navLinks} ${menuOpen() ? styles.showMenu : ""}`}>
        <li>
          <a href="#our_service" onClick={handleLinkClick}>
            ჩვენი სერვისი
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={handleLinkClick}>
            გალერეა
          </a>
        </li>
        <li>
          <a href="#contact_form" onClick={handleLinkClick}>
            დაგვიკავშირდი
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
