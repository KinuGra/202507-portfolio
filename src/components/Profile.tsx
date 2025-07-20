"use client"

import { useState, useEffect } from "react"

export function Profile() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="relative inline-block mb-8">
        <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-1 animate-pulse">
          <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">K</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-bounce"></div>
      </div>

      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
        Kinu
      </h1>

      <p className="text-xl text-gray-300 mb-2">@KinuGra</p>
      <p className="text-lg text-gray-400 mb-8">Student | Developer</p>

      <div className="flex justify-center gap-4 flex-wrap">
        {["Web", "ゲーム", "Bot"].map((skill, index) => (
          <span
            key={skill}
            className={`px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm transition-all duration-500 hover:bg-purple-600/30 hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
