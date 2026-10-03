document.addEventListener("DOMContentLoaded", () => {

  const DB_KEY = "cardUniverseDatabase";
  const SESSION_KEY = "cardUniverseUser";

  const DEFAULT_ACCOUNTS = {
    admin: {
      username: "admin",
      password: "tsundere123",
      role: "admin",
      points: 10000,
      inventory: {},
      history: []
    },

    juan: {
      username: "juan",
      password: "juan123",
      role: "player",
      points: 5000,
      inventory: {},
      history: []
    },

    pedro: {
      username: "pedro",
      password: "pedro123",
      role: "player",
      points: 5000,
      inventory: {},
      history: []
    },

    ana: {
      username: "ana",
      password: "ana123",
      role: "player",
      points: 5000,
      inventory: {},
      history: []
    },

    emma: {
      username: "emma",
      password: "enano123",
      role: "player",
      points: 5000,
      inventory: {},
      history: []
    },

    javi: {
      username: "javi",
      password: "javiertos123",
      role: "player",
      points: 5000,
      inventory: {},
      history: []
    },

    jorge: {
      username: "jorge",
      password: "curioso123",
      role: "player",
      points: 5000,
      inventory: {},
      history: []
    }
  };


 const CARDS = [
  {
    id: "Y001",
    name: "Yago Batería",
    rank: "C",
    emoji: "🥁",
    image: "https://i.postimg.cc/QMhcmC54/Yago-Bateria.png",
    description: "Yago tocando la batería a todo volumen."
  },

  {
    id: "Y002",
    name: "Yago Tsundere",
    rank: "C",
    emoji: "😤",
    image: "https://i.postimg.cc/hPTwpVrL/Chat-GPT-Image-2-oct-2026-22-24-40.png",
    description: "Yago intentando ocultar que en realidad le importa."
  },

  {
    id: "Y003",
    name: "Yago Tsundere Supremo",
    rank: "S",
    emoji: "👑",
    image: "https://i.postimg.cc/PJ3q7Bh7/Chat-GPT-Image-2-oct-2026-22-31-36.png",
    description: "La versión suprema del Yago tsundere."
  },

  {
    id: "Y004",
    name: "Yago BabySound",
    rank: "A",
    emoji: "🎵",
    image: "https://i.postimg.cc/QtMGzVMP/Chat-GPT-Image-3-oct-2026-05-13-58.png",
    description: "Yago expresándose con toda la potencia de un bebé."
  },

  {
    id: "Y005",
    name: "Yago Dulcero",
    rank: "S",
    emoji: "🍬",
    image: "https://i.postimg.cc/FF85PrX2/Chat-GPT-Image-2-oct-2026-22-42-29.png",
    description: "Yago disfrutando de todos sus dulces favoritos."
  },

  {
    id: "Y006",
    name: "Yago Enfadao",
    rank: "D",
    emoji: "😡",
    image: "https://i.postimg.cc/jdfVmpsX/Chat-GPT-Image-2-oct-2026-22-51-45.png",
    description: "Yago completamente enfadado."
  },

  {
    id: "Y007",
    name: "Yago Femboy",
    rank: "S",
    emoji: "✨",
    image: "https://i.postimg.cc/9fJsyVBp/Chat-GPT-Image-2-oct-2026-22-52-46.png",
    description: "Yago con su estilo femenino y desenfadado."
  },

  {
    id: "Y008",
    name: "Yago Concentrado",
    rank: "B",
    emoji: "🧐",
    image: "https://i.postimg.cc/7hTcvzyx/Chat-GPT-Image-2-oct-2026-22-57-12.png",
    description: "Yago completamente concentrado dibujando."
  },

  {
    id: "Y009",
    name: "Yago Colacao",
    rank: "A",
    emoji: "🥛",
    image: "https://i.postimg.cc/dtGsrkZz/Chat-GPT-Image-3-oct-2026-05-18-45.png",
    description: "Yago disfrutando de su ColaCao."
  },

  {
    id: "Y010",
    name: "Yago Dibujande",
    rank: "D",
    emoji: "🎨",
    image: "https://i.postimg.cc/Ls82cxQs/Chat-GPT-Image-2-oct-2026-23-05-01.png",
    description: "Yago sin saber exactamente qué hacer."
  },

  {
    id: "Y011",
    name: "Yago Sueño",
    rank: "D",
    emoji: "😴",
    image: "https://i.postimg.cc/449sR7PH/Chat-GPT-Image-2-oct-2026-23-05-11.png",
    description: "Yago preparado para dormir."
  },

  {
    id: "Y012",
    name: "Yago Cubitos",
    rank: "D",
    emoji: "🧊",
    image: "https://i.postimg.cc/Xvq6HpX7/Chat-GPT-Image-2-oct-2026-23-11-32.png",
    description: "Yago en un mundo de cubitos."
  },

  {
    id: "Y013",
    name: "Yago Cargando",
    rank: "C",
    emoji: "🔋",
    image: "",
    description: "Yago necesita cargar las pilas."
  },

  {
    id: "Y014",
    name: "Yago Miku",
    rank: "S",
    emoji: "🎤",
    image: "",
    description: "Yago en modo vocaloid."
  },

  {
    id: "Y015",
    name: "Teto Yago",
    rank: "S",
    emoji: "🎀",
    image: "",
    description: "Yago inspirado en el estilo de Teto."
  },

  {
    id: "Y016",
    name: "Yago Neru",
    rank: "S",
    emoji: "🎧",
    image: "",
    description: "Yago en su versión Neru."
  },

  {
    id: "Y017",
    name: "Yago Maid",
    rank: "S",
    emoji: "🧹",
    image: "",
    description: "Yago preparado para el servicio."
  },

  {
    id: "Y018",
    name: "Yago FnF",
    rank: "D",
    emoji: "🎮",
    image: "",
    description: "Yago preparado para una partida de ritmo."
  },

  {
    id: "Y019",
    name: "Yago ChupaChups",
    rank: "A",
    emoji: "🍭",
    image: "",
    description: "Yago disfrutando de un Chupa Chups."
  },

  {
    id: "Y020",
    name: "Yago Depresivo",
    rank: "S",
    emoji: "🌧️",
    image: "",
    description: "Una versión más triste y melancólica de Yago."
  },

  {
    id: "Y021",
    name: "Yago Responsable",
    rank: "B",
    emoji: "📋",
    image: "",
    description: "Yago intentando mantenerlo todo organizado."
  },

  {
    id: "Y022",
    name: "Yago REPO",
    rank: "A",
    emoji: "💻",
    image: "",
    description: "Yago trabajando con repositorios."
  },

  {
    id: "Y023",
    name: "Yago Radiante",
    rank: "A",
    emoji: "☀️",
    image: "",
    description: "Yago brillando con energía."
  },

  {
    id: "Y024",
    name: "Yago Avergonzado",
    rank: "D",
    emoji: "😳",
    image: "",
    description: "Yago intentando esconder la vergüenza."
  },

  {
    id: "Y025",
    name: "Yago Orgulloso",
    rank: "B",
    emoji: "😎",
    image: "",
    description: "Yago orgulloso de sí mismo."
  },

  {
    id: "Y026",
    name: "Yago Bailarin",
    rank: "B",
    emoji: "💃",
    image: "",
    description: "Yago demostrando sus pasos de baile."
  },

  {
    id: "Y027",
    name: "Yago Neutro",
    rank: "C",
    emoji: "😐",
    image: "",
    description: "Yago completamente neutro."
  },

  {
    id: "Y028",
    name: "Yago Repostero",
    rank: "S",
    emoji: "🧁",
    image: "",
    description: "Yago preparando deliciosos postres."
  },

  {
    id: "Y029",
    name: "Yago Chara",
    rank: "S",
    emoji: "❤️",
    image: "",
    description: "Yago en una versión inspirada en Chara."
  },

  {
    id: "Y030",
    name: "Yago Sans",
    rank: "S",
    emoji: "💀",
    image: "",
    description: "Yago en su misteriosa versión Sans."
  }
];


  const PACKS = {
    basic: {
      name: "Básico",
      price: 1000,
      amount: 3,
      ranks: {
        D: 60,
        C: 25,
        B: 10,
        A: 4,
        S: 1
      }
    },

    premium: {
      name: "Premium",
      price: 1500,
      amount: 5,
      ranks: {
        D: 60,
        C: 25,
        B: 10,
        A: 4,
        S: 1
      }
    },

    elite: {
      name: "Elite",
      price: 5000,
      amount: 5,
      ranks: {
        D: 0,
        C: 0,
        B: 66.67,
        A: 26.67,
        S: 6.66
      }
    }
  };


  const SELL_VALUES = {
    D: 100,
    C: 200,
    B: 400,
    A: 700,
    S: 1500
  };


  const RANK_CLASSES = {
    D: "rank-d",
    C: "rank-c",
    B: "rank-b",
    A: "rank-a",
    S: "rank-s"
  };


  let currentUser = null;
  let openingPack = false;
  let revealedCards = 0;


  function createFreshDatabase() {
    return {
      users: JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS))
    };
  }


  function loadDatabase() {
    let database = null;

    try {
      database = JSON.parse(localStorage.getItem(DB_KEY));
    } catch (error) {
      database = null;
    }

    if (!database || !database.users) {
      database = createFreshDatabase();
    }

    Object.keys(DEFAULT_ACCOUNTS).forEach(username => {

      if (!database.users[username]) {
        database.users[username] =
          JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS[username]));

        return;
      }

      const defaultUser = DEFAULT_ACCOUNTS[username];
      const savedUser = database.users[username];

      savedUser.username = username;
      savedUser.password = defaultUser.password;
      savedUser.role = defaultUser.role;

      if (typeof savedUser.points !== "number") {
        savedUser.points = defaultUser.points;
      }

      if (!savedUser.inventory) {
        savedUser.inventory = {};
      }

      if (!Array.isArray(savedUser.history)) {
        savedUser.history = [];
      }
    });

    saveDatabase(database);

    return database;
  }


  function saveDatabase(database) {
    localStorage.setItem(DB_KEY, JSON.stringify(database));
  }


  function getCurrentDatabaseUser() {
    if (!currentUser) {
      return null;
    }

    const database = loadDatabase();

    return database.users[currentUser] || null;
  }


  function login(username, password) {

    const database = loadDatabase();

    const normalizedUsername = String(username)
      .trim()
      .toLowerCase();

    const user = database.users[normalizedUsername];

    const errorElement =
      document.getElementById("loginError");

    if (!user || user.password !== password) {

      if (errorElement) {
        errorElement.textContent =
          "Usuario o contraseña incorrectos.";
      }

      return;
    }

    currentUser = normalizedUsername;

    sessionStorage.setItem(
      SESSION_KEY,
      normalizedUsername
    );

    if (errorElement) {
      errorElement.textContent = "";
    }

    showGame();
    updateGame();
  }


  function showGame() {

    const loginScreen =
      document.getElementById("loginScreen");

    const gameScreen =
      document.getElementById("gameScreen");

    if (loginScreen) {
      loginScreen.classList.add("hidden");
    }

    if (gameScreen) {
      gameScreen.classList.remove("hidden");
    }
  }


  function showLogin() {

    const loginScreen =
      document.getElementById("loginScreen");

    const gameScreen =
      document.getElementById("gameScreen");

    if (gameScreen) {
      gameScreen.classList.add("hidden");
    }

    if (loginScreen) {
      loginScreen.classList.remove("hidden");
    }
  }


  function logout() {

    currentUser = null;

    sessionStorage.removeItem(SESSION_KEY);

    showLogin();

    const username =
      document.getElementById("username");

    const password =
      document.getElementById("password");

    const error =
      document.getElementById("loginError");

    if (username) {
      username.value = "";
    }

    if (password) {
      password.value = "";
    }

    if (error) {
      error.textContent = "";
    }
  }


  function updateGame() {

    const user = getCurrentDatabaseUser();

    if (!user) {
      return;
    }

    const topUsername =
      document.getElementById("topUsername");

    const topRole =
      document.getElementById("topRole");

    const topPoints =
      document.getElementById("topPoints");

    const settingsUsername =
      document.getElementById("settingsUsername");

    const settingsPoints =
      document.getElementById("settingsPoints");

    const settingsCards =
      document.getElementById("settingsCards");

    const settingsPacks =
      document.getElementById("settingsPacks");

    if (topUsername) {
      topUsername.textContent = user.username;
    }

    if (topRole) {
      topRole.textContent =
        user.role === "admin"
          ? "Administrador"
          : "Jugador";
    }

    if (topPoints) {
      topPoints.textContent =
        Number(user.points).toLocaleString("es-ES");
    }

    if (settingsUsername) {
      settingsUsername.textContent = user.username;
    }

    if (settingsPoints) {
      settingsPoints.textContent =
        Number(user.points).toLocaleString("es-ES");
    }

    if (settingsCards) {
      settingsCards.textContent =
        Object.keys(user.inventory).length;
    }

    if (settingsPacks) {
      settingsPacks.textContent =
        user.history.filter(
          item => item.type === "pack"
        ).length;
    }

    updatePackButtons();
    renderInventory();
    renderCatalog();
    renderHistory();
    updateAdminInterface();
  }


  function updatePackButtons() {

    const user = getCurrentDatabaseUser();

    if (!user) {
      return;
    }

    document
      .querySelectorAll(".pack-button")
      .forEach(button => {

        const packId =
          button.dataset.pack;

        const pack =
          PACKS[packId];

        if (!pack) {
          return;
        }

        button.disabled =
          openingPack ||
          user.points < pack.price;

        button.textContent =
          user.points < pack.price
            ? "Puntos insuficientes"
            : "Abrir sobre";
      });
  }


  function selectRank(rankConfig) {

    const random =
      Math.random() * 100;

    let cumulative = 0;

    const ranks = ["D", "C", "B", "A", "S"];

    for (const rank of ranks) {

      cumulative +=
        Number(rankConfig[rank] || 0);

      if (random < cumulative) {
        return rank;
      }
    }

    return "D";
  }


  function randomCard(rank) {

    const matching =
      CARDS.filter(card => card.rank === rank);

    if (!matching.length) {
      return CARDS[
        Math.floor(Math.random() * CARDS.length)
      ];
    }

    return matching[
      Math.floor(Math.random() * matching.length)
    ];
  }


  function openPack(packId) {

    if (openingPack) {
      return;
    }

    const pack = PACKS[packId];

    if (!pack) {
      return;
    }

    const database = loadDatabase();
    const user = database.users[currentUser];

    if (!user) {
      return;
    }

    if (user.points < pack.price) {

      showToast(
        "No tienes suficientes puntos."
      );

      return;
    }

    user.points -= pack.price;

    const obtainedCards = [];

    for (let i = 0; i < pack.amount; i++) {

      const rank =
        selectRank(pack.ranks);

      const card =
        randomCard(rank);

      obtainedCards.push(card);

      if (!user.inventory[card.id]) {
        user.inventory[card.id] = 0;
      }

      user.inventory[card.id]++;
    }


    user.history.unshift({
      type: "pack",
      pack: packId,
      packName: pack.name,
      price: pack.price,
      cards: obtainedCards.map(card => card.id),
      date: new Date().toISOString()
    });


    if (user.history.length > 100) {
      user.history =
        user.history.slice(0, 100);
    }

    saveDatabase(database);

    updateGame();

    showPackModal(
      packId,
      obtainedCards
    );
  }


  function showPackModal(packId, cards) {

    openingPack = true;
    revealedCards = 0;

    const modal =
      document.getElementById("packModal");

    const openingScreen =
      document.getElementById("packOpeningScreen");

    const resultsScreen =
      document.getElementById("packResultsScreen");

    const results =
      document.getElementById("packResults");

    const finishButton =
      document.getElementById("finishPackButton");

    const openingSymbol =
      document.getElementById("openingPackSymbol");

    const openingTitle =
      document.getElementById("openingTitle");

    if (!modal || !openingScreen || !resultsScreen || !results) {
      return;
    }

    modal.classList.remove("hidden");

    openingScreen.classList.remove("hidden");
    resultsScreen.classList.add("hidden");

    results.innerHTML = "";

    if (finishButton) {
      finishButton.classList.add("hidden");
    }

    if (openingSymbol) {
      if (packId === "basic") {
        openingSymbol.textContent = "🥁";
      } else if (packId === "premium") {
        openingSymbol.textContent = "👑";
      } else {
        openingSymbol.textContent = "💎";
      }
    }

    if (openingTitle) {
      openingTitle.textContent =
        "Abriendo sobre...";
    }

    setTimeout(() => {

      openingScreen.classList.add("hidden");
      resultsScreen.classList.remove("hidden");

      renderPackResults(cards);

    }, 1900);
  }


  function renderPackResults(cards) {

    const results =
      document.getElementById("packResults");

    if (!results) {
      return;
    }

    results.innerHTML = "";

    cards.forEach((card, index) => {

      const slot =
        document.createElement("div");

      slot.className =
        "reveal-card-slot";

      slot.innerHTML = `
        <div class="flip-card">

          <div class="card-face card-back"></div>

          <div class="card-face card-front">
            ${createCardHTML(card, false)}
          </div>

        </div>
      `;

      results.appendChild(slot);

      setTimeout(() => {
        slot.classList.add("show");

        setTimeout(() => {
          slot.dataset.ready = "true";
        }, 500);

      }, index * 550);

      const flipCard =
        slot.querySelector(".flip-card");

      flipCard.addEventListener(
        "click",
        () => revealPackCard(slot, card)
      );
    });
  }


  function revealPackCard(slot, card) {

    if (!slot || slot.dataset.revealed === "true") {
      return;
    }

    if (slot.dataset.ready !== "true") {
      return;
    }

    slot.dataset.revealed = "true";

    const flipCard =
      slot.querySelector(".flip-card");

    if (flipCard) {
      flipCard.classList.add("flipped");
    }

    if (card.rank === "S") {
      slot.classList.add("s-reveal");
      createSparkles(slot);
    }

    revealedCards++;

    const total =
      document.querySelectorAll(
        "#packResults .reveal-card-slot"
      ).length;

    if (revealedCards >= total) {

      setTimeout(() => {

        const finishButton =
          document.getElementById(
            "finishPackButton"
          );

        if (finishButton) {
          finishButton.classList.remove("hidden");
        }

      }, 700);
    }
  }


  function createSparkles(container) {

    for (let i = 0; i < 10; i++) {

      const sparkle =
        document.createElement("span");

      sparkle.className =
        "generated-sparkle";

      sparkle.textContent =
        i % 2 === 0 ? "✦" : "✧";

      sparkle.style.position = "absolute";
      sparkle.style.left =
        `${Math.random() * 100}%`;
      sparkle.style.top =
        `${Math.random() * 100}%`;
      sparkle.style.zIndex = "20";
      sparkle.style.pointerEvents = "none";
      sparkle.style.color = "white";
      sparkle.style.fontSize =
        `${12 + Math.random() * 20}px`;
      sparkle.style.textShadow =
        "0 0 10px white, 0 0 22px #cf85ff";

      container.appendChild(sparkle);

      sparkle.animate(
        [
          {
            opacity: 0,
            transform: "scale(.2) rotate(0deg)"
          },
          {
            opacity: 1,
            transform: "scale(1.4) rotate(90deg)"
          },
          {
            opacity: 0,
            transform: "scale(.2) rotate(180deg)"
          }
        ],
        {
          duration: 1000 + Math.random() * 800,
          iterations: 2
        }
      );

      setTimeout(() => {
        sparkle.remove();
      }, 3000);
    }
  }


  function closePackModal() {

    if (openingPack && revealedCards > 0) {

      const total =
        document.querySelectorAll(
          "#packResults .reveal-card-slot"
        ).length;

      if (revealedCards < total) {
        showToast(
          "Primero descubre todas las cartas."
        );

        return;
      }
    }

    const modal =
      document.getElementById("packModal");

    if (modal) {
      modal.classList.add("hidden");
    }

    openingPack = false;

    updatePackButtons();
  }


  function getCardThemeClass(card) {

    if (
      card.id &&
      /^Y(00[1-9]|01[0-2])$/.test(card.id)
    ) {
      return `card-theme-${card.id.toLowerCase()}`;
    }

    return "card-theme-default";
  }


  function createCardHTML(card, showCount = true) {

    const user =
      getCurrentDatabaseUser();

    const amount =
      user && user.inventory
        ? Number(user.inventory[card.id] || 0)
        : 0;

    const rankClass =
      RANK_CLASSES[card.rank] || "rank-d";

    const themeClass =
      getCardThemeClass(card);

    const imageHTML =
      card.image
        ? `<img src="${escapeHTML(card.image)}"
             alt="${escapeHTML(card.name)}">`
        : `<div class="card-emoji">${escapeHTML(card.emoji)}</div>`;

    return `
      <div class="game-card-inner">

        <div class="card-inner ${themeClass}">

          <div class="card-header">
            <span class="card-name">
              ${escapeHTML(card.name)}
            </span>

            <span class="rank-badge ${rankClass}">
              ${escapeHTML(card.rank)}
            </span>
          </div>

          <div class="card-image-area">
            ${imageHTML}
          </div>

          <div class="card-footer">
            ${
              showCount
                ? `<span class="card-count">
                     x${amount}
                   </span>`
                : `<span>${escapeHTML(card.id)}</span>`
            }

            <span class="card-sell">
              ⭐ ${SELL_VALUES[card.rank]}
            </span>
          </div>

        </div>

      </div>
    `;
  }


  function createCardElement(card, options = {}) {

    const wrapper =
      document.createElement("div");

    wrapper.className =
      options.className || "card-wrapper";

    wrapper.innerHTML =
      createCardHTML(
        card,
        options.showCount !== false
      );

    const gameCard =
      wrapper.querySelector(".game-card");

    if (gameCard) {

      gameCard.addEventListener(
        "click",
        () => openCardDetail(card)
      );
    }

    return wrapper;
  }


  function renderInventory() {

    const grid =
      document.getElementById("inventoryGrid");

    const empty =
      document.getElementById("emptyInventory");

    const counter =
      document.getElementById("inventoryCount");

    if (!grid) {
      return;
    }

    const user =
      getCurrentDatabaseUser();

    if (!user) {
      return;
    }

    grid.innerHTML = "";

    const ownedCards =
      CARDS.filter(
        card => Number(user.inventory[card.id] || 0) > 0
      );

    if (counter) {
      counter.textContent =
        ownedCards.length;
    }

    if (!ownedCards.length) {

      if (empty) {
        empty.classList.remove("hidden");
      }

      return;
    }

    if (empty) {
      empty.classList.add("hidden");
    }

    ownedCards.forEach(card => {

      const amount =
        Number(user.inventory[card.id] || 0);

      const wrapper =
        createCardElement(card, {
          className:
            amount >= 2
              ? "card-wrapper inventory-card repeated"
              : "card-wrapper inventory-card",
          showCount: true
        });

      grid.appendChild(wrapper);
    });
  }


  function renderCatalog() {

    const grid =
      document.getElementById("yagosGrid");

    if (!grid) {
      return;
    }

    grid.innerHTML = "";

    CARDS.forEach(card => {

      const wrapper =
        createCardElement(card, {
          className:
            "card-wrapper catalog-card",
          showCount: false
        });

      grid.appendChild(wrapper);
    });
  }


  function openCardDetail(card) {

    const modal =
      document.getElementById("cardDetailModal");

    const content =
      document.getElementById("cardDetailContent");

    if (!modal || !content) {
      return;
    }

    const user =
      getCurrentDatabaseUser();

    const amount =
      user && user.inventory
        ? Number(user.inventory[card.id] || 0)
        : 0;

    const rankClass =
      RANK_CLASSES[card.rank] || "rank-d";

    const cardElement =
      document.createElement("div");

    cardElement.className =
      "detail-card";

    cardElement.innerHTML =
      createCardHTML(card, true);

    const sellButton =
      amount >= 2
        ? `
          <button
            id="detailSellButton"
            class="detail-sell-button"
            type="button"
          >
            Vender una repetida por
            ⭐ ${SELL_VALUES[card.rank]}
          </button>
        `
        : "";

    content.innerHTML = `
      <div class="card-detail-layout">

        <div id="detailVisual"></div>

        <div class="detail-info">

          <div class="detail-rank ${rankClass}">
            RANGO ${escapeHTML(card.rank)}
          </div>

          <h2>${escapeHTML(card.name)}</h2>

          <div class="detail-row">
            <span>ID</span>
            <strong>${escapeHTML(card.id)}</strong>
          </div>

          <div class="detail-row">
            <span>En tu colección</span>
            <strong>${amount}</strong>
          </div>

          <div class="detail-row">
            <span>Valor de venta</span>
            <strong>
              ⭐ ${SELL_VALUES[card.rank]}
            </strong>
          </div>

          <div class="detail-description">
            ${escapeHTML(
              card.description ||
              "Una carta de Yago."
            )}
          </div>

          ${sellButton}

        </div>

      </div>
    `;

    const detailVisual =
      document.getElementById("detailVisual");

    if (detailVisual) {
      detailVisual.appendChild(cardElement);
    }

    const sell =
      document.getElementById("detailSellButton");

    if (sell) {

      sell.addEventListener(
        "click",
        () => sellCard(card)
      );
    }

    modal.classList.remove("hidden");
  }


  function sellCard(card) {

    const database =
      loadDatabase();

    const user =
      database.users[currentUser];

    if (!user) {
      return;
    }

    const amount =
      Number(user.inventory[card.id] || 0);

    if (amount < 2) {

      showToast(
        "Necesitas al menos 2 copias para vender una."
      );

      return;
    }

    user.inventory[card.id]--;

    user.points +=
      SELL_VALUES[card.rank];

    user.history.unshift({
      type: "sell",
      card: card.id,
      cardName: card.name,
      amount: 1,
      value: SELL_VALUES[card.rank],
      date: new Date().toISOString()
    });

    saveDatabase(database);

    closeCardDetail();

    updateGame();

    showToast(
      `Has vendido una copia de ${card.name} por ${SELL_VALUES[card.rank]} puntos.`
    );
  }


  function closeCardDetail() {

    const modal =
      document.getElementById("cardDetailModal");

    if (modal) {
      modal.classList.add("hidden");
    }
  }


  function renderHistory() {

    const list =
      document.getElementById("historyList");

    if (!list) {
      return;
    }

    const user =
      getCurrentDatabaseUser();

    if (!user) {
      return;
    }

    list.innerHTML = "";

    if (!user.history.length) {

      list.innerHTML = `
        <div class="empty-state">
          <div>📜</div>
          <h3>No hay movimientos todavía</h3>
          <p>Cuando abras sobres aparecerán aquí.</p>
        </div>
      `;

      return;
    }

    user.history.forEach(item => {

      const element =
        document.createElement("div");

      element.className =
        "history-item";

      const date =
        new Date(item.date);

      const dateText =
        date.toLocaleString("es-ES");

      if (item.type === "pack") {

        element.innerHTML = `
          <div class="history-left">
            <div class="history-icon">📦</div>

            <div>
              <div class="history-title">
                Sobre ${escapeHTML(item.packName)}
              </div>

              <div class="history-date">
                ${dateText}
              </div>
            </div>
          </div>

          <div class="history-right">
            -⭐ ${item.price}
          </div>
        `;

      } else if (item.type === "sell") {

        element.innerHTML = `
          <div class="history-left">
            <div class="history-icon">💰</div>

            <div>
              <div class="history-title">
                Vendiste ${escapeHTML(item.cardName)}
              </div>

              <div class="history-date">
                ${dateText}
              </div>
            </div>
          </div>

          <div class="history-right">
            +⭐ ${item.value}
          </div>
        `;

      } else if (item.type === "admin_points") {

        element.innerHTML = `
          <div class="history-left">
            <div class="history-icon">⭐</div>

            <div>
              <div class="history-title">
                Puntos recibidos del administrador
              </div>

              <div class="history-date">
                ${dateText}
              </div>
            </div>
          </div>

          <div class="history-right">
            +⭐ ${item.amount}
          </div>
        `;

      } else if (item.type === "admin_card") {

        element.innerHTML = `
          <div class="history-left">
            <div class="history-icon">🎁</div>

            <div>
              <div class="history-title">
                Carta recibida del administrador
              </div>

              <div class="history-date">
                ${dateText}
              </div>
            </div>
          </div>

          <div class="history-right">
            +${item.amount} 🃏
          </div>
        `;
      }

      list.appendChild(element);
    });
  }


  function updateAdminInterface() {

    const user =
      getCurrentDatabaseUser();

    const adminButton =
      document.getElementById("adminNavButton");

    const adminSection =
      document.getElementById("adminSection");

    if (!user || user.role !== "admin") {

      if (adminButton) {
        adminButton.classList.add("hidden");
      }

      if (adminSection) {
        adminSection.classList.remove("active-section");
      }

      return;
    }

    if (adminButton) {
      adminButton.classList.remove("hidden");
    }

    populateAdminUsers();
    populateAdminCards();
    renderAdminUsers();
  }


  function populateAdminUsers() {

    const database =
      loadDatabase();

    const selects = [
      document.getElementById("adminPointsUser"),
      document.getElementById("adminCardUser")
    ];

    const usernames =
      Object.keys(database.users);

    selects.forEach(select => {

      if (!select) {
        return;
      }

      select.innerHTML = "";

      usernames.forEach(username => {

        const user =
          database.users[username];

        const option =
          document.createElement("option");

        option.value = username;

        option.textContent =
          `${username} (${user.role})`;

        select.appendChild(option);
      });
    });
  }


  function populateAdminCards() {

    const select =
      document.getElementById("adminCardSelect");

    if (!select) {
      return;
    }

    select.innerHTML = "";

    CARDS.forEach(card => {

      const option =
        document.createElement("option");

      option.value = card.id;

      option.textContent =
        `${card.id} - ${card.name} [${card.rank}]`;

      select.appendChild(option);
    });
  }


  function renderAdminUsers() {

    const container =
      document.getElementById("adminUsersList");

    if (!container) {
      return;
    }

    const database =
      loadDatabase();

    container.innerHTML = "";

    Object.keys(database.users).forEach(username => {

      const user =
        database.users[username];

      const totalCards =
        Object.values(user.inventory || {})
          .reduce(
            (total, amount) =>
              total + Number(amount || 0),
            0
          );

      const row =
        document.createElement("div");

      row.className =
        "admin-user-row";

      row.innerHTML = `
        <div>
          <div class="admin-user-name">
            ${escapeHTML(username)}
          </div>

          <div class="admin-user-meta">
            ${user.role === "admin"
              ? "Administrador"
              : "Jugador"}
            · ${totalCards} cartas
          </div>
        </div>

        <strong>
          ⭐ ${Number(user.points).toLocaleString("es-ES")}
        </strong>
      `;

      container.appendChild(row);
    });
  }


  function givePointsToUser() {

    const admin =
      getCurrentDatabaseUser();

    if (!admin || admin.role !== "admin") {
      return;
    }

    const username =
      document.getElementById(
        "adminPointsUser"
      ).value;

    const amountInput =
      document.getElementById(
        "adminPointsAmount"
      );

    const amount =
      Number(amountInput.value);

    if (!username || !Number.isFinite(amount) || amount <= 0) {

      showToast(
        "Introduce una cantidad válida de puntos."
      );

      return;
    }

    const database =
      loadDatabase();

    const target =
      database.users[username];

    if (!target) {
      return;
    }

    target.points +=
      Math.floor(amount);

    target.history.unshift({
      type: "admin_points",
      amount: Math.floor(amount),
      date: new Date().toISOString()
    });

    saveDatabase(database);

    amountInput.value = "";

    updateGame();

    showToast(
      `Se han añadido ${Math.floor(amount)} puntos a ${username}.`
    );
  }


  function giveCardToUser() {

    const admin =
      getCurrentDatabaseUser();

    if (!admin || admin.role !== "admin") {
      return;
    }

    const username =
      document.getElementById(
        "adminCardUser"
      ).value;

    const cardId =
      document.getElementById(
        "adminCardSelect"
      ).value;

    const amountInput =
      document.getElementById(
        "adminCardAmount"
      );

    const amount =
      Number(amountInput.value);

    if (
      !username ||
      !cardId ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {

      showToast(
        "Selecciona usuario, carta y cantidad válidos."
      );

      return;
    }

    const database =
      loadDatabase();

    const target =
      database.users[username];

    const card =
      CARDS.find(
        item => item.id === cardId
      );

    if (!target || !card) {
      return;
    }

    const quantity =
      Math.floor(amount);

    if (!target.inventory[cardId]) {
      target.inventory[cardId] = 0;
    }

    target.inventory[cardId] +=
      quantity;

    target.history.unshift({
      type: "admin_card",
      card: cardId,
      cardName: card.name,
      amount: quantity,
      date: new Date().toISOString()
    });

    saveDatabase(database);

    amountInput.value = "1";

    updateGame();

    showToast(
      `Se han dado ${quantity}x ${card.name} a ${username}.`
    );
  }


  function switchSection(sectionId) {

    document
      .querySelectorAll(".game-section")
      .forEach(section => {
        section.classList.remove(
          "active-section"
        );
      });

    const target =
      document.getElementById(sectionId);

    if (target) {
      target.classList.add(
        "active-section"
      );
    }

    document
      .querySelectorAll(".nav-button")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.section === sectionId
        );
      });
  }


  function showToast(message) {

    const toast =
      document.getElementById("toast");

    if (!toast) {
      return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
      showToast.timer
    );

    showToast.timer =
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2800);
  }


  function escapeHTML(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  function connectEvents() {

    /* LOGIN */

    const loginForm =
      document.getElementById("loginForm");

    if (loginForm) {

      loginForm.addEventListener(
        "submit",
        event => {

          event.preventDefault();

          const usernameInput =
            document.getElementById("username");

          const passwordInput =
            document.getElementById("password");

          if (!usernameInput || !passwordInput) {
            return;
          }

          login(
            usernameInput.value,
            passwordInput.value
          );
        }
      );
    }


    /* LOGOUT */

    const logoutButton =
      document.getElementById(
        "logoutButton"
      );

    if (logoutButton) {
      logoutButton.addEventListener(
        "click",
        logout
      );
    }


    /* NAVEGACIÓN */

    document
      .querySelectorAll(".nav-button")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const section =
              button.dataset.section;

            if (!section) {
              return;
            }

            if (
              section === "adminSection"
            ) {

              const user =
                getCurrentDatabaseUser();

              if (
                !user ||
                user.role !== "admin"
              ) {
                return;
              }
            }

            switchSection(section);
          }
        );
      });


    /* SOBRES */

    document
      .querySelectorAll(".pack-button")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {
            openPack(
              button.dataset.pack
            );
          }
        );
      });


    /* CERRAR APERTURA */

    const closePack =
      document.getElementById(
        "closePackModal"
      );

    if (closePack) {
      closePack.addEventListener(
        "click",
        closePackModal
      );
    }


    const finishPack =
      document.getElementById(
        "finishPackButton"
      );

    if (finishPack) {
      finishPack.addEventListener(
        "click",
        closePackModal
      );
    }


    const packOverlay =
      document.querySelector(
        "#packModal .modal-overlay"
      );

    if (packOverlay) {
      packOverlay.addEventListener(
        "click",
        () => {
          if (!openingPack) {
            closePackModal();
          }
        }
      );
    }


    /* DETALLE DE CARTA */

    const closeDetail =
      document.getElementById(
        "closeCardDetail"
      );

    if (closeDetail) {
      closeDetail.addEventListener(
        "click",
        closeCardDetail
      );
    }


    const detailOverlay =
      document.querySelector(
        "#cardDetailModal .modal-overlay"
      );

    if (detailOverlay) {
      detailOverlay.addEventListener(
        "click",
        closeCardDetail
      );
    }


    /* ADMIN */

    const givePoints =
      document.getElementById(
        "adminGivePointsButton"
      );

    if (givePoints) {
      givePoints.addEventListener(
        "click",
        givePointsToUser
      );
    }


    const giveCard =
      document.getElementById(
        "adminGiveCardButton"
      );

    if (giveCard) {
      giveCard.addEventListener(
        "click",
        giveCardToUser
      );
    }


    /* ESC PARA CERRAR MODALES */

    document.addEventListener(
      "keydown",
      event => {

        if (event.key !== "Escape") {
          return;
        }

        const detail =
          document.getElementById(
            "cardDetailModal"
          );

        if (
          detail &&
          !detail.classList.contains("hidden")
        ) {
          closeCardDetail();
        }
      }
    );
  }


  function restoreSession() {

    const savedUsername =
      sessionStorage.getItem(
        SESSION_KEY
      );

    if (!savedUsername) {
      showLogin();
      return;
    }

    const database =
      loadDatabase();

    if (!database.users[savedUsername]) {

      sessionStorage.removeItem(
        SESSION_KEY
      );

      showLogin();

      return;
    }

    currentUser =
      savedUsername;

    showGame();
    updateGame();
  }


  /* INICIALIZACIÓN */

  loadDatabase();

  connectEvents();

  restoreSession();

});