export const config = {
  // Personalization
  herName: "My Love",
  
  // Target Date & Time (YYYY-MM-DDTHH:mm:ss format)
  // Ensure the date is in the future. Example: "2026-09-22T00:00:00"
  targetDate: "2026-09-22T00:00:00",
  
  // The story of why this website exists
  memoryStory: {
    title: "A Little Memory...",
    text: "You once told me how your friend used to count down the days to a special day when you were in school. It made you smile. I remembered that, and I thought... why not create our own little world where I can count down the days for you this time? Every single one. ❤️"
  },

  // Daily messages based on remaining days
  dailyMessages: [
    { days: 11, message: "11 days until your special day ❤️" },
    { days: 10, message: "10 days to go... getting closer 💕" },
    { days: 7, message: "7 days until we celebrate you ✨" },
    { days: 3, message: "Just 3 days left! I can't wait 💖" },
    { days: 1, message: "Only 1 more sleep! 🥹❤️" },
    { days: 0, message: "It's today! Happy Birthday! 🎉" }
  ],
  defaultMessage: "Counting down to your special day ❤️",

  // Timeline milestones
  timeline: [
    { date: "2026-09-10", label: "The Countdown Begins" },
    { date: "2026-09-15", label: "One Week Away!" },
    { date: "2026-09-21", label: "Birthday Eve" },
    { date: "2026-09-22", label: "The Special Day ❤️" }
  ],

  // Interactive love messages (cards)
  loveMessages: [
    "Every day with you is a gift, but this day is extra special.",
    "I love your smile, your laugh, and everything about you.",
    "Counting down the moments until I can see you.",
    "You make my world a more beautiful place just by being in it."
  ],

  // Photos (Replace URLs with your actual photo URLs)
  photos: [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400"
  ],

  // The final message shown on the birthday
  birthdayLetter: {
    greeting: "Happy Birthday, My Love ❤️",
    paragraphs: [
      "Today is all about you. I wanted to make this countdown because I know how much you loved the idea of someone excitedly waiting for your special day.",
      "Well, I've been waiting for this day too. To celebrate you, to remind you how much you mean to me, and to see that beautiful smile on your face.",
      "Someone once counted down the days for you. This time, I got to count them with you. Every single one. ❤️"
    ],
    signoff: "Yours forever,"
  }
};
