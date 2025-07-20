import { works } from "@/data/works";
import { articles } from "@/data/articles";
import { skills } from "@/data/skills";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Profile } from "@/components/Profile";
import Link from "next/link";

export default function HomePage() {
  const profile = {
    name: "Kinu",
    handle: "@KinuGra",
    affiliation: "大学生",
    skills: ["Web"],
    hobbies: ["ハッカソン", "アニメ", "ゲーム"],
    social: {
      twitter: "https://twitter.com/KinuGra",
      zenn: "https://zenn.dev/KinuGra",
      github: "https://github.com/KinuGra",
      discord: "https://discord.gg/your-discord-link",
    },
  };

  return (
    <main>
      <Profile />

      {/* プロフィールの JSON 表示 */}
      <section style={{ background: "#f4f4f4", padding: "1rem", borderRadius: "8px", marginBottom: "2rem", overflowX: "auto" }}>
        <pre style={{ margin: 0, fontSize: "0.9rem" }}>
          {JSON.stringify(profile, null, 2)}
        </pre>
      </section>

      <Section title="Works" id="works">
        {works.map((work) => (
          <Card key={work.title}>
            <Link href={work.url} target="_blank">
              <h3 style={{ color: "var(--accent)", marginBottom: "0.25rem" }}>{work.title}</h3>
              <p style={{ marginBottom: "0.25rem" }}>{work.description}</p>
              <small>{work.year}</small>
            </Link>
          </Card>
        ))}
      </Section>

      <Section title="Articles" id="articles">
        {articles.map((article) => (
          <Card key={article.url}>
            <Link href={article.url} target="_blank">
              <h3 style={{ color: "var(--accent)", marginBottom: "0.25rem" }}>{article.title}</h3>
              <small>{article.site} - {article.date}</small>
            </Link>
          </Card>
        ))}
      </Section>

      <Section title="Skills" id="skills">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <h3 style={{ marginBottom: "0.25rem" }}>{skill.name}</h3>
            <p>{skill.level}：{skill.comment}</p>
          </Card>
        ))}
      </Section>
    </main>
  );
}
