/* =====================================================
   EDIT ALL CONTENT HERE
   ===================================================== */
const CONFIG = {
  serverName: "Your Realm Name Here", // CHANGE THIS
  serverVersion: "Minecraft Version: 1.21.x", // CHANGE THIS
  joinLink: "#", // CHANGE THIS TO YOUR REAL LINK
  heroText:
    "Welcome to our realm — a place for big builds, relaxed survival, community events, exploration, and chaotic late-night ideas that somehow become full projects.",

  randomTips: [
    "Bring extra food before exploring. Someone always gets lost.",
    "Check the community board before starting a huge build near spawn.",
    "Label your chests. Future you will be grateful.",
    "Sleep early during resource runs unless chaos is the plan.",
    "Keep a backup pickaxe. Trust me."
  ],

  galleryPhotos: [
    {
      title: "Spawn Hub",
      description: "A warm first look at the server with pathways, signs, and a welcoming build style.",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=1200&q=80",
      alt: "Minecraft-style forest landscape"
    },
    {
      title: "Community Town",
      description: "Show your main streets, shops, storage area, and any town center landmarks here.",
      image: "https://images.unsplash.com/photo-1627855435405-bf0b2adf13c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Blocky landscape and hills"
    },
    {
      title: "Mega Build Zone",
      description: "Perfect spot for your biggest project, castle, base, monument, or city progress shots.",
      image: "https://images.unsplash.com/photo-1622495890500-bbe37fc66516?auto=format&fit=crop&w=1200&q=80",
      alt: "Mountain valley inspired gaming environment"
    },
    {
      title: "Farms & Redstone",
      description: "Use this card for your auto farms, sorting systems, or other smart survival setups.",
      image: "https://images.unsplash.com/photo-1632932197818-6e6b0daddc1f?auto=format&fit=crop&w=1200&q=80",
      alt: "Creative game scene with warm light"
    },
    {
      title: "Nether Route",
      description: "Show off your safe tunnels, portals, highway system, or dramatic lava-side builds.",
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=1200&q=80",
      alt: "Dark fantasy style game scene"
    },
    {
      title: "Event Arena",
      description: "Great for PvP arenas, race tracks, mini-games, or seasonal community competitions.",
      image: "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?auto=format&fit=crop&w=1200&q=80",
      alt: "Arena style game environment"
    },
    {
      title: "Nature District",
      description: "A calmer area for scenic builds, cabins, bridges, and landscaping work.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      alt: "Green hills and open space"
    },
    {
      title: "Underground Base",
      description: "Perfect for cave systems, underground halls, secret rooms, or mining headquarters.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      alt: "Moody cave scene"
    },
    {
      title: "Ocean Project",
      description: "Use this one for harbors, sea temples, ocean bases, or giant bridge screenshots.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      alt: "Ocean and sky view"
    },
    {
      title: "Member Showcase",
      description: "Highlight a member build, collab project, or a fun moment from the community.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset landscape"
    }
  ],

  realmInfo: [
    {
      title: "Server Specs",
      content: `
        <p><strong>Edit this block with your own server specs.</strong></p>
        <ul>
          <li>Host / platform: write it here</li>
          <li>Region / ping notes: write it here</li>
          <li>Player capacity: write it here</li>
          <li>Difficulty / gameplay style: write it here</li>
          <li>Backup or reset policy: write it here</li>
        </ul>
      `
    },
    {
      title: "Update Path",
      nested: [
        {
          title: "Current Version",
          content: "Write the current version details here. Example: Running 1.21.x with plans to update after testing mod compatibility."
        },
        {
          title: "Planned Features",
          content: "Write the next planned changes here. Example: new district, spawn update, more events, better member transport, or economy tweaks."
        },
        {
          title: "Past Major Updates",
          content: "Write your update history here. Example: Season launch, map expansion, new shopping district, boss arena release, performance cleanup."
        }
      ]
    },
    {
      title: "Mod Info",
      nested: [
        {
          title: "Required Mods",
          content: "List any mods or client-side requirements here. Example: None required / Fabric loader / performance mods allowed / shader optional."
        },
        {
          title: "Quality of Life Mods",
          content: "Write your approved quality-of-life mods here. Example: map, voice chat, inventory sorting, minimap, shaders, replay tools."
        },
        {
          title: "Rules on Mods",
          content: "Write server rules about mods here. Example: no unfair combat mods, x-ray banned, automation limits, ask admins before adding tools."
        }
      ]
    },
    {
      title: "Admin and Member",
      nested: [
        {
          title: "Admins",
          content: "Add the admin list here with roles. Example: Owner, builder lead, event host, technical admin, moderation support."
        },
        {
          title: "Members",
          content: "Add member info here. Example: active players, builders, redstone players, explorers, casual members, event regulars."
        },
        {
          title: "How to Join",
          content: "Explain your join process here. Example: invited by admin, application form, Discord intro, read rules, then receive realm link."
        }
      ]
    }
  ],

  faq: [
    {
      question: "How do I join the realm?",
      answer: "Replace this answer with your real process. Example: click the join link, message an admin, and read the rules before entering the main area."
    },
    {
      question: "What version do I need?",
      answer: "Replace this answer with the exact version number and any mod loader details if needed."
    },
    {
      question: "Are mods allowed?",
      answer: "Write your mod policy here. Example: client-side visual mods allowed, anything unfair or exploit-based is not allowed."
    },
    {
      question: "Can I build anywhere?",
      answer: "Write your building rules here. Example: ask before building near spawn, leave room around other projects, and label shared structures."
    },
    {
      question: "What happens if I go inactive?",
      answer: "Write your inactivity rules here. Example: totally fine for casual members, but abandoned areas may be cleaned up after a long time if needed."
    },
    {
      question: "Is PvP on?",
      answer: "Write your PvP policy here. Example: only in event zones or with mutual agreement."
    }
  ],

  socials: [
    {
      name: "YouTube",
      short: "YT",
      subtext: "Videos, tours, updates",
      link: "#"
    },
    {
      name: "Discord",
      short: "DC",
      subtext: "Community chat, announcements",
      link: "#"
    },
    {
      name: "Roblox",
      short: "RB",
      subtext: "Extra community link",
      link: "#"
    }
  ],

  aboutStory: [
    "What started as a small survival world slowly turned into a shared place full of personal builds, weird plans, accidental disasters, and long-term projects that kept getting bigger. Over time, the realm became more than just a server — it became a place where different play styles could meet, from builders and explorers to farmers, redstone tinkerers, collectors, and event-loving chaos gremlins.",
    "We like keeping the world active, creative, and welcoming. Some days are calm and focused on progress, while others turn into giant group missions, late-night mining runs, or spontaneous base tours. The goal is simple: make the realm feel alive, keep the community fun, and always leave room for the next big idea."
  ],

  aboutSideText:
    "We enjoy community projects, memorable survival moments, creative builds, structured progression, and making the realm feel like a world with its own history.",

  tags: ["Survival", "Community", "Events", "Mega Builds", "Exploration", "Friendly Chaos"]
};

