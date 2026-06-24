// ===== ДАННЫЕ (12 ПРОЕКТОВ) =====
const projects = [
    {
        id: 0, title: "Винтажная кухня «Баблти»", cat: "Кухня", filter: "kitchen",
        desc: "Уютная кухня с мятным холодильником и посудой.",
        fullDesc: "Детализированная миниатюрная кухня в винтажном стиле. Деревянные шкафчики, мраморная столешница и мятный ретро-холодильник создают атмосферу 50-х годов.",
        img: "img/kitchen1.jpg",
        diff: "easy", diffLabel: "Легко", time: "8 часов", scale: "1:12", badge: "Хит",
        materials: ["Фанера 3мм", "Ткань для штор", "Керамическая глина", "Акриловые краски"],
        steps: ["Создание основы", "Окраска стен", "Изготовление мебели", "Декорирование"],
        reviews: [{name: "Анна", stars: 5, text: "Очень уютная кухня!"}],
        similar: [4, 10]
    },
    {
        id: 1, title: "Лавандовая спальня", cat: "Спальня", filter: "bedroom",
        desc: "Романтичная спальня в фиолетовых тонах с бабочкой.",
        fullDesc: "Нежная спальня с металлической кроватью, вязаным пледом с вышивкой и светящимся ночником. Декоративная бабочка на стене добавляет волшебства.",
        img: "img/bedroom1.jpg",
        diff: "medium", diffLabel: "Средне", time: "12 часов", scale: "1:12", badge: "Новинка",
        materials: ["Ткань", "Дерево", "LED лампа", "Проволока"],
        steps: ["Стены", "Кровать", "Текстиль", "Свет"],
        reviews: [{name: "Елена", stars: 5, text: "Какая нежность!"}],
        similar: [5, 11]
    },
    {
        id: 2, title: "Мастерская художника", cat: "Мастерская", filter: "workshop",
        desc: "Светлая мастерская с мольбертом и красками.",
        fullDesc: "Атмосферная мастерская у окна. Деревянный стол, мольберт с пейзажем, палитра с красками и зеленый бархатный пуф.",
        img: "img/workshop1.jpg",
        diff: "hard", diffLabel: "Сложно", time: "16 часов", scale: "1:12", badge: "Мастер",
        materials: ["Дерево", "Бархат", "Краски", "Холст"],
        steps: ["Стол", "Мольберт", "Аксессуары"],
        reviews: [{name: "Дмитрий", stars: 5, text: "Очень реалистично."}],
        similar: [9]
    },
    {
        id: 3, title: "Ботанический сад", cat: "Сад", filter: "garden",
        desc: "Стеклянный террариум с суккулентами.",
        fullDesc: "Зеленый уголок в стеклянном кубе. Подвесные корзинки, мини-теплица, мох и камни создают живой микромир.",
        img: "img/garden1.jpg",
        diff: "medium", diffLabel: "Средне", time: "8 часов", scale: "1:24", badge: "",
        materials: ["Стекло", "Мох", "Растения", "Глина"],
        steps: ["Каркас", "Грунт", "Посадка"],
        reviews: [{name: "Ольга", stars: 5, text: "Как живой!"}],
        similar: [7, 11]
    },
    {
        id: 4, title: "Осенний уголок чтения", cat: "Гостиная", filter: "living",
        desc: "Уютное кресло с пледом и тыквы на полке.",
        fullDesc: "Теплый уголок для чтения. Мягкое кресло, оранжевый вязаный плед, две лампы и книжная полка с тыквами.",
        img: "img/living1.jpg",
        diff: "easy", diffLabel: "Легко", time: "9 часов", scale: "1:12", badge: "Осень",
        materials: ["Ткань", "Дерево", "Книги", "Лампы"],
        steps: ["Кресло", "Полка", "Декор"],
        reviews: [{name: "Мария", stars: 5, text: "Хочется туда сесть."}],
        similar: [0, 10]
    },
    {
        id: 5, title: "Морская спальня", cat: "Спальня", filter: "bedroom",
        desc: "Спальня в морском стиле с песком и ракушками.",
        fullDesc: "Голубые стены, кровать из коряг, песчаный пол и вид на океан из круглого окна. Ракушки и фонарь дополняют декор.",
        img: "img/bedroom2.jpg",
        diff: "medium", diffLabel: "Средне", time: "12 часов", scale: "1:12", badge: "",
        materials: ["Песок", "Коряги", "Ракушки", "Ткань"],
        steps: ["Стены", "Пол", "Мебель", "Декор"],
        reviews: [{name: "Игорь", stars: 5, text: "Морской бриз."}],
        similar: [1, 11]
    },
    {
        id: 6, title: "Классическая гостиная", cat: "Гостиная", filter: "living",
        desc: "Элегантная гостиная с бордовым диваном и часами.",
        fullDesc: "Роскошный интерьер. Бархатный диван, книжный шкаф, старинные часы на стене и кружевная салфетка на столике.",
        img: "img/living2.jpg",
        diff: "medium", diffLabel: "Средне", time: "11 часов", scale: "1:12", badge: "",
        materials: ["Бархат", "Дерево", "Часы", "Книги"],
        steps: ["Диван", "Шкаф", "Аксессуары"],
        reviews: [{name: "Наталья", stars: 5, text: "Классика."}],
        similar: [4, 0]
    },
    {
        id: 7, title: "Оранжерея с цветами", cat: "Сад", filter: "garden",
        desc: "Мини-теплица с яркими цветами.",
        fullDesc: "Стеклянная оранжерея с плетеными панелями. Внутри — герань, хризантемы и папоротник в расписных горшках.",
        img: "img/garden2.jpg",
        diff: "hard", diffLabel: "Сложно", time: "15 часов", scale: "1:24", badge: "Весна",
        materials: ["Стекло", "Глина", "Цветы"],
        steps: ["Каркас", "Горшки", "Цветы"],
        reviews: [{name: "Виктория", stars: 5, text: "Весна круглый год!"}],
        similar: [3, 11]
    },
    {
        id: 8, title: "Винтажная ванная", cat: "Ванная", filter: "bathroom",
        desc: "Ванная с латунными кранами и полотенцами.",
        fullDesc: "Стильная ванная комната. Белая ванна на ножках, раковина с водой, золотая рама зеркала и растение монстера.",
        img: "img/bathroom1.jpg",
        diff: "medium", diffLabel: "Средне", time: "10 часов", scale: "1:12", badge: "",
        materials: ["Керамика", "Металл", "Ткань"],
        steps: ["Ванна", "Раковина", "Декор"],
        reviews: [{name: "Сергей", stars: 4, text: "Стильно."}],
        similar: [9]
    },
    {
        id: 9, title: "Кабинет с зеленой лампой", cat: "Кабинет", filter: "study",
        desc: "Рабочий кабинет с глобусом и книгами.",
        fullDesc: "Строгий кабинет. Деревянный стол с чернильницей, зеленая лампа банка, кожаное кресло и глобус на полке.",
        img: "img/study1.jpg",
        diff: "medium", diffLabel: "Средне", time: "11 часов", scale: "1:12", badge: "",
        materials: ["Кожа", "Дерево", "Стекло"],
        steps: ["Стол", "Кресло", "Полки"],
        reviews: [{name: "Петр", stars: 5, text: "Для дел."}],
        similar: [2, 6]
    },
    {
        id: 10, title: "Деревенская кухня", cat: "Кухня", filter: "kitchen",
        desc: "Кухня с синими шкафами и медной посудой.",
        fullDesc: "Простая деревенская кухня. Синие шкафчики, клетчатый пол, медная кастрюля и связка лаванды.",
        img: "img/kitchen2.jpg",
        diff: "easy", diffLabel: "Легко", time: "9 часов", scale: "1:12", badge: "",
        materials: ["Дерево", "Медь", "Лаванда"],
        steps: ["Шкафы", "Пол", "Посуда"],
        reviews: [{name: "Алена", stars: 5, text: "Душевно."}],
        similar: [0, 4]
    },
    {
        id: 11, title: "Детская комната", cat: "Детская", filter: "nursery",
        desc: "Яркая детская с радужным покрывалом.",
        fullDesc: "Веселая детская. Голубая кроватка, радужный плед, мягкий зайчик, кубики и облака на стене.",
        img: "img/nursery1.jpg",
        diff: "easy", diffLabel: "Легко", time: "7 часов", scale: "1:12", badge: "Ярко",
        materials: ["Ткань", "Дерево", "Игрушки"],
        steps: ["Кроватка", "Стены", "Игрушки"],
        reviews: [{name: "Дети", stars: 5, text: "Ура!"}],
        similar: [1, 5]
    }
];


