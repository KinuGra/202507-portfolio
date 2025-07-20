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
            }, 150) // Slightly slower for better readability

            return () => clearTimeout(timer)
        } else {
            setIsComplete(true)
        }
    }, [currentIndex, lines])

    // Function to apply syntax highlighting
    const highlightJson = (text: string) => {
        return text
            .replace(/"([^"]+)":/g, '<span class="text-blue-300">"$1"</span>:') // Keys
            .replace(/:\s*"([^"]+)"/g, ': <span class="text-green-300">"$1"</span>') // String values
            .replace(/:\s*(\d+)/g, ': <span class="text-yellow-300">$1</span>') // Numbers
            .replace(/:\s*(true|false)/g, ': <span class="text-orange-300">$1</span>') // Booleans
            .replace(/(\[|\]|\{|\})/g, '<span class="text-purple-300">$1</span>') // Brackets
            .replace(/,/g, '<span class="text-gray-400">,</span>') // Commas
    }

    return (
        <div className="relative">
            <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 font-mono text-sm overflow-x-auto shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-xs">profile.json</span>
                </div>
                <div className="relative">
                    <div className="absolute left-0 top-0 text-gray-600 text-xs leading-relaxed select-none">
                        {lines.map((_, index) => (
                            <div key={index} className="h-6 flex items-center">
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <pre className="text-gray-300 leading-relaxed pl-8">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: highlightJson(displayedText),
                            }}
                        />
                        {!isComplete && <span className="animate-pulse bg-green-400 w-2 h-4 inline-block ml-1"></span>}
                    </pre>
                </div>
            </div>
            {isComplete && (
                <button
                    onClick={() => {
                        setDisplayedText("")
                        setCurrentIndex(0)
                        setIsComplete(false)
                    }}
                    className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs transition-colors flex items-center gap-1"
                >
                    <span>↻</span> Replay
                </button>
            )}
        </div>
    )
}
