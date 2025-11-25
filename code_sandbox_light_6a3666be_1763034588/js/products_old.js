// Product Data for Agro Apteka Agrea
const productsData = [
    // Препарати за растителна защита
    {
        id: 1,
        name: "Мовенто 100 OD",
        category: "препарати",
        culture: ["зърнени", "зеленчуци", "овощни", "лозя"],
        price: 48.50,
        unit: "100 мл",
        description: "Системен инсектицид за борба с листни въшки, трипс, бяла мушица и акари",
        features: ["Двупосочна системна активност", "Дълъг защитен период", "Безопасен за полезни насекоми"],
        activeSubstance: "Спиротетрамат 100 g/l",
        brand: "Bayer Crop Science",
        availability: "in_stock",
        isNew: true,
        image: "images/products/movento.png"
    },
    {
        id: 2,
        name: "Ревистар 250 EC",
        category: "препарати",
        culture: ["зърнени", "лозя"],
        price: 42.90,
        unit: "1 л",
        description: "Модерен фунгицид за борба с листни болести по зърнени култури и лозя",
        features: ["Двойна активност", "Превантивна и лечебна защита", "Високо ефективен"],
        activeSubstance: "Мефентрифлуконазол + Флуксапироксад",
        brand: "BASF",
        availability: "in_stock",
        isNew: true,
        image: "images/products/revystar.png"
    },
    {
        id: 3,
        name: "Сиванто Прайм 200 SL",
        category: "препарати",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 55.00,
        unit: "1 л",
        description: "Системен инсектицид с широк спектър на действие",
        features: ["Бързо действие", "Системна активност", "Безопасен за пчели"],
        activeSubstance: "Флупирадифурон 200 g/l",
        brand: "Bayer Crop Science",
        availability: "in_stock",
        isNew: true,
        image: "images/products/sivanto.jpg"
    },
    {
        id: 4,
        name: "Аксиал 50 EC",
        category: "препарати",
        culture: ["зърнени"],
        price: 72.00,
        unit: "5 л",
        description: "Хербицид за борба с едногодишни и многогодишни треви в пшеница и ечемик",
        features: ["Селективен", "Ефективен срещу устойчиви треви", "Отлична толерантност"],
        activeSubstance: "Пиноксаден 50 g/l",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/axial.png"
    },
    {
        id: 5,
        name: "Елатус Ера 250 SC",
        category: "препарати",
        culture: ["зърнени", "лозя"],
        price: 39.90,
        unit: "1 л",
        description: "Системен фунгицид срещу листни болести по зърнени култури и лозя",
        features: ["Двойна активност", "Превантивна и лечебна защита", "Универсален"],
        activeSubstance: "Азоксистробин + Протиоконазол",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: true,
        image: "images/products/elatus.png"
    },
    {
        id: 21,
        name: "Моспилан 20 SP",
        category: "препарати",
        culture: ["зеленчуци", "овощни", "лозя"],
        price: 36.50,
        unit: "200 г",
        description: "Системен инсектицид за борба с листни въшки, трипс и други вредители",
        features: ["Бързо действие", "Системна активност", "Широк спектър"],
        activeSubstance: "Ацетамиприд 200 g/kg",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/mospilan.png"
    },
    {
        id: 22,
        name: "Просарo 250 EC",
        category: "препарати",
        culture: ["зърнени", "лозя"],
        price: 44.00,
        unit: "1 л",
        description: "Системен фунгицид за борба с листни болести по зърнени култури",
        features: ["Двойна активност", "Лечебна и защитна дейност", "Високо ефективен"],
        activeSubstance: "Протиоконазол + Тебуконазол",
        brand: "Bayer Crop Science",
        availability: "limited",
        isNew: false,
        image: "images/products/prosaro.png"
    },

    // Торове и подхранване
    {
        id: 6,
        name: "Амониева селитра 34%",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 42.00,
        unit: "25 кг",
        description: "Азотен тор за подхранване във всички фази на развитие",
        features: ["Бързо усвояване", "Подходящ за всички култури", "Високо съдържание на азот"],
        activeSubstance: "NH4NO3 - 34% N",
        brand: "Agropolychim",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 7,
        name: "NPK 15-15-15",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 38.00,
        unit: "25 кг",
        description: "Комплексен минерален тор за основно подхранване",
        features: ["Балансирана формула", "За всички култури", "Универсално приложение"],
        activeSubstance: "15% N, 15% P2O5, 15% K2O",
        brand: "Timac Agro",
        availability: "limited",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 8,
        name: "Монокалиев фосфат",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 56.00,
        unit: "25 кг",
        description: "Тор за листно подхранване с фосфор и калий",
        features: ["Водоразтворим", "За листно подхранване", "Подобрява качеството"],
        activeSubstance: "52% P2O5, 34% K2O",
        brand: "Yara",
        availability: "preorder",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 9,
        name: "Уреа 46%",
        category: "торове",
        culture: ["зърнени", "зеленчуци"],
        price: 44.00,
        unit: "25 кг",
        description: "Високоефективен азотен тор",
        features: ["Най-високо съдържание на азот", "Икономикачен", "Бързо действие"],
        activeSubstance: "CO(NH2)2 - 46% N",
        brand: "EuroChem",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 10,
        name: "Фолиум Комплекс",
        category: "торове",
        culture: ["зеленчуци", "овощни", "лозя"],
        price: 28.50,
        unit: "5 л",
        description: "Течен тор за листно подхранване с микроелементи",
        features: ["Пълен комплекс микроелементи", "Бързо усвояване", "Стимулира растежа"],
        activeSubstance: "NPK + микроелементи",
        brand: "Valagro",
        availability: "limited",
        isNew: true,
        image: "images/products/fertilizer.jpg"
    },

    // Семена
    {
        id: 11,
        name: "Пшеница Садово 1",
        category: "семена",
        culture: ["зърнени"],
        price: 85.00,
        unit: "50 кг",
        description: "Зимна хлебна пшеница с висок потенциал",
        features: ["Висок добив", "Добро качество", "Устойчива на полягане"],
        activeSubstance: "Сертифицирани семена",
        brand: "Садово",
        availability: "preorder",
        isNew: false,
        image: "images/products/seeds.jpg"
    },
    {
        id: 12,
        name: "Царевица Неркосид",
        category: "семена",
        culture: ["зърнени"],
        price: 120.00,
        unit: "един. 50 000 семена",
        description: "Раннозрял хибрид със стабилен добив",
        features: ["ФАО 400", "Устойчивост на суша", "Високо качество на зърното"],
        activeSubstance: "F1 хибрид",
        brand: "LG Seeds",
        availability: "in_stock",
        isNew: true,
        image: "images/products/seeds.jpg"
    },
    {
        id: 13,
        name: "Слънчоглед Ориоле",
        category: "семена",
        culture: ["зърнени"],
        price: 95.00,
        unit: "един. 150 000 семена",
        description: "Високомаслен хибрид с Clearfield технология",
        features: ["Clearfield технология", "Високо маслено съдържание", "Толерантност към хербициди"],
        activeSubstance: "F1 хибрид",
        brand: "Syngenta",
        availability: "limited",
        isNew: false,
        image: "images/products/seeds.jpg"
    },
    {
        id: 14,
        name: "Домати Берлога F1",
        category: "семена",
        culture: ["зеленчуци"],
        price: 18.50,
        unit: "1000 семена",
        description: "Хибриден сорт за оранжерийно и полско отглеждане",
        features: ["Ранен", "Високопродуктивен", "Устойчив на болести"],
        activeSubstance: "F1 хибрид",
        brand: "Rijk Zwaan",
        availability: "preorder",
        isNew: false,
        image: "images/products/seeds.jpg"
    },

    // Фуражи
    {
        id: 15,
        name: "Царевична каша",
        category: "фуражи",
        culture: [],
        price: 32.00,
        unit: "25 кг",
        description: "Високоенергиен фураж за животни",
        features: ["Висока енергийна стойност", "Добра смилаемост", "За всички видове животни"],
        activeSubstance: "Мляна царевица",
        brand: "Bonmix",
        availability: "in_stock",
        isNew: false,
        image: "images/products/feed.jpg"
    },
    {
        id: 16,
        name: "Пълнодебен екструдиран фураж за свине",
        category: "фуражи",
        culture: [],
        price: 48.00,
        unit: "25 кг",
        description: "Балансиран фураж за угояване на свине",
        features: ["Пълноценно хранене", "Високопротеинов", "Отлично усвояване"],
        activeSubstance: "Комплексна смес",
        brand: "Purina",
        availability: "limited",
        isNew: false,
        image: "images/products/feed.jpg"
    },
    {
        id: 17,
        name: "Люцернов сенаж",
        category: "фуражи",
        culture: [],
        price: 15.00,
        unit: "бала ~20 кг",
        description: "Качествен сенаж от люцерна",
        features: ["Висок протеин", "Богат на минерали", "За преживни животни"],
        activeSubstance: "Сушена люцерна",
        brand: "Agroland",
        availability: "in_stock",
        isNew: false,
        image: "images/products/feed.jpg"
    },

    // Инвентар и оборудване
    {
        id: 18,
        name: "Пръскачка налегателна 16л",
        category: "инвентар",
        culture: [],
        price: 85.00,
        unit: "1 бр",
        description: "Гръбна пръскачка с налягане за градини",
        features: ["Висококачествена", "Регулируем разпръсквач", "Здрав материал"],
        activeSubstance: "Пластмасов резервоар",
        brand: "Gardena",
        availability: "on_request",
        isNew: true,
        image: "images/products/sprayer.jpg"
    },
    {
        id: 19,
        name: "Градински ръкавици",
        category: "инвентар",
        culture: [],
        price: 8.50,
        unit: "чифт",
        description: "Защитни ръкавици за градинска работа",
        features: ["Издръжливи", "Удобни", "Защита от наранявания"],
        activeSubstance: "Текстил с каучукова покривка",
        brand: "Wolf Garten",
        availability: "in_stock",
        isNew: false,
        image: "images/products/sprayer.jpg"
    },
    {
        id: 20,
        name: "Секатор професионален",
        category: "инвентар",
        culture: [],
        price: 32.00,
        unit: "1 бр",
        description: "Професионален секатор за рязане и подрязване",
        features: ["Остър и прецизен", "Ергономична дръжка", "Дълготраен"],
        activeSubstance: "Стомана с тефлоново покритие",
        brand: "Felco",
        availability: "limited",
        isNew: false,
        image: "images/products/sprayer.jpg"
    }
];

