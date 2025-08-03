# 🧹 Dev Starter Bereinigung und Leitfaden zur Vorbereitung neuer Projekte

Diese Anleitung enthält die notwendigen Schritte, um das **Dev Starter** Projekt durch Vereinfachung in ein echtes Projekt umzuwandeln.

---

## ✅ Vorbereitende Maßnahmen

Wir empfehlen, die folgenden Schritte zu befolgen, um einen soliden und reibungslosen Start in ein neues Projekt zu gewährleisten:

- [ ] Öffnen Sie das Terminal im Stammverzeichnis des Projekts und führen Sie den Befehl `npm i` aus, um die erforderlichen Abhängigkeiten zu installieren.
- [ ] Starten Sie dann das Projekt in der lokalen Umgebung mit dem Befehl `npm run dev` und stellen Sie sicher, dass es ordnungsgemäß läuft.
- [ ] Wenn Sie Warnungen über fehlende Abhängigkeiten erhalten, installieren Sie die fehlenden Pakete einzeln über das Terminal (z.B. `npm install <paket-name>`).
- [ ] Nachdem die Anwendung ohne Probleme gestartet wurde, beenden Sie den Server mit dem Befehl `Ctrl + C` im Terminal.
- [ ] Jetzt können Sie mit den Schritten zur Projektvereinfachung und -konfiguration fortfahren.

---

## 📁 1. Zu löschende Ordner

Die folgenden Ordner sollten **vollständig gelöscht werden** (einschließlich ihrer Inhalte):

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

## 🗑️ 2. Zu löschende Dateien

```txt

```

## ✏️ 3. Zu bearbeitende Dateien

### A- `.env`

`VITE_APP_NAME = "Dev Starter"` => Anwendungsname sollte aktualisiert werden

---

### B- `package.json`

`"name": "dev-starter"` => Projektname sollte aktualisiert werden

---

### C- `src/db/users.json`

- Von den 3 Objekten (Elementen) sollte nur das mit `userType: "admin"` bleiben.
- Die anderen beiden Objekte (Elemente) sollten gelöscht werden.

---

### D- `src/router/Router.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 002DeletedStart` - `//! 002DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 003ActivatedStart` - `//! 003ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`//! 004DeletedStart` - `//! 004DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 005ActivatedStart` - `//! 005ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`npx prettier --write src/router/Router.tsx` => Dieser Befehl sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/router/Router.tsx --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

### E- `src/router/routerConstant.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 002ActivatedStart` - `//! 002ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`//! 003DeletedStart` - `//! 003DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`//! 005DeletedStart` - `//! 005DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 006ActivatedStart` - `//! 006ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`npx prettier --write src/router/routerConstant.ts` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/router/routerConstant.ts --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

### F- `src/router/helper/accessErrorsRouter.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 002ActivatedStart` - `//! 002ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`//! 003DeletedStart` - `//! 003DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`//! 005DeletedStart` - `//! 005DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 006ActivatedStart` - `//! 006ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`npx prettier --write src/router/helper/accessErrorsRouter.ts` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/router/helper/accessErrorsRouter.ts --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

### G- `src/redux/store.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 002DeletedStart` - `//! 002DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 003DeletedStart` - `//! 003DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 004ActivatedStart` - `//! 004ActivatedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen sollten aktiviert und die zugehörigen Kommentarzeilen gelöscht werden.

`npx prettier --write src/redux/store.ts` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/redux/store.ts --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

### H- `src/pages/auth/signIn/SignIn.tsx`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`{/* //! 002DeletedStart */}` - `{/* //! 002DeletedFinish */}` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 003DeletedStart` - `//! 003DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`npx prettier --write src/pages/auth/signIn/SignIn.tsx` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/pages/auth/signIn/SignIn.tsx --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

### I- `src/utils/enums/userTypes.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`npx prettier --write src/utils/enums/userTypes.ts` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/utils/enums/userTypes.ts --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

### J- `src/i18n/i18n.ts`

`//! 001DeletedStart` - `//! 001DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 002DeletedStart` - `//! 002DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 003DeletedStart` - `//! 003DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`//! 004DeletedStart` - `//! 004DeletedFinish` => Alle Zeilen zwischen diesen Kommentarzeilen und die zugehörigen Kommentarzeilen sollten gelöscht werden.

`npx prettier --write src/i18n/i18n.ts` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

`npx eslint src/i18n/i18n.ts --fix` => Dieses Skript sollte nach den obigen Schritten im Terminal ausgeführt werden.

---

> 💡 **Hinweis:** Nach diesen Operationen wird das Projekt schlanker, produktionsorientierter und wartbarer sein.

---

## ✅ Nächste Schritte
- [ ] Bereinigen Sie die vorhandenen Abhängigkeiten durch Löschen des `node_modules`-Ordners.
- [ ] Löschen Sie dann die Datei `package-lock.json` (dieser Schritt stellt die ordnungsgemäße Neuerstellung der Abhängigkeiten sicher).
- [ ] Führen Sie den Befehl `npm i` erneut über das Terminal aus, um alle erforderlichen Abhängigkeiten für das Projekt von Grund auf neu zu installieren.
- [ ] Starten Sie das Projekt noch einmal mit `npm run dev`, um zu überprüfen, ob alles ordnungsgemäß funktioniert.
- [ ] Wenn Sie immer noch Warnungen über fehlende Abhängigkeiten erhalten, vergessen Sie nicht, die fehlenden Pakete manuell zu installieren.
- [ ] Starten Sie schließlich das Projekt neu (`npm run dev`) und Sie sind bereit für die Entwicklung mit einem sauberen Start!

---

🎉 Herzlichen Glückwunsch! Wenn Sie alle diese Schritte abgeschlossen haben, verfügen Sie jetzt über eine schlankere, leichter zu wartende Infrastruktur, die bereit ist, sich in ein echtes Projekt zu verwandeln. Viel Erfolg und viel Spaß beim Programmieren! 👨‍💻👩‍💻✨