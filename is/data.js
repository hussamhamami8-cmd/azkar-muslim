export async function loadData() {
  try {
    // جلب الملف المباشر لضمان التوافق مع GitHub Pages
    const r = await fetch('https://raw.githubusercontent.com/hussamhamami8-cmd/azkar-muslim/main/azkar.json');
    if (!r.ok) throw new Error('فشل التحميل من الرابط المباشر');
    return await r.json();
  } catch (err) {
    console.warn('جاري محاولة التحميل المحلي...', err);
    // محاولة ثانية محلياً في حال كان المتصفح بدون إنترنت
    const localRes = await fetch('./azkar.json');
    return await localRes.json();
  }
}

export const norm = s => String(s || '').normalize('NFKD')
  .replace(/[\u064B-\u065F\u0670]/g, '')
  .replace(/[إأآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ة/g, 'ه')
  .replace(/ؤ/g, 'و')
  .replace(/ئ/g, 'ي')
  .replace(/ـ/g, '')
  .toLowerCase()
  .trim();

export function hijri() {
  try {
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { dateStyle: 'full' }).format(new Date());
  } catch {
    return '';
  }
}
