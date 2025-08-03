# 🛠️ ESLint & Prettier Befehlsreferenz-Leitfaden

## ESLint Befehle

### 🔍 Strikte Code-Qualitätsprüfung
```bash
npx eslint . --ext ts,tsx --max-warnings 0
```
**Zweck:** Führt eine gründliche TypeScript/React Code-Qualitätsprüfung vom Projektstamm aus durch.
- `--ext ts,tsx`: Zielt auf TypeScript (.ts) und TypeScript React (.tsx) Dateien ab
- `--max-warnings 0`: Schlägt fehl, wenn Warnungen erkannt werden
- **Anwendungsfall:** Essentiell für CI/CD-Pipelines zur Sicherstellung von Code-Qualitätsstandards

### 🔧 Automatische Code-Fehlerbehebung
```bash
npx eslint . --ext ts,tsx --fix
```
**Zweck:** Scannt und behebt automatisch behebbare Code-Probleme.
- `--ext ts,tsx`: Konzentriert sich auf TypeScript und React Dateien
- `--fix`: Behebt automatisch behebbare Probleme
- **Anwendungsfall:** Schnelle Code-Bereinigung und Standardisierung

## Prettier Befehle

### ⚡ Schnelle Formatierungsprüfung
```bash
npx prettier . --check
```
**Zweck:** Schnelle Identifizierung von Dateien, die formatiert werden müssen.
- Scannt alle Dateien vom Projektstamm
- Meldet Dateien, die nicht den Prettier-Standards entsprechen
- **Anwendungsfall:** Pre-Commit-Validierung und Vorbereitung der Code-Überprüfung

### ✨ Alle Dateien formatieren
```bash
npx prettier . --write
```
**Zweck:** Umfassende Codebase-Formatierung.
- Formatiert automatisch alle unterstützten Dateien
- Gewährleistet einheitlichen Code-Stil
- **Anwendungsfall:** Massenformatierung vor Commits oder Releases

### 🎯 Spezifische Dateien formatieren
```bash
npx prettier "src/**/*.{ts,tsx,js,jsx,json,css,md}" --check
```
**Zweck:** Gezielte Formatierung für bestimmte Dateitypen.
- Anpassbare Dateimuster-Übereinstimmung
- Unterstützt mehrere Dateierweiterungen
- **Anwendungsfall:** Fokussierte Formatierung während der Entwicklung

## 📝 Best Practices
1. ESLint-Prüfungen vor dem Commit von Code durchführen
2. Prettier-Formatierung als Teil Ihrer Pre-Commit-Hooks verwenden
3. Beide Tools für optimale Code-Qualität kombinieren
4. Regelmäßige Formatierung erhält einheitlichen Codebase-Stil

---
> **Profi-Tipp:** Erwägen Sie die Integration dieser Befehle in Ihre IDE für Echtzeit-Feedback und automatische Formatierung beim Speichern.