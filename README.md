🐻 MD Notes
End-to-end encrypted, zero-dependency markdown notebook that runs entirely in your browser.
MD Notes is a secure, high-performance note-taking application designed with a "privacy-first" architecture. No servers, no tracking, no build steps. Just a single HTML file that keeps your thoughts safe and accessible.
✨ Key Features
🔒 Military-Grade Security
AES-256-GCM Encryption: All notes are encrypted locally before being saved
PBKDF2 Key Derivation: 210,000 iterations with SHA-256 for brute-force resistance
Zero-Knowledge Architecture: Your password never leaves your device; decryption happens entirely in-browser
Atomic Writes: Temp-file strategy prevents data corruption during saves
⚡ Blazing Performance
Optimized Canvas Rendering: Mesh background runs at ≤24 FPS with automatic idle detection (drops to ~8 FPS when inactive)
Throttled Interactions: Mouse spotlight effects limited to 60ms intervals to prevent layout thrashing
GPU-Accelerated CSS: contain: strict, translateZ(0), and reduced blur radii for smooth 60fps UI
Respects prefers-reduced-motion: Automatically disables animations for accessibility
📝 Modern Editor Experience
Auto-Save: Debounced saving (1.8s) with visual status indicators
Markdown Support: Headings, bold, italic, lists, links, and underline
Dual Mode: Seamless toggle between Edit and Preview modes
Emoji Picker: Built-in emoji selector with cursor-aware insertion
Command Palette: Ctrl+K / ⌘K for keyboard-driven navigation
🛠️ Developer-Friendly Architecture
Schema Versioning: Automatic data migrations ensure forward compatibility
Bilingual UI: Full English/Russian localization with instant switching
Portable Backup: Export/import encrypted JSON backups
Single-File Deployment: No build tools, no npm, no server required
