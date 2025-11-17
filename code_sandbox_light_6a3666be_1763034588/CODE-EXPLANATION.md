# 📚 Обяснение на структурата и методите на проекта

## 🗂️ Структура на файловете

Проектът е организиран в папки и файлове по следния начин:

```
📁 Проект Агреа
│
├── 📄 index.html          ← Главната страница
├── 📄 inquiry.html        ← Страница за запитвания
├── 📄 admin.html          ← Админ панел
├── 📄 privacy-policy.html ← Политика за поверителност
├── 📄 terms.html          ← Условия за ползване
│
├── 📁 css/
│   └── 📄 style.css       ← Допълнителни стилове
│
├── 📁 js/
│   ├── 📄 main.js         ← Главен JavaScript файл
│   ├── 📄 products.js     ← Логика за продукти
│   ├── 📄 blog.js         ← Логика за блог
│   └── 📄 admin.js        ← Логика за админ панел
│
└── 📁 images/
    ├── 📄 logo.png
    ├── 📄 storefront.jpg
    └── 📁 products/       ← Снимки на продукти
```

---

## 📄 HTML структура (index.html)

### 1. **HEAD секция** - Мета информация

```html
<head>
    <!-- Основни мета тагове -->
    <meta charset="UTF-8">              ← Кодировка (български букви)
    <meta name="viewport"...>           ← Адаптивен дизайн за мобилни
    <meta name="description"...>       ← Описание за Google
    <title>...</title>                 ← Заглавие в таба на браузъра
    
    <!-- Open Graph - за споделяне във Facebook -->
    <meta property="og:title"...>       ← Как изглежда при споделяне
    
    <!-- Structured Data - за Google -->
    <script type="application/ld+json"> ← JSON данни за търсачките
    {
        "@type": "LocalBusiness",      ← Казва на Google че сме бизнес
        "name": "Агроаптека Агреа",
        "telephone": "+359885227915"
    }
    </script>
    
    <!-- Външни библиотеки -->
    <script src="https://cdn.tailwindcss.com"></script>  ← CSS framework
    <link rel="stylesheet" href="...fontawesome...">     ← Икони
    <link rel="stylesheet" href="css/style.css">        ← Наши стилове
</head>
```

**Защо е важно:**
- Мета таговете помагат на Google да разбере какво е сайтът
- Open Graph прави споделянето във Facebook по-хубаво
- Structured Data дава допълнителна информация на търсачките

---

### 2. **BODY секция** - Съдържанието

HTML страницата е разделена на **секции** (sections):

```html
<body>
    <!-- Навигация (винаги видима отгоре) -->
    <nav id="navigation">...</nav>
    
    <!-- Секция 1: Начало (Hero) -->
    <section id="home">...</section>
    
    <!-- Секция 2: Доверие и отзиви -->
    <section id="trust">...</section>
    
    <!-- Секция 3: Каталог с продукти -->
    <section id="catalog">...</section>
    
    <!-- Секция 4: Питай агронома -->
    <section id="ask-agronomist">...</section>
    
    <!-- Секция 5: Блог -->
    <section id="blog">...</section>
    
    <!-- Секция 6: Промоции -->
    <section id="promotions">...</section>
    
    <!-- Секция 7: Галерия -->
    <section id="gallery">...</section>
    
    <!-- Секция 8: Въпроси (FAQ) -->
    <section id="faq">...</section>
    
    <!-- Секция 9: Контакти -->
    <section id="contact">...</section>
    
    <!-- Footer (долу) -->
    <footer>...</footer>
    
    <!-- Плаващи бутони -->
    <button id="back-to-top">...</button>      ← Нагоре
    <a href="whatsapp...">...</a>              ← WhatsApp
    <div id="cookie-banner">...</div>          ← Бисквитки
</body>
```

**Как работи:**
- Всяка секция има `id` (уникален идентификатор)
- Навигацията има линкове към тези `id`-та: `<a href="#catalog">`
- При кликване, страницата скролва до тази секция

---

## 🎨 CSS стилове - Два подхода

### 1. **Tailwind CSS** (Utility-first framework)

