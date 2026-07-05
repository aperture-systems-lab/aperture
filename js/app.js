/* ============================================================
   Aperture · Lógica del sitio
   ------------------------------------------------------------
   Renderiza la bitácora, redes, modal de noticias, navegación,
   pantalla de arranque y las visualizaciones (matrix + red).
   El contenido vive en js/data.js (window.APERTURE_DATA).
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.APERTURE_DATA || {};
  var GITHUB_URL = DATA.githubUrl || 'https://github.com/';
  var bootRows = DATA.bootRows || [];
  var news = DATA.news || [];
  var socials = DATA.socials || [];
  var site = DATA.site || {};

  var glowMap = {
    '#33c9d6': 'rgba(51,201,214,0.32)', '#4fd6a0': 'rgba(79,214,160,0.32)',
    '#f5b94d': 'rgba(245,185,77,0.3)', '#c79bff': 'rgba(199,155,255,0.3)',
    '#5fb0ff': 'rgba(95,176,255,0.3)'
  };
  function glowFor(c) { return glowMap[c] || 'rgba(41,197,214,0.3)'; }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function $(id) { return document.getElementById(id); }
  function setHTML(id, html) { var el = $(id); if (el && html != null) el.innerHTML = html; }
  function setText(id, txt) { var el = $(id); if (el && txt != null) el.textContent = txt; }
  function scrollToId(id) {
    var el = $(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  }

  /* ---------- TEXTOS DEL SITIO ---------- */
  function applySite() {
    if (site.title) document.title = site.title;
    setHTML('heroTitle', site.heroTitle);
    setHTML('heroText', site.heroText);
    setHTML('aboutText', site.about);
    setText('labPhrase', site.labPhrase);
    setText('contactTitle', site.contactTitle);
    setText('contactText', site.contactText);
    if (site.chips && $('heroChips')) {
      $('heroChips').innerHTML = site.chips.map(function (c) {
        return '<span style="font-family:\'JetBrains Mono\',monospace; font-size:13px; color:' + c.color + '; border:1px solid #1f6f7c; background:#0a1622; padding:5px 11px;">' + esc(c.text) + '</span>';
      }).join('');
    }
  }

  /* ---------- BITACORA (groups) ---------- */
  function blogCard(n, i) {
    var color = n.accent, glow = glowFor(n.accent);
    return '' +
    '<button class="bcard" data-news="' + i + '" style="--glow:' + glow + '; cursor:pointer; text-align:left; width:100%; background:linear-gradient(180deg,#0b1a26,#070f18); border:2px solid #173241; box-shadow:6px 6px 0 rgba(0,0,0,0.5); padding:0; display:flex; flex-direction:column; overflow:hidden; position:relative; transition:transform .14s, box-shadow .14s;">' +
      '<span style="height:3px; background:' + color + '; box-shadow:0 0 12px ' + glow + ';"></span>' +
      '<span style="display:flex; align-items:center; gap:10px; padding:10px 18px; background:rgba(7,15,24,0.55); border-bottom:1px solid #122b34; flex-wrap:wrap;">' +
        '<span style="width:9px; height:9px; background:#11505c; border-radius:50%;"></span>' +
        '<span style="width:9px; height:9px; background:#1f8fa0; border-radius:50%;"></span>' +
        '<span style="width:9px; height:9px; background:' + color + '; border-radius:50%; box-shadow:0 0 8px ' + glow + ';"></span>' +
        '<span style="font-family:\'JetBrains Mono\',monospace; font-size:11px; font-weight:700; letter-spacing:0.6px; color:#050a0e; background:' + color + '; padding:3px 9px; margin-left:5px;">' + esc(n.tag) + '</span>' +
        '<span style="flex:1; font-family:\'JetBrains Mono\',monospace; font-size:12px; color:#5c7a86; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' + esc(n.meta) + '</span>' +
        '<span style="font-family:\'JetBrains Mono\',monospace; font-size:11px; color:' + color + '; border:1px solid ' + color + '; padding:2px 8px; white-space:nowrap;">' + esc(n.date) + '</span>' +
      '</span>' +
      '<span class="bcard-body" style="display:flex; align-items:center; gap:26px; padding:20px 24px; flex-wrap:wrap;">' +
        '<span style="flex:0 1 280px; min-width:0; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:23px; color:#fff; line-height:1.25;">' + esc(n.title) + '</span>' +
        '<span style="flex:1 1 300px; min-width:0; font-size:22px; color:#9fc4cd; font-family:\'VT323\',monospace; line-height:1.3;">' + esc(n.text) + '</span>' +
        '<span class="bcard-leer" style="flex:none; font-family:\'JetBrains Mono\',monospace; font-size:13px; font-weight:700; color:#050a0e; background:' + color + '; padding:9px 18px; box-shadow:3px 3px 0 rgba(0,0,0,0.4);">leer ▸</span>' +
      '</span>' +
    '</button>';
  }

  function renderGroups() {
    var items = news.map(blogCard).join('');
    var html = '' +
    '<div id="bitacora" style="scroll-margin-top:72px;">' +
      '<div style="font-family:\'JetBrains Mono\',monospace; font-size:16px; color:#1f8fa0; margin-bottom:6px;">aperture@lab:~$ <span style="color:#cfe8ec;">cat ./bitacora.log</span></div>' +
      '<h3 style="font-family:\'Press Start 2P\'; font-size:clamp(13px,2.4vw,20px); color:#29c5d6; margin:0 0 10px;">BITÁCORA</h3>' +
      '<p style="font-size:24px; color:#7fa2ac; margin:0 0 18px; font-family:\'VT323\',monospace;">El registro del semillero: anuncios, sesiones y avances del camino.</p>' +
      '<div style="display:flex; flex-direction:column; gap:16px;">' + items + '</div>' +
      '<div style="display:flex; justify-content:center; margin-top:26px;">' +
        '<button class="alllink" id="verRegistros" style="cursor:pointer; display:inline-flex; align-items:center; gap:8px; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:14px; letter-spacing:0.3px; color:#4fd6a0; border:2px solid #1f6f7c; background:#0a1622; padding:12px 22px; box-shadow:4px 4px 0 rgba(0,0,0,0.5);">ver todos los registros &#9656;</button>' +
      '</div>' +
    '</div>';
    $('groupsMount').innerHTML = html;
    Array.prototype.forEach.call(document.querySelectorAll('.bcard'), function (b) {
      b.addEventListener('click', function () { openNews(parseInt(b.getAttribute('data-news'), 10)); });
    });
    $('verRegistros').addEventListener('click', openArchive);
  }

  /* ---------- ARCHIVO (todos los registros) ---------- */
  function openArchive() {
    var rows = news.map(function (n, i) {
      var color = n.accent;
      return '' +
      '<button class="arcrow" data-news="' + i + '" style="cursor:pointer; text-align:left; width:100%; display:flex; align-items:center; gap:14px; flex-wrap:wrap; background:#070f18; border:2px solid #173241; border-left:6px solid ' + color + '; box-shadow:4px 4px 0 rgba(0,0,0,0.5); padding:14px 16px; transition:transform .1s, box-shadow .1s;">' +
        '<span style="font-family:\'JetBrains Mono\',monospace; font-size:11px; font-weight:700; color:#050a0e; background:' + color + '; padding:3px 9px;">' + esc(n.tag) + '</span>' +
        '<span style="flex:1 1 220px; min-width:0; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:18px; color:#fff;">' + esc(n.title) + '</span>' +
        '<span style="font-family:\'JetBrains Mono\',monospace; font-size:12px; color:' + color + '; border:1px solid ' + color + '; padding:2px 8px; white-space:nowrap;">' + esc(n.date) + '</span>' +
        '<span style="font-family:\'JetBrains Mono\',monospace; font-size:13px; font-weight:700; color:' + color + '; white-space:nowrap;">abrir &#9656;</span>' +
      '</button>';
    }).join('');
    var html = '' +
    '<div id="arcOverlay" style="position:fixed; inset:0; z-index:150; background:rgba(3,7,12,0.88); display:flex; align-items:flex-start; justify-content:center; padding:42px 18px; overflow-y:auto;">' +
      '<div id="arcCard" style="width:100%; max-width:760px; background:#0a1622; border:3px solid #29c5d6; box-shadow:10px 10px 0 rgba(0,0,0,0.55), 0 0 32px rgba(41,197,214,0.2); animation:popIn .2s ease;">' +
        '<div style="display:flex; gap:6px; align-items:center; padding:10px 14px; background:#070f18; border-bottom:2px solid #29c5d6;">' +
          '<span style="width:11px;height:11px;background:#157a87;border-radius:50%;"></span>' +
          '<span style="width:11px;height:11px;background:#1f8fa0;border-radius:50%;"></span>' +
          '<span style="width:11px;height:11px;background:#29c5d6;border-radius:50%;"></span>' +
          '<span style="font-size:14px; color:#5c7a86; margin-left:8px; font-family:\'JetBrains Mono\',monospace; flex:1;">aperture@lab:~$ ls ./bitacora/</span>' +
          '<button id="arcClose" style="cursor:pointer; background:transparent; border:2px solid #29c5d6; color:#29c5d6; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:13px; padding:3px 9px;">[ x ]</button>' +
        '</div>' +
        '<div style="padding:22px 24px;">' +
          '<h3 style="font-family:\'Press Start 2P\'; font-size:clamp(13px,2.4vw,18px); color:#29c5d6; margin:0 0 6px;">REGISTROS</h3>' +
          '<p style="font-size:20px; color:#7fa2ac; margin:0 0 18px; font-family:\'VT323\',monospace;">' + news.length + ' entradas en la bitácora del semillero.</p>' +
          '<div style="display:flex; flex-direction:column; gap:12px;">' + rows + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
    $('newsMount').innerHTML = html;
    $('arcOverlay').addEventListener('click', closeNews);
    $('arcCard').addEventListener('click', function (e) { e.stopPropagation(); });
    $('arcClose').addEventListener('click', closeNews);
    Array.prototype.forEach.call(document.querySelectorAll('.arcrow'), function (r) {
      r.addEventListener('click', function () { openNews(parseInt(r.getAttribute('data-news'), 10)); });
    });
  }

  /* ---------- SOCIALS ---------- */
  function renderSocials() {
    $('socialsMount').innerHTML = socials.map(function (s) {
      return '' +
      '<a class="social" href="' + s.url + '" target="_blank" rel="noopener" style="--glow:' + s.glow + '; text-decoration:none; display:flex; align-items:center; gap:15px; background:#0a1622; border:2px solid #173241; border-left:6px solid ' + s.accent + '; box-shadow:4px 4px 0 rgba(0,0,0,0.5); padding:17px 18px; transition:transform .1s, box-shadow .1s;">' +
        '<span style="font-family:\'Press Start 2P\'; font-size:17px; color:' + s.accent + '; min-width:34px;">' + esc(s.glyph) + '</span>' +
        '<span style="display:flex; flex-direction:column; gap:3px;">' +
          '<span style="font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:15px; color:#fff;">' + esc(s.label) + '</span>' +
          '<span style="font-family:\'JetBrains Mono\',monospace; font-size:14px; color:#9fc4cd;">' + esc(s.handle) + '</span>' +
        '</span>' +
      '</a>';
    }).join('');
  }

  /* ---------- CHART (barras horizontales) ---------- */
  function chartHtml(chart, color) {
    if (!chart || !chart.length) return '';
    var max = chart.reduce(function (m, r) { return Math.max(m, r.count); }, 0) || 1;
    var rows = chart.map(function (r) {
      var w = Math.round((r.count / max) * 100);
      return '' +
      '<div style="margin-bottom:13px;">' +
        '<div style="display:flex; justify-content:space-between; align-items:baseline; gap:10px; margin-bottom:4px;">' +
          '<span style="font-family:\'JetBrains Mono\',monospace; font-size:13px; color:#cfe8ec; line-height:1.25;">' + esc(r.label) + '</span>' +
          '<span style="flex:none; font-family:\'JetBrains Mono\',monospace; font-size:12px; font-weight:700; color:' + color + ';">' + r.count + ' · ' + r.pct + '%</span>' +
        '</div>' +
        '<div style="height:11px; background:#0a1622; border:1px solid #173241;">' +
          '<div style="height:100%; width:' + w + '%; background:' + color + '; box-shadow:0 0 10px ' + glowFor(color) + ';"></div>' +
        '</div>' +
      '</div>';
    }).join('');
    return '<div style="margin:4px 0 22px;">' + rows + '</div>';
  }

  /* ---------- NEWS MODAL ---------- */
  function openNews(i) {
    var n = news[i] || news[0];
    var color = n.accent;
    var html = '' +
    '<div id="newsOverlay" style="position:fixed; inset:0; z-index:150; background:rgba(3,7,12,0.85); display:flex; align-items:flex-start; justify-content:center; padding:42px 18px; overflow-y:auto;">' +
      '<div id="newsCard" style="width:100%; max-width:680px; background:#0a1622; border:3px solid ' + color + '; box-shadow:10px 10px 0 rgba(0,0,0,0.55), 0 0 32px rgba(51,201,214,0.2); animation:popIn .2s ease;">' +
        '<div style="display:flex; gap:6px; align-items:center; padding:10px 14px; background:#070f18; border-bottom:2px solid ' + color + ';">' +
          '<span style="width:11px;height:11px;background:#157a87;border-radius:50%;"></span>' +
          '<span style="width:11px;height:11px;background:#1f8fa0;border-radius:50%;"></span>' +
          '<span style="width:11px;height:11px;background:' + color + ';border-radius:50%;"></span>' +
          '<span style="font-size:14px; color:#5c7a86; margin-left:8px; font-family:\'JetBrains Mono\',monospace; flex:1;">' + esc(n.meta) + '</span>' +
          '<button id="newsClose" style="cursor:pointer; background:transparent; border:2px solid ' + color + '; color:' + color + '; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:13px; padding:3px 9px;">[ x ]</button>' +
        '</div>' +
        '<div style="padding:24px 26px;">' +
          '<div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; margin-bottom:16px;">' +
            '<span style="font-family:\'JetBrains Mono\',monospace; font-size:12px; font-weight:700; color:#050a0e; background:' + color + '; padding:3px 9px;">' + esc(n.tag) + '</span>' +
            '<span style="font-family:\'JetBrains Mono\',monospace; font-size:12px; color:' + color + '; border:1px solid ' + color + '; padding:2px 8px;">' + esc(n.date) + '</span>' +
          '</div>' +
          '<div style="font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:clamp(20px,3vw,26px); color:#fff; line-height:1.25; margin-bottom:16px;">' + esc(n.title) + '</div>' +
          '<p style="font-size:22px; line-height:1.45; color:#cfe8ec; margin:0 0 22px; font-family:\'VT323\',monospace;">' + esc(n.text) + '</p>' +
          chartHtml(n.chart, color) +
          (n.link ?
            '<a href="' + n.link.url + '" target="_blank" rel="noopener" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:14px; color:#050a0e; background:' + color + '; padding:10px 16px; box-shadow:4px 4px 0 rgba(0,0,0,0.4);">' + esc(n.link.label || 'abrir') + ' &#9656;</a>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
    $('newsMount').innerHTML = html;
    $('newsOverlay').addEventListener('click', closeNews);
    $('newsCard').addEventListener('click', function (e) { e.stopPropagation(); });
    $('newsClose').addEventListener('click', closeNews);
  }
  function closeNews() { $('newsMount').innerHTML = ''; }

  /* ---------- NAV ---------- */
  function initNav() {
    var open = false;
    var tabs = $('navtabs'), toggle = $('mobtoggle');
    toggle.addEventListener('click', function () {
      open = !open;
      tabs.classList.toggle('open', open);
      toggle.innerHTML = open ? '[ x ]' : '[ &#8801; ]';
    });
    $('goInicio').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-scroll]'), function (b) {
      b.addEventListener('click', function () {
        if (open) { open = false; tabs.classList.remove('open'); toggle.innerHTML = '[ &#8801; ]'; }
        scrollToId(b.getAttribute('data-scroll'));
      });
    });
  }

  /* ---------- BOOT TERMINAL ---------- */
  function startBoot(onDone) {
    var lines = 0, closing = false, timers = [];
    var mount = $('bootMount');
    function rowHtml(r) {
      return '<div style="display:flex; gap:16px; margin-bottom:10px; font-size:clamp(14px,2.2vw,20px); letter-spacing:0.5px; line-height:1.3; animation:rowIn .18s ease;">' +
        '<span style="flex:none; width:min(40vw,200px); color:#5c8a96;">' + esc(r.label) + '</span>' +
        '<span style="color:' + (r.accent ? '#29c5d6' : '#cfe8ec') + ';">' + esc(r.value) + '</span>' +
      '</div>';
    }
    function render() {
      var rows = bootRows.slice(0, lines).map(rowHtml).join('');
      mount.innerHTML = '' +
      '<div id="bootOverlay" style="position:fixed; inset:0; z-index:200; background:#050a0e; color:#29c5d6; font-family:\'JetBrains Mono\',monospace; cursor:pointer; overflow:hidden; transform-origin:center; animation:' + (closing ? 'crtOff 0.6s ease forwards' : 'none') + ';">' +
        '<div style="position:absolute; inset:0; pointer-events:none; background:repeating-linear-gradient(0deg, rgba(0,0,0,0.32) 0px, rgba(0,0,0,0.32) 1px, transparent 1px, transparent 3px);"></div>' +
        '<div style="position:absolute; left:0; right:0; height:90px; pointer-events:none; background:linear-gradient(180deg, transparent, rgba(41,197,214,0.06), transparent); animation:bootSweep 4s linear infinite;"></div>' +
        '<div style="height:100%; display:flex; align-items:center; padding:24px;">' +
          '<div style="width:100%; max-width:720px; margin:0 auto; animation:bootJitter 0.18s steps(2) infinite;">' +
            '<div style="display:flex; align-items:center; gap:14px; margin-bottom:26px; border-bottom:2px solid #173a44; padding-bottom:14px;">' +
              '<img src="assets/aperture-eye-cyan.png" alt="" style="width:42px; height:42px; object-fit:contain; animation:irisPulse 2.4s ease-in-out infinite;" />' +
              '<div style="font-size:clamp(15px,2.4vw,21px); letter-spacing:1px; color:#cfe8ec;">APERTURE // CALIBRANDO LENTE</div>' +
            '</div>' +
            rows +
            '<div style="margin-top:8px; font-size:clamp(14px,2.2vw,20px);"><span style="display:inline-block; width:11px; height:18px; background:#29c5d6; animation:blink 1s steps(1) infinite; vertical-align:-2px;"></span></div>' +
          '</div>' +
        '</div>' +
        '<div style="position:absolute; bottom:22px; right:26px; font-size:14px; color:#3f6470;">[ click para saltar ]</div>' +
      '</div>';
      var ov = $('bootOverlay');
      if (ov) ov.addEventListener('click', skip);
    }
    function finish() {
      mount.innerHTML = '';
      $('nav').style.animation = 'siteIn 0.6s ease';
      if (onDone) onDone();
    }
    function skip() {
      timers.forEach(clearTimeout); timers = [];
      closing = true; render();
      setTimeout(finish, 600);
    }
    render();
    bootRows.forEach(function (_, i) {
      timers.push(setTimeout(function () { lines = i + 1; render(); }, 380 + i * 420));
    });
    var done = 380 + bootRows.length * 420 + 500;
    timers.push(setTimeout(function () { closing = true; render(); }, done));
    timers.push(setTimeout(finish, done + 650));
  }

  /* ---------- MATRIX RAIN ---------- */
  function startMatrix() {
    var c = $('matrixRain');
    if (!c) return;
    var ctx = c.getContext('2d');
    var fs = 15, drops = [];
    function resize() {
      c.width = window.innerWidth; c.height = window.innerHeight;
      var cols = Math.floor(c.width / fs);
      drops = Array(cols).fill(0).map(function () { return Math.floor(Math.random() * -40); });
    }
    resize();
    window.addEventListener('resize', resize);
    var chars = '01<>{}[]()/\\=;:#$+*!?abcdef01'.split('');
    function draw() {
      ctx.fillStyle = 'rgba(5,10,14,0.09)';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.font = fs + 'px monospace';
      for (var i = 0; i < drops.length; i++) {
        var t = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() < 0.025 ? '#cfe8ec' : '#1f8fa0';
        ctx.fillText(t, i * fs, drops[i] * fs);
        if (drops[i] * fs > c.height && Math.random() > 0.972) drops[i] = 0;
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- NEURAL NET VIZ ---------- */
  function startNeuralNet() {
    var c = $('neuralNet');
    if (!c) return;
    var ctx = c.getContext('2d');
    var W = 0, H = 0;
    function resize() { W = c.width = (c.clientWidth || 800); H = c.height = (c.clientHeight || 320); }
    resize();
    window.addEventListener('resize', resize);

    var mono = "12px 'JetBrains Mono', monospace";
    var NB = 18, GX = 12, GY = 7;
    var clusters = (function () {
      var cols = ['#33c9d6', '#4fd6a0', '#f5b94d'];
      var pts = Array.from({ length: 34 }, function () {
        return { bx: 0.08 + Math.random() * 0.84, by: 0.08 + Math.random() * 0.84, ph: Math.random() * 6.28 };
      });
      var cents = cols.map(function (_, i) { return { ph: i * 2.1 }; });
      return { cols: cols, pts: pts, cents: cents };
    })();

    var frame = 0;
    function draw() {
      var t = frame / 60;
      ctx.clearRect(0, 0, W, H);
      var pad = 16, gap = 18, topPad = 30, botPad = 16;
      // En pantallas angostas las 3 gráficas se apilan (1 columna).
      // Mismo punto de quiebre que el CSS (#neuralNet en 620px).
      var cols = window.innerWidth <= 620 ? 1 : 3;
      var rows = Math.ceil(3 / cols);
      var pw = (W - pad * 2 - gap * (cols - 1)) / cols;
      var ph = (H - botPad - rows * topPad - (rows - 1) * gap) / rows;
      var P = [0, 1, 2].map(function (i) {
        var col = i % cols, row = Math.floor(i / cols);
        return { x: pad + col * (pw + gap), y: topPad + row * (topPad + ph + gap), w: pw, h: ph };
      });
      var titles = ['distribución · gaussiana', 'clustering · k-means', 'gpu · kernels'];
      var tcol = ['#33c9d6', '#4fd6a0', '#f5b94d'];
      P.forEach(function (p, i) {
        ctx.strokeStyle = 'rgba(31,143,160,0.30)'; ctx.lineWidth = 1;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
        ctx.fillStyle = tcol[i]; ctx.font = mono;
        ctx.fillText(titles[i], p.x + 1, p.y - 9);
      });

      // Panel 0 — breathing gaussian histogram
      (function () {
        var p = P[0];
        var mean = (NB - 1) / 2 + Math.sin(t * 0.6) * 2.4;
        var sd = 3 + Math.sin(t * 0.9) * 0.8;
        var bw = p.w / NB;
        var peak = 0, hs = [];
        for (var k = 0; k < NB; k++) { var z = (k - mean) / sd; var v = Math.exp(-0.5 * z * z) * (0.85 + 0.25 * Math.sin(t * 2 + k * 0.7)); hs.push(v); if (v > peak) peak = v; }
        for (var k2 = 0; k2 < NB; k2++) {
          var bh = (hs[k2] / peak) * (p.h - 12);
          var bx = p.x + k2 * bw + 1.5, by = p.y + p.h - bh;
          ctx.fillStyle = 'rgba(51,201,214,0.85)';
          ctx.fillRect(bx, by, bw - 3, bh);
        }
        ctx.strokeStyle = '#cfe8ec'; ctx.lineWidth = 1.6; ctx.beginPath();
        for (var xx = 0; xx <= p.w; xx += 3) { var k3 = xx / bw; var z3 = (k3 - mean) / sd; var v3 = Math.exp(-0.5 * z3 * z3); var yy = p.y + p.h - v3 * (p.h - 12); if (xx === 0) ctx.moveTo(p.x + xx, yy); else ctx.lineTo(p.x + xx, yy); }
        ctx.stroke();
      })();

      // Panel 1 — live clustering
      (function () {
        var p = P[1];
        var ix = p.x + 14, iy = p.y + 12, iw = p.w - 28, ih = p.h - 24;
        var CX = function (fx) { return ix + fx * iw; }, CY = function (fy) { return iy + fy * ih; };
        var cpos = clusters.cents.map(function (cc) {
          return { fx: 0.5 + 0.30 * Math.cos(t * 0.45 + cc.ph), fy: 0.5 + 0.27 * Math.sin(t * 0.38 + cc.ph * 1.4) };
        });
        clusters.pts.forEach(function (pt) {
          var fx = pt.bx + 0.014 * Math.cos(t * 1.3 + pt.ph);
          var fy = pt.by + 0.014 * Math.sin(t * 1.1 + pt.ph);
          var best = 0, bd = 1e9;
          for (var k = 0; k < cpos.length; k++) {
            var dx = fx - cpos[k].fx, dy = fy - cpos[k].fy, d = dx * dx + dy * dy;
            if (d < bd) { bd = d; best = k; }
          }
          var col = clusters.cols[best];
          var x = CX(fx), y = CY(fy), mx = CX(cpos[best].fx), my = CY(cpos[best].fy);
          ctx.strokeStyle = col; ctx.globalAlpha = 0.22; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(mx, my); ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.fillStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 6;
          ctx.beginPath(); ctx.arc(x, y, 2.8, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
        });
        cpos.forEach(function (cp, k) {
          var col = clusters.cols[k], x = CX(cp.fx), y = CY(cp.fy);
          var pr = 9 + Math.sin(t * 2 + k) * 2.2;
          ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.shadowColor = col; ctx.shadowBlur = 15;
          ctx.beginPath(); ctx.arc(x, y, pr, 0, Math.PI * 2); ctx.stroke();
          ctx.fillStyle = col;
          ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        });
      })();

      // Panel 2 — GPU kernel grid
      (function () {
        var p = P[2];
        var cw = (p.w - 6) / GX, ch = (p.h - 6) / GY;
        for (var gy = 0; gy < GY; gy++) for (var gx = 0; gx < GX; gx++) {
          var v = 0.5 + 0.5 * Math.sin(t * 3 - (gx + gy) * 0.5);
          var cx = p.x + 3 + gx * cw, cy = p.y + 3 + gy * ch;
          if (v > 0.62) { ctx.fillStyle = 'rgba(245,185,77,' + (0.35 + 0.55 * v).toFixed(2) + ')'; ctx.shadowColor = '#f5b94d'; ctx.shadowBlur = 9 * v; }
          else { ctx.fillStyle = 'rgba(199,155,255,0.16)'; ctx.shadowBlur = 0; }
          ctx.fillRect(cx + 1, cy + 1, cw - 3, ch - 3);
          ctx.shadowBlur = 0;
        }
      })();

      frame++;
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- INIT ---------- */
  function init() {
    applySite();
    renderGroups();
    renderSocials();
    initNav();
    startMatrix();
    startNeuralNet();
    startBoot();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
