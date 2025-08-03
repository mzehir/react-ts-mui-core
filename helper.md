# 🛠️ ESLint & Prettier Command Reference Guide

## ESLint Commands

### 🔍 Strict Code Quality Check
```bash
npx eslint . --ext ts,tsx --max-warnings 0
```
**Purpose:** Performs a thorough TypeScript/React code quality scan from the project root.
- `--ext ts,tsx`: Targets TypeScript (.ts) and TypeScript React (.tsx) files
- `--max-warnings 0`: Fails if any warnings are detected
- **Use Case:** Essential for CI/CD pipelines to ensure code quality standards

### 🔧 Auto-Fix Code Issues
```bash
npx eslint . --ext ts,tsx --fix
```
**Purpose:** Scans and automatically fixes fixable code issues.
- `--ext ts,tsx`: Focuses on TypeScript and React files
- `--fix`: Automatically resolves fixable issues
- **Use Case:** Quick code cleanup and standardization

## Prettier Commands

### ⚡ Quick Format Check
```bash
npx prettier . --check
```
**Purpose:** Rapid identification of files that need formatting.
- Scans all files from project root
- Reports files that don't meet Prettier standards
- **Use Case:** Pre-commit validation and code review preparation

### ✨ Format All Files
```bash
npx prettier . --write
```
**Purpose:** Comprehensive codebase formatting.
- Automatically formats all supported files
- Ensures consistent code style
- **Use Case:** Bulk formatting before commits or releases

### 🎯 Format Specific Files
```bash
npx prettier "src/**/*.{ts,tsx,js,jsx,json,css,md}" --check
```
**Purpose:** Targeted formatting for specific file types.
- Customizable file pattern matching
- Supports multiple file extensions
- **Use Case:** Focused formatting during development

## 📝 Best Practices
1. Run ESLint checks before committing code
2. Use Prettier formatting as part of your pre-commit hooks
3. Combine both tools for optimal code quality
4. Regular formatting maintains consistent codebase style

---
> **Pro Tip:** Consider integrating these commands into your IDE for real-time feedback and automatic formatting on save.