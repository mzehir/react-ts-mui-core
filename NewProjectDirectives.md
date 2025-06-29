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

3- Düzenlemesi gereken dosyalar
    a- /.env
        - VITE_APP_NAME = "Dev Starter" => Bu satırdaki uygulama adı güncellenmelidir.

    b- /package.json
        - "name": "dev-starter", => Bu satırdaki proje adı güncellenmelidir.

    c- /src/db/users.json
        - Bu dosyadaki array içerisinde yer alan üç objeden son ikisi silinmelidir. Yani "userType": "admin", olan obje silinmemelidir, diğer objeler silinmelidir.

    d- /src/router/Router.tsx
        - '//! 001DeletedStart' ile '//! 001DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 002DeletedStart' ile '//! 002DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 003ActivatedStart' ile '//! 003ActivatedFinish' yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

        - '//! 004DeletedStart' ile '//! 004DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 005ActivatedStart' ile '//! 005ActivatedFinish' yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

    e- /src/router/routerConstant.ts
        - '//! 001DeletedStart' ile '//! 001DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 002ActivatedStart' ile '//! 002ActivatedFinish' yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

        - '//! 003DeletedStart' ile '//! 003DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 004ActivatedStart' ile '//! 004ActivatedFinish' yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

        - '//! 005DeletedStart' ile '//! 005DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 006ActivatedStart' ile '//! 006ActivatedFinish' yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

    f- /src/redux/store.ts
        - '//! 001DeletedStart' ile '//! 001DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 002DeletedStart' ile '//! 002DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 003DeletedStart' ile '//! 003DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 004ActivatedStart' ile '//! 004ActivatedFinish' yorum satırları arasındaki tüm satırlar aktif edilmelidir ve bu satırlar silinmelidir.

    g- /src/pages/auth/signIn/SignIn.tsx
        - '//! 001DeletedStart' ile '//! 001DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '{/* //! 002DeletedStart */}' ile '{/* //! 002DeletedFinish */} yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 003DeletedStart' ile '//! 003DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.
    
    h- /src/utils/enums/userTypes.ts
        - '//! 001DeletedStart' ile '//! 001DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

    i- /src/i18n/i18n.ts
        - '//! 001DeletedStart' ile '//! 001DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 002DeletedStart' ile '//! 002DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 003DeletedStart' ile '//! 003DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.

        - '//! 004DeletedStart' ile '//! 004DeletedFinish' yorum satırları arasındaki tüm satırlar ve bu satırlar silinmelidir.