// ===== BLOG POSTS (С ПОЛНЫМИ ТЕКСТАМИ) =====
const blogPosts = [
    { 
        title: "Как начать создавать румбоксы", 
        cat: "Руководство", 
        tags: ["Основы", "Новичкам"], 
        desc: "Полное руководство для начинающих мастеров.", 
        fullDesc: `<p>Создание румбоксов — это увлекательное хобби, которое сочетает в себе элементы моделирования, дизайна и декорирования. В этой статье мы расскажем, с чего начать.</p>
        <p><strong>Шаг 1: Выбор масштаба.</strong> Для начинающих рекомендуется масштаб 1:12 — детали достаточно крупные, чтобы работать с ними комфортно.</p>
        <p><strong>Шаг 2: Подготовка материалов.</strong> Вам понадобятся: картон или фанера для основы, клей ПВА, акриловые краски, ткань для текстиля, ножницы и канцелярский нож.</p>
        <p><strong>Шаг 3: Первый проект.</strong> Начните с простого — например, с миниатюрной кухни или спальни. Следуйте пошаговым инструкциям из нашего каталога.</p>
        <p><strong>Совет:</strong> Не торопитесь! Создание румбокса — это медитативный процесс. Наслаждайтесь каждым этапом.</p>`,
        author: "Анна", 
        avatar: "А", 
        date: "15 апреля 2026", 
        img: "img/workshop1.jpg"
    },
    { 
        title: "Лучшие материалы для миниатюрной мебели", 
        cat: "Материалы", 
        tags: ["Советы", "Материалы"], 
        desc: "Обзор материалов для создания мебели.", 
        fullDesc: `<p>Выбор материалов — ключевой момент в создании качественного румбокса. Рассмотрим самые популярные варианты.</p>
        <p><strong>Фанера (3-5 мм).</strong> Идеальна для каркасов и мебели. Легко режется, хорошо красится. Рекомендуемая толщина — 3 мм для мелких деталей и 5 мм для основы.</p>
        <p><strong>Полимерная глина.</strong> Отлично подходит для лепки посуды, еды и мелких аксессуаров. Запекается в обычной духовке при 110-130°C.</p>
        <p><strong>Ткань и войлок.</strong> Используются для текстиля: шторы, покрывала, обивка мебели. Войлок особенно хорош — он держит форму и легко режется.</p>
        <p><strong>Проволока.</strong> Необходима для создания каркасов, подвесных элементов и мелких деталей.</p>`,
        author: "Дмитрий", 
        avatar: "Д", 
        date: "10 апреля 2026", 
        img: "img/living2.jpg"
    },
    { 
        title: "LED-подсветка в румбоксах", 
        cat: "Техника", 
        tags: ["LED", "Освещение"], 
        desc: "Как добавить реалистичное освещение.", 
        fullDesc: `<p>Освещение превращает обычный румбокс в настоящее произведение искусства. Разберём основные способы.</p>
        <p><strong>Светодиодные ленты.</strong> Самый популярный вариант. Тонкие, гибкие, работают от батареек. Можно спрятать за мебелью или под потолком.</p>
        <p><strong>Миниатюрные лампы.</strong> Продаются в магазинах для рукоделия. Выглядят как настоящие настольные лампы или люстры.</p>
        <p><strong>Волоконная оптика.</strong> Для точечного освещения — например, имитации свечей или камина. Требует специального контроллера.</p>
        <p><strong>Важно:</strong> Всегда используйте батарейки или USB-питание. Никогда не подключайте миниатюрное освещение напрямую к сети 220В!</p>`,
        author: "Мария", 
        avatar: "М", 
        date: "5 апреля 2026", 
        img: "img/bedroom1.jpg"
    },
    { 
        title: "10 идей для весеннего румбокса", 
        cat: "Вдохновение", 
        tags: ["Идеи", "Весна"], 
        desc: "Вдохновляющие идеи для весенних проектов.", 
        fullDesc: `<p>Весна — идеальное время для создания ярких, цветочных румбоксов. Вот 10 идей для вдохновения:</p>
        <p><strong>1. Оранжерея.</strong> Стеклянный домик с миниатюрными цветами в горшках.</p>
        <p><strong>2. Пикник в саду.</strong> Столик под деревом с корзинкой и пледом.</p>
        <p><strong>3. Цветочный магазин.</strong> Витрина с букетами и лейками.</p>
        <p><strong>4. Бабочки и цветы.</strong> Спальня с цветочным декором и бабочками на стенах.</p>
        <p><strong>5. Теплица.</strong> Миниатюрная теплица с рассадой и садовыми инструментами.</p>
        <p><strong>6-10.</strong> Экспериментируйте с пастельными тонами, свежей зеленью и цветочными узорами!</p>`,
        author: "Елена", 
        avatar: "Е", 
        date: "1 апреля 2026", 
        img: "img/garden2.jpg"
    },
    { 
        title: "Как фотографировать румбоксы", 
        cat: "Фото", 
        tags: ["Советы", "Фото"], 
        desc: "Рекомендации по съёмке миниатюр.", 
        fullDesc: `<p>Хорошая фотография — это половина успеха. Вот как сделать снимки вашего румбокса профессиональными.</p>
        <p><strong>Освещение.</strong> Используйте естественный свет от окна. Избегайте прямых солнечных лучей — они создают резкие тени.</p>
        <p><strong>Фон.</strong> Однотонный фон (белый, серый, бежевый) помогает сфокусировать внимание на румбоксе.</p>
        <p><strong>Ракурсы.</strong> Снимайте с разных сторон: общий план, крупные планы деталей, вид сверху.</p>
        <p><strong>Макросъёмка.</strong> Если есть возможность, используйте макро-объектив или режим макросъёмки на телефоне для деталей.</p>
        <p><strong>Обработка.</strong> Минимальная коррекция яркости и контраста в любом фоторедакторе сделает фото живее.</p>`,
        author: "Ольга", 
        avatar: "О", 
        date: "28 марта 2026", 
        img: "img/kitchen1.jpg"
    },
    { 
        title: "Миниатюрные растения: из бумаги, глины или проволоки?", 
        cat: "Техника", 
        tags: ["Растения", "Материалы"], 
        desc: "Сравнение техник создания растений.", 
        fullDesc: `<p>Растения оживляют любой румбокс. Разберём три основные техники их создания.</p>
        <p><strong>Бумага и крепированная бумага.</strong> Плюсы: дёшево, просто, много цветов. Минусы: недолговечны, боятся влаги. Идеально для beginners.</p>
        <p><strong>Полимерная глина.</strong> Плюсы: реалистичный вид, долговечность. Минусы: требует навыков лепки и запекания. Лучший выбор для цветов.</p>
        <p><strong>Проволока и нитки.</strong> Плюсы: гибкость, можно создавать любые формы. Минусы: трудоёмко. Отлично подходит для деревьев и кустарников.</p>
        <p><strong>Совет:</strong> Комбинируйте техники! Например, глиняные цветы в проволочных вазах с бумажными листьями.</p>`,
        author: "Светлана", 
        avatar: "С", 
        date: "20 марта 2026", 
        img: "img/garden1.jpg"
    }
];

