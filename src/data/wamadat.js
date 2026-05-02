/**
 * Data for the "Wamadat Fikriya" (Thought Flashes) book.
 * Each entry contains the image path and hidden OCR text for SEO and accessibility.
 */
export const wamadatPages = [
  {
    id: 1,
    image: '/assets/books/wamadat/page-001.png',
    title: 'Cover: Wamadat Fikriya',
    ocrText: 'تسعون كتاباً في كتاب. ومضات فكرية. د. منصور القطري.',
    category: 'Cover'
  },
  {
    id: 2,
    image: '/assets/books/wamadat/page-002.png',
    title: 'Blank / Intro',
    ocrText: '',
    category: 'Intro'
  },
  {
    id: 3,
    image: '/assets/books/wamadat/page-003.png',
    title: 'Table of Contents - الفهرس',
    ocrText: 'الفهرس: مت فارغاً، عظم السمكة، قصة مسجد، الرؤية والرسالة، كيس الفئران، جلد الذات، الاحتراق الوظيفي، تدوين الأفكار، خارطة طريق الإبداع الفردي، الأخوة، ظاهرة الكاروشي، عصا المحادثة في ثقافة الهنود الحمر، المؤكد لذاته، قبعات التفكير الست، البقرة البنفسجية، الأحمق المطاع، التفكير التصميمي، الانحيازات الإدراكية، الإفراط في التفكير، التحليل التفاعلي، التأطير الإيجابي، التأطير الإعلامي، صندوق سكينز والإدمان، الحب، الحر من راعى وداد لحظة، الدوغماتية وسقوط الطائرة، الطبيب النفسي والمعالج النفسي، الشخصية الليزرية والشخصية المصباحية، الشخص المسؤول والشخص المنجز، العزلة الإيجابية المؤقتة، العصف الذهني.',
    category: 'Contents'
  },
  // Adding samples for the content pages
  {
    id: 10,
    image: '/assets/books/wamadat/page-010.png',
    title: 'عظم السمكة - Fish Bone',
    ocrText: 'عظم السمكة Fish Bone. ولها عدة مسميات في مجال الإدارة فتسمى أيضاً بتحليل السبب والنتيجة Cause and Effect. ويعد العالم الياباني كارو إيشيكاوا الأب الحقيقي لحلقات الجودة وينسب له هذا Ishikawa Diagram. إضاءة: لماذا لا يوجد لدينا نظرية عربية في الإدارة؟',
    category: 'Management'
  }
];

// Generate the rest of the pages programmatically with placeholders
for (let i = 4; i <= 15; i++) {
  if (i === 10) continue; // Skip since we added it manually
  wamadatPages.push({
    id: i,
    image: `/assets/books/wamadat/page-${String(i).padStart(3, '0')}.png`,
    title: `Page ${i}`,
    ocrText: `محتوى الصفحة ${i} من كتاب ومضات فكرية للدكتور منصور القطري.`, // Placeholder for hidden SEO text
    category: 'Insight'
  });
}

// Sort by ID to ensure correct order
wamadatPages.sort((a, b) => a.id - b.id);
