# 🛠️ ESLint ve Prettier Komut Referans Kılavuzu

## ESLint Komutları

### 🔍 Sıkı Kod Kalitesi Kontrolü
```bash
npx eslint . --ext ts,tsx --max-warnings 0
```
**Amaç:** Proje kökünden TypeScript/React kod kalitesi taraması gerçekleştirir.
- `--ext ts,tsx`: TypeScript (.ts) ve TypeScript React (.tsx) dosyalarını hedefler
- `--max-warnings 0`: Herhangi bir uyarı tespit edilirse başarısız olur
- **Kullanım Alanı:** CI/CD süreçlerinde kod kalite standartlarını sağlamak için gereklidir

### 🔧 Otomatik Kod Düzeltme
```bash
npx eslint . --ext ts,tsx --fix
```
**Amaç:** Düzeltilebilir kod sorunlarını tarar ve otomatik olarak düzeltir.
- `--ext ts,tsx`: TypeScript ve React dosyalarına odaklanır
- `--fix`: Düzeltilebilir sorunları otomatik olarak çözer
- **Kullanım Alanı:** Hızlı kod temizliği ve standardizasyonu

## Prettier Komutları

### ⚡ Hızlı Format Kontrolü
```bash
npx prettier . --check
```
**Amaç:** Formatlama gerektiren dosyaların hızlı tespiti.
- Proje kökünden tüm dosyaları tarar
- Prettier standartlarına uymayan dosyaları raporlar
- **Kullanım Alanı:** Commit öncesi doğrulama ve kod inceleme hazırlığı

### ✨ Tüm Dosyaları Formatla
```bash
npx prettier . --write
```
**Amaç:** Kapsamlı kod tabanı formatlaması.
- Desteklenen tüm dosyaları otomatik formatlar
- Tutarlı kod stili sağlar
- **Kullanım Alanı:** Commit veya sürüm öncesi toplu formatlama

### 🎯 Belirli Dosyaları Formatla
```bash
npx prettier "src/**/*.{ts,tsx,js,jsx,json,css,md}" --check
```
**Amaç:** Belirli dosya türleri için hedefli formatlama.
- Özelleştirilebilir dosya deseni eşleştirme
- Birden çok dosya uzantısını destekler
- **Kullanım Alanı:** Geliştirme sırasında odaklı formatlama

## 📝 En İyi Uygulamalar
1. Kod commit etmeden önce ESLint kontrollerini çalıştırın
2. Prettier formatlamasını commit öncesi kancalarınızın bir parçası olarak kullanın
3. Optimal kod kalitesi için her iki aracı birlikte kullanın
4. Düzenli formatlama, tutarlı kod tabanı stili sağlar

---
> **Pro İpucu:** Bu komutları gerçek zamanlı geri bildirim ve kaydetme sırasında otomatik formatlama için IDE'nize entegre etmeyi düşünün.