**Какво е Tailwind:**
- Библиотека с готови CSS класове
- Вместо да пишем CSS, използваме класове в HTML

**Примери:**

```html
<!-- Вместо да пишем CSS файл: -->
<!-- .my-button { background: green; padding: 10px; } -->

<!-- Използваме класове директно: -->
<button class="bg-agro-green px-4 py-2 rounded-lg">
    Кликни ме
</button>
```

**Разбивка на класовете:**
- `bg-agro-green` = фон (background) зелен
- `px-4` = padding хоризонтално 4 единици
- `py-2` = padding вертикално 2 единици
- `rounded-lg` = закръглени ъгли

**Предимства:**
- Бързо писане
- Малко код
- Лесно за промяна

**Недостатъци:**
- HTML става по-дълъг
- Трябва да знаеш класовете

---

### 2. **Custom CSS** (css/style.css)

**Когато използваме:**
- Сложни анимации
- Специфични ефекти
- Dark mode стилове

**Пример:**

```css
/* Анимация за появяване */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-in;
}

/* Dark mode стилове */
.dark .chip {
    background: rgba(76, 175, 80, 0.2);
    color: #90EE90;
}
```

**Как работи Dark Mode:**
1. JavaScript добавя клас `dark` на `<html>` елемента
2. CSS правилата с `.dark` се активират
3. Цветовете се променят автоматично

---

## ⚙️ JavaScript функционалност

### Структура на JavaScript файловете

#### **main.js** - Главен файл

**Какво прави:**
1. Управлява dark mode
2. Отваря/затваря мобилно меню
3. Плавно скролване
4. Обработва форми
5. Cookie banner
6. Back to top бутон

**Ключови концепции:**

##### 1. **Event Listeners** (Слушатели за събития)

```javascript
// Когато страницата се зареди
document.addEventListener('DOMContentLoaded', function() {
    // Тук изпълняваме код
});

// Когато кликнеш на бутон
button.addEventListener('click', function() {
    // Това се случва при клик
});
```

**Пример - Мобилно меню:**

```javascript
// Намираме бутона
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Добавяме слушател за клик
mobileMenuBtn.addEventListener('click', function() {
    // Превключваме видимостта
    mobileMenu.classList.toggle('hidden');
    // 'hidden' класът скрива елемента
});
```

##### 2. **localStorage** (Запазване в браузъра)

```javascript
// Запазване
localStorage.setItem('theme', 'dark');

// Четене
const theme = localStorage.getItem('theme');

// Изтриване
localStorage.removeItem('theme');
```

**Защо го използваме:**
- За dark mode избор (запомня се)
- За cookie съгласие
- За запитвания (в админ панела)

##### 3. **DOM Manipulation** (Промяна на HTML)

```javascript
// Намиране на елемент
const element = document.getElementById('my-id');
const elements = document.querySelectorAll('.my-class');

// Промяна на съдържание
element.textContent = 'Нов текст';
element.innerHTML = '<strong>HTML</strong>';

// Добавяне/премахване на класове
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('toggle-class');
```

##### 4. **Functions** (Функции)

```javascript
// Създаване на функция
function doSomething() {
    // Код
}

// Извикване
doSomething();

// Функция с параметри
function greet(name) {
    console.log('Здравей, ' + name);
}
greet('Иван'); // Извежда: "Здравей, Иван"
```

**Пример от нашия код:**

```javascript
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');  // Добавя 'dark' клас
    } else {
        root.classList.remove('dark'); // Премахва 'dark' клас
    }
    localStorage.setItem('theme', theme); // Запазва избора
}
```

---

#### **products.js** - Управление на продукти

**Какво прави:**
1. Съхранява данни за продукти (масив)
2. Рендира продуктите в HTML
3. Филтрира продукти (по категория, култура, текст)

**Ключови концепции:**

##### 1. **Arrays** (Масиви) - Списъци с данни

```javascript
const productsData = [
    {
        id: 1,
        name: "Калипсо 480 SC",
        category: "препарати",
        price: 45.90,
        image: "images/products/pesticide.jpg"
    },
    {
        id: 2,
        name: "NPK 15-15-15",
        category: "торове",
        price: 32.50
    }
];
```

