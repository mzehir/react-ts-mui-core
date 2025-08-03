/* eslint-disable */

const languages = {
  en: {},
  tr: {
    success: 'Dev Starter temizlik işlemi başarıyla tamamlandı!',
    error: 'Dev Starter temizlik işlemi sırasında hata oluştu!',
    cancelled: 'Dev Starter temizlik işlemi kullanıcı tarafından iptal edildi.',
    yes: 'Evet',
    no: 'Hayır',

    title:
      '🧹 Dev Starter Temizlik İşlemi Başlıyor. Bu işlem, projeyi gerçek kullanım için sadeleştirir ve kullanıma hazır hale getirir.',
    checkingFoldersToDelete: 'Silinecek klasörlerin proje içerisindeki varlığı kontrol ediliyor...',
    directoryCheckExisting: 'Aşağıdaki klasörler proje içerisinde mevcuttur ve silinecektir.',
    directoryCheckMissing:
      'Aşağıdaki klasörler proje içerisinde mevcut değildir. Bundan ötürü aşağıdaki klasörler ile alakalı silme işlemi yapılmayacaktır.',
    confirmDeleteDirectories:
      'Yukarıda listelenen klasörler, tüm içerikleriyle birlikte silinecektir. Bu işlemi onaylıyor musunuz?',
    deletionFolderSuccess: 'Klasör başarıyla silindi.',
    deletionFolderError: 'Klasör silinirken bir hata oluştu.',

    checkingFilesToEditing: 'Düzenlenecek dosyaların proje içerisindeki varlığı kontrol ediliyor...',
    fileCheckExisting: 'Aşağıdaki dosyalar proje içerisinde mevcuttur ve düzenlenecektir.',
    filesCheckMissing:
      'Aşağıdaki dosyalar proje içerisinde mevcut değildir. Bundan ötürü aşağıdaki dosyalar ile alakalı düzenleme işlemi yapılmayacaktır.',

    editingEnvFileMethodTitle: '".env" Dosyası Düzenleme - İşlemi',
    currentAppName: 'Mevcut uygulama adı: ',
    keepCurrentAppNameInfo: 'Mevcut uygulama adını korumak için ENTER tuşuna basabilirsiniz.',
    enterAppName: 'Yeni uygulama adını girin:',
    emptyAppNameWarning: 'Uygulama adı boş olamaz!',
    envUpdateSuccess: '".env" dosyası başarılı bir şekilde güncellendi.',
    envUpdateError: '".env" dosyası düzenlenirken bir hata ile karşılaşıldı!',

    editingPackageJsonFileMethodTitle: '"package.json" Dosyas - Düzenleme İşlemi',
    currentProjectName: 'Mevcut proje adı: ',
    projectNameFormatInfo: 'Proje adı küçük harf ve tireli olmalı (ör: dev-starter).',
    keepCurrentProjectNameInfo: 'Mevcut proje adını korumak için ENTER tuşuna basabilirsiniz.',
    enterProjectName: 'Yeni proje adını girin:',
    emptyProjectNameWarning: 'Proje adı boş olamaz!',
    invalidProjectNameWarning: 'Proje adı sadece küçük harf, rakam ve tire içermelidir!',
    packageJsonUpdateSuccess: '"package.json" dosyası başarılı bir şekilde güncellendi.',
    packageJsonUpdateError: '"package.json" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    packageJsonFormattedTitle: '"package.json" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    packageJsonFormattedSuccess:
      '"package.json" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    packageJsonFormattedError: '"package.json" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    editingUsersJsonFileMethodTitle: '"users.json" Dosyası - Düzenleme İşlemi',
    usersJsonInvalidFormat: 'users.json dosyası geçersiz JSON formatında! İşlem durduruldu.',
    usersJsonNotArray: 'users.json dosyası beklenilen gibi bir dizi içermiyor! İşlem iptal edildi.',
    usersJsonUpdateSuccess: '"users.json" dosyası başarılı bir şekilde güncellendi.',
    usersJsonUpdateError: '"users.json" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    usersJsonFormattedTitle: '"users.json" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    usersJsonFormattedSuccess: '"users.json" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    usersJsonFormattedError: '"users.json" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcRouterRouterTsxUpdateTitle: '"src/router/Router.tsx" Dosyası - Düzenleme İşlemi',
    srcRouterRouterTsxUpdateSuccess: '"src/router/Router.tsx" dosyası başarılı bir şekilde güncellendi.',
    srcRouterRouterTsxUpdateError: '"src/router/Router.tsx" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcRouterRouterTsxFormattedTitle: '"src/router/Router.tsx" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcRouterRouterTsxFormattedSuccess:
      '"src/router/Router.tsx" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcRouterRouterTsxFormattedError:
      '"src/router/Router.tsx" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcRouterRouterConstantTsUpdateTitle: '"src/router/routerConstant.ts" Dosyası - Düzenleme İşlemi',
    srcRouterRouterConstantTsUpdateSuccess: '"src/router/routerConstant.ts" dosyası başarılı bir şekilde güncellendi.',
    srcRouterRouterConstantTsUpdateError:
      '"src/router/routerConstant.ts" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcRouterRouterConstantTsFormattedTitle:
      '"src/router/routerConstant.ts" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcRouterRouterConstantTsFormattedSuccess:
      '"src/router/routerConstant.ts" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcRouterRouterConstantTsFormattedError:
      '"src/router/routerConstant.ts" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcRouterHelperAccessErrorsRouterTsUpdateTitle:
      '"src/router/helper/accessErrorsRouter.ts" Dosyası - Düzenleme İşlemi',
    srcRouterHelperAccessErrorsRouterTsUpdateSuccess:
      '"src/router/helper/accessErrorsRouter.ts" dosyası başarılı bir şekilde güncellendi.',
    srcRouterHelperAccessErrorsRouterTsUpdateError:
      '"src/router/helper/accessErrorsRouter.ts" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcRouterHelperAccessErrorsRouterTsFormattedTitle:
      '"src/router/helper/accessErrorsRouter.ts" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcRouterHelperAccessErrorsRouterTsFormattedSuccess:
      '"src/router/helper/accessErrorsRouter.ts" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcRouterHelperAccessErrorsRouterTsFormattedError:
      '"src/router/helper/accessErrorsRouter.ts" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcReduxStoreTsUpdateTitle: '"src/redux/store.ts" Dosyası - Düzenleme İşlemi',
    srcReduxStoreTsUpdateSuccess: '"src/redux/store.ts" dosyası başarılı bir şekilde güncellendi.',
    srcReduxStoreTsUpdateError: '"src/redux/store.ts" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcReduxStoreTsFormattedTitle: '"src/redux/store.ts" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcReduxStoreTsFormattedSuccess:
      '"src/redux/store.ts" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcReduxStoreTsFormattedError:
      '"src/redux/store.ts" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcPagesAuthSignInSignInTsxUpdateTitle: '"src/pages/auth/signIn/SignIn.tsx" Dosyası - Düzenleme İşlemi',
    srcPagesAuthSignInSignInTsxUpdateSuccess:
      '"src/pages/auth/signIn/SignIn.tsx" dosyası başarılı bir şekilde güncellendi.',
    srcPagesAuthSignInSignInTsxUpdateError:
      '"src/pages/auth/signIn/SignIn.tsx" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcPagesAuthSignInSignInTsxFormattedTitle:
      '"src/pages/auth/signIn/SignIn.tsx" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcPagesAuthSignInSignInTsxFormattedSuccess:
      '"src/pages/auth/signIn/SignIn.tsx" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcPagesAuthSignInSignInTsxFormattedError:
      '"src/pages/auth/signIn/SignIn.tsx" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcUtilsEnumsUserTypesTsUpdateTitle: '"src/utils/enums/userTypes.ts" Dosyası - Düzenleme İşlemi',
    srcUtilsEnumsUserTypesTsUpdateSuccess: '"src/utils/enums/userTypes.ts" dosyası başarılı bir şekilde güncellendi.',
    srcUtilsEnumsUserTypesTsUpdateError:
      '"src/utils/enums/userTypes.ts" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcUtilsEnumsUserTypesTsFormattedTitle:
      '"src/utils/enums/userTypes.ts" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcUtilsEnumsUserTypesTsFormattedSuccess:
      '"src/utils/enums/userTypes.ts" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcUtilsEnumsUserTypesTsFormattedError:
      '"src/utils/enums/userTypes.ts" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    srcI18nI18nTsUpdateTitle: '"src/i18n/i18n.ts" Dosyası - Düzenleme İşlemi',
    srcI18nI18nTsUpdateSuccess: '"src/i18n/i18n.ts" dosyası başarılı bir şekilde güncellendi.',
    srcI18nI18nTsUpdateError: '"src/i18n/i18n.ts" dosyası düzenlenirken bir hata ile karşılaşıldı!',
    srcI18nI18nTsFormattedTitle: '"src/i18n/i18n.ts" Dosyası - Prettier ve ESLint İle Formatlama İşlemi',
    srcI18nI18nTsFormattedSuccess:
      '"src/i18n/i18n.ts" dosyası Prettier ve ESLint İle kurallarına göre başarıyla formatlandı.',
    srcI18nI18nTsFormattedError:
      '"src/i18n/i18n.ts" dosyası Prettier/ESLint ile formatlanırken bir hata ile karşılaşıldı.',

    nodeModulesDeletedTitle: '"node_modules" Klasörü - Silme İşlemi',
    nodeModulesConfirmDelete:
      '"node_modules" klasörü ve tüm içeriği silinecek. Devam etmek istiyor musunuz? Bu adım genellikle önerilmektedir.',
    nodeModulesDeleteSuccess: '"node_modules" klasörü başarılı bir şekilde silindi.',
    nodeModulesDeleteError: '"node_modules" klasörü silinirken bir hata ile karşılaşıldı!',

    packageLockDeletedTitle: '"package-lock.json" Dosyası - Silme İşlemi',
    packageLockConfirmDelete:
      '"package-lock.json" dosyası silinecek. Devam etmek istiyor musunuz? Bu adım genellikle önerilmektedir.',
    packageLockDeleteSuccess: '"package-lock.json" dosyası başarılı bir şekilde silindi.',
    packageLockDeleteError: '"package-lock.json" dosyası silinirken bir hata ile karşılaşıldı!',

    xxxxxxxxxxxxxxx: 'xxxxxxxxxxxxxxxxxx',
    xxxxxxxxxxxxxxx: 'xxxxxxxxxxxxxxxxxx',
    xxxxxxxxxxxxxxx: 'xxxxxxxxxxxxxxxxxx',
    xxxxxxxxxxxxxxx: 'xxxxxxxxxxxxxxxxxx',
    xxxxxxxxxxxxxxx: 'xxxxxxxxxxxxxxxxxx',

    checkingDirectories: 'Klasörler kontrol ediliyor...',
    existingDirectories: 'Mevcut klasörler:',
    confirmDelete: 'Mevcut klasörleri silmek istediğinizden emin misiniz?',
    willDelete: 'Silinecek olanlar:',
    willSkip: 'Atlanacak olanlar (bulunamadı):',
    confirmDeleteFiles: 'Dosyaları silme işlemini başlatmak istiyor musunuz?',
    checkingFiles: 'Dosyalar kontrol ediliyor...',
    existingFiles: 'Mevcut dosyalar:',
    missingFiles: 'Bulunamayan dosyalar:',
    confirmEditFiles: 'Dosyaları düzenleme işlemini başlatmak istiyor musunuz?',
    editingFiles: 'Dosyalar düzenleniyor...',
    restartInfo: 'Projenizi yeniden başlatmak için: npm run dev',
    projectMayBeRunning: '🚦 Projeniz herhangi bir portta çalışıyorsa önce durdurun! 😊',
    deleteNodeModules: '🗑️ Ardından ana dizindeki node_modules klasörünü silin (tertemiz başlamak için).',
    installPackages: '📦 Sonra `npm i` komutu ile tüm paketleri yükleyin.',
    runDevAndTest: '🚀 Son olarak `npm run dev` komutu ile projeyi localde başlatıp test edin. Keyifli kodlamalar! 💻',
    goodWork: '✨ İyi çalışmalar & bol kodlamalar! ✨',
  },
  de: {},
};

module.exports = languages;
