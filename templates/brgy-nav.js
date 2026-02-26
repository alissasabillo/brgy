(function () {

  const SPOTS = [
    {
      x: 12, y: 45, cardDir: 'right',
      imgDefault: 'YOUR-START-DEFAULT.png',
      imgHover:   'YOUR-START-HOVER.png',
      name: 'Start', icon: '❁',
      items: [
        { label: '❁ Back to Start', href: '/' }
      ]
    },
    {
      x: 32, y: 30, cardDir: 'up',
      imgDefault: 'YOUR-FOLIO-DEFAULT.png',
      imgHover:   'YOUR-FOLIO-HOVER.png',
      name: 'S + A Folio', icon: '❦',
      items: [
        { label: '❦ Sabillofolio 1', href: '/folio/sabillo-1' },
        { label: '❦ Sabillofolio 2', href: '/folio/sabillo-2' },
        { label: '❦ Sabillofolio 3', href: '/folio/sabillo-3' },
        { label: '❦ Sabillofolio 4', href: '/folio/sabillo-4' },
        { label: '❦ Sabillofolio 5', href: '/folio/sabillo-5' },
        null,
        { label: '❦ Alissafolio 1', href: '/folio/alissa-1' },
        { label: '❦ Alissafolio 2', href: '/folio/alissa-2' }
      ]
    },
    {
      x: 50, y: 22, cardDir: 'up',
      imgDefault: 'YOUR-SOLUTIONS-DEFAULT.png',
      imgHover:   'YOUR-SOLUTIONS-HOVER.png',
      name: 'All Solutions', icon: '☙',
      items: [
        { label: '☙ Solutions',      href: '/solutions' },
        null,
        { label: '☙ Licensing Soon', href: '/licensing' }
      ]
    },
    {
      x: 38, y: 60, cardDir: 'up',
      imgDefault: 'YOUR-ALISSATOPIA-DEFAULT.png',
      imgHover:   'YOUR-ALISSATOPIA-HOVER.png',
      name: 'Alissatopia + Support', icon: '❀',
      items: [
        { label: '❀ All Feed',               href: '/alissatopia/feed' },
        { label: '❀ Video Library',           href: '/alissatopia/videos' },
        null,
        { label: '❀ Perks — Quick Features', href: '/alissatopia/perks-quick' },
        { label: '❀ Perks — Full List',       href: '/alissatopia/perks-full' },
        { label: '❀ Rules + Guidelines',      href: '/alissatopia/rules' },
      
      ]
    },
    {
      x: 60, y: 55, cardDir: 'up',
      imgDefault: 'YOUR-SARISARI-DEFAULT.png',
      imgHover:   'YOUR-SARISARI-HOVER.png',
      name: 'Sari-Sari Stores', icon: '❧',
      items: [
        { label: '❧ Store',         href: '/sari-sari/store' },
        null,
        { label: '❧ Comics',        href: '/sari-sari/comics' },
        { label: '❧ Digital Goods', href: '/sari-sari/digital' }
      ]
    },
    {
      x: 74, y: 38, cardDir: 'up',
      imgDefault: 'YOUR-BLOG-DEFAULT.png',
      imgHover:   'YOUR-BLOG-HOVER.png',
      name: 'Support + Blog', icon: '✾',
      items: [
        { label: "✾ Alissa's Blog Soon",       href: '/blog' },
        { label: '✾ Fund A Cause Together',       href: '/blog' },
        null,
        { label: '✾ Events + Presence', href: '/events' },
        null,
        { label: '✾ Resources',         href: '/resources' },
        { label: '✾ Digital Freebies',  href: '/freebies' },
        { label: '✾ Guestbook',         href: '/guestbook' }
      ]
    },
    {
      x: 86, y: 55, cardDir: 'left',
      imgDefault: 'YOUR-ABOUT-DEFAULT.png',
      imgHover:   'YOUR-ABOUT-HOVER.png',
      name: 'About + Say Hello', icon: '✿',
      items: [
        { label: '✿ Say Hi + Check My Time',     href: '/say-hi' },
        { label: '✿ Creative Code + Work FAQs',  href: '/faq' },
        { label: '✿ Newsletter',                  href: '/newsletter' },
        { label: '✿ All Links + Socials',         href: '/links' },
        null,
        { label: '✿ About Alissa + Creator Kit', href: '/about' },
        { label: '✿ Ayo + Check My Time',         href: '/ayo' },
        { label: '✿ Press + Praise',              href: '/press' },
        { label: '✿ CV — Soon',                   href: '/cv' },
        null,
        { label: '✿ Alissa IRL',    href: '/irl' },
        { label: '✿ Meet the Team', href: '/team' }
      ]
    }
  ];

  const MOBILE_POS = [
    { mx: 22, my: 10 },
    { mx: 68, my: 22 },
    { mx: 35, my: 36 },
    { mx: 75, my: 49 },
    { mx: 22, my: 62 },
    { mx: 65, my: 74 },
    { mx: 38, my: 87 }
  ];

  function render() {
    const layer = document.getElementById('bs-hs');
    const root  = document.getElementById('bs');
    if (!layer || !root) return;

    const backdrop = document.createElement('div');
    backdrop.id = 'bs-sheet-backdrop';
    root.appendChild(backdrop);

    const sheet = document.createElement('div');
    sheet.id = 'bs-sheet';
    sheet.innerHTML = `
      <div id="bs-sheet-handle"></div>
      <div id="bs-sheet-title">
        <span id="bs-sheet-title-fl"></span>
        <span id="bs-sheet-title-name"></span>
      </div>
      <div id="bs-sheet-body"></div>
    `;
    root.appendChild(sheet);

    const sheetTitleFl   = document.getElementById('bs-sheet-title-fl');
    const sheetTitleName = document.getElementById('bs-sheet-title-name');
    const sheetBody      = document.getElementById('bs-sheet-body');

    function buildItems(container, items) {
      items.forEach(item => {
        if (item === null) {
          const d = document.createElement('div');
          d.className = 'hs-div';
          container.appendChild(d);
        } else {
          const a = document.createElement('a');
          a.href = item.href;
          a.textContent = item.label;
          container.appendChild(a);
        }
      });
    }

    function openSheet(sp) {
      sheetTitleFl.textContent   = sp.icon;
      sheetTitleName.textContent = sp.name;
      sheetBody.innerHTML = '';
      buildItems(sheetBody, sp.items);
      sheetBody.scrollTop = 0;
      backdrop.classList.add('on');
      sheet.classList.add('on');
    }

    function closeSheet() {
      backdrop.classList.remove('on');
      sheet.classList.remove('on');
      document.querySelectorAll('.hs.active').forEach(h => h.classList.remove('active'));
    }

    backdrop.addEventListener('click', closeSheet);

    let isTouchDevice = false;
    document.addEventListener('touchstart', function onFirstTouch() {
      isTouchDevice = true;
      document.documentElement.classList.add('is-touch');
      document.removeEventListener('touchstart', onFirstTouch);
      applyPositions();
    }, { passive: true });

    SPOTS.forEach((sp, i) => {
      const mp = MOBILE_POS[i];
      const spot = document.createElement('div');
      spot.className = 'hs'
        + (sp.cardDir === 'right' ? ' card-right' : '')
        + (sp.cardDir === 'left'  ? ' card-left'  : '');
      spot.dataset.mx = mp.mx;
      spot.dataset.my = mp.my;
      spot.dataset.dx = sp.x;
      spot.dataset.dy = sp.y;

      const card = document.createElement('div');
      card.className = 'hs-card';
      card.innerHTML = `<div class="hs-ch"><span class="hs-ch-fl">${sp.icon}</span><span class="hs-ch-title">${sp.name}</span></div>`;
      buildItems(card, sp.items);

      const body = document.createElement('div'); body.className = 'hs-body';
      const ring = document.createElement('div'); ring.className = 'hs-ring';
      ring.style.animationDelay = `${i * 0.4}s`;
      const dot  = document.createElement('div'); dot.className  = 'hs-dot';

      const imgD = document.createElement('img');
      imgD.className = 'hs-img-default';
      imgD.src = sp.imgDefault; imgD.alt = sp.name; imgD.loading = 'lazy';

      const imgH = document.createElement('img');
      imgH.className = 'hs-img-hover';
      imgH.src = sp.imgHover; imgH.alt = ''; imgH.loading = 'lazy';

      dot.appendChild(imgD); dot.appendChild(imgH);
      body.appendChild(ring); body.appendChild(dot);
      spot.appendChild(card); spot.appendChild(body);
      layer.appendChild(spot);

      spot.addEventListener('touchstart', e => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.hs.active').forEach(h => h.classList.remove('active'));
        spot.classList.add('active');
        openSheet(sp);
      }, { passive: false });
    });

    function applyPositions() {
      document.querySelectorAll('.hs').forEach(s => {
        s.style.left = (isTouchDevice ? s.dataset.mx : s.dataset.dx) + '%';
        s.style.top  = (isTouchDevice ? s.dataset.my : s.dataset.dy) + '%';
      });
    }
    applyPositions();
    window.addEventListener('resize', applyPositions);

    const foot = document.getElementById('bs-foot-txt');
    if (foot) foot.textContent = ('❁ ❦ ☙ ❀ ❧ ✾ ✿ · ').repeat(14);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
