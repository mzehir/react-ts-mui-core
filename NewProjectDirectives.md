1- Silinmesi gereken klasörler (İçerisindeki veriler ile beraber)
    a- /node_modules
    b- /src/pages/introduction
    c- /src/router/helper/introductionRouter
    e- /src/i18n/locales/en/introduction
    f- /src/i18n/locales/tr/introduction
    g- /src/redux/slices/introductionSlices
    h- /src/redux/slices/services/introduction
    i- /src/utils/enums/introduction
    j- /src/assets/other

2- Silinmesi gereken dosyalar
    a- /package-lock.json

3- Düzenlemesi gerek dosyalar
    a- /.env
        - VITE_APP_NAME = "Dev Starter" => Bu satırdaki uygulama adı güncellenmelidir.

    b- /package.json
        - "react-slick": "^0.30.2", => Bu satır silinmelidir.
        - "slick-carousel": "^1.8.1", => Bu satır silinmelidir.

        - "name": "dev-starter", => Bu satır proje adı ile güncellenmelidir.

    c- /src/router/Router.tsx
        - '//! 001 Start: Imports that must be deleted to start a project' ile '//! 001 Finish: Imports that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 002 Start: Definitions that must be deleted to start a project' ile '//! 002 Finish: Definitions that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 003 Start: Definitions that must be activated to start a project' ile '//! 003 Finish: Definitions that must be activated to start a project' yorum satırı arasındaki tüm satırlar aktif edilmelidir.

        - '//! 004 Start: Rows to be deleted to start a project' ile '//! 004 Finish: Rows to be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 005 Start: Rows that must be activated to start a project' ile '//! 005 Finish: Rows that must be activated to start a project' yorum satırı arasındaki tüm satırlar aktif edilmelidir.

    d- /src/router/routerConstant.ts
        - '//! 001 Start: Imports that must be deleted to start a project' ile '//! 001 Finish: Imports that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 002 Start: Imports that must be activated to start a project' ile '//! 002 Finish: Imports that must be activated to start a project' yorum satırı arasındaki tüm satırlar aktif edilmelidir.

        - '//! 003 Start: Rows to be deleted to start a project' ile '//! 003 Finish: Rows to be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 004 Start: Rows that must be activated to start a project' ile '//! 004 Finish: Rows that must be activated to start a project' yorum satırı arasındaki tüm satırlar aktif edilmelidir.

        - '//! 005 Start: Rows to be deleted to start a project' ile '//! 005 Finish: Rows to be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 006 Start: Rows that must be activated to start a project' ile '//! 006 Finish: Rows that must be activated to start a project' yorum satırı arasındaki tüm satırlar aktif edilmelidir.

    e- /src/redux/store.ts
        - '//! 001 Start: Imports that must be deleted to start a project' ile '//! 001 Finish: Imports that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 002 Start: Rows to be deleted to start a project' ile '//! 002 Finish: Rows to be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 003 Start: Definitions that must be deleted to start a project' ile '//! 003 Finish: Definitions that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 004 Start: Definitions that must be activated to start a project' ile '//! 004 Finish: Definitions that must be activated to start a project' yorum satırı arasındaki tüm satırlar aktif edilmelidir.

    f- /src/pages/auth/signIn/SignIn.tsx
        - '//! 001 Start: Imports that must be deleted to start a project' ile '//! 001 Finish: Imports that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

        - '{/* //! 002 Start: Rows to be deleted to start a project */}' ile '{/* //! 002 Finish: Rows to be deleted to start a project */} yorum satırı arasındaki tüm satırlar silinmelidir.

        - '//! 003 Start: Definitions that must be deleted to start a project' ile '//! 003 Finish: Definitions that must be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.

    g- /src/db/users.json
        - Bu dosyadaki array içerisinde yer alan üç objeden son ikisi silinmelidir. Yani "userType": "admin", olan obje silinmemelidir, diğer objeler silinmelidir.
    
    h- /src/utils/enums/userTypes.ts
        - '//! 001 Start: Rows to be deleted to start a project' ile '//! 001 Finish: Rows to be deleted to start a project' yorum satırı arasındaki tüm satırlar silinmelidir.