/* =====================================================
   COMMON HELPERS
   ===================================================== */
function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-tab').forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
  });
}

function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navTabs = document.getElementById('navTabs');
  if (!menuToggle || !navTabs) return;
  menuToggle.addEventListener('click', () => navTabs.classList.toggle('open'));
}

function fillCommonContent() {
  document.querySelectorAll('.js-server-name').forEach(el => el.textContent = CONFIG.serverName);
  document.querySelectorAll('.js-server-version').forEach(el => el.textContent = CONFIG.serverVersion);
  const joinButton = document.getElementById('joinButton');
  if (joinButton) joinButton.href = CONFIG.joinLink;
}

function createAccordionItem(title, innerHTML, extraClass = '') {
  const wrapper = document.createElement('div');
  wrapper.className = `accordion-item ${extraClass}`.trim();
  wrapper.innerHTML = `
    <button class="accordion-trigger" type="button">
      <span>${title}</span>
      <span>+</span>
    </button>
    <div class="accordion-content">
      <div class="accordion-inner">${innerHTML}</div>
    </div>
  `;
  return wrapper;
}

function enableAccordions(scope = document) {
  scope.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    if (!trigger || !content || trigger.dataset.bound === 'true') return;
    trigger.dataset.bound = 'true';
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
      setTimeout(() => {
        if (!isOpen) content.style.maxHeight = content.scrollHeight + 'px';
      }, 220);
    });
  });
}

function setupFloatingPixels() {
  const floatingPixels = document.getElementById('floatingPixels');
  if (!floatingPixels) return;
  const pixelColors = ['#A98B76', '#BFA28C', '#BABF94', '#F3E4C9'];
  for (let i = 0; i < 28; i++) {
    const pixel = document.createElement('span');
    pixel.className = 'pixel';
    pixel.style.left = Math.random() * 100 + 'vw';
    pixel.style.bottom = Math.random() * 100 + 'vh';
    pixel.style.background = pixelColors[i % pixelColors.length];
    pixel.style.animationDuration = (14 + Math.random() * 18) + 's';
    pixel.style.animationDelay = (-Math.random() * 14) + 's';
    pixel.style.opacity = (0.12 + Math.random() * 0.18).toFixed(2);
    pixel.style.width = pixel.style.height = (7 + Math.random() * 10) + 'px';
    floatingPixels.appendChild(pixel);
  }
}

