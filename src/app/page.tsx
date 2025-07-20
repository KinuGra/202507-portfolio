import { works } from "@/data/works"
import { articles } from "@/data/articles"
import { skills } from "@/data/skills"
import { certifications } from "@/data/certifications"
import { experiences } from "@/data/experiences"
import { Header } from "@/components/Header"
import { Section } from "@/components/Section"
import { Card } from "@/components/Card"
import { Profile } from "@/components/Profile"
import { JsonDisplay } from "@/components/JsonDisplay"
import { AboutMe } from "@/components/AboutMe"
import { ShowMoreSection } from "@/components/ShowMoreSection"
import { Award, Building2, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const profile = {
    name: "Kinu",
    role: "Student",
    hobbies: ["Hackathon", "Programming", "Anime", "Games"],
    location: "Japan"
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
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
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16 space-y-20">
          {/* About Me Section */}
          <Section title="About Me" id="about">
            <AboutMe />
          </Section>

          <Section title="Works" id="works">
            <ShowMoreSection initialCount={6} title="Works">
              {works.map((work, index) => (
                <Card key={work.title} delay={index * 0.1}>
                  <Link href={work.url} target="_blank" className="block group">
                    <div className="p-6 h-full flex flex-col">
                      <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed flex-1">{work.description}</p>

                      {/* Technology Stack */}
                      {work.technologies && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {work.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs font-medium border border-purple-500/20 hover:bg-purple-900/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-auto">
                        <small className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{work.year}</small>
                        <div className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform">→</div>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </ShowMoreSection>
          </Section>

          {/* Experience Section */}
          <Section title="Experience" id="experience">
            <ShowMoreSection initialCount={6} title="Experience">
              {experiences.map((exp, index) => (
                <Card key={exp.company} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-blue-400">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-lg text-gray-300 mb-3">{exp.company}</p>
                        <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </ShowMoreSection>
          </Section>

          {/* Certifications Section */}
          <Section title="Certifications & Achievements" id="certifications">
            <ShowMoreSection initialCount={6} title="Certifications">
              {certifications.map((cert, index) => (
                <Card key={cert.name} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">{cert.name}</h3>
                        <p className="text-gray-300 mb-2">{cert.issuer}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                          {cert.credentialUrl && (
                            <Link
                              href={cert.credentialUrl}
                              target="_blank"
                              className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors text-sm"
                            >
                              <ExternalLink className="w-4 h-4" />
                              証明書
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </ShowMoreSection>
          </Section>

          <Section title="Skills" id="skills">
            <ShowMoreSection initialCount={6} title="Skills">
              {skills.map((skill, index) => (
                <Card key={skill.name} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-green-400">{skill.name}</h3>
                    </div>
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
            </ShowMoreSection>
          </Section>

          <Section title="Articles" id="articles">
            <ShowMoreSection initialCount={6} title="Articles">
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
            </ShowMoreSection>
          </Section>
        </div>
      </main>
    </>
  )
}
