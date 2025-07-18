# 🧹 Dev Starter Temizliği ve Yeni Proje Başlatmaya Hazırlık Kılavuzu

Bu kılavuz, **Dev Starter** projesini sadeleştirerek gerçek bir projeye dönüştürmek için yapılması gereken işlemleri içerir.

---

## ✅ Ön Hazırlık

Yeni bir projeye sağlam ve sorunsuz bir başlangıç yapmak için aşağıdaki adımları takip etmeni öneririz:

- [ ] Proje dizininde terminali açarak, gerekli bağımlılıkların yüklenmesi için `npm i` komutunu çalıştır.
- [ ] Ardından `npm run dev` komutuyla projeyi yerel ortamda başlat ve düzgün şekilde çalıştığından emin ol.
- [ ] Eğer eksik bağımlılık uyarısı alırsan, eksik paketleri terminal üzerinden tek tek yükle (örneğin `npm install <paket-adı>`).
- [ ] Uygulama sorunsuz bir şekilde başlatıldıktan sonra `Ctrl + C` ile sunucuyu durdur.
- [ ] Artık projeyi sadeleştirme ve yapılandırma adımlarına geçebilirsin.

---

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

`npx prettier --write src/router/Router.tsx` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

`npx eslint src/router/Router.tsx --fix` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

---

### E- `src/router/routerConstant.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002ActivatedStart` - `//! 002ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`//! 005DeletedStart` - `//! 005DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 006ActivatedStart` - `//! 006ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`npx prettier --write src/router/routerConstant.ts` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

`npx eslint src/router/routerConstant.ts --fix` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

---

### F- `src/redux/store.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002DeletedStart` - `//! 002DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

`npx prettier --write src/redux/store.ts` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

`npx eslint src/redux/store.ts --fix` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

---

### G- `src/pages/auth/signIn/SignIn.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`{/* //! 002DeletedStart */}` - `{/* //! 002DeletedFinish */}` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`npx prettier --write src/pages/auth/signIn/SignIn.tsx` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

`npx eslint src/pages/auth/signIn/SignIn.tsx --fix` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

---

### H- `src/utils/enums/userTypes.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`npx prettier --write src/utils/enums/userTypes.ts` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

`npx eslint src/utils/enums/userTypes.ts --fix` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

---

### I- `src/i18n/i18n.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 002DeletedStart` - `//! 002DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 003DeletedStart` - `//! 003DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`//! 004DeletedStart` - `//! 004DeletedFinish` => yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

`npx prettier --write src/i18n/i18n.ts` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

`npx eslint src/i18n/i18n.ts --fix` => yukarıdaki maddelerden sonra bu script console ile çalıştırılmalıdır.

---

> 💡 **Not:** Bu işlemlerden sonra proje daha sade, üretim odaklı ve sürdürülebilir hale gelecektir.

---

## ✅ Sonraki Adımlar
- [ ] `node_modules` klasörünü silerek mevcut bağımlılıkları temizle.
- [ ] Ardından `package-lock.json` dosyasını da sil (bu adım, bağımlılıkların yeniden düzgün oluşturulmasını sağlar).
- [ ] Terminal üzerinden `npm i` komutunu tekrar çalıştırarak, proje için gerekli olan tüm bağımlılıkları sıfırdan yükle.
- [ ] `npm run dev` komutuyla projeyi bir kez daha başlatarak, her şeyin sorunsuz çalıştığını doğrula.
- [ ] Eğer hâlâ eksik bağımlılık uyarısı alırsan, eksik paketleri manuel olarak yüklemeyi unutma.
- [ ] Son olarak, projeyi yeniden çalıştır (`npm run dev`) ve artık temiz bir başlangıçla geliştirmeye hazırsın!

---

🎉 Tebrikler! Tüm bu adımları tamamladıysan, artık daha sade, bakımı kolay ve gerçek bir projeye dönüşmeye hazır bir altyapıya sahipsin. Başarılar ve keyifli kodlamalar! 👨‍💻👩‍💻✨