const categoryLabels = {
    "препарати": "Растителна защита",
    "торове": "Торове",
    "семена": "Семена",
    "фуражи": "Фуражи",
    "инвентар": "Инвентар"
};

function getCategoryLabel(category) {
    return categoryLabels[category] || category;
}

const availabilityMap = {
    in_stock: { label: "В наличност", className: "badge badge-success" },
    limited: { label: "Ограничено", className: "badge badge-warning" },
    preorder: { label: "Предварителна заявка", className: "badge badge-info" },
    on_request: { label: "По заявка", className: "badge badge-info" }
};

function getAvailabilityMeta(product) {
    if (product.availability && availabilityMap[product.availability]) {
        return availabilityMap[product.availability];
    }
    return availabilityMap.in_stock;
}

function formatCultures(cultures) {
    if (!cultures || cultures.length === 0) {
        return "Универсално приложение";
    }
    return cultures.map(culture => culture.charAt(0).toUpperCase() + culture.slice(1)).join(", ");
}

// Function to render products
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    
    if (!grid) return;
    
    if (products.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    grid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    grid.innerHTML = products.map(product => {
        const availability = getAvailabilityMeta(product);
        const cultures = formatCultures(product.culture);
        const featureTags = product.features.map(feature => `
            <span class="product-tag">${feature}</span>
        `).join('');
        return `
            <article class="product-card relative flex h-full flex-col rounded-3xl border border-agro-light bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl" data-category="${product.category}">
                <div class="absolute left-6 top-5 flex flex-wrap items-center gap-2">
                    <span class="${availability.className}">${availability.label}</span>
                </div>
                <div class="absolute right-6 top-5">
                    <span class="category-chip">${getCategoryLabel(product.category)}</span>
            </div>
                <div class="product-media relative h-48 overflow-hidden rounded-3xl bg-agro-light/60 ${product.category === 'препарати' ? 'product-media-small' : ''}">
                    <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-agro-dark/10 via-transparent to-transparent"></div>
                </div>
                <div class="flex flex-1 flex-col gap-4 p-6">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="product-brand">${product.brand || 'Premium Selection'}</span>
                            ${product.isNew ? '<span class="badge badge-info">Нов продукт</span>' : ''}
                        </div>
                        <h3 class="text-xl font-bold text-agro-dark">${product.name}</h3>
                        <p class="product-desc mt-2 text-sm text-gray-600">${product.description}</p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        ${featureTags}
                    </div>
                    <div class="rounded-2xl bg-agro-light/60 p-4 text-sm text-gray-600">
                        <span class="font-semibold text-agro-dark">Подходящ за:</span> ${cultures}
                    </div>
                    <div class="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p class="text-xs uppercase tracking-wide text-gray-500">Цена</p>
                            <p class="text-2xl font-bold text-agro-green">${product.price.toFixed(2)} лв</p>
                            ${product.priceEur ? `<p class="text-sm text-gray-500">≈ ${product.priceEur.toFixed(2)} €</p>` : ''}
                            <p class="text-sm text-gray-500">/ ${product.unit}</p>
                </div>
                        <div class="flex w-full flex-col gap-2 sm:w-48">
                            <button type="button" data-inquiry-btn data-product-id="${product.id}" data-product-name="${product.name.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" class="product-btn-primary">
                    <i class="fas fa-envelope mr-2"></i>Запитване
                </button>
                            <div class="flex gap-2">
                                <button type="button" data-compare-btn data-product-id="${product.id}" class="product-btn-secondary flex-1 text-xs sm:text-sm whitespace-nowrap">
                                    <i class="fas fa-balance-scale mr-1 sm:mr-2"></i><span class="hidden sm:inline">Сравни</span><span class="sm:hidden">Сравн.</span>
                                </button>
                                <button type="button" data-share-btn data-product-id="${product.id}" data-product-name="${product.name.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" class="product-btn-secondary flex-1 text-xs sm:text-sm whitespace-nowrap">
                                    <i class="fas fa-share-alt mr-1 sm:mr-2"></i><span class="hidden sm:inline">Сподели</span><span class="sm:hidden">Спод.</span>
                                </button>
                            </div>
                        </div>
            </div>
        </div>
            </article>
        `;
    }).join('');
}