**Как работи:**
- Всеки продукт е обект `{}`
- Всички продукти са в масив `[]`
- Можем да достъпим: `productsData[0].name` → "Калипсо 480 SC"

##### 2. **Template Literals** (Шаблони за текст)

```javascript
// Старият начин (сложен)
const html = '<div>' + product.name + '</div>';

// Новият начин (лесен)
const html = `<div>${product.name}</div>`;
```

**Пример от нашия код:**

```javascript
function renderProducts(products) {
    const html = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} лв.</p>
        </div>
    `).join('');
    
    document.getElementById('products-grid').innerHTML = html;
}
```

**Какво прави:**
1. `products.map()` - обхожда всеки продукт
2. Създава HTML за всеки продукт
3. `.join('')` - обединява всички в един текст
4. `innerHTML` - вмъква HTML в страницата

##### 3. **Filter** (Филтриране)

```javascript
// Филтриране на продукти
const filtered = productsData.filter(product => {
    return product.category === 'препарати';
});
// Връща само продукти от категория "препарати"
```

**Пример от нашия код:**

```javascript
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const filtered = productsData.filter(product => {
        // Проверка за текст
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        
        // Проверка за категория
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        
        // Връща true само ако и двете са верни
        return matchesSearch && matchesCategory;
    });
    
    renderProducts(filtered);
}
```

##### 4. **Event Delegation** (Делегиране на събития)

**Проблем:**
- Продуктите се създават динамично
- Бутоните не съществуват при зареждане на страницата
- Обикновени event listeners не работят

**Решение:**

```javascript
// Вместо да добавяме listener на всеки бутон:
// ❌ productButton.addEventListener('click', ...) // Не работи!

// Добавяме listener на родителя:
const productsGrid = document.getElementById('products-grid');
productsGrid.addEventListener('click', function(e) {
    // Проверяваме дали кликнатото е бутон
    const button = e.target.closest('[data-inquiry-btn]');
    if (button) {
        // Намерили сме бутон - изпълняваме код
        const productId = button.getAttribute('data-product-id');
        openInquiryModal(productId);
    }
});
```

**Как работи:**
- Слушаме клик на родителя (`products-grid`)
- `e.target` е елементът, който е кликнат
- `closest()` търси родител с атрибут `data-inquiry-btn`
- Ако намери - изпълняваме действието

---

#### **admin.js** - Админ панел

**Какво прави:**
1. Автентикация (проверка на парола)
2. Зарежда запитвания от localStorage
3. Показва статистика
4. Позволява отговор на запитвания

**Ключови концепции:**

##### 1. **sessionStorage vs localStorage**

```javascript
// localStorage - остава дори след затваряне на браузъра
localStorage.setItem('theme', 'dark');

// sessionStorage - изчезва при затваряне на таба
sessionStorage.setItem('adminLoggedIn', 'true');
```

**Защо използваме sessionStorage за login:**
- По-безопасно
- Изчезва при затваряне на браузъра
- Потребителят трябва да се логне отново

##### 2. **JSON** (JavaScript Object Notation)

```javascript
// Обект в JavaScript
const inquiry = {
    id: "123",
    name: "Иван",
    phone: "0888123456"
};

// Преобразуване в текст (за запазване)
const jsonString = JSON.stringify(inquiry);
// Резултат: '{"id":"123","name":"Иван","phone":"0888123456"}'

// Преобразуване обратно (при четене)
const inquiryObject = JSON.parse(jsonString);
// Резултат: {id: "123", name: "Иван", phone: "0888123456"}
```

**Защо е важно:**
- localStorage може да съхранява само текст
- JSON ни позволява да запазваме обекти

**Пример:**

```javascript
// Запазване на запитвания
function saveInquiries(inquiries) {
    const jsonString = JSON.stringify(inquiries);
    localStorage.setItem('inquiries', jsonString);
}

// Четене на запитвания
function getInquiries() {
    const jsonString = localStorage.getItem('inquiries') || '[]';
    return JSON.parse(jsonString);
}
```

---

## 🔄 Как всичко работи заедно

### Пример: Кликване на "Запитване" бутон

1. **HTML** - Бутонът е в страницата:
```html
<button data-inquiry-btn data-product-id="1">
    Запитване
