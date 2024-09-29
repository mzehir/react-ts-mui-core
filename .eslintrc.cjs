/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // ESLint'e, TypeScript dosyalarını analiz etmek için @typescript-eslint/parser kullanmasını söyler. Bu, TypeScript kodunu anlamasına ve analiz etmesine olanak tanır.
  plugins: ['simple-import-sort', 'react-refresh'],
  // simple-import-sort: İçe aktarılan ve ihraç edilen modülleri sıralamak için kullanılan bir eklenti.
  // react-refresh: React bileşenlerinin sıcak yeniden yüklenmesi (Hot Module Replacement - HMR) için kullanılan bir eklenti.
  extends: [
    'eslint:recommended', // ESLint'in önerdiği temel kuralları içerir
    'plugin:@typescript-eslint/recommended', // TypeScript için önerilen kuralları içerir.
    'prettier', // Prettier'ın kod biçimlendirme kurallarını devre dışı bırakır. Bu, kod biçimlendirme ile ilgili kuralların Prettier tarafından yönetilmesini sağlar
    'plugin:prettier/recommended', // Prettier için önerilen kuralları içerir ve Prettier'ı ESLint ile entegre eder.
    'plugin:react-hooks/recommended', // React Hooks için önerilen kuralları içerir
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }], // Kullanılmayan değişkenler için hata verir. Ancak, değişken adı _ ile başlıyorsa bu hatayı yoksayar. Bu, bazı parametrelerin kullanılmadığını belirtmek için yaygın bir yöntemdir.
    // "simple-import-sort/imports": "error", // İçe aktarılan modüllerin belirli bir sıralamada olmasını zorunlu kılar. Bu kural, içe aktarılan modüllerin sıralanması ile ilgili hataları raporlar.
    // "simple-import-sort/exports": "error", // İhraç edilen modüllerin belirli bir sıralamada olmasını zorunlu kılar. Bu kural, ihraç edilen modüllerin sıralanması ile ilgili hataları raporlar.
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Sadece React bileşenlerinin ihraç edilmesine izin verir ve diğer ihraç edilenlerin uyarı olarak raporlanmasını sağlar.
    'prettier/prettier': ['error', { singleQuote: true }], // Çift tırnak kullanımına hata verir
  },
};
