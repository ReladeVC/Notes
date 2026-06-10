# 🐻 MD Notes

> **Портативный зашифрованный блокнот** для Windows (7, 10, 11) и других ОС.  
> Работает из коробки: **заметки онлайн** (браузерная версия) и **локальные заметки для рабочего стола Windows** с автоматическим шифрованием.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue)]()
[![Tech](https://img.shields.io/badge/AES--256-Encrypted-red)]()
[![Size](https://img.shields.io/badge/size-portable%20%7C%20%3C10MB-brightgreen)]()

---

## 🚀 Возможности, которые вам понравятся

| Особенность | Описание |
|-------------|----------|
| 🔑 **Автоматическая регистрация** | **Заметки для windows** без лишних телодвижений — просто введите логин и пароль, аккаунт создаётся мгновенно |
| 🔒 **AES-256 шифрование** | Все данные хранятся в JSON с **зашифрованными бэкапами**. Пароль никогда не покидает устройство |
| 💾 **Портативность** | Идеальные **заметки для рабочего стола windows** — работает без установки, один `.exe` и файл `.enc` рядом |
| ⚡️ **Авто-сохранение** | **Заметки для windows 10** и **windows 11** сохраняются автоматически при вводе (задержка 1.8 сек) |
| 🌐 **Браузерная версия** | Если нужны **приложения для заметок windows** без установки — до ~5 МБ в localStorage |
| 📁 **Локальное хранилище** | Файл в папке `data/` с расширением `.enc` — идеально для **заметок для рабочего стола windows 10** |
| 🔐 **Шифрование на лету** | Ваши **заметки для windows 10** и **заметки для windows 11** всегда защищены |

---

## 📥 Установка

### Для Windows (7, 10, 11)

1. Скачайте последний релиз `MDNotes.exe`
2. Поместите в любую папку (например, `D:\MyNotes\`)
3. Запустите — **заметки для windows** готовы к работе

> ✨ Это идеальные **заметки для рабочего стола windows** — не оставляют следов в реестре

### Браузерная версия (онлайн)

Откройте `index.html` — **заметки онлайн** с ограничением ~5 МБ из-за localStorage

---

## 🖥️ Скриншоты





<div align="center">

# 🐻 MD Notes

### End-to-end encrypted, zero-dependency markdown notebook that runs entirely in your browser.
[🚀 Start MD Notes](https://reladevc.github.io/Notes/) • [Download](#quick-start) • 
![MD Notes feature map](assets/art.png)
[![Version](https://img.shields.io/badge/Version-2.0.0-brightgreen.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)



</div>

---

## 📖 About

**MD Notes** is a secure, high-performance note-taking application designed with a **privacy-first** architecture. No servers, no tracking, no build steps, no frameworks. Just a single HTML file that keeps your thoughts safe, fast, and accessible anywhere.

> ⚠️ **Zero-Knowledge:** Your password never leaves your device. All encryption and decryption happen exclusively in your browser using the Web Crypto API.

## ✨ Key Features

### 🔒 Military-Grade Security
- **AES-256-GCM Encryption** — authenticated encryption for all stored data
- **PBKDF2 Key Derivation** — 210,000 iterations with SHA-256
- **Atomic Writes** — temp-file strategy prevents data corruption on save
- **Unsaved Changes Guard** — `beforeunload` warning protects against accidental tab closure

### ⚡ Blazing Performance
- **Optimized Canvas Mesh** — ≤24 FPS with automatic idle detection (drops to ~8 FPS)
- **Throttled Interactions** — mouse spotlight limited to 60ms to prevent layout thrashing
- **GPU-Accelerated CSS** — `contain: strict`, `translateZ(0)`, reduced blur radii
- **Accessibility First** — full `prefers-reduced-motion` support

### 📝 Modern Editor
- **Auto-Save** — debounced 1.8s saving with visual status indicators
- **Markdown Rendering** — headings, bold, italic, lists, links, underline
- **Dual Mode** — seamless Edit ↔ Preview toggle
- **Emoji Picker** — built-in selector with cursor-aware insertion
- **Command Palette** — `Ctrl+K` / `⌘K` keyboard-driven navigation
- **Schema Versioning** — automatic data migrations for forward compatibility

### 🌍 Bilingual & Portable
- Full **English / Russian** UI with instant switching
- Encrypted **JSON backup** export/import
- **Single-file deployment** — no npm, no bundler, no server

## 🚀 Quick Start

 Live Version
👉 **[Start MD Notes](https://reladevc.github.io/Notes/)** — instant access, no installation needed.