</button>
```

2. **JavaScript** - Слушаме за клик:
```javascript
// В products.js
productsGrid.addEventListener('click', function(e) {
    const button = e.target.closest('[data-inquiry-btn]');
    if (button) {
        const productId = button.getAttribute('data-product-id');
        openInquiryModal(productId);
    }
});
```

3. **Функцията** - Отваря форма:
```javascript
function openInquiryModal(productId) {
    // Намираме продукта
    const product = productsData.find(p => p.id === productId);
    
    // Пренасочваме към inquiry.html с параметър
    window.location.href = `inquiry.html?product=${product.name}`;
}
```

4. **inquiry.html** - Чете параметъра:
```javascript
// В inquiry.html
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// Попълва формата
document.getElementById('product').value = productName;
```

5. **При изпращане** - Запазва в localStorage:
```javascript
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const inquiryData = {
        ...Object.fromEntries(formData),
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'new'
    };
    
    // Запазване
    const existing = JSON.parse(localStorage.getItem('inquiries') || '[]');
    existing.push(inquiryData);
    localStorage.setItem('inquiries', JSON.stringify(existing));
});
```

6. **Админ панел** - Чете и показва:
```javascript
// В admin.js
function renderInquiries() {
    const inquiries = getInquiries(); // Чете от localStorage
    const html = inquiries.map(inquiry => renderInquiry(inquiry)).join('');
    document.getElementById('inquiries-list').innerHTML = html;
}
```

---

## 🎯 Ключови методи и техники

### 1. **Separation of Concerns** (Разделяне на отговорности)

- **HTML** = Структура и съдържание
- **CSS** = Визуален дизайн
- **JavaScript** = Поведение и интерактивност

**Защо:**
- Лесно за поддръжка
- Лесно за промяна
- Чист код

### 2. **Progressive Enhancement** (Прогресивно подобрение)

- Сайтът работи без JavaScript (основни функции)
- JavaScript добавя интерактивност
- Ако JavaScript не работи - сайтът все още е използваем

### 3. **Responsive Design** (Адаптивен дизайн)

**Tailwind класове:**
```html
<!-- Мобилен: 1 колона, Desktop: 3 колони -->
<div class="grid grid-cols-1 md:grid-cols-3">
```

**Как работи:**
- `grid-cols-1` = 1 колона по подразбиране (мобилен)
- `md:grid-cols-3` = 3 колони на екрани > 768px

### 4. **Accessibility** (Достъпност)

```html
<!-- ARIA атрибути за screen readers -->
<button aria-label="Превключи тема">
    <i class="fas fa-moon"></i>
</button>

<!-- Alt текст за изображения -->
<img src="logo.png" alt="Агреа Лого">
```

**Защо:**
- Хора с увреждания могат да използват сайта
- По-добро SEO
- По-добър потребителски опит

---

## 📝 Резюме

### Структура:
1. **HTML** - Скелетът (структура)
2. **CSS** - Визуалният дизайн (стилове)
3. **JavaScript** - Мозъкът (логика)

### Методи:
1. **Tailwind CSS** - Бързо стилизиране
2. **Custom CSS** - Сложни ефекти
3. **Event Listeners** - Реакция на действия
4. **localStorage** - Запазване на данни
5. **DOM Manipulation** - Промяна на страницата
6. **Template Literals** - Създаване на HTML
7. **Event Delegation** - Работа с динамичен контент

### Поток на данни:
1. Потребителят кликва → JavaScript слуша
2. JavaScript обработва → Променя HTML/CSS
3. Данните се запазват → localStorage
4. Страницата се обновява → Показва нови данни

---

## 🎓 Допълнителни ресурси

- **Tailwind CSS документация:** https://tailwindcss.com/docs
- **MDN Web Docs (JavaScript):** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **W3Schools (HTML/CSS):** https://www.w3schools.com/

---

*Този документ обяснява структурата и методите, използвани в проекта. Ако имате въпроси, моля питайте!*

