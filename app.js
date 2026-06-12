'use strict';

/* ── Translations ───────────────────────────────────────────── */
var T = {
  en: {
    unlock:'Unlock',signout:'Sign out',export:'Export',import:'Import',locked:'Locked',
    userId:'User ID',password:'Password',allNotes:'All notes',untitled:'Untitled note',
    newNote:'New note',emptyNote:'Empty',save:'Save',
    signIn:'Sign in to access your notes',noNotes:'No notes yet',createFirst:'Press + to create',
    justNow:'Just now',mAgo:'m ago',hAgo:'h ago',dAgo:'d ago',
    ready:'Ready',saving:'Saving...',saved:'Saved',edit:'Edit',view:'View',
    endToEnd:'End-to-end encrypted',
    placeholder:'Start writing... **bold**, *italic*, # headings, > quotes, - lists',
    selectNote:'Select a note or create a new one',pressPlus:'Press + to get started',
    deleteTitle:'Delete this note?',deleteMessage:'Move to trash?',
    cancel:'Cancel',delete:'Delete',signInFirst:'Sign in first',wrongCreds:'Wrong credentials',
    vaultUnlocked:'Vault unlocked',noteSaved:'Saved & encrypted',noteRemoved:'Moved to trash',vaultLocked:'Vault locked',
    backupDownloaded:'Backup downloaded',importFailed:'Import failed',exportFailed:'Export failed',
    enterIdPass:'Enter ID and password',loaded:'Loaded',notes:'notes',
    search:'Search notes...',searchPlaceholder:'Search commands and notes...',
    commands:'Commands',notesLabel:'Notes',noResults:'No results',
    helpTitle:'Shortcuts',openPalette:'Command palette',helpShortcuts:'Shortcuts',
    newNoteDesc:'New note',saveNote:'Save current',deleteNote:'Delete',
    toggleLang:'Language',exportBackup:'Export',close:'Close',enter:'Select',navigate:'Navigate',
    tabNotes:'Notes',tabTrash:'Trash',emptyTrash:'Empty trash',
    restore:'Restore',emptyConfirm:'Empty trash?',
    words:'words',chars:'chars',lines:'lines',pin:'Pin',unpin:'Unpin',pinned:'Pinned'
  },
  ru: {
    unlock:'Войти',signout:'Выйти',export:'Экспорт',import:'Импорт',locked:'Заблокировано',
    userId:'Пользователь',password:'Пароль',allNotes:'Все заметки',untitled:'Без заголовка',
    newNote:'Новая заметка',emptyNote:'Пусто',save:'Сохранить',
    signIn:'Войдите для доступа',noNotes:'Пока нет заметок',createFirst:'Нажмите + для создания',
    justNow:'Только что',mAgo:' мин. назад',hAgo:' ч. назад',dAgo:' дн. назад',
    ready:'Готово',saving:'Сохранение...',saved:'Сохранено',edit:'Правка',view:'Просмотр',
    endToEnd:'Сквозное шифрование',
    placeholder:'Начните писать... **жирный**, *курсив*, # заголовки, > цитаты, - списки',
    selectNote:'Выберите заметку',pressPlus:'Нажмите + для начала',
    deleteTitle:'Удалить заметку?',deleteMessage:'Переместить в корзину?',
    cancel:'Отмена',delete:'Удалить',signInFirst:'Сначала войдите',wrongCreds:'Неверные данные',
    vaultUnlocked:'Расшифровано',noteSaved:'Сохранено',noteRemoved:'В корзине',vaultLocked:'Заблокировано',
    backupDownloaded:'Бэкап скачан',importFailed:'Ошибка импорта',exportFailed:'Ошибка экспорта',
    enterIdPass:'Введите ID и пароль',loaded:'Загружено',notes:'заметок',
    search:'Поиск...',searchPlaceholder:'Поиск...',
    commands:'Команды',notesLabel:'Заметки',noResults:'Ничего не найдено',
    helpTitle:'Шорткаты',openPalette:'Палитра команд',helpShortcuts:'Шорткаты',
    newNoteDesc:'Новая заметка',saveNote:'Сохранить',deleteNote:'Удалить',
    toggleLang:'Язык',exportBackup:'Экспорт',close:'Закрыть',enter:'Выбрать',navigate:'Навигация',
    tabNotes:'Заметки',tabTrash:'Корзина',emptyTrash:'Очистить',
    restore:'Восстановить',emptyConfirm:'Очистить корзину?',
    words:'слов',chars:'символов',lines:'строк',pin:'Закрепить',unpin:'Открепить',pinned:'Закреплено'
  }
};
var lang = localStorage.getItem('vc_notes_lang') || 'ru';
function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }

