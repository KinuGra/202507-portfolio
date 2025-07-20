import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="#works">Works</Link>
        <Link href="#articles">Articles</Link>
        <Link href="#skills">Skills</Link>
      </nav>
    </header>
  );
}