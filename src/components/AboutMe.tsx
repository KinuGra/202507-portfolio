"use client"

import { useState, useEffect } from "react"
import { MapPin, GraduationCap, Heart, Target } from "lucide-react"

export function AboutMe() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="max-w-4xl mx-auto">
            <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Description */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">自己紹介</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            コンピュータサイエンスを専攻している大学生です。<br></br>
                            最近はハッカソンでWebアプリを中心に開発しています。
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            {/* 2行目 */}
                        </p>
                    </div>

                    {/* Quick Facts */}
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-semibold">Location</span>
                            </div>
                            <p className="text-gray-300 ml-8">Japan</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <GraduationCap className="w-5 h-5 text-green-400" />
                                <span className="text-white font-semibold">Education</span>
                            </div>
                            <p className="text-gray-300 ml-8">大学生（情報系専攻）</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <Heart className="w-5 h-5 text-red-400" />
                                <span className="text-white font-semibold">Interests</span>
                            </div>
                            <div className="ml-8 flex flex-wrap gap-2">
                                {["ハッカソン", "プログラミング", "アニメ", "ゲーム"].map((interest) => (
                                    <span key={interest} className="px-2 py-1 bg-red-900/30 text-red-300 rounded text-sm">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <Target className="w-5 h-5 text-purple-400" />
                                <span className="text-white font-semibold">Goal</span>
                            </div>
                            <p className="text-gray-300 ml-8">エンジニア</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