/* ── Theme ──────────────────────────────────────────────────── */
var THEMES = {wood:'Wood',light:'Light',midnight:'Midnight',forest:'Forest',sepia:'Sepia',solarized:'Solarized',ocean:'Ocean',cherry:'Cherry',lavender:'Lavender',mint:'Mint',sunset:'Sunset',arctic:'Arctic',amber:'Amber',slate:'Slate',rose:'Rose',neon:'Neon',cyberpunk:'Cyberpunk',aurora:'Aurora',vaporwave:'Vaporwave',matrix:'Matrix',plasma:'Plasma',cosmic:'Cosmic',infrared:'Infrared',glacial:'Glacial',toxic:'Toxic',neonblue:'Neon Blue',oyster:'Oyster',pearl:'Pearl',obsidian:'Obsidian',ivory:'Ivory',charcoal:'Charcoal',snow:'Snow','midnight-ink':'Midnight Ink',honey:'Honey',coral:'Coral',jade:'Jade','lavender-mist':'Lavender Mist',copper:'Copper',sakura:'Sakura',frost:'Frost','ember-glow':'Ember Glow',storm:'Storm',mocha:'Mocha','neon-chrome':'Neon Chrome',bamboo:'Bamboo',raspberry:'Raspberry',steel:'Steel',desert:'Desert',pine:'Pine','sunset-blaze':'Sunset Blaze',amethyst:'Amethyst','neon-tokyo':'Neon Tokyo',sand:'Sand',titanium:'Titanium','cherry-blossom':'Cherry Blossom',emerald:'Emerald','neon-pop':'Neon Pop','neon-pink':'Neon Pink','neon-orange':'Neon Orange','neon-lime':'Neon Lime','neon-white':'Neon White','neon-red':'Neon Red','neon-yellow':'Neon Yellow','neon-purple':'Neon Purple'};
var THEME_COLORS = {wood:'#3D2317',light:'#F2EAD8',midnight:'#141422',forest:'#1A2A14',sepia:'#E8DCC0',solarized:'#002430',ocean:'#0C1A2A',cherry:'#281018',lavender:'#1A1028',mint:'#0C201C',sunset:'#281808',arctic:'#F0F4F8',amber:'#2A1C08',slate:'#1C1E20',rose:'#281016',neon:'#101020',cyberpunk:'#180C26',aurora:'#0C1A28',vaporwave:'#221030',matrix:'#061806',plasma:'#1E0E2A',cosmic:'#100C28',infrared:'#240C0C',glacial:'#ECF4FC',toxic:'#141E06',neonblue:'#0C1424',oyster:'#1E1E1E',pearl:'#F8F8F8',obsidian:'#0C0C0C',ivory:'#FFFDF8',charcoal:'#202024',snow:'#FFFFFF','midnight-ink':'#0E0E24',honey:'#F8F0D8',coral:'#F8E8EA',jade:'#E8F8F0','lavender-mist':'#F0E8FC',copper:'#F8F0E0',sakura:'#F8E8F0',frost:'#FFFFFF','ember-glow':'#F8E8D0',storm:'#E8F0F8',mocha:'#F0E4D4','neon-chrome':'#0A0A14',bamboo:'#E8F4DC',raspberry:'#F8E0EC',steel:'#E8EAF0',desert:'#F8F0D8',pine:'#D8F0DC','sunset-blaze':'#F8E8D0',amethyst:'#F0E0FC','neon-tokyo':'#1A0E30',sand:'#F8F0D8',titanium:'#E8ECF0','cherry-blossom':'#F8E4F0',emerald:'#E0F4EC','neon-pop':'#121220','neon-pink':'#0E060C','neon-orange':'#0C0804','neon-lime':'#060E04','neon-white':'#0C0C14','neon-red':'#0C0406','neon-yellow':'#0C0C04','neon-purple':'#0A0610'};
var currentTheme = localStorage.getItem('vc_notes_theme') || 'wood';
function applyTheme(th) {
  currentTheme = th;
  localStorage.setItem('vc_notes_theme', th);
  document.documentElement.setAttribute('data-theme', th);
  $('themeDot').style.background = THEME_COLORS[th] || '#3D2317';
  document.querySelectorAll('.theme-opt').forEach(function(o) { o.classList.toggle('active', o.dataset.theme === th); });
}

