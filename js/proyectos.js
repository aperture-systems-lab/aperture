(function () {
  "use strict";

  var DATA = window.APERTURE_DATA || {};
  var projects = DATA.projects || [];
  var site = DATA.site || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function $(id) { return document.getElementById(id); }
  function setText(id, txt) { var el = $(id); if (el && txt != null) el.textContent = txt; }

  function applyPage() {
    if (site.projectsTitle) {
      document.title = 'Aperture · ' + site.projectsTitle.charAt(0) + site.projectsTitle.slice(1).toLowerCase();
      setText('pjTitle', site.projectsTitle);
    }
    setText('pjText', site.projectsText);
    setText('pjCount', projects.length + (projects.length === 1 ? ' proyecto' : ' proyectos'));
  }

  function projectTags(p, size) {
    return (p.tags || []).map(function (t) {
      return '<span style="flex:1 1 auto; text-align:center; font-family:\'JetBrains Mono\',monospace; font-size:' + size +
        'px; color:' + p.accent + '; border:1px solid #1f4b54; background:#0a1622; padding:9px 14px;">' + esc(t) + '</span>';
    }).join('');
  }

  function projectBrand(p, tam) {
    if (p.brand) return p.brand;
    return '<span style="font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:' + tam +
      '; color:' + p.accent + ';">' + esc(p.name) + '</span>';
  }

  function projectPanel(p) {
    var claves = (p.highlights || []).map(function (h) {
      return '<li style="display:flex; gap:10px; align-items:flex-start; font-family:\'JetBrains Mono\',monospace; ' +
        'font-size:14px; line-height:1.5; color:#cfe8ec; margin-bottom:10px;">' +
        '<span style="color:' + p.accent + '; font-weight:700;">&#9656;</span><span>' + esc(h) + '</span></li>';
    }).join('');

    var video = p.video
      ? '<div class="videoframe" style="border:2px solid ' + p.accent + '; background:#04080c;">' +
          '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(p.video) + '" title="' + esc(p.name) + '" ' +
          'allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
          'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>' +
        '</div>' +
        '<div style="font-family:\'JetBrains Mono\',monospace; font-size:12px; color:#5c7a86; margin-top:9px;">' +
          '&#9654; presentación del proyecto</div>'
      : '';

    var enlaces = (p.links || []).map(function (l) {
      var fondo = l.primary ? p.accent : '#0a1622';
      var color = l.primary ? '#050a0e' : p.accent;
      return '<a class="pjlink" href="' + esc(l.url) + '" target="_blank" rel="noopener" style="--glow:' + p.glow +
        '; text-decoration:none; font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:13px; color:' + color +
        '; background:' + fondo + '; border:2px solid ' + p.accent + '; padding:12px 18px; ' +
        'box-shadow:4px 4px 0 rgba(0,0,0,0.5); transition:transform .12s, box-shadow .12s;">' + esc(l.text) + ' &#9656;</a>';
    }).join('');

    var info = '' +
      '<div>' +
        '<div style="margin-bottom:14px;">' + projectBrand(p, 'clamp(30px,6vw,46px)') + '</div>' +
        '<h2 style="font-family:\'JetBrains Mono\',monospace; font-weight:700; font-size:clamp(16px,2.6vw,20px); ' +
          'color:#fff; line-height:1.35; margin:0 0 14px;">' + esc(p.title) + '</h2>' +
        '<p style="font-size:23px; line-height:1.35; color:#9fc4cd; margin:0 0 20px; font-family:\'VT323\',monospace;">' +
          '<span style="color:' + p.accent + ';">//</span> ' + esc(p.description) + '</p>' +
        (claves ? '<ul style="list-style:none; margin:0; padding:0;">' + claves + '</ul>' : '') +
      '</div>';

    var autores = (p.authors || []).length
      ? '<div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">' +
          '<span style="font-family:\'JetBrains Mono\',monospace; font-size:11px; letter-spacing:0.7px; ' +
            'text-transform:uppercase; color:#5c7a86;">equipo</span>' +
          '<span style="font-family:\'JetBrains Mono\',monospace; font-size:13px; color:#9fc4cd;">' +
            p.authors.map(esc).join('<span style="color:' + p.accent + ';"> &middot; </span>') +
          '</span>' +
        '</div>'
      : '';

    var media = '' +
      '<div>' +
        video +
        '<div style="display:flex; flex-wrap:wrap; gap:9px; margin-top:' + (video ? '18px' : '0') + ';">' +
          projectTags(p, 14) + '</div>' +
      '</div>';

    return '' +
    '<article id="proyecto-' + esc(p.key) + '" style="--acento:' + p.accent + '; scroll-margin-top:76px; background:#070f18; ' +
      'border:2px solid #173241; box-shadow:8px 8px 0 rgba(0,0,0,0.5);">' +
      '<div style="display:flex; gap:6px; align-items:center; padding:10px 14px; background:#0a1622; border-bottom:2px solid ' + p.accent + ';">' +
        '<span style="width:11px;height:11px;background:#157a87;"></span>' +
        '<span style="width:11px;height:11px;background:#1f8fa0;"></span>' +
        '<span style="width:11px;height:11px;background:' + p.accent + ';"></span>' +
        '<span style="font-size:13px; color:#5c7a86; margin-left:8px; font-family:\'JetBrains Mono\',monospace; flex:1; ' +
          'white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">~/proyectos/' + esc(p.key) + '</span>' +
        (p.period ? '<span class="pjperiodo" style="font-size:12px; color:#5c7a86; font-family:\'JetBrains Mono\',monospace; white-space:nowrap;">' + esc(p.period) + '</span>' : '') +
        (p.status ? '<span style="font-size:12px; color:' + p.accent + '; font-family:\'JetBrains Mono\',monospace; white-space:nowrap;">&#9679; ' + esc(p.status) + '</span>' : '') +
      '</div>' +
      '<div class="' + (video ? 'pjgrid' : '') + '" style="padding:26px 24px;">' +
        info +
        media +
      '</div>' +
      (enlaces || autores
        ? '<div style="display:flex; align-items:center; justify-content:space-between; gap:18px 28px; flex-wrap:wrap; ' +
            'padding:18px 24px; border-top:2px solid #173241; background:#0a1622;">' +
            (enlaces ? '<div style="display:flex; flex-wrap:wrap; gap:12px;">' + enlaces + '</div>' : '') +
            autores +
          '</div>'
        : '') +
    '</article>';
  }

  function renderProjects() {
    var mount = $('projectsMount');
    if (!mount) return;
    if (!projects.length) {
      mount.innerHTML = '<div style="font-family:\'JetBrains Mono\',monospace; font-size:15px; color:#5c7a86; ' +
        'border:2px dashed #173241; padding:26px 20px;">aperture@lab:~$ ls ./proyectos/ &rarr; todavía no hay nada por aquí.</div>';
      return;
    }
    mount.innerHTML = '<div style="display:flex; flex-direction:column; gap:26px;">' +
      projects.map(projectPanel).join('') + '</div>';
  }

  function initNav() {
    var open = false;
    var tabs = $('navtabs'), toggle = $('mobtoggle');
    if (!tabs || !toggle) return;
    toggle.addEventListener('click', function () {
      open = !open;
      tabs.classList.toggle('open', open);
      toggle.innerHTML = open ? '[ x ]' : '[ &#8801; ]';
    });
  }

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

  function init() {
    applyPage();
    renderProjects();
    initNav();
    startMatrix();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
