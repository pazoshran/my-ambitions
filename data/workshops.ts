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
    title: "ביטחון עצמי",
    subtitle: "כישורים לחיים עם ביטחון עצמי",
    description:
      "סדנה של 9 מפגשים עוצמתיים. תפרוץ/י גבולות, תתבטא/י יותר בחברה, תאמין/י בעצמך ותרגיש/י שלמות עם מי שאת/ה.",
    sessions: 9,
    sessionLength: "3.5 שעות",
    href: "/workshops",
    icon: "✨",
  },
  {
    id: "couple-frequency",
    title: "התדר הזוגי",
    subtitle: "שיפור הזוגיות והתקשורת",
    description:
      "סדנה לזוגות הרוצים לחזק את הקשר, לשפר את התקשורת ולהחזיר את האהבה והתשוקה לזוגיות.",
    sessions: 6,
    sessionLength: "3.5 שעות",
    href: "/workshops",
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
    href: "/workshops",
    icon: "🤝",
  },
  {
    id: "coping-change",
    title: "התמודדות עם שינוי",
    subtitle: "לצאת מתקיעות ולהתקדם",
    description:
      "הסדנה לאנשים שרוצים לצאת מהנוחות, לפרוץ גבולות ולהתמודד בהצלחה עם שינויים בחיים.",
    sessions: 6,
    sessionLength: "3.5 שעות",
    href: "/workshops",
    icon: "🚀",
  },
  {
    id: "assertiveness",
    title: "אסרטיביות",
    subtitle: "לעמוד על שלך בנחישות ורוגע",
    description:
      "למד/י לומר מה שאת/ה רוצה, להציב גבולות ולדאוג לצרכים שלך - מבלי לפגוע באחרים.",
    sessions: 6,
    sessionLength: "3.5 שעות",
    href: "/workshops",
    icon: "💪",
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