/* ── DOM Helpers ────────────────────────────────────────────── */
function $(id) { return document.getElementById(id); }
function escH(s) { return String(s).replace(/[&<>"']/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

/* ── Language ───────────────────────────────────────────────── */
function applyLang(l) {
  lang = l;
  localStorage.setItem('vc_notes_lang', l);
  document.documentElement.lang = l;
  $('langFlag').textContent = l === 'ru' ? 'RU' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach(function(e) {
    var k = e.dataset.i18n;
    if (T[l] && T[l][k]) e.textContent = T[l][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(e) {
    var k = e.dataset.i18nPh;
    if (T[l] && T[l][k]) e.placeholder = T[l][k];
  });
  if (modeBtn) modeBtn.textContent = isViewMode ? t('view') : t('edit');
  renderList();
  if (isViewMode) updateViewer();
}

/* ── Keyboard Utils ─────────────────────────────────────────── */
var isMac = /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent);
var MOD = isMac ? '\u2318' : 'Ctrl';
function isMod(e) { return isMac ? e.metaKey : e.ctrlKey; }
function fmtKey(s) {
  if (!s) return '';
  var parts = s.split('+'), r = [], l = '';
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === 'mod') r.push(MOD);
    else if (parts[i] === 'shift') r.push(isMac ? '\u21E7' : 'Shift');
    else l = parts[i].toUpperCase();
  }
  return isMac ? r.join('') + l : r.concat([l]).join('+');
}
function updateHints() {
  var k = $('hintK'), sv = $('hintS');
  if (k) k.textContent = fmtKey('mod+k');
  if (sv) sv.textContent = fmtKey('mod+s');
}

/* ── Messages / Status ──────────────────────────────────────── */
var msgEl = $('msgArea'), statusEl = $('statusMsg'), statusLeft = statusEl.querySelector('.status-left');
var msgTO = null, stTO = null;
function showMsg(x, type, dur) {
  type = type || 'info'; dur = dur || 3500;
  clearTimeout(msgTO);
  msgEl.textContent = x;
  msgEl.className = 'msg-area show ' + type;
  msgTO = setTimeout(function() { msgEl.classList.remove('show'); }, dur);
}
function setStatus(x, state, dur) {
  state = state || 'idle'; dur = dur !== undefined ? dur : 2500;
  clearTimeout(stTO);
  statusEl.className = 'bottom-status ' + state;
  statusLeft.innerHTML = '<span class="status-dot"></span><span>' + x + '</span>';
  if (dur > 0 && state !== 'idle') {
    stTO = setTimeout(function() {
      statusEl.className = 'bottom-status';
      statusLeft.innerHTML = '<span class="status-dot"></span><span>' + t('ready') + '</span>';
    }, dur);
  }
}

/* ── Word Counter ───────────────────────────────────────────── */
function updateWordCount() {
  var text = bodyTa.value;
  var words = text.trim() ? text.trim().split(/\s+/).length : 0;
  $('wordCt').textContent = words + ' ' + t('words') + ' \u00B7 ' + text.length + ' ' + t('chars') + ' \u00B7 ' + text.split('\n').length + ' ' + t('lines');
}

/* ── Crypto ─────────────────────────────────────────────────── */
var SALT_LEN = 16, IV_LEN = 12, PBKDF2_ITER = 210000;

function bufToB64(buf) {
  var bin = '';
  for (var i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
  return btoa(bin);
}
function b64ToBuf(b64) {
  var bin = atob(b64), buf = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf;
}
function concatBufs(a, b) {
  var r = new Uint8Array(a.length + b.length);
  r.set(a, 0); r.set(b, a.length);
  return r;
}

async function deriveKeyNew(pwd, salt) {
  var enc = new TextEncoder();
  var km = await crypto.subtle.importKey('raw', enc.encode(pwd), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2', salt:salt, iterations:PBKDF2_ITER, hash:'SHA-256'}, km, {name:'AES-GCM', length:256}, false, ['encrypt','decrypt']);
}

async function encryptData(plain, pwd) {
  var salt = crypto.getRandomValues(new Uint8Array(SALT_LEN));
  var iv = crypto.getRandomValues(new Uint8Array(IV_LEN));
  var enc = new TextEncoder();
  var key = await deriveKeyNew(pwd, salt);
  var cipher = await crypto.subtle.encrypt({name:'AES-GCM', iv:iv}, key, enc.encode(plain));
  return bufToB64(concatBufs(salt, concatBufs(iv, new Uint8Array(cipher))));
}

async function decryptData(b64, pwd) {
  var buf = b64ToBuf(b64);
  var salt = buf.slice(0, SALT_LEN);
  var iv = buf.slice(SALT_LEN, SALT_LEN + IV_LEN);
  var cipher = buf.slice(SALT_LEN + IV_LEN);
  var key = await deriveKeyNew(pwd, salt);
  var dec = await crypto.subtle.decrypt({name:'AES-GCM', iv:iv}, key, cipher);
  return new TextDecoder().decode(dec);
}

async function deriveKeyOld(pwd, userId) {
  var enc = new TextEncoder();
  var km = await crypto.subtle.importKey('raw', enc.encode(pwd), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2', salt:enc.encode('mdnotes:v1:'+userId), iterations:100000, hash:'SHA-256'}, km, {name:'AES-GCM', length:256}, false, ['encrypt','decrypt']);
}

async function decryptOld(b64, pwd, userId) {
  var obj = JSON.parse(b64);
  var key = await deriveKeyOld(pwd, userId);
  var iv = b64ToBuf(obj.iv), data = b64ToBuf(obj.data);
  var dec = await crypto.subtle.decrypt({name:'AES-GCM', iv:iv}, key, data);
  return new TextDecoder().decode(dec);
}

async function smartDecrypt(encrypted, pwd, userId) {
  try {
    var buf = b64ToBuf(encrypted);
    if (buf.length > SALT_LEN + IV_LEN + 16) {
      return await decryptData(encrypted, pwd);
    }
  } catch(e) {}
  return await decryptOld(encrypted, pwd, userId);
}

/* ── Storage ────────────────────────────────────────────────── */
var STORE_PREFIX = 'vc_notes_v5_';
var OLD_PREFIX = 'mdnotes_';
var IS_TAURI = window.__TAURI__ !== undefined;
var tauriFs, tauriInvoke;
if (IS_TAURI) { tauriFs = window.__TAURI__.fs; tauriInvoke = window.__TAURI__.core.invoke; }
var VER = 3;

function storeKey(u) { return STORE_PREFIX + u; }
function tmpKey(u) { return STORE_PREFIX + u + '_tmp'; }

async function saveCol() {
  if (!currentUser || !currentPass) return;
  setStatus(t('saving'), 'saving', 0);
  var payload = JSON.stringify({ notes: notes, trash: trash, nextId: nextId, version: VER });
  var enc = await encryptData(payload, currentPass);
  try {
    var k = storeKey(currentUser), tk = tmpKey(currentUser);
    localStorage.setItem(tk, enc);
    localStorage.setItem(k, enc);
    localStorage.removeItem(tk);
  } catch(e) { console.error('Save error:', e); }
  setStatus(t('saved'), 'saved', 2000);
}

async function loadCol() {
  var uid = $('userId').value.trim();
  var pwd = $('password').value;
  if (!uid || !pwd) { showMsg(t('enterIdPass'), 'error'); return false; }
  currentUser = uid; currentPass = pwd;
  var raw = localStorage.getItem(storeKey(uid)) || localStorage.getItem(tmpKey(uid));
  if (!raw) {
    var oldRaw = localStorage.getItem(OLD_PREFIX + uid);
    if (oldRaw) {
      try {
        var dec = await smartDecrypt(oldRaw, pwd, uid);
        var data = migrate(JSON.parse(dec));
        notes = data.notes; trash = data.trash; nextId = data.nextId;
        await saveCol();
        return true;
      } catch(e) {
        currentPass = '';
        showMsg(t('wrongCreds'), 'error');
        return false;
      }
    }
    notes = {}; trash = {}; nextId = 1;
    return true;
  }
  try {
    var data2 = migrate(JSON.parse(await smartDecrypt(raw, pwd, uid)));
    notes = data2.notes; trash = data2.trash; nextId = data2.nextId;
    return true;
  } catch(e) {
    currentPass = '';
    showMsg(t('wrongCreds'), 'error');
    return false;
  }
}

function migrate(d) {
  if (!d.notes) d.notes = {};
  if (!d.trash) d.trash = {};
  if (!d.nextId) d.nextId = 1;
  if (!d.version) d.version = 1;
  if (d.version < 2) {
    Object.keys(d.notes).forEach(function(id) {
      if (d.notes[id].pinned === undefined) d.notes[id].pinned = false;
    });
    d.version = 2;
  }
  if (d.version < 3) d.version = 3;
  return d;
}

/* ── State ──────────────────────────────────────────────────── */
var currentUser = '', currentPass = '';
var notes = {}, trash = {}, nextId = 1;
var currentId = null, isViewMode = false, searchQuery = '';
var currentTab = 'notes';
var autoTO = null, isDirty = false;

function scheduleAutoSave() {
  if (!currentUser) return;
  isDirty = true;
  setStatus(t('saving'), 'saving', 0);
  clearTimeout(autoTO);
  autoTO = setTimeout(function() { if (isDirty && currentUser) saveCurrent(true); }, 1800);
}
function cancelAutoSave() { clearTimeout(autoTO); isDirty = false; }

/* ── DOM Refs ───────────────────────────────────────────────── */
var modeBtn = $('modeToggle');
var bodyTa = $('noteBody');
var viewerDiv = $('viewer');
var titleInp = $('noteTitle');
var emojiBtn = $('emojiBtn');
var emojiPicker = $('emojiPicker');
var contentContainer = $('contentContainer');
var sidebarHd = $('sidebarHd');
var trashActions = $('trashActions');

/* ── Markdown Renderer ──────────────────────────────────────── */
function inline(s) {
  return s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>');
}

function mdToHtml(md, query) {
  if (!md) return '';
  var lines = md.split('\n');
  var html = '', inCode = false, codeLang = '', codeLines = [];
  var inTable = false, tRows = [];
  var inUl = false, inOl = false, inTask = false;
  var inBq = false, bqLines = [];
  function cUl() { if (inUl) { html += '</ul>\n'; inUl = false; } }
  function cOl() { if (inOl) { html += '</ol>\n'; inOl = false; } }
  function cTsk() { if (inTask) { html += '</ul>\n'; inTask = false; } }
  function cBq() {
    if (inBq) {
      html += '<blockquote>' + bqLines.map(function(l) { return '<p>' + inline(escH(l)) + '</p>'; }).join('') + '</blockquote>\n';
      inBq = false; bqLines = [];
    }
  }
  function cTbl() {
    if (!inTable) return;
    html += '<table><thead><tr>';
    tRows[0].forEach(function(c) { html += '<th>' + inline(escH(c.trim())) + '</th>'; });
    html += '</tr></thead><tbody>';
    for (var i = 2; i < tRows.length; i++) {
      html += '<tr>';
      tRows[i].forEach(function(c) { html += '<td>' + inline(escH(c.trim())) + '</td>'; });
      html += '</tr>';
    }
    html += '</tbody></table>\n'; inTable = false; tRows = [];
  }
  function renderCode() {
    var cls = codeLang ? ' class="language-' + escH(codeLang) + '"' : '';
    var raw = codeLines.join('\n'), lc = codeLines.length, nums = '';
    for (var n = 1; n <= lc; n++) nums += '<span>' + n + '</span>';
    html += '<pre><div class="code-wrap"><div class="line-nums">' + nums + '</div><div class="code-content"><code' + cls + '>' + escH(raw) + '</code></div></div></pre>\n';
  }
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (!inCode && line.match(/^```/)) { cUl(); cOl(); cTsk(); cBq(); cTbl(); inCode = true; codeLang = line.replace(/^```/, '').trim(); codeLines = []; continue; }
    if (inCode) { if (line.match(/^```/)) { renderCode(); inCode = false; } else { codeLines.push(line); } continue; }
    if (line.trim() === '') { cUl(); cOl(); cTsk(); cBq(); cTbl(); continue; }
    if (line.match(/^(-{3,}|\*{3,}|_{3,})\s*$/)) { cUl(); cOl(); cTsk(); cBq(); cTbl(); html += '<hr>\n'; continue; }
    var hm = line.match(/^(#{1,6})\s+(.*)/);
    if (hm) { cUl(); cOl(); cTsk(); cBq(); cTbl(); var lv = hm[1].length; html += '<h' + lv + '>' + inline(escH(hm[2])) + '</h' + lv + '>\n'; continue; }
    if (line.match(/^\|/)) {
      cUl(); cOl(); cTsk(); cBq();
      var cells = line.split('|').filter(function(c, idx, arr) { return idx > 0 && idx < arr.length - 1; });
      if (!inTable) { inTable = true; tRows = [cells]; } else tRows.push(cells);
      continue;
    } else cTbl();
    var bm = line.match(/^>\s?(.*)/);
    if (bm) { cUl(); cOl(); cTsk(); inBq = true; bqLines.push(bm[1]); continue; } else cBq();
    var tm = line.match(/^(\s*)[-*]\s+\[([ xX])\]\s+(.*)/);
    if (tm) {
      cUl(); cOl(); cBq();
      var ck = tm[2].toLowerCase() === 'x';
      if (!inTask) { inTask = true; html += '<ul class="task-list">'; }
      html += '<li class="' + (ck ? 'checked' : '') + '"><input type="checkbox"' + (ck ? ' checked' : '') + ' disabled>' + inline(escH(tm[3])) + '</li>\n';
      continue;
    }
    var um = line.match(/^(\s*)[-*+]\s+(.*)/);
    if (um) { cOl(); cTsk(); cBq(); if (!inUl) { inUl = true; html += '<ul>'; } html += '<li>' + inline(escH(um[2])) + '</li>\n'; continue; }
    var om = line.match(/^(\s*)\d+[.)]\s+(.*)/);
    if (om) { cUl(); cTsk(); cBq(); if (!inOl) { inOl = true; html += '<ol>'; } html += '<li>' + inline(escH(om[2])) + '</li>\n'; continue; }
    cUl(); cOl(); cTsk();
    var pText = inline(escH(line));
    if (query) { var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'); pText = pText.replace(re, '<mark>$1</mark>'); }
    html += '<p>' + pText + '</p>\n';
  }
  cUl(); cOl(); cTsk(); cBq(); cTbl();
  if (inCode) renderCode();
  return html;
}

/* ── Rendering ──────────────────────────────────────────────── */
function fmtRel(ts) {
  var d = Date.now() - ts, m = Math.floor(d / 60000);
  if (m < 1) return t('justNow');
  if (m < 60) return m + t('mAgo');
  var h = Math.floor(m / 60);
  if (h < 24) return h + t('hAgo');
  var dy = Math.floor(h / 24);
  if (dy < 7) return dy + t('dAgo');
  return new Date(ts).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US');
}

function renderList() {
  if (!currentUser) {
    $('notesList').innerHTML = '<div class="empty-state"><span class="emoji">\uD83D\uDD10</span><div>' + t('signIn') + '</div></div>';
    $('notesCount').textContent = '0';
    return;
  }
  var src = currentTab === 'trash' ? trash : notes;
  var items = Object.entries(src).sort(function(a, b) {
    if (currentTab === 'notes') {
      var pa = a[1].pinned ? 1 : 0, pb = b[1].pinned ? 1 : 0;
      if (pa !== pb) return pb - pa;
    }
    return (b[1].updatedAt || 0) - (a[1].updatedAt || 0);
  });
  $('notesCount').textContent = items.length;
  if (searchQuery.trim()) {
    var q = searchQuery.toLowerCase();
    items = items.filter(function(e) { return ((e[1].title || '') + (e[1].body || '')).toLowerCase().includes(q); });
  }
  if (!items.length) {
    $('notesList').innerHTML = '<div class="empty-state"><span class="emoji">' + (currentTab === 'trash' ? '\uD83D\uDDD1' : '\uD83D\uDD0D') + '</span><div>' + t('noResults') + '</div></div>';
    return;
  }
  $('notesList').innerHTML = items.map(function(e) {
    var id = e[0], n = e[1];
    var pv = (n.body || '').replace(/[#*_\-`~>|\[\]()!]/g, '').substring(0, 70);
    var a = currentId == id ? ' active' : '';
    var pinClass = n.pinned ? ' pinned' : '';
    return '<div class="note-item' + a + '" data-id="' + id + '">' +
      '<button class="note-act pin-btn' + pinClass + '" data-pin="' + id + '">\uD83D\uDCCC</button>' +
      (currentTab === 'trash' ? '<button class="note-act restore-btn" data-restore="' + id + '">\u21A9\uFE0F</button>' : '') +
      '<button class="note-act del-btn" data-del="' + id + '">' + (currentTab === 'trash' ? '\u2716' : '\uD83D\uDDD1\uFE0F') + '</button>' +
      '<div class="note-title">' + escH(n.title || t('untitled')).substring(0, 38) + '</div>' +
      '<div class="note-pv">' + (escH(pv) || t('emptyNote')) + '</div>' +
      '<div class="note-dt">' + (n.updatedAt ? fmtRel(n.updatedAt) : t('justNow')) + '</div></div>';
  }).join('');

  $('notesList').querySelectorAll('.note-item').forEach(function(el) {
    el.addEventListener('click', function() { currentId = el.dataset.id; loadNote(currentId); renderList(); });
  });
  $('notesList').querySelectorAll('.pin-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) { e.stopPropagation(); togglePinById(btn.dataset.pin); });
  });
  $('notesList').querySelectorAll('.del-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentTab === 'trash') permanentDelete(btn.dataset.del);
      else deleteById(btn.dataset.del);
    });
  });
  $('notesList').querySelectorAll('.restore-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      restoreNote(btn.dataset.restore);
    });
  });
  trashActions.style.display = currentTab === 'trash' ? 'block' : 'none';
  sidebarHd.style.display = currentTab === 'trash' ? 'none' : '';
}

