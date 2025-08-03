/* eslint-disable */

const languages = {
  en: {
    success: 'Dev Starter cleanup operation completed successfully!',
    error: 'An error occurred during the Dev Starter cleanup operation!',
    cancelled: 'The Dev Starter cleanup operation was cancelled by the user.',
    yes: 'Yes',
    no: 'No',

    dependencyAlertMissingNodeModulesOrLockFile:
      'Please make sure that the "node_modules" folder and "package-lock.json" file exist in your project. If either is missing, stop the script and first run "npm i" to install the required dependencies. Additionally, if the project is running on a local server (e.g., on a port), it is recommended to stop it before proceeding.',
    title:
      '🧹 Dev Starter Cleanup Operation Starting. This process simplifies the project for real use and prepares it for production.',
    checkingFoldersToDelete: 'Checking the existence of folders to be deleted within the project...',
    directoryCheckExisting: 'The following folders exist in the project and will be deleted.',
    directoryCheckMissing:
      'The following folders do not exist in the project. Therefore, no deletion will be performed for them.',
    confirmDeleteDirectories:
      'The folders listed above will be deleted along with all their contents. Do you confirm this action?',
    deletionFolderSuccess: 'Folder was successfully deleted.',
    deletionFolderError: 'An error occurred while deleting the folder.',

    checkingFilesToEditing: 'Checking the existence of files to be edited within the project...',
    fileCheckExisting: 'The following files exist in the project and will be edited.',
    filesCheckMissing:
      'The following files do not exist in the project. Therefore, no editing will be performed for them.',

    editingEnvFileMethodTitle: '".env" File - Editing Operation',
    currentAppName: 'Current app name: ',
    keepCurrentAppNameInfo: 'Press ENTER to keep the current app name.',
    enterAppName: 'Enter the new app name:',
    emptyAppNameWarning: 'App name cannot be empty!',
    envUpdateSuccess: '".env" file has been successfully updated.',
    envUpdateError: 'An error occurred while editing the ".env" file!',

    editingPackageJsonFileMethodTitle: '"package.json" File - Editing Operation',
    currentProjectName: 'Current project name: ',
    projectNameFormatInfo: 'Project name should be lowercase and dashed (e.g., dev-starter).',
    keepCurrentProjectNameInfo: 'Press ENTER to keep the current project name.',
    enterProjectName: 'Enter the new project name:',
    emptyProjectNameWarning: 'Project name cannot be empty!',
    invalidProjectNameWarning: 'Project name must contain only lowercase letters, numbers, and dashes!',
    packageJsonUpdateSuccess: '"package.json" file has been successfully updated.',
    packageJsonUpdateError: 'An error occurred while editing the "package.json" file!',
    packageJsonFormattedTitle: '"package.json" File - Formatting with Prettier and ESLint',
    packageJsonFormattedSuccess:
      '"package.json" file was successfully formatted according to Prettier and ESLint rules.',
    packageJsonFormattedError: 'An error occurred while formatting "package.json" with Prettier/ESLint.',

    editingUsersJsonFileMethodTitle: '"users.json" File - Editing Operation',
    usersJsonInvalidFormat: 'users.json file is in an invalid JSON format! Operation stopped.',
    usersJsonNotArray: 'users.json file does not contain an array as expected! Operation cancelled.',
    usersJsonUpdateSuccess: '"users.json" file has been successfully updated.',
    usersJsonUpdateError: 'An error occurred while editing the "users.json" file!',
    usersJsonFormattedTitle: '"users.json" File - Formatting with Prettier and ESLint',
    usersJsonFormattedSuccess: '"users.json" file was successfully formatted according to Prettier and ESLint rules.',
    usersJsonFormattedError: 'An error occurred while formatting "users.json" with Prettier/ESLint.',

    srcRouterRouterTsxUpdateTitle: '"src/router/Router.tsx" File - Editing Operation',
    srcRouterRouterTsxUpdateSuccess: '"src/router/Router.tsx" file has been successfully updated.',
    srcRouterRouterTsxUpdateError: 'An error occurred while editing the "src/router/Router.tsx" file!',
    srcRouterRouterTsxFormattedTitle: '"src/router/Router.tsx" File - Formatting with Prettier and ESLint',
    srcRouterRouterTsxFormattedSuccess:
      '"src/router/Router.tsx" file was successfully formatted according to Prettier and ESLint rules.',
    srcRouterRouterTsxFormattedError:
      'An error occurred while formatting "src/router/Router.tsx" with Prettier/ESLint.',

    srcRouterRouterConstantTsUpdateTitle: '"src/router/routerConstant.ts" File - Editing Operation',
    srcRouterRouterConstantTsUpdateSuccess: '"src/router/routerConstant.ts" file has been successfully updated.',
    srcRouterRouterConstantTsUpdateError: 'An error occurred while editing the "src/router/routerConstant.ts" file!',
    srcRouterRouterConstantTsFormattedTitle:
      '"src/router/routerConstant.ts" File - Formatting with Prettier and ESLint',
    srcRouterRouterConstantTsFormattedSuccess:
      '"src/router/routerConstant.ts" file was successfully formatted according to Prettier and ESLint rules.',
    srcRouterRouterConstantTsFormattedError:
      'An error occurred while formatting "src/router/routerConstant.ts" with Prettier/ESLint.',

    srcRouterHelperAccessErrorsRouterTsUpdateTitle:
      '"src/router/helper/accessErrorsRouter.ts" File - Editing Operation',
    srcRouterHelperAccessErrorsRouterTsUpdateSuccess:
      '"src/router/helper/accessErrorsRouter.ts" file has been successfully updated.',
    srcRouterHelperAccessErrorsRouterTsUpdateError:
      'An error occurred while editing the "src/router/helper/accessErrorsRouter.ts" file!',
    srcRouterHelperAccessErrorsRouterTsFormattedTitle:
      '"src/router/helper/accessErrorsRouter.ts" File - Formatting with Prettier and ESLint',
    srcRouterHelperAccessErrorsRouterTsFormattedSuccess:
      '"src/router/helper/accessErrorsRouter.ts" file was successfully formatted according to Prettier and ESLint rules.',
    srcRouterHelperAccessErrorsRouterTsFormattedError:
      'An error occurred while formatting "src/router/helper/accessErrorsRouter.ts" with Prettier/ESLint.',

    srcReduxStoreTsUpdateTitle: '"src/redux/store.ts" File - Editing Operation',
    srcReduxStoreTsUpdateSuccess: '"src/redux/store.ts" file has been successfully updated.',
    srcReduxStoreTsUpdateError: 'An error occurred while editing the "src/redux/store.ts" file!',
    srcReduxStoreTsFormattedTitle: '"src/redux/store.ts" File - Formatting with Prettier and ESLint',
    srcReduxStoreTsFormattedSuccess:
      '"src/redux/store.ts" file was successfully formatted according to Prettier and ESLint rules.',
    srcReduxStoreTsFormattedError: 'An error occurred while formatting "src/redux/store.ts" with Prettier/ESLint.',

    srcPagesAuthSignInSignInTsxUpdateTitle: '"src/pages/auth/signIn/SignIn.tsx" File - Editing Operation',
    srcPagesAuthSignInSignInTsxUpdateSuccess: '"src/pages/auth/signIn/SignIn.tsx" file has been successfully updated.',
    srcPagesAuthSignInSignInTsxUpdateError:
      'An error occurred while editing the "src/pages/auth/signIn/SignIn.tsx" file!',
    srcPagesAuthSignInSignInTsxFormattedTitle:
      '"src/pages/auth/signIn/SignIn.tsx" File - Formatting with Prettier and ESLint',
    srcPagesAuthSignInSignInTsxFormattedSuccess:
      '"src/pages/auth/signIn/SignIn.tsx" file was successfully formatted according to Prettier and ESLint rules.',
    srcPagesAuthSignInSignInTsxFormattedError:
      'An error occurred while formatting "src/pages/auth/signIn/SignIn.tsx" with Prettier/ESLint.',

    srcUtilsEnumsUserTypesTsUpdateTitle: '"src/utils/enums/userTypes.ts" File - Editing Operation',
    srcUtilsEnumsUserTypesTsUpdateSuccess: '"src/utils/enums/userTypes.ts" file has been successfully updated.',
    srcUtilsEnumsUserTypesTsUpdateError: 'An error occurred while editing the "src/utils/enums/userTypes.ts" file!',
    srcUtilsEnumsUserTypesTsFormattedTitle: '"src/utils/enums/userTypes.ts" File - Formatting with Prettier and ESLint',
    srcUtilsEnumsUserTypesTsFormattedSuccess:
      '"src/utils/enums/userTypes.ts" file was successfully formatted according to Prettier and ESLint rules.',
    srcUtilsEnumsUserTypesTsFormattedError:
      'An error occurred while formatting "src/utils/enums/userTypes.ts" with Prettier/ESLint.',

    srcI18nI18nTsUpdateTitle: '"src/i18n/i18n.ts" File - Editing Operation',
    srcI18nI18nTsUpdateSuccess: '"src/i18n/i18n.ts" file has been successfully updated.',
    srcI18nI18nTsUpdateError: 'An error occurred while editing the "src/i18n/i18n.ts" file!',
    srcI18nI18nTsFormattedTitle: '"src/i18n/i18n.ts" File - Formatting with Prettier and ESLint',
    srcI18nI18nTsFormattedSuccess:
      '"src/i18n/i18n.ts" file was successfully formatted according to Prettier and ESLint rules.',
    srcI18nI18nTsFormattedError: 'An error occurred while formatting "src/i18n/i18n.ts" with Prettier/ESLint.',

    nodeModulesDeletedTitle: '"node_modules" Folder - Deletion Operation',
    nodeModulesConfirmDelete:
      '"node_modules" folder and all its contents will be deleted. Do you want to proceed? This step is generally recommended.',
    nodeModulesDeleteSuccess: '"node_modules" folder has been successfully deleted.',
    nodeModulesDeleteError: 'An error occurred while deleting the "node_modules" folder!',

    packageLockDeletedTitle: '"package-lock.json" File - Deletion Operation',
    packageLockConfirmDelete:
      '"package-lock.json" file will be deleted. Do you want to proceed? This step is generally recommended.',
    packageLockDeleteSuccess: '"package-lock.json" file has been successfully deleted.',
    packageLockDeleteError: 'An error occurred while deleting the "package-lock.json" file!',

    cleanupCompleted:
      '🧹 Dev Starter cleanup completed successfully. The project is now in its simplest and cleanest state.',
    recommendFreshInstall:
      '🗑️ For a fresh start, it is recommended to delete the "node_modules" folder and "package-lock.json" file, then run `npm i` to reinstall dependencies.',
    runDevAndTest:
      '🚀 As a final step, run `npm run dev` to start the project in your local environment and ensure everything is working correctly.',
    goodWorkWish: '✨ Successful setup! Wishing you productive and enjoyable coding! 💻',
  },
  tr: {
    success: 'Dev Starter temizlik işlemi başarıyla tamamlandı!',
    error: 'Dev Starter temizlik işlemi sırasında hata oluştu!',
    cancelled: 'Dev Starter temizlik işlemi kullanıcı tarafından iptal edildi.',
    yes: 'Evet',
    no: 'Hayır',

    dependencyAlertMissingNodeModulesOrLockFile:
      'Projenizde "node_modules" klasörü ve "package-lock.json" dosyasının mevcut olduğundan emin olun. Eğer bu klasör veya dosya eksikse, scripti çalıştırmadan önce "npm i" komutunu kullanarak gerekli bağımlılıkları yükleyin. Ayrıca, proje yerel sunucuda (örneğin bir port üzerinde) çalışıyorsa işlemlere başlamadan önce durdurmanız önerilir.',
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

    cleanupCompleted: '🧹 Dev Starter temizliği başarıyla tamamlandı. Proje en sade ve temiz hale getirildi.',
    recommendFreshInstall:
      '🗑️ Temiz bir başlangıç için "node_modules" klasörü ve "package-lock.json" dosyasını tekrardan silip `npm i` komutunu kullanarak yüklemeniz tavsiye edilir.',
    runDevAndTest:
      '🚀 Son adım olarak `npm run dev` komutu ile projeyi yerel ortamda başlatın ve her şeyin doğru çalıştığından emin olun.',
    goodWorkWish: '✨ Başarılı bir kurulum! İyi çalışmalar ve keyifli kodlamalar! 💻',
  },
  de: {
    success: 'Dev Starter-Bereinigung erfolgreich abgeschlossen!',
    error: 'Während der Dev Starter-Bereinigung ist ein Fehler aufgetreten!',
    cancelled: 'Die Dev Starter-Bereinigung wurde vom Benutzer abgebrochen.',
    yes: 'Ja',
    no: 'Nein',

    dependencyAlertMissingNodeModulesOrLockFile:
      'Stellen Sie sicher, dass der Ordner "node_modules" und die Datei "package-lock.json" im Projekt vorhanden sind. Wenn einer von beiden fehlt, stoppen Sie das Skript und führen Sie zuerst "npm i" aus, um die erforderlichen Abhängigkeiten zu installieren. Wenn das Projekt auf einem lokalen Server läuft (z. B. über einen Port), wird empfohlen, es vor Beginn zu stoppen.',
    title:
      '🧹 Dev Starter-Bereinigung beginnt. Dieser Vorgang vereinfacht das Projekt für den produktiven Einsatz und macht es einsatzbereit.',
    checkingFoldersToDelete: 'Es wird überprüft, ob die zu löschenden Ordner im Projekt vorhanden sind...',
    directoryCheckExisting: 'Die folgenden Ordner sind im Projekt vorhanden und werden gelöscht.',
    directoryCheckMissing: 'Die folgenden Ordner sind im Projekt nicht vorhanden. Daher werden diese nicht gelöscht.',
    confirmDeleteDirectories:
      'Die oben aufgelisteten Ordner werden mit ihrem gesamten Inhalt gelöscht. Möchten Sie fortfahren?',
    deletionFolderSuccess: 'Ordner wurde erfolgreich gelöscht.',
    deletionFolderError: 'Beim Löschen des Ordners ist ein Fehler aufgetreten.',

    checkingFilesToEditing: 'Es wird überprüft, ob die zu bearbeitenden Dateien im Projekt vorhanden sind...',
    fileCheckExisting: 'Die folgenden Dateien sind im Projekt vorhanden und werden bearbeitet.',
    filesCheckMissing:
      'Die folgenden Dateien sind im Projekt nicht vorhanden. Daher wird keine Bearbeitung durchgeführt.',

    editingEnvFileMethodTitle: '".env"-Datei – Bearbeitungsvorgang',
    currentAppName: 'Aktueller App-Name: ',
    keepCurrentAppNameInfo: 'Drücken Sie ENTER, um den aktuellen App-Namen beizubehalten.',
    enterAppName: 'Neuen App-Namen eingeben:',
    emptyAppNameWarning: 'App-Name darf nicht leer sein!',
    envUpdateSuccess: '".env"-Datei wurde erfolgreich aktualisiert.',
    envUpdateError: 'Beim Bearbeiten der ".env"-Datei ist ein Fehler aufgetreten!',

    editingPackageJsonFileMethodTitle: '"package.json"-Datei – Bearbeitungsvorgang',
    currentProjectName: 'Aktueller Projektname: ',
    projectNameFormatInfo:
      'Der Projektname muss klein geschrieben und mit Bindestrichen versehen sein (z. B. dev-starter).',
    keepCurrentProjectNameInfo: 'Drücken Sie ENTER, um den aktuellen Projektnamen beizubehalten.',
    enterProjectName: 'Neuen Projektnamen eingeben:',
    emptyProjectNameWarning: 'Projektname darf nicht leer sein!',
    invalidProjectNameWarning: 'Projektname darf nur Kleinbuchstaben, Zahlen und Bindestriche enthalten!',
    packageJsonUpdateSuccess: '"package.json"-Datei wurde erfolgreich aktualisiert.',
    packageJsonUpdateError: 'Beim Bearbeiten der "package.json"-Datei ist ein Fehler aufgetreten!',
    packageJsonFormattedTitle: '"package.json"-Datei – Formatierung mit Prettier und ESLint',
    packageJsonFormattedSuccess:
      '"package.json"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    packageJsonFormattedError:
      'Beim Formatieren der "package.json"-Datei mit Prettier/ESLint ist ein Fehler aufgetreten.',

    editingUsersJsonFileMethodTitle: '"users.json"-Datei – Bearbeitungsvorgang',
    usersJsonInvalidFormat: '"users.json"-Datei hat ein ungültiges JSON-Format! Vorgang gestoppt.',
    usersJsonNotArray: '"users.json"-Datei enthält kein Array wie erwartet! Vorgang abgebrochen.',
    usersJsonUpdateSuccess: '"users.json"-Datei wurde erfolgreich aktualisiert.',
    usersJsonUpdateError: 'Beim Bearbeiten der "users.json"-Datei ist ein Fehler aufgetreten!',
    usersJsonFormattedTitle: '"users.json"-Datei – Formatierung mit Prettier und ESLint',
    usersJsonFormattedSuccess: '"users.json"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    usersJsonFormattedError: 'Beim Formatieren der "users.json"-Datei mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcRouterRouterTsxUpdateTitle: '"src/router/Router.tsx"-Datei – Bearbeitungsvorgang',
    srcRouterRouterTsxUpdateSuccess: '"src/router/Router.tsx"-Datei wurde erfolgreich aktualisiert.',
    srcRouterRouterTsxUpdateError: 'Beim Bearbeiten der Datei "src/router/Router.tsx" ist ein Fehler aufgetreten!',
    srcRouterRouterTsxFormattedTitle: '"src/router/Router.tsx"-Datei – Formatierung mit Prettier und ESLint',
    srcRouterRouterTsxFormattedSuccess:
      '"src/router/Router.tsx"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcRouterRouterTsxFormattedError:
      'Beim Formatieren der Datei "src/router/Router.tsx" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcRouterRouterConstantTsUpdateTitle: '"src/router/routerConstant.ts"-Datei – Bearbeitungsvorgang',
    srcRouterRouterConstantTsUpdateSuccess: '"src/router/routerConstant.ts"-Datei wurde erfolgreich aktualisiert.',
    srcRouterRouterConstantTsUpdateError:
      'Beim Bearbeiten der Datei "src/router/routerConstant.ts" ist ein Fehler aufgetreten!',
    srcRouterRouterConstantTsFormattedTitle:
      '"src/router/routerConstant.ts"-Datei – Formatierung mit Prettier und ESLint',
    srcRouterRouterConstantTsFormattedSuccess:
      '"src/router/routerConstant.ts"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcRouterRouterConstantTsFormattedError:
      'Beim Formatieren der Datei "src/router/routerConstant.ts" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcRouterHelperAccessErrorsRouterTsUpdateTitle:
      '"src/router/helper/accessErrorsRouter.ts"-Datei – Bearbeitungsvorgang',
    srcRouterHelperAccessErrorsRouterTsUpdateSuccess:
      '"src/router/helper/accessErrorsRouter.ts"-Datei wurde erfolgreich aktualisiert.',
    srcRouterHelperAccessErrorsRouterTsUpdateError:
      'Beim Bearbeiten der Datei "src/router/helper/accessErrorsRouter.ts" ist ein Fehler aufgetreten!',
    srcRouterHelperAccessErrorsRouterTsFormattedTitle:
      '"src/router/helper/accessErrorsRouter.ts"-Datei – Formatierung mit Prettier und ESLint',
    srcRouterHelperAccessErrorsRouterTsFormattedSuccess:
      '"src/router/helper/accessErrorsRouter.ts"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcRouterHelperAccessErrorsRouterTsFormattedError:
      'Beim Formatieren der Datei "src/router/helper/accessErrorsRouter.ts" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcReduxStoreTsUpdateTitle: '"src/redux/store.ts"-Datei – Bearbeitungsvorgang',
    srcReduxStoreTsUpdateSuccess: '"src/redux/store.ts"-Datei wurde erfolgreich aktualisiert.',
    srcReduxStoreTsUpdateError: 'Beim Bearbeiten der Datei "src/redux/store.ts" ist ein Fehler aufgetreten!',
    srcReduxStoreTsFormattedTitle: '"src/redux/store.ts"-Datei – Formatierung mit Prettier und ESLint',
    srcReduxStoreTsFormattedSuccess:
      '"src/redux/store.ts"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcReduxStoreTsFormattedError:
      'Beim Formatieren der Datei "src/redux/store.ts" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcPagesAuthSignInSignInTsxUpdateTitle: '"src/pages/auth/signIn/SignIn.tsx"-Datei – Bearbeitungsvorgang',
    srcPagesAuthSignInSignInTsxUpdateSuccess:
      '"src/pages/auth/signIn/SignIn.tsx"-Datei wurde erfolgreich aktualisiert.',
    srcPagesAuthSignInSignInTsxUpdateError:
      'Beim Bearbeiten der Datei "src/pages/auth/signIn/SignIn.tsx" ist ein Fehler aufgetreten!',
    srcPagesAuthSignInSignInTsxFormattedTitle:
      '"src/pages/auth/signIn/SignIn.tsx"-Datei – Formatierung mit Prettier und ESLint',
    srcPagesAuthSignInSignInTsxFormattedSuccess:
      '"src/pages/auth/signIn/SignIn.tsx"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcPagesAuthSignInSignInTsxFormattedError:
      'Beim Formatieren der Datei "src/pages/auth/signIn/SignIn.tsx" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcUtilsEnumsUserTypesTsUpdateTitle: '"src/utils/enums/userTypes.ts"-Datei – Bearbeitungsvorgang',
    srcUtilsEnumsUserTypesTsUpdateSuccess: '"src/utils/enums/userTypes.ts"-Datei wurde erfolgreich aktualisiert.',
    srcUtilsEnumsUserTypesTsUpdateError:
      'Beim Bearbeiten der Datei "src/utils/enums/userTypes.ts" ist ein Fehler aufgetreten!',
    srcUtilsEnumsUserTypesTsFormattedTitle:
      '"src/utils/enums/userTypes.ts"-Datei – Formatierung mit Prettier und ESLint',
    srcUtilsEnumsUserTypesTsFormattedSuccess:
      '"src/utils/enums/userTypes.ts"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcUtilsEnumsUserTypesTsFormattedError:
      'Beim Formatieren der Datei "src/utils/enums/userTypes.ts" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    srcI18nI18nTsUpdateTitle: '"src/i18n/i18n.ts"-Datei – Bearbeitungsvorgang',
    srcI18nI18nTsUpdateSuccess: '"src/i18n/i18n.ts"-Datei wurde erfolgreich aktualisiert.',
    srcI18nI18nTsUpdateError: 'Beim Bearbeiten der Datei "src/i18n/i18n.ts" ist ein Fehler aufgetreten!',
    srcI18nI18nTsFormattedTitle: '"src/i18n/i18n.ts"-Datei – Formatierung mit Prettier und ESLint',
    srcI18nI18nTsFormattedSuccess:
      '"src/i18n/i18n.ts"-Datei wurde erfolgreich gemäß den Prettier- und ESLint-Regeln formatiert.',
    srcI18nI18nTsFormattedError:
      'Beim Formatieren der Datei "src/i18n/i18n.ts" mit Prettier/ESLint ist ein Fehler aufgetreten.',

    nodeModulesDeletedTitle: '"node_modules"-Ordner – Löschvorgang',
    nodeModulesConfirmDelete:
      'Der Ordner "node_modules" und sein gesamter Inhalt werden gelöscht. Möchten Sie fortfahren? Dieser Schritt wird in der Regel empfohlen.',
    nodeModulesDeleteSuccess: '"node_modules"-Ordner wurde erfolgreich gelöscht.',
    nodeModulesDeleteError: 'Beim Löschen des Ordners "node_modules" ist ein Fehler aufgetreten!',

    packageLockDeletedTitle: '"package-lock.json"-Datei – Löschvorgang',
    packageLockConfirmDelete:
      'Die Datei "package-lock.json" wird gelöscht. Möchten Sie fortfahren? Dieser Schritt wird in der Regel empfohlen.',
    packageLockDeleteSuccess: '"package-lock.json"-Datei wurde erfolgreich gelöscht.',
    packageLockDeleteError: 'Beim Löschen der Datei "package-lock.json" ist ein Fehler aufgetreten!',

    cleanupCompleted:
      '🧹 Dev Starter-Bereinigung erfolgreich abgeschlossen. Das Projekt wurde in einen einfachen und sauberen Zustand versetzt.',
    recommendFreshInstall:
      '🗑️ Für einen sauberen Start wird empfohlen, den "node_modules"-Ordner und die "package-lock.json"-Datei zu löschen und `npm i` auszuführen.',
    runDevAndTest:
      '🚀 Führen Sie abschließend `npm run dev` aus, um das Projekt lokal zu starten und sicherzustellen, dass alles funktioniert.',
    goodWorkWish: '✨ Erfolgreiche Einrichtung! Viel Erfolg und Spaß beim Programmieren! 💻',
  },
};

module.exports = languages;