function setupSparkles() {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('button, a, .gallery-card, .info-card, .faq-card, .social-card')) return;
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.clientX - 6 + 'px';
    sparkle.style.top = e.clientY - 6 + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 650);
  });
}

function setupHeroMotion() {
  const heroCard = document.getElementById('heroCard');
  if (!heroCard) return;
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    heroCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  });
}

/* =====================================================
   PAGE BUILDERS
   ===================================================== */
function buildHomePage() {
  const serverName = document.getElementById('serverName');
  const serverVersion = document.getElementById('serverVersion');
  const heroText = document.getElementById('heroText');
  const galleryGrid = document.getElementById('galleryGrid');
  const randomTipButton = document.getElementById('randomTipButton');

  if (serverName) serverName.textContent = CONFIG.serverName;
  if (serverVersion) serverVersion.textContent = CONFIG.serverVersion;
  if (heroText) heroText.textContent = CONFIG.heroText;

  if (galleryGrid) {
    CONFIG.galleryPhotos.forEach((photo, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.innerHTML = `
        <div class="gallery-image">
          <img src="${photo.image}" alt="${photo.alt}">
          <div class="photo-label">Photo ${index + 1}</div>
        </div>
        <div class="gallery-copy">
          <h3>${photo.title}</h3>
          <p>${photo.description}</p>
        </div>
      `;
      galleryGrid.appendChild(card);
    });
  }

  if (randomTipButton) {
    randomTipButton.addEventListener('click', () => {
      const tip = CONFIG.randomTips[Math.floor(Math.random() * CONFIG.randomTips.length)];
      randomTipButton.textContent = tip;
      setTimeout(() => {
        randomTipButton.textContent = 'Show a Random Realm Tip';
      }, 3500);
    });
  }
}

function buildRealmInfoPage() {
  const container = document.getElementById('realmInfoAccordion');
  if (!container) return;

  CONFIG.realmInfo.forEach(section => {
    let contentHTML = '';

    if (section.nested) {
      contentHTML = '<div class="nested-list">';
      section.nested.forEach(nested => {
        contentHTML += `
          <div class="accordion-item nested-card">
            <button class="accordion-trigger" type="button">
              <span>${nested.title}</span>
              <span>+</span>
            </button>
            <div class="accordion-content">
              <div class="accordion-inner">${nested.content}</div>
            </div>
          </div>
        `;
      });
      contentHTML += '</div>';
    } else {
      contentHTML = section.content;
    }

    const item = createAccordionItem(section.title, contentHTML, 'info-card');
    container.appendChild(item);
  });

  enableAccordions(document);
}

function buildFaqPage() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  CONFIG.faq.forEach(entry => {
    const item = createAccordionItem(entry.question, `<p>${entry.answer}</p>`, 'faq-card');
    container.appendChild(item);
  });

  enableAccordions(document);
}

function buildAboutPage() {
  const socialLinks = document.getElementById('socialLinks');
  const aboutStory = document.getElementById('aboutStory');
  const aboutSideText = document.getElementById('aboutSideText');
  const tagList = document.getElementById('tagList');

  if (socialLinks) {
    CONFIG.socials.forEach(item => {
      const link = document.createElement('a');
      link.className = 'social-card';
      link.href = item.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `
        <div class="social-icon">${item.short}</div>
        <div>
          <strong>${item.name}</strong>
          <span>${item.subtext}</span>
        </div>
      `;
      socialLinks.appendChild(link);
    });
  }

  if (aboutStory) {
    CONFIG.aboutStory.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      aboutStory.appendChild(p);
    });
  }

  if (aboutSideText) aboutSideText.textContent = CONFIG.aboutSideText;

  if (tagList) {
    CONFIG.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagList.appendChild(span);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setupMenu();
  fillCommonContent();
  setupFloatingPixels();
  setupSparkles();
  setupHeroMotion();

  const page = document.body.dataset.page;
  if (page === 'home') buildHomePage();
  if (page === 'realm-info') buildRealmInfoPage();
  if (page === 'faq') buildFaqPage();
  if (page === 'about-us') buildAboutPage();
});