function loadNote(id) {
  cancelAutoSave();
  var src = currentTab === 'trash' ? trash : notes;
  var n = src[id]; if (!n) return;
  titleInp.value = n.title || '';
  bodyTa.value = n.body || '';
  if (isViewMode) updateViewer();
  updateWordCount();
}

function updateViewer() {
  if (currentId) {
    var src = currentTab === 'trash' ? trash : notes;
    var n = src[currentId];
    if (n) { viewerDiv.innerHTML = mdToHtml(n.body || '', searchQuery); return; }
  }
  viewerDiv.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--tx-300);gap:6px"><div style="font-size:36px;opacity:.15">\uD83D\uDCDD</div><div style="font-size:12px;font-weight:500;font-family:var(--fs)">' + t('selectNote') + '</div></div>';
}

function toggleMode() {
  isViewMode = !isViewMode;
  bodyTa.style.display = isViewMode ? 'none' : 'block';
  viewerDiv.style.display = isViewMode ? 'block' : 'none';
  modeBtn.textContent = isViewMode ? t('view') : t('edit');
  if (isViewMode) updateViewer();
}

/* ── Custom Confirm Dialog ──────────────────────────────────── */
function showConfirm(title, message) {
  return new Promise(function(resolve) {
    var ov = $('dialogOverlay');
    $('dialogTitle').textContent = title;
    $('dialogMessage').textContent = message;
    ov.classList.add('show');
    function cleanup(result) {
      ov.classList.remove('show');
      $('dialogCancel').removeEventListener('click', onCancel);
      $('dialogConfirm').removeEventListener('click', onConfirm);
      ov.removeEventListener('click', onOverlay);
      resolve(result);
    }
    function onCancel() { cleanup(false); }
    function onConfirm() { cleanup(true); }
    function onOverlay(e) { if (e.target === ov) cleanup(false); }
    $('dialogCancel').addEventListener('click', onCancel);
    $('dialogConfirm').addEventListener('click', onConfirm);
    ov.addEventListener('click', onOverlay);
  });
}

