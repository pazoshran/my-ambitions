import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך לשפר את ההערכה העצמית | מכללת אמביציות",
  description: "מדריך מעשי לשיפור הערכה עצמית ובניית ביטחון עצמי. טיפים, כלים ושיטות מעדנה מימון.",
};

const steps = [
  {
    number: "01",
    title: "הכירו את הקול הפנימי שלכם",
    desc: "הקול הפנימי מעצב את הדימוי העצמי שלנו. שימו לב מה אתם אומרים לעצמכם בסיטואציות קשות. ביקורת עצמית מתמדת מחלישה את ההערכה העצמית.",
  },
  {
    number: "02",
    title: "שנו את דיבור הפנים",
    desc: "תחליפו את ה-'אני לא מסוגל' ב-'אני לומד'. תחליפו 'אני כישלון' ב-'זה היה מסע למידה'. שיטת NLP מלמדת כיצד לשנות את הדיאלוג הפנימי במהירות.",
  },
  {
    number: "03",
    title: "רשמו 3 הצלחות ביום",
    desc: "בסוף כל יום, רשמו שלוש דברים שהצלחתם בהם — גם קטנים. המוח לומד להתמקד בהצלחות ומחזק את תחושת הכשירות.",
  },
  {
    number: "04",
    title: "קבלו מחמאות בחן",
    desc: "כשמישהו משבח אתכם, אמרו 'תודה' ולא 'בכלל לא'. קבלת שבחים בחן היא מיומנות שמחזקת את ההערכה העצמית.",
  },
  {
    number: "05",
    title: "עסקו בדברים שאתם טובים בהם",
    desc: "הוסיפו לחיים שלכם פעילויות שבהן אתם מצטיינים. זה בונה תחושת כשירות ומחזק את הדימוי העצמי.",
  },
  {
    number: "06",
    title: "שחררו את השוואה לאחרים",
    desc: "כל אחד בנסיעה שלו. השוואה לאחרים היא אחת הגנבות הגדולות ביותר של ההערכה העצמית. השוו את עצמכם רק לעצמכם של אתמול.",
  },
];

export default function ImproveSelfEsteemPage() {
  return (
    <div>
      <section className="py-20 px-4 text-white" style={{ background: "linear-gradient(135deg, #2E1650, #5B2D8E)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">איך לשפר את ההערכה העצמית</h1>
          <p className="text-white/80 text-xl">כלים מעשיים לבניית ביטחון עצמי אמיתי</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">מהי הערכה עצמית?</h2>
            <p className="text-gray-700 leading-relaxed">
              הערכה עצמית היא האופן שבו אנחנו רואים ומעריכים את עצמנו. היא משפיעה על כל החלטה שאנחנו מקבלים,
              על האנשים שאנחנו מושכים אלינו, על ההצלחות שאנחנו מסוגלים להשיג ועל האושר שאנחנו חשים.
              אנשים עם הערכה עצמית גבוהה חיים חיים מלאים, מאושרים ומספקים יותר.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl border border-purple-100 p-8 flex gap-6">
                <div className="text-4xl font-black text-purple-200 shrink-0 leading-none">{step.number}</div>
                <div>
                  <h3 className="font-bold text-purple-900 text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-900 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">רוצים תמיכה מקצועית?</h3>
            <p className="text-white/80 mb-6">
              הסדנה לביטחון עצמי ואימון אישי עם עדנה מימון יכולים לעזור לך לבנות
              הערכה עצמית איתנה בזמן קצר
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/workshops" className="bg-yellow-400 text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors">
                לסדנאות
              </Link>
              <Link href="/coaching" className="bg-white/15 border border-white/30 text-white font-bold px-6 py-2 rounded-full hover:bg-white/25 transition-colors">
                לאימון אישי
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
