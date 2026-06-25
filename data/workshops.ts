export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sessions: number;
  sessionLength: string;
  href: string;
  icon: string;
}

export const workshops: Workshop[] = [
  {
    id: "anger-management",
    title: "שליטה בכעסים",
    subtitle: "הסדנה הטובה בישראל לשחרור כעסים",
    description:
      "סדנה ייחודית המעצימה אותך ומובילה לשינוי הדרגתי, צעד אחר צעד. תלמד/י לשחרר כעסים, להיכנס לפרופורציות ולשפר את כל מערכות היחסים שלך.",
    sessions: 6,
    sessionLength: "3.5 שעות",
    href: "/workshops/anger-management",
    icon: "🌊",
  },
  {
    id: "self-confidence",
    title: "ביטחון עצמי ודימוי עצמי",
    subtitle: "כישורים לחיים עם ביטחון עצמי",
    description:
      "סדנה עוצמתית להעלאת הביטחון העצמי והדימוי העצמי. תפרוץ/י גבולות, תתבטא/י יותר בחברה, תאמין/י בעצמך ותרגיש/י שלמות עם מי שאת/ה.",
    sessions: 16,
    sessionLength: "3.5 שעות",
    href: "/workshops/self-confidence",
    icon: "✨",
  },
  {
    id: "couple-relationship",
    title: "התדר הזוגי",
    subtitle: "שיפור הזוגיות והתקשורת",
    description:
      "סדנה לזוגות הרוצים לחזק את הקשר, לשפר את התקשורת ולהחזיר את האהבה והתשוקה לזוגיות.",
    sessions: 6,
    sessionLength: "3.5 שעות",
    href: "/workshops/couple-relationship",
    icon: "💜",
  },
  {
    id: "interpersonal",
    title: "תקשורת בינאישית",
    subtitle: "שיפור יחסים עם כולם",
    description:
      "למד/י את מודלי התקשורת האפקטיבית, להבין אחרים ולהיות מובן/ת. טכניקות מיידיות לשיפור כל מערכת יחסים.",
    sessions: 6,
    sessionLength: "3.5 שעות",
    href: "/workshops/interpersonal",
    icon: "🤝",
  },
  {
    id: "coping-change",
    title: "התמודדות עם שינוי",
    subtitle: "לצאת מתקיעות ולהתקדם",
    description:
      "הסדנה לאנשים שרוצים לצאת מהנוחות, לפרוץ גבולות ולהתמודד בהצלחה עם שינויים בחיים.",
    sessions: 9,
    sessionLength: "5 שעות",
    href: "/workshops/coping-change",
    icon: "🚀",
  },
  {
    id: "youth-confidence",
    title: "ביטחון עצמי לנוער",
    subtitle: "\"אני יכול!\" — גילאי 9–14",
    description:
      "סדנה לחיזוק הביטחון העצמי, ההערכה והאהבה העצמית של ילדים ונוער. שיפור מיומנויות חברתיות והתמודדות עם רגשות.",
    sessions: 5,
    sessionLength: "2 שעות",
    href: "/workshops/youth-confidence",
    icon: "🌟",
  },
];

export interface ScheduleDate {
  workshop: string;
  dates: string[];
  location: string;
  time: string;
  sessions: number;
}

export const scheduleDates: ScheduleDate[] = [
  {
    workshop: "סדנת שליטה בכעסים",
    dates: ["12.7.2026", "22.9.2026", "5.1.2027"],
    location: "בצלאל 8, רמת גן (ליד תחנת רכבת סבידור)",
    time: "17:30–21:00",
    sessions: 6,
  },
];
