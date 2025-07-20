"use client"

import { useState, useEffect } from "react"

interface JsonDisplayProps {
    data: any
}

export function JsonDisplay({ data }: JsonDisplayProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    const jsonString = JSON.stringify(data, null, 2)
    const lines = jsonString.split("\n")

    useEffect(() => {
        if (currentIndex < lines.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + lines[currentIndex] + "\n")
                setCurrentIndex((prev) => prev + 1)
            }, 100) // 100ms delay between lines

            return () => clearTimeout(timer)
        } else {
            setIsComplete(true)
        }
    }, [currentIndex, lines])

    return (
        <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-xs">profile.json</span>
                </div>
                <pre className="text-gray-300 leading-relaxed">
                    {displayedText}
                    {!isComplete && <span className="animate-pulse bg-green-400 w-2 h-4 inline-block ml-1"></span>}
                </pre>
            </div>
            {isComplete && (
                <button
                    onClick={() => {
                        setDisplayedText("")
                        setCurrentIndex(0)
                        setIsComplete(false)
                    }}
                    className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs transition-colors"
                >
                    Replay
                </button>
            )}
        </div>
    )
}
