# 🧹 Dev Starter Cleanup and New Project Preparation Guide

This guide contains the necessary steps to transform the **Dev Starter** project into a real project by simplifying it.

---

## ✅ Preliminary Preparation

We recommend following these steps to make a solid and smooth start to a new project:

- [ ] Open the terminal in the project's root directory and run the `npm i` command to install the required dependencies.
- [ ] Then start the project in the local environment with the `npm run dev` command and make sure it runs properly.
- [ ] If you receive missing dependency warnings, install the missing packages one by one via terminal (e.g., `npm install <package-name>`).
- [ ] After the application starts without any issues, stop the server with the `Ctrl + C` command from the terminal.
- [ ] Now you can proceed with the project simplification and configuration steps.

---

## 📁 1. Folders to Delete

The following folders should be **completely deleted** (including their contents):

```txt
/src/pages/introduction
/src/router/helper/introductionRouter
/src/i18n/locales/en/introduction
/src/i18n/locales/tr/introduction
/src/redux/slices/introductionSlices
/src/redux/slices/services/introduction
/src/utils/enums/introduction
/src/assets/other
```

## 🗑️ 2. Files to Delete

```txt

```

## ✏️ 3. Files to Edit

### A- `.env`

`VITE_APP_NAME = "Dev Starter"` => Application name should be updated

---

### B- `package.json`

`"name": "dev-starter"` => Project name should be updated

---

### C- `src/db/users.json`

- Only the object (element) with `userType: "admin"` should remain from the 3 objects.
- The other two objects (elements) should be deleted.

---

### D- `src/router/Router.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 002DeletedStart` - `//! 002DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 003ActivatedStart` - `//! 003ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`//! 004DeletedStart` - `//! 004DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 005ActivatedStart` - `//! 005ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`npx prettier --write src/router/Router.tsx` => this command should be run in terminal after the above steps.

`npx eslint src/router/Router.tsx --fix` => this script should be run in terminal after the above steps.

---

### E- `src/router/routerConstant.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 002ActivatedStart` - `//! 002ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`//! 003DeletedStart` - `//! 003DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`//! 005DeletedStart` - `//! 005DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 006ActivatedStart` - `//! 006ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`npx prettier --write src/router/routerConstant.ts` => this script should be run in terminal after the above steps.

`npx eslint src/router/routerConstant.ts --fix` => this script should be run in terminal after the above steps.

---

### F- `src/router/helper/accessErrorsRouter.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 002ActivatedStart` - `//! 002ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`//! 003DeletedStart` - `//! 003DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`//! 005DeletedStart` - `//! 005DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 006ActivatedStart` - `//! 006ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`npx prettier --write src/router/helper/accessErrorsRouter.ts` => this script should be run in terminal after the above steps.

`npx eslint src/router/helper/accessErrorsRouter.ts --fix` => this script should be run in terminal after the above steps.

---

### G- `src/redux/store.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 002DeletedStart` - `//! 002DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 003DeletedStart` - `//! 003DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => all lines between these comment lines should be activated and the related comment lines should be deleted.

`npx prettier --write src/redux/store.ts` => this script should be run in terminal after the above steps.

`npx eslint src/redux/store.ts --fix` => this script should be run in terminal after the above steps.

---

### H- `src/pages/auth/signIn/SignIn.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`{/* //! 002DeletedStart */}` - `{/* //! 002DeletedFinish */}` => all lines between these comment lines and the related comment lines should be deleted.

`//! 003DeletedStart` - `//! 003DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`npx prettier --write src/pages/auth/signIn/SignIn.tsx` => this script should be run in terminal after the above steps.

`npx eslint src/pages/auth/signIn/SignIn.tsx --fix` => this script should be run in terminal after the above steps.

---

### I- `src/utils/enums/userTypes.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`npx prettier --write src/utils/enums/userTypes.ts` => this script should be run in terminal after the above steps.

`npx eslint src/utils/enums/userTypes.ts --fix` => this script should be run in terminal after the above steps.

---

### J- `src/i18n/i18n.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 002DeletedStart` - `//! 002DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 003DeletedStart` - `//! 003DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`//! 004DeletedStart` - `//! 004DeletedFinish` => all lines between these comment lines and the related comment lines should be deleted.

`npx prettier --write src/i18n/i18n.ts` => this script should be run in terminal after the above steps.

`npx eslint src/i18n/i18n.ts --fix` => this script should be run in terminal after the above steps.

---

> 💡 **Note:** After these operations, the project will become more streamlined, production-focused, and sustainable.

---

## ✅ Next Steps
- [ ] Clean up existing dependencies by deleting the `node_modules` folder.
- [ ] Then delete the `package-lock.json` file (this step ensures proper recreation of dependencies).
- [ ] Run the `npm i` command again via terminal to reinstall all necessary dependencies for the project from scratch.
- [ ] Start the project once more with `npm run dev` to verify that everything works properly.
- [ ] If you still receive missing dependency warnings, don't forget to manually install the missing packages.
- [ ] Finally, restart the project (`npm run dev`) and you're ready to develop with a clean start!

---

🎉 Congratulations! If you've completed all these steps, you now have an infrastructure that's more streamlined, easier to maintain, and ready to transform into a real project. Good luck and happy coding! 👨‍💻👩‍💻✨