// Function to filter products
function filterProducts() {
    const searchTerm = document.getElementById('product-search')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const cultureFilter = document.getElementById('culture-filter')?.value || '';
    const availabilityFilter = document.querySelector('[data-filter="availability"].active')?.dataset.value || '';
    
    let filtered = productsData;
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by category
    if (categoryFilter) {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    // Filter by culture
    if (cultureFilter) {
        filtered = filtered.filter(product => 
            product.culture.includes(cultureFilter) || product.culture.length === 0
        );
    }

    if (availabilityFilter) {
        filtered = filtered.filter(product => product.availability === availabilityFilter);
    }
    
    renderProducts(filtered);
}

// Function to open inquiry modal
function openInquiryModal(productName) {
    // Redirect to inquiry page with product name as parameter
    if (!productName) {
        console.error('Product name is required');
        return;
    }
    const encodedProductName = encodeURIComponent(productName);
    const inquiryUrl = `inquiry.html?product=${encodedProductName}`;
    console.log('Redirecting to:', inquiryUrl);
    window.location.href = inquiryUrl;
            }

// Make function globally available
window.openInquiryModal = openInquiryModal;

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render all products initially
    renderProducts(productsData);
    
    // Add event listeners for filters
    const searchInput = document.getElementById('product-search');
    const categorySelect = document.getElementById('category-filter');
    const cultureSelect = document.getElementById('culture-filter');
    const availabilityChips = document.querySelectorAll('[data-filter="availability"]');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', filterProducts);
    }
    
    if (cultureSelect) {
        cultureSelect.addEventListener('change', filterProducts);
    }

    if (availabilityChips.length) {
        availabilityChips.forEach(chip => {
            chip.addEventListener('click', () => {
                availabilityChips.forEach(c => {
                    c.classList.remove('active');
                    c.setAttribute('aria-pressed', 'false');
                });
                chip.classList.add('active');
                chip.setAttribute('aria-pressed', 'true');
                filterProducts();
            });
        });
    }
    
    // Add click handlers for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            const categorySelect = document.getElementById('category-filter');
            if (categorySelect) {
                categorySelect.value = category;
                filterProducts();
                
                // Scroll to catalog
                const catalogSection = document.getElementById('catalog');
                if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Event delegation for inquiry and share buttons
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.addEventListener('click', function(e) {
            // Handle inquiry button clicks
            const inquiryBtn = e.target.closest('[data-inquiry-btn]');
            if (inquiryBtn) {
                e.preventDefault();
                e.stopPropagation();
                // Try to get product name from data attribute, or find by ID
                let productName = inquiryBtn.getAttribute('data-product-name');
                if (!productName) {
                    const productId = inquiryBtn.getAttribute('data-product-id');
                    if (productId) {
                        const product = productsData.find(p => p.id === parseInt(productId));
                        if (product) {
                            productName = product.name;
                        }
                    }
                }
                console.log('Inquiry button clicked for product:', productName);
                if (productName) {
                    openInquiryModal(productName);
                } else {
                    console.error('Product name not found');
                }
                return;
            }
            
            // Handle share button clicks
            const shareBtn = e.target.closest('[data-share-btn]');
            if (shareBtn) {
                e.preventDefault();
                e.stopPropagation();
                let productName = shareBtn.getAttribute('data-product-name');
                if (!productName) {
                    const productId = shareBtn.getAttribute('data-product-id');
                    if (productId) {
                        const product = productsData.find(p => p.id === parseInt(productId));
                        if (product) {
                            productName = product.name;
                        }
                    }
                }
                if (productName && typeof shareProduct === 'function') {
                    shareProduct(productName);
                }
                return;
            }
        });
    } else {
        console.error('Products grid not found');
    }
});