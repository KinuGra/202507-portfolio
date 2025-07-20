"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface CardProps {
    children: React.ReactNode
    delay?: number
}

export function Card({ children, delay = 0 }: CardProps) {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay * 1000)
                }
            },
            { threshold: 0.1 },
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={cardRef}
            className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                {children}
            </div>
        </div>
    )
}
