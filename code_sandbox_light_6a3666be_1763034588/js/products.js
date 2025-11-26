// Product Data for Agro Apteka Agrea - Updated Catalog 2025
// Exchange rate: 1 EUR = 1.96 BGN

const productsData = [
    // ФУНГИЦИДИ
    {
        id: 1,
        name: "Проплант",
        category: "фунгициди",
        culture: ["зеленчуци", "овощни", "лозя"],
        price: 3.38,
        priceEur: 1.72,
        unit: "10 мл",
        description: "Фунгицид за борба с гъбични болести",
        features: ["Ефективен", "Лесно приложение"],
        activeSubstance: "Пропамокарб",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 2,
        name: "Алиет Флаш",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "30 гр",
        description: "Фунгицид за борба с мана и други гъбични болести",
        features: ["Бързо действие", "Широк спектър"],
        activeSubstance: "Фосетил алуминий",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 3,
        name: "Витени ТриПло",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "45 гр",
        description: "Трикомпонентен фунгицид за комплексна защита",
        features: ["Тройна активност", "Високо ефективен"],
        activeSubstance: "Манкозеб + Металаксил + Фолпет",
        brand: "DuPont",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 4,
        name: "Корсейт",
        category: "фунгициди",
        culture: ["зеленчуци", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "5 гр",
        description: "Фунгицид за борба с фитофтора и други болести",
        features: ["Системен", "Превантивна защита"],
        activeSubstance: "Диметоморф",
        brand: "BASF",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 5,
        name: "ФлинтМакс",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.38,
        priceEur: 1.72,
        unit: "5 гр",
        description: "Фунгицид за борба с мана и други листни болести",
        features: ["Системен", "Дълъг защитен период"],
        activeSubstance: "Трифлоксистробин",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 6,
        name: "Дарамун",
        category: "фунгициди",
        culture: ["лозя"],
        price: 3.80,
        priceEur: 1.94,
        unit: "20 мл",
        description: "Фунгицид за борба с мана по лозя",
        features: ["Специализиран", "Високо ефективен"],
        activeSubstance: "Дифеноконазол",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 7,
        name: "Ревиона",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "50 мл",
        description: "Модерен фунгицид за борба с листни болести",
        features: ["Двойна активност", "Превантивна и лечебна защита"],
        activeSubstance: "Мефентрифлуконазол",
        brand: "BASF",
        availability: "in_stock",
        isNew: true,
        image: "images/products/pesticide.png"
    },
    {
        id: 8,
        name: "Сигнум",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 12.80,
        priceEur: 6.53,
        unit: "40 гр",
        description: "Системен фунгицид за комплексна защита",
        features: ["Двойна активност", "Високо ефективен"],
        activeSubstance: "Боскалид + Пираклостробин",
        brand: "BASF",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 9,
        name: "Арметил Ц",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 7.50,
        priceEur: 3.83,
        unit: "125 гр",
        description: "Фунгицид за борба с мана и други болести",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Цимоксанил + Манкозеб",
        brand: "DuPont",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 10,
        name: "Редомил Голд R",
        category: "фунгициди",
        culture: ["зеленчуци", "лозя"],
        price: 4.50,
        priceEur: 2.30,
        unit: "50 гр",
        description: "Фунгицид за борба с фитофтора и мана",
        features: ["Системен", "Превантивна защита"],
        activeSubstance: "Манкозеб + Металаксил-М",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 11,
        name: "Редомил Голд R",
        category: "фунгициди",
        culture: ["зеленчуци", "лозя"],
        price: 6.80,
        priceEur: 3.47,
        unit: "100 гр",
        description: "Фунгицид за борба с фитофтора и мана",
        features: ["Системен", "Превантивна защита"],
        activeSubstance: "Манкозеб + Металаксил-М",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 12,
        name: "Скор",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 8.80,
        priceEur: 4.49,
        unit: "20 мл",
        description: "Системен фунгицид за борба с мана и парша",
        features: ["Системен", "Лечебна и защитна дейност"],
        activeSubstance: "Дифеноконазол",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 13,
        name: "Куадрис",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 8.80,
        priceEur: 4.49,
        unit: "25 мл",
        description: "Фунгицид за борба с листни болести",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Азоксистробин",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 14,
        name: "Топаз",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "20 мл",
        description: "Системен фунгицид за борба с мана",
        features: ["Системен", "Ефективен"],
        activeSubstance: "Пенконазол",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 15,
        name: "Синстар",
        category: "фунгициди",
        culture: ["лозя"],
        price: 5.80,
        priceEur: 2.96,
        unit: "20 мл",
        description: "Фунгицид за борба с мана по лозя",
        features: ["Системен", "Специализиран"],
        activeSubstance: "Фенхимид",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 16,
        name: "Вивандо",
        category: "фунгициди",
        culture: ["лозя"],
        price: 7.80,
        priceEur: 3.98,
        unit: "20 мл",
        description: "Фунгицид за борба с мана и други болести по лозя",
        features: ["Системен", "Високо ефективен"],
        activeSubstance: "Флуопирам",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 17,
        name: "Дивкор",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "20 мл",
        description: "Фунгицид за борба с листни болести",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Дифеноконазол",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 18,
        name: "Инфинито",
        category: "фунгициди",
        culture: ["зеленчуци", "лозя"],
        price: 5.80,
        priceEur: 2.96,
        unit: "30 мл",
        description: "Фунгицид за борба с фитофтора и други болести",
        features: ["Системен", "Превантивна защита"],
        activeSubstance: "Флуопиколид + Пропамокарб",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 19,
        name: "Кумулус",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 1.80,
        priceEur: 0.92,
        unit: "20 гр",
        description: "Контактен фунгицид за борба с мана",
        features: ["Контактен", "Безопасен"],
        activeSubstance: "Сяра",
        brand: "BASF",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 20,
        name: "Кумулус",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 1.80,
        priceEur: 0.92,
        unit: "200 гр",
        description: "Контактен фунгицид за борба с мана",
        features: ["Контактен", "Безопасен"],
        activeSubstance: "Сяра",
        brand: "BASF",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 21,
        name: "Фунгуран",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 12.80,
        priceEur: 6.53,
        unit: "150 гр",
        description: "Фунгицид за борба с мана и други болести",
        features: ["Системен", "Високо ефективен"],
        activeSubstance: "Манкозеб",
        brand: "DuPont",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 22,
        name: "Шампион",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "15 гр",
        description: "Контактен фунгицид за борба с мана",
        features: ["Контактен", "Безопасен"],
        activeSubstance: "Меден хидроксид",
        brand: "Nufarm",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 23,
        name: "Шампион",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "75 гр",
        description: "Контактен фунгицид за борба с мана",
        features: ["Контактен", "Безопасен"],
        activeSubstance: "Меден хидроксид",
        brand: "Nufarm",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 24,
        name: "Шампион",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 12.80,
        priceEur: 6.53,
        unit: "150 гр",
        description: "Контактен фунгицид за борба с мана",
        features: ["Контактен", "Безопасен"],
        activeSubstance: "Меден хидроксид",
        brand: "Nufarm",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 25,
        name: "Бордо Микс",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "50 гр",
        description: "Класически фунгицид за борба с мана",
        features: ["Контактен", "Традиционен"],
        activeSubstance: "Меден сулфат + Вар",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 26,
        name: "Бордо Микс",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "100 гр",
        description: "Класически фунгицид за борба с мана",
        features: ["Контактен", "Традиционен"],
        activeSubstance: "Меден сулфат + Вар",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 27,
        name: "Бордо Микс",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 9.80,
        priceEur: 5.00,
        unit: "300 гр",
        description: "Класически фунгицид за борба с мана",
        features: ["Контактен", "Традиционен"],
        activeSubstance: "Меден сулфат + Вар",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 28,
        name: "Бордлезов Разтвор",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "175 гр",
        description: "Фунгициден разтвор за борба с мана",
        features: ["Контактен", "Лесно приложение"],
        activeSubstance: "Меден сулфат",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 29,
        name: "Син Камък",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 11.80,
        priceEur: 6.02,
        unit: "1 кг",
        description: "Меден сулфат за борба с мана и други болести",
        features: ["Контактен", "Традиционен"],
        activeSubstance: "Меден сулфат",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 30,
        name: "Хидратна Вар",
        category: "фунгициди",
        culture: ["лозя", "овощни"],
        price: 3.00,
        priceEur: 1.53,
        unit: "1 кг",
        description: "Вар за защита на дърветата",
        features: ["Защита", "Традиционен"],
        activeSubstance: "Калциев хидроксид",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },

    // ИНСЕКТИЦИДИ
    {
        id: 31,
        name: "Айкън",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 7.00,
        priceEur: 3.57,
        unit: "2 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Бързо действие"],
        activeSubstance: "Тиаметоксам",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 32,
        name: "Снайпер",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "20 мл",
        description: "Инсектицид за борба с листни въшки и други вредители",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Ацетамиприд",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 33,
        name: "Мастерцид",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Ефективен"],
        activeSubstance: "Ацетамиприд",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 34,
        name: "Валмек",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 3.80,
        priceEur: 1.94,
        unit: "20 мл",
        description: "Акарицид за борба с акари",
        features: ["Акарицид", "Ефективен"],
        activeSubstance: "Абамектин",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 35,
        name: "Нисоран",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "20 мл",
        description: "Акарицид за борба с акари",
        features: ["Акарицид", "Специализиран"],
        activeSubstance: "Хекситиазокс",
        brand: "DuPont",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 36,
        name: "Абанто",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 7.80,
        priceEur: 3.98,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Тиаклоприд",
        brand: "Bayer",
        availability: "preorder",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 37,
        name: "Сиванто Prime",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "20 мл",
        description: "Системен инсектицид с широк спектър на действие",
        features: ["Системен", "Безопасен за пчели"],
        activeSubstance: "Флупирадифурон",
        brand: "Bayer",
        availability: "in_stock",
        isNew: true,
        image: "images/products/sivanto.jpg"
    },
    {
        id: 38,
        name: "Куломбо",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "60 гр",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Ламбда-цихалотрин",
        brand: "Adama",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 39,
        name: "Агриметал",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 5.50,
        priceEur: 2.81,
        unit: "100 гр",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Широк спектър"],
        activeSubstance: "Металдехид",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 40,
        name: "Леброн",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "100 гр",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Металдехид",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 41,
        name: "Нематорин",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 10.80,
        priceEur: 5.51,
        unit: "100 гр",
        description: "Нематоцид за борба с нематоди",
        features: ["Нематоцид", "Специализиран"],
        activeSubstance: "Оксамил",
        brand: "DuPont",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 42,
        name: "Ламша",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "8 гр",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Ламбда-цихалотрин",
        brand: "Adama",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 43,
        name: "Кораген",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "2 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Ефективен"],
        activeSubstance: "Хлорантранилипрол",
        brand: "Corteva",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 44,
        name: "Тепеки",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "1.5 гр",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Ефективен"],
        activeSubstance: "Спиносад",
        brand: "Dow",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 45,
        name: "Муспилан",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 1.80,
        priceEur: 0.92,
        unit: "1.5 гр",
        description: "Системен инсектицид за борба с листни въшки и трипс",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Ацетамиприд",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/mospilan.png"
    },
    {
        id: 46,
        name: "Муспилан",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 3.00,
        priceEur: 1.53,
        unit: "3 гр",
        description: "Системен инсектицид за борба с листни въшки и трипс",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Ацетамиприд",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/mospilan.png"
    },
    {
        id: 47,
        name: "Муспилан",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "6 гр",
        description: "Системен инсектицид за борба с листни въшки и трипс",
        features: ["Системен", "Широк спектър"],
        activeSubstance: "Ацетамиприд",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/mospilan.png"
    },
    {
        id: 48,
        name: "Алверде",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Ефективен"],
        activeSubstance: "Ацетамиприд",
        brand: "Nippon Soda",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 49,
        name: "Дена",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Делтаметрин",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 50,
        name: "Дена",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "50 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Делтаметрин",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 51,
        name: "Дека",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Делтаметрин",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 52,
        name: "Дека",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "50 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Делтаметрин",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 53,
        name: "Карате Зеон",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "2 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Широк спектър"],
        activeSubstance: "Ламбда-цихалотрин",
        brand: "Syngenta",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 54,
        name: "Сумицидин",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Фенвалерат",
        brand: "Sumitomo",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 55,
        name: "Сумицидин",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "50 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Фенвалерат",
        brand: "Sumitomo",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 56,
        name: "Сумицидин",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 8.80,
        priceEur: 4.49,
        unit: "100 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Фенвалерат",
        brand: "Sumitomo",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 57,
        name: "Метеор",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 2.80,
        priceEur: 1.43,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Контактен", "Ефективен"],
        activeSubstance: "Пиретроид",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 58,
        name: "Проксимо",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "20 мл",
        description: "Инсектицид за борба с вредители",
        features: ["Системен", "Ефективен"],
        activeSubstance: "Тиаклоприд",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 59,
        name: "Акарзин 300",
        category: "инсектициди",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "300 мл",
        description: "Акарицид за борба с акари",
        features: ["Акарицид", "Специализиран"],
        activeSubstance: "Амитраза",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 60,
        name: "Инсектицидни ленти",
        category: "инсектициди",
        culture: [],
        price: 1.80,
        priceEur: 0.92,
        unit: "1 бр",
        description: "Ленти за прихващане на летящи вредители",
        features: ["Прихващане", "Лесно приложение"],
        activeSubstance: "Клеящо вещество",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },

    // ХЕРБИЦИДИ
    {
        id: 61,
        name: "Раундъп",
        category: "хербициди",
        culture: ["зърнени"],
        price: 7.80,
        priceEur: 3.98,
        unit: "100 мл",
        description: "Неселективен хербицид за борба с треви и плевели",
        features: ["Неселективен", "Системен"],
        activeSubstance: "Глифосат",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 62,
        name: "Раундъп",
        category: "хербициди",
        culture: ["зърнени"],
        price: 12.80,
        priceEur: 6.53,
        unit: "200 мл",
        description: "Неселективен хербицид за борба с треви и плевели",
        features: ["Неселективен", "Системен"],
        activeSubstance: "Глифосат",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 63,
        name: "Раундъп",
        category: "хербициди",
        culture: ["зърнени"],
        price: 18.00,
        priceEur: 9.18,
        unit: "0.5 л",
        description: "Неселективен хербицид за борба с треви и плевели",
        features: ["Неселективен", "Системен"],
        activeSubstance: "Глифосат",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 64,
        name: "Раундъп",
        category: "хербициди",
        culture: ["зърнени"],
        price: 26.00,
        priceEur: 13.27,
        unit: "1 л",
        description: "Неселективен хербицид за борба с треви и плевели",
        features: ["Неселективен", "Системен"],
        activeSubstance: "Глифосат",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 65,
        name: "НАСА",
        category: "хербициди",
        culture: ["зърнени"],
        price: 17.00,
        priceEur: 8.67,
        unit: "0.5 л",
        description: "Хербицид за борба с треви",
        features: ["Селективен", "Ефективен"],
        activeSubstance: "Глифосат",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 66,
        name: "НАСА",
        category: "хербициди",
        culture: ["зърнени"],
        price: 25.00,
        priceEur: 12.76,
        unit: "1 л",
        description: "Хербицид за борба с треви",
        features: ["Селективен", "Ефективен"],
        activeSubstance: "Глифосат",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 67,
        name: "Тайфун",
        category: "хербициди",
        culture: ["зърнени"],
        price: 20.00,
        priceEur: 10.20,
        unit: "1 л",
        description: "Хербицид за борба с треви",
        features: ["Селективен", "Ефективен"],
        activeSubstance: "Глифосат",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 68,
        name: "Магнето",
        category: "хербициди",
        culture: ["зърнени"],
        price: 7.80,
        priceEur: 3.98,
        unit: "100 мл",
        description: "Хербицид за борба с широколистни плевели",
        features: ["Селективен", "Ефективен"],
        activeSubstance: "Метсулфурон-метил",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 69,
        name: "Шарпен",
        category: "хербициди",
        culture: ["зърнени"],
        price: 7.80,
        priceEur: 3.98,
        unit: "100 мл",
        description: "Хербицид за борба с широколистни плевели",
        features: ["Селективен", "Ефективен"],
        activeSubstance: "Метсулфурон-метил",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },
    {
        id: 70,
        name: "Шарпен",
        category: "хербициди",
        culture: ["зърнени"],
        price: 48.00,
        priceEur: 24.49,
        unit: "1 л",
        description: "Хербицид за борба с широколистни плевели",
        features: ["Селективен", "Ефективен"],
        activeSubstance: "Метсулфурон-метил",
        brand: "Bayer",
        availability: "in_stock",
        isNew: false,
        image: "images/products/pesticide.png"
    },

    // ТОРОВЕ
    {
        id: 71,
        name: "Амониев нитрат",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 3.00,
        priceEur: 1.53,
        unit: "1 кг",
        description: "Азотен тор за подхранване",
        features: ["Бързо усвояване", "Високо съдържание на азот"],
        activeSubstance: "NH4NO3",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 72,
        name: "Амониев нитрат",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "2 кг",
        description: "Азотен тор за подхранване",
        features: ["Бързо усвояване", "Високо съдържание на азот"],
        activeSubstance: "NH4NO3",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 73,
        name: "Амониев нитрат",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 10.00,
        priceEur: 5.10,
        unit: "5 кг",
        description: "Азотен тор за подхранване",
        features: ["Бързо усвояване", "Високо съдържание на азот"],
        activeSubstance: "NH4NO3",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 74,
        name: "Яра Мила",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "1 кг",
        description: "Комплексен тор за подхранване",
        features: ["Балансиран", "За всички култури"],
        activeSubstance: "NPK",
        brand: "Yara",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 75,
        name: "Яра Мила",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 8.80,
        priceEur: 4.49,
        unit: "2 кг",
        description: "Комплексен тор за подхранване",
        features: ["Балансиран", "За всички култури"],
        activeSubstance: "NPK",
        brand: "Yara",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 76,
        name: "Яра Мила",
        category: "торове",
        culture: ["зърнени", "зеленчуци", "овощни"],
        price: 18.80,
        priceEur: 9.59,
        unit: "5 кг",
        description: "Комплексен тор за подхранване",
        features: ["Балансиран", "За всички култури"],
        activeSubstance: "NPK",
        brand: "Yara",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 77,
        name: "Есенен Тор",
        category: "торове",
        culture: ["зърнени", "овощни"],
        price: 7.80,
        priceEur: 3.98,
        unit: "2 кг",
        description: "Тор за есенно подхранване",
        features: ["Специализиран", "За есенна употреба"],
        activeSubstance: "NPK",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 78,
        name: "Есенен Тор",
        category: "торове",
        culture: ["зърнени", "овощни"],
        price: 17.80,
        priceEur: 9.08,
        unit: "5 кг",
        description: "Тор за есенно подхранване",
        features: ["Специализиран", "За есенна употреба"],
        activeSubstance: "NPK",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 79,
        name: "Карбамит",
        category: "торове",
        culture: ["зърнени", "зеленчуци"],
        price: 4.80,
        priceEur: 2.45,
        unit: "1 кг",
        description: "Азотен тор за подхранване",
        features: ["Високо съдържание на азот", "Икономикачен"],
        activeSubstance: "CO(NH2)2",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 80,
        name: "Калцинит",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "1 кг",
        description: "Тор с калций и азот",
        features: ["Калций", "Азот"],
        activeSubstance: "Ca(NO3)2",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 81,
        name: "Магнезиев Сулфад",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "1 кг",
        description: "Тор с магнезий и сяра",
        features: ["Магнезий", "Сяра"],
        activeSubstance: "MgSO4",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 82,
        name: "Сяра",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "1 кг",
        description: "Сяра за подхранване",
        features: ["Микроелемент", "Важен за растеж"],
        activeSubstance: "S",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 83,
        name: "Зелен Камък",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "1 кг",
        description: "Меден сулфат за подхранване",
        features: ["Мед", "Микроелемент"],
        activeSubstance: "CuSO4",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 84,
        name: "Кристалон Жълт",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "200 гр",
        description: "Течен тор за листно подхранване",
        features: ["Листно подхранване", "Балансиран"],
        activeSubstance: "NPK + микроелементи",
        brand: "Yara",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 85,
        name: "Кристалон Зелен",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "200 гр",
        description: "Течен тор за листно подхранване",
        features: ["Листно подхранване", "Балансиран"],
        activeSubstance: "NPK + микроелементи",
        brand: "Yara",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 86,
        name: "Кристалон Червен",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "200 гр",
        description: "Течен тор за листно подхранване",
        features: ["Листно подхранване", "Балансиран"],
        activeSubstance: "NPK + микроелементи",
        brand: "Yara",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 87,
        name: "Борна Киселина",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "200 гр",
        description: "Микроелемент за подхранване",
        features: ["Бор", "Важен микроелемент"],
        activeSubstance: "H3BO3",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 88,
        name: "Янтарна киселина",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 6.80,
        priceEur: 3.47,
        unit: "200 гр",
        description: "Стимулатор за растеж",
        features: ["Стимулатор", "Подобрява растежа"],
        activeSubstance: "C4H6O4",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 89,
        name: "Течна тор за цитруси",
        category: "торове",
        culture: ["овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "250 мл",
        description: "Специализиран тор за цитрусови растения",
        features: ["Специализиран", "За цитруси"],
        activeSubstance: "NPK + микроелементи",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 90,
        name: "Течна тор за орхидеи",
        category: "торове",
        culture: [],
        price: 4.80,
        priceEur: 2.45,
        unit: "250 мл",
        description: "Специализиран тор за орхидеи",
        features: ["Специализиран", "За орхидеи"],
        activeSubstance: "NPK + микроелементи",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 91,
        name: "Течна тор за цветя",
        category: "торове",
        culture: [],
        price: 4.80,
        priceEur: 2.45,
        unit: "250 мл",
        description: "Специализиран тор за цветя",
        features: ["Специализиран", "За цветя"],
        activeSubstance: "NPK + микроелементи",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 92,
        name: "ТераУейт",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "40 гр",
        description: "Тор за подхранване",
        features: ["Балансиран", "Ефективен"],
        activeSubstance: "NPK",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 93,
        name: "Обущарсака замаска",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "75 гр",
        description: "Тор за подхранване",
        features: ["Балансиран", "Ефективен"],
        activeSubstance: "NPK",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 94,
        name: "Водорасли Алга 900",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 1.60,
        priceEur: 0.82,
        unit: "10 гр",
        description: "Биостимулатор от водорасли",
        features: ["Биостимулатор", "Естествен"],
        activeSubstance: "Екстракт от водорасли",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 95,
        name: "Амино киселини Лейли",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 1.60,
        priceEur: 0.82,
        unit: "10 гр",
        description: "Биостимулатор с амино киселини",
        features: ["Биостимулатор", "Амино киселини"],
        activeSubstance: "Амино киселини",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 96,
        name: "Амика",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 1.60,
        priceEur: 0.82,
        unit: "10 гр",
        description: "Биостимулатор",
        features: ["Биостимулатор", "Ефективен"],
        activeSubstance: "Биостимулатор",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 97,
        name: "Течна тор с калии и калции",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 5.80,
        priceEur: 2.96,
        unit: "500 мл",
        description: "Тор с калий и калций",
        features: ["Калий", "Калций"],
        activeSubstance: "K + Ca",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 98,
        name: "Унистим",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 4.80,
        priceEur: 2.45,
        unit: "200 мл",
        description: "Универсален тор за подхранване",
        features: ["Универсален", "Балансиран"],
        activeSubstance: "NPK + микроелементи",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 99,
        name: "Унистим",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 7.80,
        priceEur: 3.98,
        unit: "0.5 л",
        description: "Универсален тор за подхранване",
        features: ["Универсален", "Балансиран"],
        activeSubstance: "NPK + микроелементи",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 100,
        name: "Унистим",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 13.80,
        priceEur: 7.04,
        unit: "1 л",
        description: "Универсален тор за подхранване",
        features: ["Универсален", "Балансиран"],
        activeSubstance: "NPK + микроелементи",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 101,
        name: "Протамикс",
        category: "торове",
        culture: ["зеленчуци", "овощни"],
        price: 8.80,
        priceEur: 4.49,
        unit: "100 мл",
        description: "Протеинов тор за подхранване",
        features: ["Протеин", "Ефективен"],
        activeSubstance: "Протеин",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },

    // ПОЧВИ
    {
        id: 102,
        name: "Торф",
        category: "почви",
        culture: [],
        price: 2.00,
        priceEur: 1.02,
        unit: "3 л",
        description: "Торф за подобряване на почвата",
        features: ["Подобрява почвата", "Естествен"],
        activeSubstance: "Торф",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 103,
        name: "Торф",
        category: "почви",
        culture: [],
        price: 3.50,
        priceEur: 1.79,
        unit: "5 л",
        description: "Торф за подобряване на почвата",
        features: ["Подобрява почвата", "Естествен"],
        activeSubstance: "Торф",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 104,
        name: "Торф",
        category: "почви",
        culture: [],
        price: 5.50,
        priceEur: 2.81,
        unit: "10 л",
        description: "Торф за подобряване на почвата",
        features: ["Подобрява почвата", "Естествен"],
        activeSubstance: "Торф",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 105,
        name: "Торф",
        category: "почви",
        culture: [],
        price: 7.50,
        priceEur: 3.83,
        unit: "20 л",
        description: "Торф за подобряване на почвата",
        features: ["Подобрява почвата", "Естествен"],
        activeSubstance: "Торф",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },
    {
        id: 106,
        name: "Торф Орхидеи",
        category: "почви",
        culture: [],
        price: 4.80,
        priceEur: 2.45,
        unit: "2 л",
        description: "Специализиран торф за орхидеи",
        features: ["Специализиран", "За орхидеи"],
        activeSubstance: "Торф",
        brand: "Generic",
        availability: "in_stock",
        isNew: false,
        image: "images/products/fertilizer.jpg"
    },

    // СЕМЕНА - ДОМАТИ
    {id: 107, name: "Меделина", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 108, name: "Бабино чудо", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 109, name: "Момини Сълзи", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 110, name: "Розов Дар", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 111, name: "Роза Макс", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 112, name: "Роза Лукс", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 113, name: "Розали", category: "семена", culture: ["зеленчуци"], price: 5.50, priceEur: 2.81, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 114, name: "Рила", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "25 семена", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 115, name: "Калина", category: "семена", culture: ["зеленчуци"], price: 3.80, priceEur: 1.94, unit: "25 семена", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 116, name: "Ръгби", category: "семена", culture: ["зеленчуци"], price: 5.80, priceEur: 2.96, unit: "25 семена", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 117, name: "Домати Наслада", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 118, name: "Грамада", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 119, name: "Елена Прима", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 120, name: "Фантазия", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 121, name: "Розова Магия", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 122, name: "Червен гигант", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 123, name: "Розов гигант", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 124, name: "Сърцето на албенга", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 125, name: "Идеал", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 126, name: "Розов идеал", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "0.2 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 127, name: "Миляна", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "1 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 128, name: "Рома", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "1 гр", description: "Семена домати", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},

    // СЕМЕНА - ПИПЕРИ
    {id: 129, name: "Пловдивска капия", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "1 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 130, name: "Хисарска капия", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "1 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 131, name: "Куртовска капия", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "1 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 132, name: "Гладки Камби", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "1 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 133, name: "Рибки сладки", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 134, name: "Рибки люти", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 135, name: "Чорбаджийски чушки", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 136, name: "Бяла шипка", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 137, name: "Джиленска шипка", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена пипери", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 138, name: "Бамя", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена бамя", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},

    // СЕМЕНА - КРАСТАВИЦИ
    {id: 139, name: "Курнишони Регина", category: "семена", culture: ["зеленчуци"], price: 1.80, priceEur: 0.92, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 140, name: "Левина Курнишони", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 141, name: "Гергана", category: "семена", culture: ["зеленчуци"], price: 1.80, priceEur: 0.92, unit: "2 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 142, name: "Сандра", category: "семена", culture: ["зеленчуци"], price: 4.80, priceEur: 2.45, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 143, name: "Тимор", category: "семена", culture: ["зеленчуци"], price: 3.80, priceEur: 1.94, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 144, name: "Крокодилки", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 145, name: "Тести Кинг", category: "семена", culture: ["зеленчуци"], price: 4.80, priceEur: 2.45, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 146, name: "Тести green", category: "семена", culture: ["зеленчуци"], price: 3.80, priceEur: 1.94, unit: "1 гр", description: "Семена краставици", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},

    // СЕМЕНА - ТИКВИЧКИ
    {id: 147, name: "Изобилна", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена тиквички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 148, name: "Черна красавица", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена тиквички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 149, name: "Нур", category: "семена", culture: ["зеленчуци"], price: 3.80, priceEur: 1.94, unit: "10 семки", description: "Семена тиквички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 150, name: "Бяла тиква", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена тиква", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 151, name: "Цигурлка", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена тиквички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},

    // СЕМЕНА - ДРУГИ ЗЕЛЕНЧУЦИ
    {id: 152, name: "Моркови Нански", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена моркови", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 153, name: "Репички Сакса", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена репички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 154, name: "Репички Френска закуска", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена репички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 155, name: "Репички Глориета", category: "семена", culture: ["зеленчуци"], price: 3.80, priceEur: 1.94, unit: "400 семена", description: "Семена репички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 156, name: "Магданоз фестивал", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена магданоз", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 157, name: "Магданоз гигант", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена магданоз", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 158, name: "Копар", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена копар", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 159, name: "Целина листна", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена целина", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 160, name: "Целина главеста", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена целина", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 161, name: "Чубрица", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена чубрица", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 162, name: "Праз Старозагорски камъш", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена праз", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 163, name: "Патладжан номер 12", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена патладжан", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 164, name: "Карфиол Бяла топка", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "3 гр", description: "Семена карфиол", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 165, name: "Броколи Калабрезе", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "3 гр", description: "Семена броколи", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 166, name: "Зеле Кюсе", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена зеле", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 167, name: "Салата Зимна Маслена глава", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена салата", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 168, name: "Салата Джентилина", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена салата", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 169, name: "Салата Лоло Роса", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена салата", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 170, name: "Салата Айсберг", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена салата", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 171, name: "Маруля", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "2 гр", description: "Семена маруля", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 172, name: "Бяла ряпа", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена ряпа", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 173, name: "Черна ряпа", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена ряпа", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 174, name: "Червена ряпа", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена ряпа", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 175, name: "Салатно цвекло", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена цвекло", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 176, name: "Кръмно цвекло", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "10 гр", description: "Семена цвекло", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 177, name: "Захарно цвекло", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "10 гр", description: "Семена цвекло", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 178, name: "Бакла", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "40 гр", description: "Семена бакла", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 179, name: "Фасул Капитано", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "40 гр", description: "Семена фасул", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 180, name: "Фасул Лоди", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "40 гр", description: "Семена фасул", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 181, name: "Фасул Сакса", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "40 гр", description: "Семена фасул", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 182, name: "Фасул Голд", category: "семена", culture: ["зеленчуци"], price: 2.50, priceEur: 1.28, unit: "40 гр", description: "Семена фасул", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 183, name: "Грах Ран", category: "семена", culture: ["зеленчуци"], price: 1.80, priceEur: 0.92, unit: "100 гр", description: "Семена грах", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 184, name: "Грах Ран", category: "семена", culture: ["зеленчуци"], price: 2.80, priceEur: 1.43, unit: "200 гр", description: "Семена грах", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 185, name: "Дини Шугар Бейби", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена дини", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 186, name: "Дини Кримсон", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена дини", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 187, name: "Дини Мраморни", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена дини", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 188, name: "Пъпешки Видински Коравци", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена пъпешки", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 189, name: "Пъпеш Десертен", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "5 гр", description: "Семена пъпеш", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 190, name: "Захарна царевица", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена царевица", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 191, name: "Спанак", category: "семена", culture: ["зеленчуци"], price: 1.80, priceEur: 0.92, unit: "30 гр", description: "Семена спанак", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 192, name: "Бейби Спанак", category: "семена", culture: ["зеленчуци"], price: 1.80, priceEur: 0.92, unit: "10 гр", description: "Семена спанак", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 193, name: "Рукола", category: "семена", culture: ["зеленчуци"], price: 1.80, priceEur: 0.92, unit: "5 гр", description: "Семена рукола", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 194, name: "Манголд", category: "семена", culture: ["зеленчуци"], price: 1.50, priceEur: 0.77, unit: "10 гр", description: "Семена манголд", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 195, name: "Босилек", category: "семена", culture: ["зеленчуци"], price: 1.60, priceEur: 0.82, unit: "1 гр", description: "Семена босилек", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 196, name: "Девесил", category: "семена", culture: ["зеленчуци"], price: 1.60, priceEur: 0.82, unit: "2 гр", description: "Семена девесил", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 197, name: "Сминдух", category: "семена", culture: ["зеленчуци"], price: 1.60, priceEur: 0.82, unit: "3 гр", description: "Семена сминдух", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 198, name: "Джоджан", category: "семена", culture: ["зеленчуци"], price: 1.60, priceEur: 0.82, unit: "3 гр", description: "Семена джоджан", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 199, name: "Мента", category: "семена", culture: ["зеленчуци"], price: 1.60, priceEur: 0.82, unit: "3 гр", description: "Семена мента", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 200, name: "Розмарин", category: "семена", culture: ["зеленчуци"], price: 1.60, priceEur: 0.82, unit: "1 гр", description: "Семена розмарин", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 201, name: "Декоративни тиквички", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "5 гр", description: "Семена декоративни тиквички", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},

    // СЕМЕНА - ЦВЕТЯ
    {id: 202, name: "Лавандула", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена лавандула", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 203, name: "Теменуга микс", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена теменуга", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 204, name: "Теменуга Рококо", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена теменуга", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 205, name: "Петуния", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена петуния", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 206, name: "Калдъръм", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена калдъръм", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 207, name: "Винка", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена винка", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 208, name: "Импатиенс", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена импатиенс", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 209, name: "Астра", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена астра", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 210, name: "Вербена", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена вербена", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 211, name: "Каскадна вербена", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена вербена", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 212, name: "Карамфил", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена карамфил", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 213, name: "Топ карамфил", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена карамфил", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 214, name: "Тагетес", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена тагетес", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 215, name: "Кученца", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена кученца", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 216, name: "Примола", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена примола", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 217, name: "Лаватера", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена лаватера", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 218, name: "Агератом", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена агератом", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 219, name: "Калифорнийски мак", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена калифорнийски мак", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 220, name: "Лупина", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена лупина", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 221, name: "Шибой", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена шибой", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 222, name: "Делфинио", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "0.1 гр", description: "Семена делфинио", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 223, name: "Сакъзче", category: "семена", culture: [], price: 2.60, priceEur: 1.33, unit: "0.1 гр", description: "Семена сакъзче", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 224, name: "Мушкато", category: "семена", culture: [], price: 2.60, priceEur: 1.33, unit: "0.1 гр", description: "Семена мушкато", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},
    {id: 225, name: "Невен", category: "семена", culture: [], price: 1.60, priceEur: 0.82, unit: "1 гр", description: "Семена невен", features: ["Висококачествени"], activeSubstance: "Семена", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/seeds.jpg"},

    // ЗА ВИНА
    {id: 226, name: "Дрожди Стартер 2в1", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "1 бр", description: "Дрожди за вино", features: ["Стартер", "2в1"], activeSubstance: "Дрожди", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 227, name: "Дрожди за бяло вино", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "20 гр", description: "Дрожди за бяло вино", features: ["Специализирани", "За бяло вино"], activeSubstance: "Дрожди", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 228, name: "Дрожди за червено вино", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "20 гр", description: "Дрожди за червено вино", features: ["Специализирани", "За червено вино"], activeSubstance: "Дрожди", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 229, name: "Дрожди универсални", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "20 гр", description: "Универсални дрожди за вино", features: ["Универсални", "За всички вина"], activeSubstance: "Дрожди", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 230, name: "Активатор за дрожди", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "100 гр", description: "Активатор за активиране на дрожди", features: ["Активатор", "Подобрява ферментацията"], activeSubstance: "Активатор", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 231, name: "Серниста киселина", category: "за вина", culture: [], price: 1.50, priceEur: 0.77, unit: "125 мл", description: "Серниста киселина за вино", features: ["Консервант", "За вино"], activeSubstance: "H2SO3", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 232, name: "Серниста киселина", category: "за вина", culture: [], price: 1.80, priceEur: 0.92, unit: "250 мл", description: "Серниста киселина за вино", features: ["Консервант", "За вино"], activeSubstance: "H2SO3", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 233, name: "Серниста киселина", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "500 мл", description: "Серниста киселина за вино", features: ["Консервант", "За вино"], activeSubstance: "H2SO3", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 234, name: "Калиев Метабисолфид", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "2 гр", description: "Консервант за вино", features: ["Консервант", "За вино"], activeSubstance: "K2S2O5", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 235, name: "Откислител за вино", category: "за вина", culture: [], price: 3.50, priceEur: 1.79, unit: "100 гр", description: "Откислител за вино", features: ["Откислител", "Подобрява вкуса"], activeSubstance: "Откислител", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 236, name: "Бентонит", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "100 гр", description: "Бентонит за фино филтриране на вино", features: ["Филтриране", "За вино"], activeSubstance: "Бентонит", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 237, name: "Натриев Бензонад", category: "за вина", culture: [], price: 1.60, priceEur: 0.82, unit: "2 гр", description: "Консервант за вино", features: ["Консервант", "За вино"], activeSubstance: "C7H5NaO2", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 238, name: "Калиев Сорфад", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "20 гр", description: "Консервант за вино", features: ["Консервант", "За вино"], activeSubstance: "K2S2O5", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 239, name: "Дъбов чипс френски", category: "за вина", culture: [], price: 3.50, priceEur: 1.79, unit: "50 гр", description: "Дъбови чипсове за ароматизиране на вино", features: ["Аромат", "Дъб"], activeSubstance: "Дъб", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 240, name: "Серни ленти", category: "за вина", culture: [], price: 0.30, priceEur: 0.15, unit: "1 бр", description: "Серни ленти за дезинфекция", features: ["Дезинфекция", "За бъчви"], activeSubstance: "Сяра", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 241, name: "Сода за бъчви", category: "за вина", culture: [], price: 1.80, priceEur: 0.92, unit: "0.5 кг", description: "Сода за почистване на бъчви", features: ["Почистване", "За бъчви"], activeSubstance: "Na2CO3", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 242, name: "Сода за бъчви", category: "за вина", culture: [], price: 3.00, priceEur: 1.53, unit: "1 кг", description: "Сода за почистване на бъчви", features: ["Почистване", "За бъчви"], activeSubstance: "Na2CO3", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 243, name: "Настойка за пелин", category: "за вина", culture: [], price: 4.80, priceEur: 2.45, unit: "100 мл", description: "Настойка за пелин", features: ["Аромат", "За вино"], activeSubstance: "Пелин", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 244, name: "Подобрител за вино", category: "за вина", culture: [], price: 4.80, priceEur: 2.45, unit: "300 мл", description: "Подобрител за вино", features: ["Подобрява", "За вино"], activeSubstance: "Подобрител", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 245, name: "Глицерин", category: "за вина", culture: [], price: 2.80, priceEur: 1.43, unit: "100 мл", description: "Глицерин за вино", features: ["Подобрява", "За вино"], activeSubstance: "C3H8O3", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 246, name: "Аромат за ракия Мускат", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Мускат"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 247, name: "Дейонизирана Вода", category: "за вина", culture: [], price: 5.00, priceEur: 2.55, unit: "5 л", description: "Дейонизирана вода за разредяване", features: ["Чиста вода", "За разредяване"], activeSubstance: "H2O", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 248, name: "Хамбурски Мискет", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Мискет"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 249, name: "Кайсия", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Кайсия"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 250, name: "Попска круша", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Круша"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 251, name: "Дюля", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Дюля"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 252, name: "Мента", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Мента"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 253, name: "Мастика", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Мастика"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 254, name: "Мерло", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Мерло"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 255, name: "Траминер", category: "за вина", culture: [], price: 3.80, priceEur: 1.94, unit: "20 мл", description: "Аромат за ракия", features: ["Аромат", "Траминер"], activeSubstance: "Аромат", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 256, name: "Оцветител за ракия", category: "за вина", culture: [], price: 2.00, priceEur: 1.02, unit: "50 мл", description: "Оцветител за ракия", features: ["Оцветяване", "За ракия"], activeSubstance: "Оцветител", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},

    // ОТРОВИ ЗА ГРИЗАЧИ
    {id: 257, name: "Ратимор", category: "отрови за гризачи", culture: [], price: 4.80, priceEur: 2.45, unit: "125 гр", description: "Отрова за гризачи", features: ["Ефективна", "За гризачи"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 258, name: "Снайпер", category: "отрови за гризачи", culture: [], price: 4.80, priceEur: 2.45, unit: "125 гр", description: "Отрова за гризачи", features: ["Ефективна", "За гризачи"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 259, name: "Мумия", category: "отрови за гризачи", culture: [], price: 5.50, priceEur: 2.81, unit: "150 гр", description: "Отрова за гризачи", features: ["Ефективна", "За гризачи"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 260, name: "Ратимор", category: "отрови за гризачи", culture: [], price: 7.50, priceEur: 3.83, unit: "300 гр", description: "Отрова за гризачи", features: ["Ефективна", "За гризачи"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 261, name: "Ратимор гранули", category: "отрови за гризачи", culture: [], price: 4.80, priceEur: 2.45, unit: "250 гр", description: "Отрова за гризачи в гранули", features: ["Ефективна", "Гранули"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 262, name: "Ратбилен", category: "отрови за гризачи", culture: [], price: 3.00, priceEur: 1.53, unit: "100 гр", description: "Отрова за гризачи", features: ["Ефективна", "За гризачи"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"},
    {id: 263, name: "Житна отрова", category: "отрови за гризачи", culture: [], price: 6.80, priceEur: 3.47, unit: "1 кг", description: "Отрова за гризачи", features: ["Ефективна", "За гризачи"], activeSubstance: "Бродифакум", brand: "Generic", availability: "in_stock", isNew: false, image: "images/products/pesticide.png"}
];

const categoryLabels = {
    "фунгициди": "Фунгициди",
    "инсектициди": "Инсектициди",
    "хербициди": "Хербициди",
    "торове": "Торове",
    "почви": "Почви",
    "семена": "Семена",
    "за вина": "За вина",
    "отрови за гризачи": "Отрови за гризачи"
};

function getCategoryLabel(category) {
    if (!category) return '';
    
    // Trim whitespace
    const trimmedCategory = category.trim();
    
    // First check if it's in the labels map (exact match)
    if (categoryLabels[trimmedCategory]) {
        return categoryLabels[trimmedCategory];
    }
    
    // Case-insensitive lookup
    const normalizedCategory = trimmedCategory.toLowerCase();
    for (const key in categoryLabels) {
        if (key.toLowerCase() === normalizedCategory) {
            return categoryLabels[key];
        }
    }
    
    // If not found, capitalize first letter of each word
    if (trimmedCategory && trimmedCategory.length > 0) {
        return trimmedCategory.split(' ').map(word => {
            if (word.length === 0) return word;
            // Capitalize first letter, keep rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    }
    
    return trimmedCategory;
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

// Function to get featured products (most important from each category)
function getFeaturedProducts(productsPerCategory = 4) {
    const categories = [...new Set(productsData.map(p => p.category))];
    const featured = [];
    
    categories.forEach(category => {
        const categoryProducts = productsData.filter(p => p.category === category);
        
        // Prioritize: isNew > in_stock > others
        const sorted = categoryProducts.sort((a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            if (a.availability === 'in_stock' && b.availability !== 'in_stock') return -1;
            if (a.availability !== 'in_stock' && b.availability === 'in_stock') return 1;
            return 0;
        });
        
        // Take first N products from each category
        featured.push(...sorted.slice(0, productsPerCategory));
    });
    
    return featured;
}

// Function to filter products by category
function filterProductsByCategory(category) {
    if (!category) return productsData;
    return productsData.filter(p => p.category === category);
}

// Function to render featured products by category
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products-container');
    if (!container) return;
    
    const categories = [...new Set(productsData.map(p => p.category))];
    container.innerHTML = '';
    
    // Sort categories for consistent display order
    categories.sort();
    
    categories.forEach(category => {
        const categoryProducts = productsData.filter(p => p.category === category);
        
        // Sort: isNew > in_stock > others, then take first 4
        const sorted = categoryProducts.sort((a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            if (a.availability === 'in_stock' && b.availability !== 'in_stock') return -1;
            if (a.availability !== 'in_stock' && b.availability === 'in_stock') return 1;
            return 0;
        });
        
        const featured = sorted.slice(0, 4);
        if (featured.length === 0) return;
        
        const categorySection = document.createElement('div');
        categorySection.className = 'mb-12';
        // Ensure category label is properly formatted with capital letter
        let categoryLabel = getCategoryLabel(category);
        // Force capitalization if not already capitalized
        if (!categoryLabel || categoryLabel.length === 0) {
            categoryLabel = category;
        }
        // Ensure first letter is uppercase
        if (categoryLabel && categoryLabel.length > 0 && categoryLabel.charAt(0) !== categoryLabel.charAt(0).toUpperCase()) {
            categoryLabel = categoryLabel.split(' ').map(word => {
                if (word.length === 0) return word;
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
        }
        categorySection.innerHTML = `
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-agro-dark dark:text-white">
                    ${categoryLabel}
                </h3>
                <button 
                    type="button" 
                    class="text-agro-green hover:text-agro-green-dark font-semibold flex items-center transition category-view-all-btn" 
                    data-category="${category}"
                >
                    Виж всички
                    <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 featured-products-grid" data-category="${category}">
                ${featured.map(product => {
                    const availability = getAvailabilityMeta(product);
                    const cultures = formatCultures(product.culture);
                    const featureTags = (product.features && Array.isArray(product.features) ? product.features : []).map(feature => `
                        <span class="product-tag">${feature}</span>
                    `).join('');
                    const isPesticideCategory = ['фунгициди', 'инсектициди', 'хербициди'].includes(product.category);
                    
                    return `
                        <article class="product-card relative flex h-full flex-col rounded-3xl border border-agro-light bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl" data-category="${product.category}">
                            <div class="absolute left-6 top-5 flex flex-wrap items-center gap-2">
                                <span class="${availability.className}">${availability.label}</span>
                            </div>
                            <div class="absolute right-6 top-5">
                                ${product.isNew ? '<span class="badge badge-info">Нов</span>' : ''}
                            </div>
                            <div class="product-media relative h-48 overflow-hidden rounded-3xl bg-agro-light/60 ${isPesticideCategory ? 'product-media-small' : ''}">
                                <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-agro-dark/10 via-transparent to-transparent"></div>
                            </div>
                            <div class="flex flex-1 flex-col gap-4 p-6">
                                <div>
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="product-brand">${product.brand || 'Premium Selection'}</span>
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
                                            <button type="button" data-compare-btn data-product-id="${product.id}" class="product-btn-secondary flex-1 text-sm whitespace-nowrap">
                                                <i class="fas fa-balance-scale mr-0.5 sm:mr-1"></i><span class="hidden sm:inline">Сравни</span><span class="sm:hidden">Сравн.</span>
                                            </button>
                                            <button type="button" data-share-btn data-product-id="${product.id}" data-product-name="${product.name.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" class="product-btn-secondary flex-1 text-sm whitespace-nowrap">
                                                <i class="fas fa-share-alt mr-0.5 sm:mr-1"></i><span class="hidden sm:inline">Сподели</span><span class="sm:hidden">Спод.</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    `;
                }).join('')}
            </div>
        `;
        container.appendChild(categorySection);
    });
    
    // Add event listeners for "Виж всички" buttons
    const viewAllButtons = container.querySelectorAll('.category-view-all-btn');
    viewAllButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showFullCatalog(category);
        });
    });
}

// Function to render products
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    
    if (!grid) {
        console.error('Products grid element not found');
        return;
    }
    
    if (!products || products.length === 0) {
        grid.classList.add('hidden');
        if (noResults) {
            noResults.classList.remove('hidden');
        }
        return;
    }
    
    // Ensure grid is visible
    grid.classList.remove('hidden');
    grid.style.display = ''; // Reset any inline display styles
    if (noResults) {
        noResults.classList.add('hidden');
    }
    
    grid.innerHTML = products.map(product => {
        const availability = getAvailabilityMeta(product);
        const cultures = formatCultures(product.culture);
        const featureTags = (product.features && Array.isArray(product.features) ? product.features : []).map(feature => `
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
                <div class="product-media relative h-48 overflow-hidden rounded-3xl bg-agro-light/60 ${product.category === 'фунгициди' || product.category === 'инсектициди' || product.category === 'хербициди' ? 'product-media-small' : ''}">
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
                                <button type="button" data-compare-btn data-product-id="${product.id}" class="product-btn-secondary flex-1 text-sm whitespace-nowrap">
                                    <i class="fas fa-balance-scale mr-0.5 sm:mr-1"></i><span class="hidden sm:inline">Сравни</span><span class="sm:hidden">Сравн.</span>
                                </button>
                                <button type="button" data-share-btn data-product-id="${product.id}" data-product-name="${product.name.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" class="product-btn-secondary flex-1 text-sm whitespace-nowrap">
                                    <i class="fas fa-share-alt mr-0.5 sm:mr-1"></i><span class="hidden sm:inline">Сподели</span><span class="sm:hidden">Спод.</span>
                                </button>
                            </div>
                        </div>
            </div>
        </div>
            </article>
        `;
    }).join('');
    
    // Ensure grid is still visible after rendering
    if (grid.innerHTML.trim() !== '') {
        grid.classList.remove('hidden');
        grid.style.display = '';
    }
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

// Function to show full catalog (optionally filtered by category)
function showFullCatalog(category = '') {
    const catalogSection = document.getElementById('catalog');
    const grid = document.getElementById('products-grid');
    const categorySelect = document.getElementById('category-filter');
    
    if (!catalogSection || !grid) return;
    
    // Set category filter if provided
    if (category && categorySelect) {
        categorySelect.value = category;
    } else if (categorySelect) {
        categorySelect.value = '';
    }
    
    // Scroll to catalog
    catalogSection.scrollIntoView({ behavior: 'smooth' });
    
    // Render all products (or filtered by category)
    setTimeout(() => {
        filterProducts();
    }, 300);
}

// Make functions globally available
window.openInquiryModal = openInquiryModal;
window.showFullCatalog = showFullCatalog;

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render featured products on homepage
    try {
        renderFeaturedProducts();
    } catch (error) {
        console.error('Error rendering featured products:', error);
    }
    
    // Initialize catalog section (hidden by default, shown when user clicks "Пълен каталог" or category)
    const grid = document.getElementById('products-grid');
    if (grid) {
        // Initially hide the catalog section or show empty
        grid.innerHTML = '';
    }
    
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
            showFullCatalog(category);
        });
    });
    
    // Add click handler for "Пълен каталог" button
    const fullCatalogLinks = document.querySelectorAll('a[href="#catalog"]');
    fullCatalogLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showFullCatalog();
        });
    });

    // Event delegation for inquiry and share buttons (for both catalog and featured products)
    function handleProductButtonClick(e) {
        // Handle inquiry button clicks
        const inquiryBtn = e.target.closest('[data-inquiry-btn]');
        if (inquiryBtn) {
            e.preventDefault();
            e.stopPropagation();
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
    }
    
    // Add event listeners to both catalog grid and featured products container
    const productsGrid = document.getElementById('products-grid');
    const featuredContainer = document.getElementById('featured-products-container');
    
    if (productsGrid) {
        productsGrid.addEventListener('click', handleProductButtonClick);
    }
    
    if (featuredContainer) {
        featuredContainer.addEventListener('click', handleProductButtonClick);
    }
});

