"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  mockMoodData,
  mockChatHistory,
  mockInsights,
  mockCopingExercises,
  mockUser,
} from "@/lib/mockData";

const moodColors: Record<string, string> = {
  anxious: "bg-yellow-500/20 text-yellow-400",
  overwhelmed: "bg-red-500/20 text-red-400",
  calm: "bg-green-500/20 text-green-400",
  frustrated: "bg-orange-500/20 text-orange-400",
  hopeful: "bg-blue-500/20 text-blue-400",
};

const insightIcons: Record<string, string> = {
  pattern: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  technique: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  progress: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"overview" | "chat" | "mood" | "exercises">("overview");

  const maxMood = 10;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl text-white">
          Welcome back, {session?.user?.name || mockUser.name}
        </h1>
        <p className="text-goon-muted mt-1">
          Here&apos;s how you&apos;ve been doing this week.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Sessions This Week", value: mockUser.sessionsThisWeek, icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
          { label: "Day Streak", value: mockUser.streakDays, icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
          { label: "Avg Mood", value: (mockMoodData.reduce((a, b) => a + b.mood, 0) / mockMoodData.length).toFixed(1), icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Mood Trend", value: mockUser.moodTrend, icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-goon-dark border border-white/5 rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-goon-flame/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-goon-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-white capitalize">{stat.value}</p>
            <p className="text-sm text-goon-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 bg-goon-dark rounded-lg p-1 w-fit">
        {(["overview", "chat", "mood", "exercises"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? "bg-goon-flame text-white"
                : "text-goon-muted hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mood Chart */}
          <div className="bg-goon-dark border border-white/5 rounded-xl p-6">
            <h2 className="font-heading text-lg text-white mb-4">Mood This Week</h2>
            <div className="flex items-end gap-3 h-48">
              {mockMoodData.map((day) => (
                <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full relative" style={{ height: "160px" }}>
                    <div
                      className="absolute bottom-0 w-full bg-goon-flame/30 rounded-t-md transition-all"
                      style={{ height: `${(day.mood / maxMood) * 100}%` }}
                    />
                    <div
                      className="absolute bottom-0 w-full bg-goon-magenta/30 rounded-t-md transition-all"
                      style={{ height: `${(day.anxiety / maxMood) * 100}%`, opacity: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-goon-muted">{day.date}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-xs text-goon-muted">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-goon-flame/30 rounded-sm" /> Mood
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-goon-magenta/30 rounded-sm" /> Anxiety
              </span>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-goon-dark border border-white/5 rounded-xl p-6">
            <h2 className="font-heading text-lg text-white mb-4">AI Insights</h2>
            <div className="space-y-4">
              {mockInsights.map((insight) => (
                <div key={insight.title} className="flex gap-3">
                  <div className="w-10 h-10 bg-goon-acid/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-goon-acid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={insightIcons[insight.type]} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{insight.title}</p>
                    <p className="text-xs text-goon-muted mt-0.5">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "chat" && (
        <div className="bg-goon-dark border border-white/5 rounded-xl p-6">
          <h2 className="font-heading text-lg text-white mb-4">Recent Conversations</h2>
          <div className="space-y-3">
            {mockChatHistory.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-4 p-4 bg-goon-gray rounded-lg hover:bg-goon-gray-light transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-goon-flame/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-goon-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium">{chat.summary}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${moodColors[chat.mood] || "bg-white/10 text-white"}`}>
                      {chat.mood}
                    </span>
                    {chat.keyTopics.map((t) => (
                      <span key={t} className="text-xs text-goon-muted">#{t}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-goon-muted shrink-0">{chat.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "mood" && (
        <div className="bg-goon-dark border border-white/5 rounded-xl p-6">
          <h2 className="font-heading text-lg text-white mb-4">Mood Tracker</h2>
          <p className="text-goon-muted text-sm mb-6">How are you feeling right now?</p>
          <div className="grid grid-cols-5 gap-3 mb-8">
            {["😊 Great", "🙂 Good", "😐 Okay", "😟 Low", "😢 Rough"].map((emoji) => (
              <button
                key={emoji}
                className="bg-goon-gray hover:bg-goon-gray-light border border-white/5 rounded-xl p-4 text-center transition-colors hover:border-goon-flame/30"
              >
                <span className="text-2xl block mb-1">{emoji.split(" ")[0]}</span>
                <span className="text-xs text-goon-muted">{emoji.split(" ")[1]}</span>
              </button>
            ))}
          </div>
          <div className="flex items-end gap-3 h-40">
            {mockMoodData.map((day) => (
              <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-goon-flame/20 rounded-t-md" style={{ height: `${(day.mood / maxMood) * 100}%` }} />
                <span className="text-xs text-goon-muted">{day.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "exercises" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockCopingExercises.map((ex) => (
            <div
              key={ex.name}
              className="bg-goon-dark border border-white/5 rounded-xl p-6 hover:border-goon-flame/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-goon-flame bg-goon-flame/10 px-2 py-1 rounded-full capitalize">
                  {ex.category}
                </span>
                <span className="text-xs text-goon-muted">{ex.duration}</span>
              </div>
              <h3 className="text-white font-medium mb-1">{ex.name}</h3>
              <p className="text-sm text-goon-muted">{ex.description}</p>
              <button className="mt-4 w-full bg-goon-gray hover:bg-goon-gray-light text-white text-sm py-2.5 rounded-lg transition-colors">
                Start Exercise
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
