# Açıklama:
# Projenin kök dizininden başlayarak tüm .ts ve .tsx uzantılı dosyaları ESLint ile tarar.
# --ext ts,tsx → Yalnızca TypeScript (.ts) ve TypeScript React (.tsx) dosyaları denetlenir.
# --max-warnings 0 → Uyarı (warning) sayısı 0'dan fazla olursa işlem hata olarak kabul edilir ve başarısız olur.
# Bu komut CI/CD süreçlerinde kod kalitesini garanti altına almak için kullanılır.
npx eslint . --ext ts,tsx --max-warnings 0


# Açıklama:
# Projenin kök dizininden başlayarak tüm .ts ve .tsx uzantılı dosyaları ESLint ile denetler.
# --ext ts,tsx → Sadece TypeScript (.ts) ve TypeScript React (.tsx) dosyalarını kontrol eder.
# --fix → ESLint'in otomatik düzeltebildiği tüm hataları ve stil problemlerini otomatik olarak düzeltir.
# Bu komut, kod stilini düzeltmek ve küçük hataları elle uğraşmadan gidermek için kullanılır.
npx eslint . --ext ts,tsx --fix


# Açıklama:
# Projenin kök dizininden itibaren tüm dosyaları tarar.
# Prettier kurallarına uymayan dosyaları listeler.
# Otomatik düzeltme yapmaz, sadece hangi dosyaların bozuk olduğunu gösterir.
npx prettier . --check


# Açıklama:
# Prettier kurallarına uymayan dosyaları otomatik olarak düzeltir.
# Genellikle CI öncesi veya commit öncesi kullanılır.
npx prettier . --write


# Açıklama:
# npx prettier . --write komutu tüm dosyaları tarar ve düzeltir. Tel bir dosya düzeltilmek istenirse aşağıdaki komut çalıştırılmalıdır.
npx prettier "src/**/*.{ts,tsx,js,jsx,json,css,md}" --check