/* ── Notes CRUD ─────────────────────────────────────────────── */
async function saveCurrent(auto) {
  cancelAutoSave();
  if (!currentUser) { showMsg(t('signInFirst'), 'error'); return; }
  if (currentTab === 'trash') { showMsg(t('restore') + ' first', 'error'); return; }
  var title = titleInp.value.trim(), body = bodyTa.value;
  if (!title && !body) { setStatus(t('emptyNote'), 'error', 2000); isDirty = false; return; }
  setStatus(t('saving'), 'saving', 0);
  var id = currentId;
  var isNew = !id || !notes[id];
  if (isNew) {
    id = String(nextId++);
    notes[id] = { title: title || t('newNote'), body: body, pinned: false, createdAt: Date.now(), updatedAt: Date.now() };
  } else {
    notes[id].title = title || t('untitled');
    notes[id].body = body;
    notes[id].updatedAt = Date.now();
  }
  currentId = id;
  await saveCol();
  isDirty = false;
  if (!auto) showMsg('\u2713 ' + t('noteSaved'), 'success');
  setStatus('\u2713 ' + t('saved'), 'saved', 2000);
  renderList();
  if (isViewMode) updateViewer();
  updateWordCount();
}

async function deleteById(id) {
  if (!currentUser || currentTab === 'trash' || !notes[id]) return;
  if (!await showConfirm(t('deleteTitle'), t('deleteMessage'))) return;
  trash[id] = notes[id]; delete notes[id];
  var ids = Object.keys(notes); currentId = ids.length ? ids[0] : null;
  await saveCol();
  clearEditor();
  renderList();
  showMsg('\u2716 ' + t('noteRemoved'), 'info');
}

async function permanentDelete(id) {
  if (!currentUser || currentTab !== 'trash' || !trash[id]) return;
  if (!await showConfirm(t('deleteTitle'), t('deleteMessage'))) return;
  delete trash[id];
  var ids = Object.keys(trash); currentId = ids.length ? ids[0] : null;
  await saveCol();
  clearEditor();
  renderList();
  showMsg('\u2716 Deleted', 'info');
}

async function restoreNote(id) {
  if (!currentUser || !trash[id]) return;
  notes[id] = trash[id]; delete trash[id];
  await saveCol();
  currentId = id; loadNote(id); renderList();
  showMsg('\u2705 Restored', 'success');
}

async function emptyTrash() {
  if (!currentUser) return;
  if (!await showConfirm(t('emptyConfirm'), '')) return;
  trash = {};
  await saveCol();
  currentId = null;
  clearEditor();
  renderList();
}

async function newNote() {
  if (!currentUser) { showMsg(t('signInFirst'), 'error'); return; }
  if (currentTab === 'trash') switchTab('notes');
  currentId = null; titleInp.value = ''; bodyTa.value = '';
  if (isViewMode) updateViewer();
  updateWordCount();
  renderList();
  titleInp.focus();
}

