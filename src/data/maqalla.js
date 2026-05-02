export const maqallaPages = [
  // Front Cover
  {
    image: '/assets/books/maqalla/page-001.png',
    ocrText: 'غلاف كتاب ما قل ودل - د. منصور القطري.'
  },
  // Content Pages 2 to 146
  ...Array.from({ length: 145 }, (_, i) => ({
    image: `/assets/books/maqalla/page-${String(i + 2).padStart(3, '0')}.jpg`,
    ocrText: `نص الصفحة ${i + 2} من كتاب ما قل ودل.`
  })),
  // Back Cover
  {
    image: '/assets/books/maqalla/page-147.png',
    ocrText: 'الغلاف الخلفي لكتاب ما قل ودل.'
  }
];