// ===== FAQ DATA =====
const faqData = [
    { q: "Что такое румбокс и чем он отличается от dollhouse?", a: "Румбокс (roombox) — это миниатюрная комната или часть интерьера, обычно без задней стенки и крыши. Dollhouse — полноценный миниатюрный дом." },
    { q: "Какой масштаб самый популярный для румбоксов?", a: "Самые популярные масштабы — 1:12 и 1:24. Для начинающих рекомендуется 1:12." },
    { q: "Какие материалы нужны для первого румбокса?", a: "Картон или фанера, клей ПВА, акриловые краски, ткань, ножницы. Позже можно добавить глину и LED." },
    { q: "Сколько времени занимает создание румбокса?", a: "От 6 часов (простые) до 20 часов (сложные проекты)." },
    { q: "Где можно купить материалы?", a: "В магазинах рукоделия, строительных магазинах или онлайн на маркетплейсах." },
    { q: "Можно ли использовать румбокс как подарок?", a: "Конечно! Это отличный уникальный подарок для творческих людей." },
    { q: "Как хранить готовый румбокс?", a: "В сухом месте, вдали от прямых солнечных лучей. Можно использовать прозрачную коробку." },
    { q: "Подойдёт ли этот сайт для хранения моих проектов?", a: "Да! Сайт позволяет сохранять проекты в избранное через LocalStorage." }
];


