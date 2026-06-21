import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-black text-purple-100 mb-4">404</div>
      <h1 className="text-3xl font-bold text-purple-900 mb-3">הדף לא נמצא</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        הדף שחיפשת אינו קיים. אולי הקישור שגוי, או שהדף הועבר למקום אחר.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="bg-purple-800 text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
          חזרה לדף הבית
        </Link>
        <Link href="/contact" className="border border-purple-200 text-purple-800 font-medium px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">
          צור קשר
        </Link>
      </div>
    </div>
  );
}
