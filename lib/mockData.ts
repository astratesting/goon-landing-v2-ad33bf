// Mock data for dashboard when no real backend is connected

export const mockMoodData = [
  { date: "Mon", mood: 6, energy: 5, anxiety: 4 },
  { date: "Tue", mood: 5, energy: 4, anxiety: 6 },
  { date: "Wed", mood: 7, energy: 6, anxiety: 3 },
  { date: "Thu", mood: 4, energy: 3, anxiety: 7 },
  { date: "Fri", mood: 8, energy: 7, anxiety: 2 },
  { date: "Sat", mood: 7, energy: 6, anxiety: 3 },
  { date: "Sun", mood: 6, energy: 5, anxiety: 5 },
];

export const mockChatHistory = [
  {
    id: "1",
    summary: "Late-night work anxiety",
    date: "2 hours ago",
    mood: "anxious",
    keyTopics: ["work pressure", "deadline stress"],
  },
  {
    id: "2",
    summary: "Sunday evening spiral",
    date: "Yesterday",
    mood: "overwhelmed",
    keyTopics: ["social comparison", "self-worth"],
  },
  {
    id: "3",
    summary: "Morning mindfulness check-in",
    date: "2 days ago",
    mood: "calm",
    keyTopics: ["breathing exercises", "gratitude"],
  },
  {
    id: "4",
    summary: "Navigating a tough conversation",
    date: "3 days ago",
    mood: "frustrated",
    keyTopics: ["boundaries", "communication"],
  },
  {
    id: "5",
    summary: "Celebrating a small win",
    date: "4 days ago",
    mood: "hopeful",
    keyTopics: ["progress", "self-compassion"],
  },
];

export const mockInsights = [
  {
    title: "Anxiety peaks around 11pm",
    description:
      "Your anxiety tends to spike between 10pm-12am, especially on weeknights. Consider a wind-down routine around 9:30pm.",
    type: "pattern",
  },
  {
    title: "Breathing exercises help you most",
    description:
      "Of all coping techniques you've tried, box breathing and 4-7-8 breathing have the highest success rate for reducing your anxiety scores.",
    type: "technique",
  },
  {
    title: "Work triggers are declining",
    description:
      "Work-related anxiety episodes decreased 30% over the past two weeks. Your boundary-setting conversations seem to be working.",
    type: "progress",
  },
];

export const mockCopingExercises = [
  {
    name: "Box Breathing",
    duration: "4 min",
    description: "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s",
    category: "breathing",
  },
  {
    name: "5-4-3-2-1 Grounding",
    duration: "5 min",
    description: "Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
    category: "grounding",
  },
  {
    name: "Body Scan",
    duration: "8 min",
    description: "Progressive awareness from toes to crown, releasing tension as you go.",
    category: "mindfulness",
  },
  {
    name: "Gratitude Reframe",
    duration: "3 min",
    description: "Write 3 things that went okay today — even if everything felt hard.",
    category: "journaling",
  },
];

export const mockUser = {
  name: "Demo User",
  email: "demo@demo.app",
  plan: "pro" as const,
  joinDate: "May 2026",
  sessionsThisWeek: 4,
  streakDays: 12,
  moodTrend: "improving",
};
