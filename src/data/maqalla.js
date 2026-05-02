export const maqallaPages = [
  // Generating pages 2 to 146
  ...Array.from({ length: 145 }, (_, i) => ({
    image: `/assets/books/maqalla/page-${String(i + 2).padStart(3, '0')}.jpg`,
    ocrText: `نص الصفحة ${i + 2} من كتاب ما قل ودل.`
  }))
];
