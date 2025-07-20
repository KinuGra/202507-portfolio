"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ShowMoreSectionProps {
    children: React.ReactNode[]
    initialCount?: number
    title: string
    layout?: "grid" | "list"
}

export function ShowMoreSection({ children, initialCount = 6, title, layout = "grid" }: ShowMoreSectionProps) {
    const [showAll, setShowAll] = useState(false)
    const hasMore = children.length > initialCount

    const displayedItems = showAll ? children : children.slice(0, initialCount)

    const getGridClasses = () => {
        if (layout === "list") {
            return "max-w-4xl mx-auto space-y-6"
        }

        // Different grid layouts based on section
        if (title === "Experience") {
            return "max-w-4xl mx-auto space-y-6"
        } else if (title === "Certifications") {
            return "grid grid-cols-1 md:grid-cols-2 gap-6"
        } else if (title === "Articles") {
            return "grid grid-cols-1 md:grid-cols-2 gap-6"
        } else {
            return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
    }

    return (
        <div>
            <div className={getGridClasses()}>{displayedItems}</div>

            {hasMore && (
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-500/50 rounded-full text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105"
                    >
                        <span className="font-medium">
                            {showAll ? `Show Less` : `Show More (${children.length - initialCount} more)`}
                        </span>
                        {showAll ? (
                            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        ) : (
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        )}
                    </button>
                </div>
            )}
        </div>
    )
}