// ===== STATE =====
let currentPage = 'home';
let previousPage = 'home';
let currentFilter = 'all';
let currentProjectId = null;
let lightboxImages = [];
let lightboxIndex = 0;

// ===== NAVIGATION =====
function navigate(page) {
    previousPage = currentPage;
    currentPage = page;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
        a.classList.toggle('active-link', a.dataset.page === page);
    });
    
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const links = document.getElementById('navLinks');
    if (window.innerWidth <= 768) links.style.display = 'none';
    
    if (page === 'favorites') renderFavorites();
    
    setTimeout(() => document.querySelectorAll('.reveal').forEach(el => observer.observe(el)), 100);
}

function goBack() {
    navigate(previousPage === 'project' ? 'catalog' : previousPage);
}

function filterGo(filter) {
    currentFilter = filter;
    navigate('catalog');
    setTimeout(() => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
        renderCatalog(filter);
    }, 100);
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const links = document.getElementById('navLinks');
    const nav = document.getElementById('navbar');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
        links.style.position = '';
        links.style.background = '';
        nav.style.background = '';
    } else {
        links.style.display = 'flex';
        links.style.position = 'absolute';
        links.style.top = '80px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.flexDirection = 'column';
        links.style.background = 'rgba(245,240,235,0.98)';
        links.style.padding = '24px';
        links.style.gap = '20px';
        links.style.borderBottom = '1px solid var(--sand)';
        links.style.backdropFilter = 'blur(20px)';
    }
}

