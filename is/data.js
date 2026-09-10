export async function loadData(){const r=await fetch('./azkar.json');return r.json()}
export const norm=s=>String(s||'').normalize('NFKD').replace(/[\u064B-\u065F\u0670]/g,'').replace(/[إأآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/ـ/g,'').toLowerCase().trim();
export function hijri(){try{return new Intl.DateTimeFormat('ar-SA-u-ca-islamic',{dateStyle:'full'}).format(new Date())}catch{return ''}}
