"use client"

import Link from "next/link"
import { Github, ExternalLink, FileText, Trophy, Users } from "lucide-react"
import { useState } from "react"

interface WorkCardProps {
    work: {
        title: string
        description: string
        year: string
        url: string
        technologies?: string[]
        award?: {
            title: string
            description: string
        }
        teamRole?: {
            title: string
            description: string
            teamSize: number
        }
        github?: string
        demo?: string
        article?: string
    }
    delay: number
}

export function WorkCard({ work, delay }: WorkCardProps) {
    const [showAwardDetails, setShowAwardDetails] = useState(false)
    const [showTeamRoleDetails, setShowTeamRoleDetails] = useState(false)

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 group">
            <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                    {work.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed flex-1">{work.description}</p>

                {/* Award Section */}
                {work.award && (
                    <div className="mb-4">
                        <button
                            onClick={() => setShowAwardDetails(!showAwardDetails)}
                            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium mb-2"
                        >
                            <Trophy className="w-4 h-4" />
                            {work.award.title}
                        </button>
                        {showAwardDetails && (
                            <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-3 text-sm text-yellow-100 mb-2">
                                {work.award.description}
                            </div>
                        )}
                    </div>
                )}

                {/* Team Role Section */}
                {work.teamRole && (
                    <div className="mb-4">
                        <button
                            onClick={() => setShowTeamRoleDetails(!showTeamRoleDetails)}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mb-2"
                        >
                            <Users className="w-4 h-4" />
                            チーム開発 ({work.teamRole.teamSize}人) - {work.teamRole.title}
                        </button>
                        {showTeamRoleDetails && (
                            <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-3 text-sm text-cyan-100 mb-2">
                                {work.teamRole.description}
                            </div>
                        )}
                    </div>
                )}

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

                {/* Action Buttons */}
                <div className="space-y-3 mt-auto">
                    {/* Primary buttons row */}
                    <div className="flex flex-wrap gap-2">
                        {work.github && (
                            <Link
                                href={work.github}
                                target="_blank"
                                className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
                            >
                                <Github className="w-3 h-3" />
                                GitHub
                            </Link>
                        )}
                        {work.demo && (
                            <Link
                                href={work.demo}
                                target="_blank"
                                className="flex items-center gap-1 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-blue-200 rounded-lg text-xs font-medium transition-colors border border-blue-500/20"
                            >
                                <ExternalLink className="w-3 h-3" />
                                Demo
                            </Link>
                        )}
                        {work.article && (
                            <Link
                                href={work.article}
                                target="_blank"
                                className="flex items-center gap-1 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 hover:text-green-200 rounded-lg text-xs font-medium transition-colors border border-green-500/20"
                            >
                                <FileText className="w-3 h-3" />
                                詳細
                            </Link>
                        )}
                    </div>

                    {/* Bottom row with year and main link */}
                    <div className="flex justify-between items-center">
                        <small className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{work.year}</small>
                        <Link
                            href={work.url}
                            target="_blank"
                            className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        >
                            <span>View Project</span>
                            <div className="w-4 h-4 group-hover:translate-x-1 transition-transform">→</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