// ===== SEARCH =====
function openSearch() {
    document.getElementById('searchOverlay').classList.add('open');
    setTimeout(() => document.getElementById('searchInput').focus(), 300);
}

function closeSearch(e) {
    if (!e || e.target === document.getElementById('searchOverlay')) {
        document.getElementById('searchOverlay').classList.remove('open');
        document.getElementById('searchInput').value = '';
        document.getElementById('searchResults').innerHTML = '';
    }
}

function handleSearch(query) {
    const results = document.getElementById('searchResults');
    if (query.length < 2) { results.innerHTML = ''; return; }
    
    const q = query.toLowerCase();
    const matches = projects.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.cat.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) || 
        p.materials.some(m => m.toLowerCase().includes(q))
    );
    
    results.innerHTML = matches.length ? matches.map(p => `
        <div class="search-result-item" onclick="openProject(${p.id}); closeSearch();">
            <img src="${p.img}" alt="${p.title}">
            <div class="search-result-info">
                <h4>${p.title}</h4>
                <p>${p.cat} · ${p.time} · ${p.diffLabel}</p>
            </div>
        </div>
    `).join('') : '<p style="padding: 20px; text-align: center; color: var(--text-muted);">Ничего не найдено</p>';
}

// ===== LIGHTBOX =====
function openLightbox(images, index) {
    lightboxImages = images;
    lightboxIndex = index;
    document.getElementById('lightboxImg').src = images[index];
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function lightboxNav(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
}

// ===== TOAST =====
function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== FAVORITES =====
function getFavorites() {
    try { return JSON.parse(localStorage.getItem('miniroom_favs') || '[]'); }
    catch { return []; }
}

function setFavorites(favs) {
    localStorage.setItem('miniroom_favs', JSON.stringify(favs));
    updateFavCount();
}

function toggleFavorite(id) {
    let favs = getFavorites();
    if (favs.includes(id)) {
        favs = favs.filter(f => f !== id);
        showToast('💔 Удалено из избранного');
    } else {
        favs.push(id);
        showToast('❤️ Добавлено в избранное');
    }
    setFavorites(favs);
    
    if (currentPage === 'home') renderHomeProjects();
    if (currentPage === 'catalog') renderCatalog(currentFilter);
    if (currentPage === 'favorites') renderFavorites();
}

function updateFavCount() {
    const count = getFavorites().length;
    const el = document.getElementById('favCount');
    el.textContent = count;
    el.classList.toggle('hidden', count === 0);
}

function renderFavorites() {
    const favs = getFavorites();
    const container = document.getElementById('favContent');
    if (!favs.length) {
        container.innerHTML = `
            <div class="fav-empty">
                <span>💔</span>
                <h2>Пока пусто</h2>
                <p>Нажмите ♥ на карточке проекта, чтобы добавить его в избранное</p>
                <button class="btn btn-primary" onclick="navigate('catalog')">Перейти в каталог</button>
            </div>
        `;
        return;
    }
    const favProjects = favs.map(id => projects.find(p => p.id === id)).filter(Boolean);
    container.innerHTML = `<div class="projects-grid">${favProjects.map(p => projectCard(p)).join('')}</div>`;
}

// ===== BLOG MODAL =====
function openBlogArticle(index) {
    const article = blogPosts[index];
    const modal = document.getElementById('blogModal');
    const content = document.getElementById('blogModalContent');
    
    content.innerHTML = `
        <img class="blog-modal-img" src="${article.img}" alt="${article.title}">
        <div class="blog-modal-tags">${article.tags.map(t => `<span class="blog-tag">${t}</span>`).join('')}</div>
        <h2 class="blog-modal-title">${article.title}</h2>
        <div class="blog-modal-meta">
            <div class="blog-modal-author-avatar">${article.avatar}</div>
            <div>
                <div class="blog-modal-author-name">${article.author}</div>
                <div class="blog-modal-date">${article.date}</div>
            </div>
        </div>
        <div class="blog-modal-text">${article.fullDesc}</div>
    `;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeBlogModal(e) {
    if (!e || e.target === document.getElementById('blogModal')) {
        document.getElementById('blogModal').classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ===== RENDER FUNCTIONS =====
function projectCard(p) {
    const isFav = getFavorites().includes(p.id);
    return `
        <div class="project-card reveal" onclick="openProject(${p.id})">
            <div class="project-card-img">
                <img src="${p.img}" alt="${p.title}">
                <div class="project-card-badges">
                    ${p.badge ? `<span class="pc-badge hit">${p.badge}</span>` : ''}
                </div>
                <button class="project-card-fav ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id})">
                    ${isFav ? '♥' : '♡'}
                </button>
            </div>
            <div class="project-card-body">
                <div class="pc-cat">${p.cat}</div>
                <h3 class="pc-title">${p.title}</h3>
                <p class="pc-desc">${p.desc}</p>
                <div class="pc-meta">
                    <div class="project-card-meta-item">⏱ ${p.time}</div>
                    <span class="pc-link">Подробнее →</span>
                </div>
            </div>
        </div>
    `;
}

function catalogCard(p) {
    const diffClass = p.diff === 'easy' ? 'diff-easy' : p.diff === 'medium' ? 'diff-med' : 'diff-hard';
    return `
        <div class="catalog-card reveal" onclick="openProject(${p.id})">
            <div class="catalog-card-img"><img src="${p.img}" alt="${p.title}"></div>
            <div class="catalog-card-body">
                <div class="cc-cat">${p.cat}</div>
                <div class="cc-title">${p.title}</div>
                <div class="cc-desc">${p.desc}</div>
            </div>
            <div class="catalog-card-footer">
                <div class="cc-diff ${diffClass}"><span class="diff-dot"></span>${p.diffLabel}</div>
                <span class="cc-time">⏱ ${p.time}</span>
            </div>
        </div>
    `;
}

function renderHomeProjects() {
    const el = document.getElementById('homeProjects');
    if (el) el.innerHTML = projects.slice(0, 3).map(p => projectCard(p)).join('');
    setTimeout(() => document.querySelectorAll('.reveal').forEach(e => observer.observe(e)), 50);
}

function renderCatalog(filter = 'all') {
    currentFilter = filter;
    const grid = document.getElementById('catalogGrid');
    const empty = document.getElementById('catalogEmpty');
    
    let filtered = filter === 'all' ? projects : projects.filter(p => p.filter === filter);
    
    const sortValue = document.getElementById('catalogSort')?.value;
    if (sortValue === 'name') filtered.sort((a,b) => a.title.localeCompare(b.title));
    else if (sortValue === 'time-asc') filtered.sort((a,b) => parseInt(a.time) - parseInt(b.time));
    else if (sortValue === 'time-desc') filtered.sort((a,b) => parseInt(b.time) - parseInt(a.time));
    
    if (filtered.length) {
        grid.innerHTML = filtered.map(p => catalogCard(p)).join('');
        grid.style.display = '';
        if (empty) empty.style.display = 'none';
    } else {
        grid.style.display = 'none';
        if (empty) empty.style.display = '';
    }
    setTimeout(() => document.querySelectorAll('.reveal').forEach(e => observer.observe(e)), 50);
}

function sortCatalog(val) {
    renderCatalog(currentFilter);
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = projects.map((p, i) => `
        <div class="gallery-item reveal" onclick="openLightbox(projects.map(x=>x.img), ${i})">
            <img src="${p.img}" alt="${p.title}">
            <div class="gallery-item-overlay">
                <div class="gi-cat">${p.cat}</div>
                <div class="gi-title">${p.title}</div>
            </div>
        </div>
    `).join('');
    
    const homeGal = document.getElementById('homeGallery');
    if (homeGal) {
        homeGal.innerHTML = projects.slice(0, 5).map((p, i) => `
            <div class="gallery-item" onclick="openLightbox(projects.map(x=>x.img), ${i})">
                <img src="${p.img}" alt="${p.title}">
                <div class="gallery-item-overlay">
                    <div class="gi-cat">${p.cat}</div>
                    <div class="gi-title">${p.title}</div>
                </div>
            </div>
        `).join('');
    }
}

// ===== BLOG RENDER (С КЛИКОМ ДЛЯ ОТКРЫТИЯ МОДАЛКИ) =====
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = blogPosts.map((b, i) => `
        <div class="blog-card reveal" onclick="openBlogArticle(${i})" style="cursor: pointer;">
            <div class="blog-card-img"><img src="${b.img}" alt="${b.title}"></div>
            <div class="blog-card-body">
                <div class="blog-tags">${b.tags.map(t => `<span class="blog-tag">${t}</span>`).join('')}</div>
                <h3>${b.title}</h3>
                <p>${b.desc}</p>
                <div class="blog-card-footer">
                    <div class="blog-author"><div class="blog-author-avatar">${b.avatar}</div><div class="blog-author-name">${b.author}</div></div>
                    <span class="blog-date">${b.date}</span>
                </div>
            </div>
        </div>
    `).join('');
    setTimeout(() => document.querySelectorAll('.reveal').forEach(e => observer.observe(e)), 50);
}

function renderFAQ() {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.innerHTML = faqData.map((f, i) => `
        <div class="faq-item reveal" onclick="toggleFaq(this)">
            <div class="faq-q"><span>${f.q}</span><span class="faq-icon">+</span></div>
            <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
        </div>
    `).join('');
}

function toggleFaq(el) {
    const wasOpen = el.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(e => { 
        e.classList.remove('open'); 
        e.querySelector('.faq-a').style.maxHeight = '0'; 
    });
    if (!wasOpen) {
        el.classList.add('open');
        el.querySelector('.faq-a').style.maxHeight = el.querySelector('.faq-a-inner').scrollHeight + 'px';
    }
}

// ===== PROJECT DETAIL =====
function openProject(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;
    currentProjectId = id;
    previousPage = currentPage;
    
    document.getElementById('phImg').src = p.img;
    document.getElementById('phCat').textContent = p.cat;
    document.getElementById('phTitle').textContent = p.title;
    document.getElementById('phTime').textContent = '⏱ ' + p.time;
    document.getElementById('phDiff').textContent = '📊 ' + p.diffLabel;
    
    document.getElementById('pDesc').textContent = p.fullDesc;
    document.getElementById('pGallery').innerHTML = `
        <img src="${p.img}" onclick="openLightbox([${JSON.stringify(p.img)}, '${p.img}'], 0)">
        <img src="${projects[(id+1)%projects.length].img}" onclick="openLightbox(projects.map(x=>x.img), ${(id+1)%projects.length})">
    `;
    
    document.getElementById('pSteps').innerHTML = p.steps.map((s, i) => `
        <div class="step-item"><div class="step-num">${i+1}</div><div class="step-text">${s}</div></div>
    `).join('');
    
    document.getElementById('pMaterials').innerHTML = p.materials.map(m => `<span class="mat-tag">${m}</span>`).join('');
    
    renderReviews(p);
    
    document.getElementById('siCat').textContent = p.cat;
    document.getElementById('siTime').textContent = p.time;
    document.getElementById('siDiff').textContent = p.diffLabel;
    document.getElementById('siScale').textContent = p.scale;
    document.getElementById('siCount').textContent = p.materials.length + ' шт.';
    document.getElementById('similarList').innerHTML = p.similar.map(sid => {
        const s = projects.find(x => x.id === sid);
        return `<div class="similar-item" onclick="openProject(${s.id})"><img src="${s.img}" alt=""><div><h4>${s.title}</h4><p>${s.time} · ${s.diffLabel}</p></div></div>`;
    }).join('');
    
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    document.querySelectorAll('.tab-content').forEach((c, i) => c.classList.toggle('active', i === 0));
    
    document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
    document.getElementById('page-project').classList.add('active');
    currentPage = 'project';
    
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => a.classList.remove('active-link'));
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderReviews(project) {
    const container = document.getElementById('pReviews');
    container.innerHTML = project.reviews.map(r => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${r.avatar || r.name.charAt(0)}</div>
                <div>
                    <div class="review-name">${r.name}</div>
                    <div class="review-date">${r.date || ''}</div>
                </div>
            </div>
            <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
            <div class="review-text">${r.text}</div>
        </div>
    `).join('');
}

function addReview(e) {
    e.preventDefault();
    if (!currentProjectId) return;
    
    const name = document.getElementById('reviewName').value;
    const stars = parseInt(document.getElementById('reviewStars').value);
    const text = document.getElementById('reviewText').value;
    
    const project = projects.find(p => p.id === currentProjectId);
    if (!project) return;
    
    const newReview = {
        name: name,
        avatar: name.charAt(0).toUpperCase(),
        date: new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        stars: stars,
        text: text
    };
    
    project.reviews.unshift(newReview);
    renderReviews(project);
    
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewStars').value = '5';
    document.getElementById('reviewText').value = '';
    
    showToast('✅ Отзыв добавлен!');
}

// ===== FORMS =====
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('formBtn');
    btn.textContent = '✓ Отправлено!';
    btn.style.background = '#6B8F71';
    setTimeout(() => {
        btn.textContent = 'Отправить сообщение →';
        btn.style.background = '';
        e.target.reset();
    }, 2500);
    showToast('✅ Сообщение отправлено!');
}

// ===== EVENT LISTENERS =====
document.addEventListener('click', e => {
    if (e.target.classList.contains('filter-btn') && e.target.closest('#catalogFilters')) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderCatalog(e.target.dataset.filter);
    }
    if (e.target.classList.contains('tab-btn')) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const tabId = 'tab-' + e.target.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
    
    const btn = document.getElementById('backToTop');
    btn.classList.toggle('visible', window.scrollY > 600);
    
    const scrollH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollH) * 100;
    document.getElementById('scrollProgress').style.width = progress + '%';
});

// ===== KEYBOARD (С ЗАКРЫТИЕМ МОДАЛКИ БЛОГА) =====
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeSearch();
        closeBlogModal();  // ← Добавили закрытие блога
    }
    if (e.key === 'ArrowLeft' && document.getElementById('lightbox').classList.contains('open')) lightboxNav(-1);
    if (e.key === 'ArrowRight' && document.getElementById('lightbox').classList.contains('open')) lightboxNav(1);
});

// ===== INTERSECTION OBSERVER =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// ===== INIT =====
renderHomeProjects();
renderCatalog();
renderGallery();
renderBlog();
renderFAQ();
updateFavCount();

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));