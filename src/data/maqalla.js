export const maqallaPages = [
  // Page 2 is the cover
  {
    image: '/assets/books/maqalla/page-002.jpg',
    ocrText: 'غلاف كتاب ما قل ودل.'
  },
  // Swapping pairs for RTL spread: [3, 4] -> [4, 3] 
  // This ensures that when the library uses LTR indexing [Left, Right], 
  // the odd page (3) ends up on the right and the even page (4) on the left.
  ...Array.from({ length: 72 }, (_, i) => {
    const p1 = (i * 2) + 3; // 3, 5, 7...
    const p2 = (i * 2) + 4; // 4, 6, 8...
    return [
      {
        image: `/assets/books/maqalla/page-${String(p2).padStart(3, '0')}.jpg`,
        ocrText: `نص الصفحة ${p2} من كتاب ما قل ودل.`
      },
      {
        image: `/assets/books/maqalla/page-${String(p1).padStart(3, '0')}.jpg`,
        ocrText: `نص الصفحة ${p1} من كتاب ما قل ودل.`
      }
    ];
  }).flat().slice(0, 144)
];