async function togglePinById(id) {
  if (!currentUser || currentTab === 'trash' || !notes[id]) return;
  notes[id].pinned = !notes[id].pinned;
  await saveCol();
  renderList();
  showMsg(notes[id].pinned ? '\uD83D\uDCCC ' + t('pinned') : t('unpin'), 'info');
}

function clearEditor() {
  titleInp.value = ''; bodyTa.value = ''; viewerDiv.innerHTML = '';
}

/* ── Tabs ───────────────────────────────────────────────────── */
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.sidebar-tab').forEach(function(el) { el.classList.toggle('active', el.dataset.tab === tab); });
  currentId = null;
  clearEditor();
  if (isViewMode) updateViewer();
  renderList();
}

/* ── Login / Logout ─────────────────────────────────────────── */
async function login() {
  var ok = await loadCol();
  if (ok) {
    $('logoutBtn').hidden = false;
    $('exportBtn').hidden = false;
    $('importBtn').hidden = false;
    var ids = Object.keys(notes);
    currentId = ids.length ? ids[0] : null;
    if (currentId) loadNote(currentId);
    renderList();
    applyLang(lang);
    showMsg('\uD83D\uDD13 ' + t('vaultUnlocked'), 'success');
    setStatus(t('ready'), 'saved', 2000);
  }
}

function logout() {
  cancelAutoSave();
  currentUser = ''; currentPass = '';
  notes = {}; trash = {}; nextId = 1; currentId = null;
  $('userId').value = ''; $('password').value = '';
  clearEditor();
  $('logoutBtn').hidden = true; $('exportBtn').hidden = true; $('importBtn').hidden = true;
  applyLang(lang);
  renderList();
  showMsg('\uD83D\uDD12 ' + t('vaultLocked'), 'info');
}

