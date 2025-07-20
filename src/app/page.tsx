import { works } from "@/data/works"
import { articles } from "@/data/articles"
import { skills } from "@/data/skills"
import { Section } from "@/components/Section"
import { Card } from "@/components/Card"
import { Profile } from "@/components/Profile"
import { JsonDisplay } from "@/components/JsonDisplay"
import Link from "next/link"

export default function HomePage() {
  const profile = {
    name: "Kinu",
    role: "Student",
    hobbies: ["ハッカソン", "プログラミング", "アニメ", "ゲーム"],
    location: "Japan"
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <Profile />

          {/* JSON Display with Typing Animation */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Profile Data
            </h2>
            <JsonDisplay data={profile} />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        <Section title="Works" id="works">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <Card key={work.title} delay={index * 0.1}>
                <Link href={work.url} target="_blank" className="block group">
                  <div className="p-6 h-full">
                    <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{work.description}</p>
                    <div className="flex justify-between items-center">
                      <small className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{work.year}</small>
                      <div className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform">→</div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Skills" id="skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} delay={index * 0.1}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">{skill.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Level:</span>
                      <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-sm">{skill.level}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{skill.comment}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Articles" id="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={article.url} delay={index * 0.1}>
                <Link href={article.url} target="_blank" className="block group">
                  <div className="p-6 h-full">
                    <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span className="bg-blue-900/30 px-3 py-1 rounded-full">{article.site}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </main>
  )
}
