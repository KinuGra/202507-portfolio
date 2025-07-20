import Link from "next/link";
import {
  Twitter,
  Github,
  BookOpen,
  MessageCircle,
} from "lucide-react";

export function Profile() {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <div style={styles.container}>
        <img src="/icon.png" alt="アイコン" style={styles.avatar} />
        <div style={styles.info}>
          <h1 style={styles.name}>
            Kinu <span style={styles.handle}>(@KinuGra)</span>
          </h1>
          <p><strong>所属</strong><br />大学生</p>
          <p><strong>好きな技術</strong><br />Web系全般</p>
          <p><strong>趣味</strong><br />ハッカソン / アニメ / ゲーム</p>
          <p style={styles.credit}>
            このページは <code>lucide-react</code> などのライブラリを用いて作成されています。
          </p>
        </div>
      </div>

      <div style={styles.links}>
        <Social
          label="Twitter (X)"
          account="@KinuGra"
          href="https://twitter.com/KinuGra"
          icon={<Twitter size={20} />}
          bg="black"
        />
        <Social
          label="Zenn"
          account="@KinuGra"
          href="https://zenn.dev/KinuGra"
          icon={<BookOpen size={20} />}
          bg="#3EA8FF"
        />
        <Social
          label="GitHub"
          account="@KinuGra"
          href="https://github.com/KinuGra"
          icon={<Github size={20} />}
          bg="black"
        />
        <Social
          label="Discord"
          account="アカウント名"
          href="https://discord.gg/your-discord-link"
          icon={<MessageCircle size={20} />}
          bg="#5865F2"
        />
      </div>
    </section>
  );
}

function Social({
  label,
  account,
  href,
  icon,
  bg,
}: {
  label: string;
  account: string;
  href: string;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <Link href={href} target="_blank" style={{ ...styles.social(bg) }}>
      <span style={styles.platform}>{label}</span>
      <span>{account}</span>
      <span style={styles.icon}>{icon}</span>
    </Link>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  avatar: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  info: {
    flex: 1,
    minWidth: "260px",
  },
  name: {
    fontSize: "2rem",
    color: "#26c6da",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  handle: {
    color: "#333",
    fontSize: "1rem",
    marginLeft: "0.5rem",
  },
  credit: {
    fontSize: "0.8rem",
    color: "#666",
    marginTop: "0.5rem",
  },
  links: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
    marginTop: "2rem",
  },
  social: (bg: string) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    color: "white",
    textDecoration: "none",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    backgroundColor: bg,
  }),
  platform: {
    fontSize: "0.85rem",
    opacity: 0.85,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
