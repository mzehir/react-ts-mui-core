# 🧹 Dev Starter Temizliği ve Yeni Proje Başlatmaya Hazırlık Kılavuzu

Bu kılavuz, **Dev Starter** projesini sadeleştirerek gerçek bir projeye dönüştürmek için yapılması gereken işlemleri içerir.

## 📁 1. Silinmesi Gereken Klasörler

Aşağıdaki klasörler **tamamıyla silinmelidir** (içerikleri dahil):

```txt
/node_modules
/src/pages/introduction
/src/router/helper/introductionRouter
/src/i18n/locales/en/introduction
/src/i18n/locales/tr/introduction
/src/redux/slices/introductionSlices
/src/redux/slices/services/introduction
/src/utils/enums/introduction
/src/assets/other
```

## 🗑️ 2. Silinmesi Gereken Dosyalar

```txt
/package-lock.json
```

## ✏️ 3. Düzenlenmesi Gereken Dosyalar

### A- `.env`

`VITE_APP_NAME = "Dev Starter"` => Uygulama adı güncellenmeli

---

### B- `package.json`

`"name": "dev-starter"` => Proje adı güncellenmeli

---

### C- `src/db/users.json`

- İçerisindeki 3 objeden yalnızca `userType: "admin"` olan kalmalı.
- Diğer iki obje silinmeli.

---

### D- `src/router/Router.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002DeletedStart` - `//! 002DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003ActivatedStart` - `//! 003ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`//! 004DeletedStart` - `//! 004DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 005ActivatedStart` - `//! 005ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

---

### E- `src/router/routerConstant.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002ActivatedStart` - `//! 002ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`//! 005DeletedStart` - `//! 005DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 006ActivatedStart` - `//! 006ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

---

### F- `src/redux/store.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002DeletedStart` - `//! 002DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

---

### G- `src/pages/auth/signIn/SignIn.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`{/* //! 002DeletedStart */}` - `{/* //! 002DeletedFinish */}` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

---

### H- `src/utils/enums/userTypes.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

---

### I- `src/i18n/i18n.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002DeletedStart` - `//! 002DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 004DeletedStart` - `//! 004DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

---

> 💡 **Not:** Bu işlemlerden sonra proje daha sade, üretim odaklı ve sürdürülebilir hale gelecektir.  

---

## ✅ Sonraki Adımlar

- [x] Gerekli klasörleri ve dosyaları sil
- [x] Belirtilen alanlarda içerikleri güncelle
- [x] Gereksiz yorum bloklarını temizle
- [ ] `npm i` komutu ile projenin ihtiyaç duyduğu paketleri yükle
- [ ] `npm run dev` komutu ile projenin çalıştığını kontrol et

---