/* ── Export / Import ────────────────────────────────────────── */
async function exportBackup() {
  if (!currentUser) return;
  try {
    var payload = JSON.stringify({ notes: notes, trash: trash, nextId: nextId, version: VER });
    var enc = await encryptData(payload, currentPass);
    var backup = { version: 'md_notes_v2', userId: currentUser, encryptedData: enc, exportedAt: Date.now() };
    var json = JSON.stringify(backup, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'md_notes_' + currentUser + '_' + Date.now() + '.json';
    a.click(); URL.revokeObjectURL(a.href);
    showMsg('\u2705 ' + t('backupDownloaded'), 'success');
  } catch(e) { showMsg(t('exportFailed'), 'error'); }
}

function importBackup() {
  if (!currentUser) { showMsg(t('signInFirst'), 'error'); return; }
  var input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = function(e) {
    var file = e.target.files[0]; if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      try {
        var data = JSON.parse(ev.target.result);
        function applyParsed(parsed) {
          notes = parsed.notes || {}; trash = parsed.trash || {}; nextId = parsed.nextId || 1;
          currentId = Object.keys(notes)[0] || null;
          saveCol(); renderList();
          showMsg('\u2705 ' + t('loaded') + ' (' + Object.keys(notes).length + ')', 'success');
        }
        if (data.encryptedData) {
          smartDecrypt(data.encryptedData, currentPass, data.userId || currentUser).then(function(dec) {
            applyParsed(JSON.parse(dec));
          }).catch(function() { showMsg(t('wrongCreds') + ' (encrypted)', 'error'); });
        } else if (data.notes && typeof data.notes === 'object') {
          applyParsed(data);
        } else {
          showMsg(t('importFailed') + ' - ' + Object.keys(data).join(','), 'error');
        }
      } catch(err) { showMsg(t('importFailed') + ': ' + err.message, 'error'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

/* ── Emoji Picker ───────────────────────────────────────────── */
var EMOJIS = ['\uD83D\uDE00','\uD83D\uDE03','\uD83D\uDE04','\uD83D\uDE01','\uD83D\uDE05','\uD83D\uDE02','\uD83E\uDD23','\uD83D\uDE0A','\uD83D\uDE07','\uD83D\uDE42','\uD83D\uDE43','\uD83D\uDE09','\uD83D\uDE0C','\uD83D\uDE0D','\uD83E\uDD70','\uD83D\uDE18','\uD83D\uDE17','\uD83D\uDE19','\uD83D\uDE1A','\uD83D\uDE0B','\uD83D\uDE1B','\uD83D\uDE1C','\uD83E\uDD2A','\uD83E\uDD28','\uD83E\uDDD0','\uD83E\uDD13','\uD83D\uDE0E','\uD83E\uDD29','\uD83E\uDD73','\uD83D\uDE0F','\u2764\uFE0F','\uD83E\uDDE1','\uD83D\uDC9B','\uD83D\uDC9A','\uD83D\uDC99','\uD83D\uDC9C','\uD83D\uDDA4','\uD83D\uDC94','\uD83D\uDC4D','\uD83D\uDC4E','\uD83D\uDC4C','\uD83D\uDC4F','\uD83E\uDD1E','\uD83E\uDD1F','\uD83D\uDD25','\u2B50','\u2728','\uD83D\uDC8E','\uD83C\uDFAF','\uD83D\uDE80','\uD83D\uDCA1','\uD83C\uDFA8','\uD83C\uDFB5','\uD83C\uDF1F'];
emojiPicker.innerHTML = EMOJIS.map(function(e) { return '<div class="emoji-item">' + e + '</div>'; }).join('');
function showPicker() { var r = emojiBtn.getBoundingClientRect(); emojiPicker.style.top = (r.bottom + 3) + 'px'; emojiPicker.style.left = Math.min(r.left, window.innerWidth - 290) + 'px'; emojiPicker.classList.toggle('show'); }
function insertEmoji(e) { var s = bodyTa.selectionStart, end = bodyTa.selectionEnd; bodyTa.value = bodyTa.value.slice(0, s) + e + bodyTa.value.slice(end); bodyTa.selectionStart = bodyTa.selectionEnd = s + e.length; bodyTa.focus(); emojiPicker.classList.remove('show'); scheduleAutoSave(); }

/* ── Drag & Drop + Image Resize ─────────────────────────────── */
var dropOverlay = $('dropOverlay'), dragCounter = 0;
contentContainer.addEventListener('dragenter', function(e) { e.preventDefault(); dragCounter++; dropOverlay.classList.add('show'); });
contentContainer.addEventListener('dragleave', function(e) { e.preventDefault(); dragCounter--; if (dragCounter <= 0) { dragCounter = 0; dropOverlay.classList.remove('show'); } });
contentContainer.addEventListener('dragover', function(e) { e.preventDefault(); });
contentContainer.addEventListener('drop', function(e) {
  e.preventDefault(); dragCounter = 0; dropOverlay.classList.remove('show');
  for (var i = 0; i < e.dataTransfer.files.length; i++) {
    var file = e.dataTransfer.files[i];
    if (!file.type.startsWith('image/')) continue;
    var reader = new FileReader();
    reader.onload = (function(f) { return function(ev) {
      var pos = bodyTa.selectionStart;
      bodyTa.value = bodyTa.value.slice(0, pos) + '\n![' + f.name + '](' + ev.target.result + ')\n' + bodyTa.value.slice(pos);
      scheduleAutoSave(); updateWordCount();
    }; })(file);
    reader.readAsDataURL(file);
  }
});
viewerDiv.addEventListener('mousedown', function(e) {
  var img = e.target.closest('img'); if (!img) return;
  e.preventDefault(); img.classList.add('resize-active');
  var sx = e.clientX, sw = img.offsetWidth, ratio = sw / img.offsetHeight;
  function onMove(ev) { var nw = Math.max(60, sw + (ev.clientX - sx)); img.style.width = nw + 'px'; img.style.height = Math.round(nw / ratio) + 'px'; }
  function onUp() { img.classList.remove('resize-active'); document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); }
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
});

/* ── Search ─────────────────────────────────────────────────── */
var sDeb;
$('searchInput').addEventListener('input', function(e) {
  clearTimeout(sDeb);
  sDeb = setTimeout(function() { searchQuery = e.target.value; renderList(); if (isViewMode) updateViewer(); }, 100);
});

/* ── Keyboard Shortcuts ─────────────────────────────────────── */
function isInput() { var e = document.activeElement; return e && (e.tagName === 'INPUT' || e.tagName === 'TEXTAREA' || e.isContentEditable); }
function navNotes(dir) {
  if (!currentUser || currentTab === 'trash') return;
  var ids = Object.entries(notes).sort(function(a, b) {
    var pa = a[1].pinned ? 1 : 0, pb = b[1].pinned ? 1 : 0;
    if (pa !== pb) return pb - pa;
    return (b[1].updatedAt || 0) - (a[1].updatedAt || 0);
  }).map(function(e) { return e[0]; });
  if (!ids.length) return;
  var ci = currentId ? ids.indexOf(currentId) : -1;
  currentId = ids[(ci === -1 ? (dir > 0 ? 0 : ids.length - 1) : (ci + dir + ids.length) % ids.length)];
  loadNote(currentId); renderList();
}
function showToast(k) {
  var ex = document.querySelector('.key-toast'); if (ex) ex.remove();
  var d = document.createElement('div'); d.className = 'key-toast'; d.textContent = '\u2328 ' + k;
  document.body.appendChild(d); setTimeout(function() { d.remove(); }, 850);
}

document.addEventListener('keydown', function(e) {
  var mod = isMod(e), key = e.key.toLowerCase();
  if (mod && !e.shiftKey && key === 'k') { e.preventDefault(); openPalette(); return; }
  if (mod && !e.shiftKey && key === 's') { e.preventDefault(); saveCurrent(false); return; }
  if (mod && e.shiftKey && key === 'n') { e.preventDefault(); newNote(); return; }
  if (mod && e.shiftKey && key === 'l') { e.preventDefault(); $('langBtn').click(); return; }
  if (mod && !e.shiftKey && key === 'e') { e.preventDefault(); exportBackup(); return; }
  if (e.key === 'Escape') {
    if (palOpen) { closePal(); e.preventDefault(); return; }
    if (helpOpen) { closeHelp(); e.preventDefault(); return; }
    emojiPicker.classList.remove('show');
    return;
  }
  if (palOpen) {
    if (e.key === 'ArrowDown') { palIdx = (palIdx + 1) % palFiltered.length; renderPal(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { palIdx = (palIdx - 1 + palFiltered.length) % palFiltered.length; renderPal(); e.preventDefault(); }
    else if (e.key === 'Enter') { execPal(palIdx); e.preventDefault(); }
    return;
  }
  if ((e.key === '?' || (e.shiftKey && e.key === '/')) && !isInput()) { e.preventDefault(); helpOpen ? closeHelp() : openHelp(); return; }
  if (isInput()) return;
  if (key === 'j') { navNotes(1); e.preventDefault(); }
  if (key === 'k') { navNotes(-1); e.preventDefault(); }
  if (key === '/') { e.preventDefault(); openPalette(); }
});

/* ── Command Palette ────────────────────────────────────────── */
var palOpen = false, palIdx = 0, palFiltered = [];
var cmds = [
  { icon:'\u2728', title:function() { return t('newNoteDesc'); }, action:newNote, sc:'mod+shift+n' },
  { icon:'\uD83D\uDCBE', title:function() { return t('saveNote'); }, action:function() { saveCurrent(false); }, sc:'mod+s' },
  { icon:'\uD83D\uDCE4', title:function() { return t('exportBackup'); }, action:exportBackup, sc:'mod+e' },
  { icon:'\uD83C\uDF10', title:function() { return t('toggleLang'); }, action:function() { $('langBtn').click(); }, sc:'mod+shift+l' },
  { icon:'\uD83D\uDC41', title:function() { return isViewMode ? t('edit') : t('view'); }, action:toggleMode, sc:'' },
  { icon:'\uD83D\uDD12', title:function() { return t('signout'); }, action:logout, sc:'' },
  { icon:'\u2328', title:function() { return t('helpShortcuts'); }, action:openHelp, sc:'?' }
];
function openPalette() {
  if (palOpen) return; palOpen = true; palIdx = 0;
  var ov = document.createElement('div'); ov.id = 'cmdOverlay'; ov.className = 'cmd-overlay';
  ov.innerHTML = '<div class="cmd-palette"><div class="cmd-input-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="text" class="cmd-input" id="cmdInput" placeholder="' + t('searchPlaceholder') + '" autocomplete="off"></div><div class="cmd-results" id="cmdResults"></div><div class="cmd-footer"><span class="cmd-footer-hint"><kbd>\u2195</kbd> ' + t('navigate') + '</span><span class="cmd-footer-hint"><kbd>\u21B5</kbd> ' + t('enter') + '</span><span class="cmd-footer-hint"><kbd>esc</kbd> ' + t('close') + '</span></div></div>';
  document.body.appendChild(ov);
  var inp = $('cmdInput'); inp.focus();
  inp.addEventListener('input', function(e) { clearTimeout(palTO); palTO = setTimeout(function() { filterPal(e.target.value); }, 50); });
  ov.addEventListener('click', function(e) { if (e.target === ov) closePal(); });
  filterPal('');
}
var palTO;
function filterPal(q) {
  q = q.toLowerCase().trim(); palFiltered = [];
  cmds.forEach(function(c) { if (c.title().toLowerCase().includes(q)) palFiltered.push({ type:'cmd', data:c }); });
  if (currentUser && currentTab === 'notes') {
    Object.entries(notes).filter(function(e) { return ((e[1].title || '') + (e[1].body || '')).toLowerCase().includes(q); }).slice(0, 6).forEach(function(e) {
      palFiltered.push({ type:'note', data: { id: e[0], note: e[1] } });
    });
  }
  palIdx = Math.min(palIdx, Math.max(0, palFiltered.length - 1));
  renderPal();
}
function renderPal() {
  var ct = $('cmdResults'); if (!ct) return;
  if (!palFiltered.length) { ct.innerHTML = '<div class="cmd-empty">' + t('noResults') + '</div>'; return; }
  var html = '', curT = '';
  palFiltered.forEach(function(item, i) {
    if (item.type !== curT) { curT = item.type; html += '<div class="cmd-group-label">' + (item.type === 'cmd' ? t('commands') : t('notesLabel')) + '</div>'; }
    if (item.type === 'cmd') {
      var c = item.data, sc = c.sc ? fmtKey(c.sc) : '';
      html += '<div class="cmd-item' + (i === palIdx ? ' active' : '') + '" data-idx="' + i + '"><div class="cmd-item-icon">' + c.icon + '</div><div class="cmd-item-text"><div class="cmd-item-title">' + c.title() + '</div></div>' + (sc ? '<kbd>' + sc + '</kbd>' : '') + '</div>';
    } else {
      var n = item.data.note;
      html += '<div class="cmd-item' + (i === palIdx ? ' active' : '') + '" data-idx="' + i + '"><div class="cmd-item-icon">\uD83D\uDCDD</div><div class="cmd-item-text"><div class="cmd-item-title">' + escH(n.title || t('untitled')).substring(0, 45) + '</div><div class="cmd-item-subtitle">' + escH((n.body || '').substring(0, 50)) + '</div></div></div>';
    }
  });
  ct.innerHTML = html;
  ct.querySelectorAll('.cmd-item').forEach(function(el) { el.addEventListener('click', function() { execPal(parseInt(el.dataset.idx)); }); });
  var act = ct.querySelector('.cmd-item.active'); if (act) act.scrollIntoView({ block: 'nearest' });
}
function execPal(i) {
  var item = palFiltered[i]; if (!item) return; closePal();
  if (item.type === 'cmd') item.data.action();
  else { currentTab = 'notes'; switchTab('notes'); currentId = item.data.id; loadNote(currentId); renderList(); }
}
function closePal() { if (!palOpen) return; palOpen = false; var o = $('cmdOverlay'); if (o) o.remove(); }

/* ── Help ───────────────────────────────────────────────────── */
var helpOpen = false;
function openHelp() {
  if (helpOpen) return; helpOpen = true;
  function k(keys) { return keys.map(function(k) { return '<kbd>' + (k === 'mod' ? MOD : k === 'shift' ? (isMac ? '\u21E7' : 'Shift') : k) + '</kbd>'; }).join(''); }
  var ov = document.createElement('div'); ov.className = 'help-overlay show';
  ov.innerHTML = '<div class="help-modal"><h4>' + t('helpTitle') + '</h4><div class="help-section"><div class="help-section-title">' + t('openPalette') + '</div><div class="help-row"><span class="help-row-label">' + t('newNoteDesc') + '</span><div class="help-row-keys">' + k(['mod','shift','n']) + '</div></div><div class="help-row"><span class="help-row-label">' + t('saveNote') + '</span><div class="help-row-keys">' + k(['mod','s']) + '</div></div><div class="help-row"><span class="help-row-label">' + t('deleteNote') + '</span><div class="help-row-keys">' + k(['mod','d']) + '</div></div></div></div>';
  document.body.appendChild(ov);
  ov.addEventListener('click', function(e) { if (e.target === ov) closeHelp(); });
}
function closeHelp() { helpOpen = false; var o = document.querySelector('.help-overlay'); if (o) o.remove(); }

/* ── Event Bindings ─────────────────────────────────────────── */
$('loginBtn').onclick = login;
$('password').addEventListener('keydown', function(e) { if (e.key === 'Enter') login(); });
$('userId').addEventListener('keydown', function(e) { if (e.key === 'Enter') $('password').focus(); });
$('logoutBtn').onclick = logout;
$('exportBtn').onclick = exportBackup;
$('importBtn').onclick = importBackup;
$('newNoteBtn').onclick = newNote;
$('emojiBtn').onclick = showPicker;
$('modeToggle').onclick = toggleMode;
$('langBtn').onclick = function() { var nl = lang === 'ru' ? 'en' : 'ru'; applyLang(nl); showMsg(nl === 'ru' ? 'RU' : 'EN', 'info'); };
$('emptyTrashBtn').onclick = emptyTrash;
titleInp.addEventListener('input', scheduleAutoSave);
bodyTa.addEventListener('input', function() { scheduleAutoSave(); updateWordCount(); });

document.querySelectorAll('.sidebar-tab').forEach(function(el) {
  el.addEventListener('click', function() { switchTab(el.dataset.tab); });
});

$('themeBtn').onclick = function() { $('themeMenu').classList.toggle('show'); };
document.querySelectorAll('.theme-opt').forEach(function(o) {
  o.onclick = function() { applyTheme(o.dataset.theme); $('themeMenu').classList.remove('show'); };
});
document.addEventListener('click', function(e) {
  if (!e.target.closest('.theme-btn') && !e.target.closest('.theme-menu')) $('themeMenu').classList.remove('show');
  if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) emojiPicker.classList.remove('show');
});

/* ── Init ───────────────────────────────────────────────────── */
applyTheme(currentTheme);
applyLang(lang);
updateHints();
setStatus(t('ready'));
bodyTa.style.display = 'block';
viewerDiv.style.display = 'none';
isViewMode = false;
modeBtn.textContent = t('edit');
renderList();
