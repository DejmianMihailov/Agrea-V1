// Blog Posts Data for Agro Apteka Agrea
const blogPosts = [
    {
        id: 1,
        title: "Подготовка на почвата за пролетния сеитбен период",
        category: "сезонни",
        date: "15 Февруари 2024",
        excerpt: "Основни стъпки за правилна подготовка на почвата преди пролетната сеитба. Какво трябва да знаете за оранта, торенето и избора на култури.",
        content: "Успешната пролетна сеитба започва от есента с правилната подготовка на почвата...",
        image: "fas fa-tractor",
        readTime: "5 мин"
    },
    {
        id: 2,
        title: "Как да се борим ефективно с трипса по домати",
        category: "защита",
        date: "10 Февруари 2024",
        excerpt: "Трипсът е един от най-опасните неприятели на доматите. Научете как да го разпознаете навреме и какви методи на борба са най-ефективни.",
        content: "Трипсът (Frankliniella occidentalis) е особено опасен вредител...",
        image: "fas fa-bug",
        readTime: "7 мин"
    },
    {
        id: 3,
        title: "Листно подхранване на царевица - кога и как",
        category: "подхранване",
        date: "5 Февруари 2024",
        excerpt: "Листното подхранване е важен елемент за постигане на максимален добив при царевицата. Вижте оптималните фази и препоръчителните торове.",
        content: "Листното подхранване при царевицата е критично важно в определени фази...",
        image: "fas fa-corn",
        readTime: "6 мин"
    },
    {
        id: 4,
        title: "Биопрепаратите в съвременното земеделие",
        category: "биопрепарати",
        date: "1 Февруари 2024",
        excerpt: "Все повече земеделци се обръщат към биологичните препарати. Разберете предимствата им и как да ги използвате правилно.",
        content: "Биопрепаратите представляват нова ера в растителната защита...",
        image: "fas fa-leaf",
        readTime: "8 мин"
    },
    {
        id: 5,
        title: "Защита на пшеницата през пролетта",
        category: "защита",
        date: "28 Януари 2024",
        excerpt: "Пролетта е критичен момент за защитата на пшеницата. Научете за основните заплахи и как да реагирате навреме.",
        content: "С настъпването на топлото време, пшеницата се сблъсква с редица предизвикателства...",
        image: "fas fa-wheat-awn",
        readTime: "6 мин"
    },
    {
        id: 6,
        title: "Есенни дейности в лозята",
        category: "сезонни",
        date: "20 Януари 2024",
        excerpt: "Какво трябва да направите в лозята през есента, за да подготвите лозите за зимата и следващия сезон.",
        content: "Есенните дейности в лозята са от ключово значение за следващата година...",
        image: "fas fa-wine-bottle",
        readTime: "7 мин"
    }
];

// Function to render blog posts
function renderBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-posts');
    
    if (!blogContainer) return;
    
    blogContainer.innerHTML = posts.map(post => `
        <article class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1" data-category="${post.category}">
            <div class="bg-gradient-to-br from-agro-green to-agro-green-dark p-12 flex items-center justify-center">
                <i class="${post.image} text-white text-6xl"></i>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="inline-block bg-agro-light text-agro-green text-xs font-semibold px-3 py-1 rounded-full">
                        ${getCategoryName(post.category)}
                    </span>
                    <span class="text-gray-500 text-sm">
                        <i class="far fa-clock mr-1"></i>${post.readTime}
                    </span>
                </div>
                
                <h3 class="text-xl font-bold text-agro-dark mb-3 hover:text-agro-green transition cursor-pointer">
                    ${post.title}
                </h3>
                
                <p class="text-gray-600 mb-4">
                    ${post.excerpt}
                </p>
                
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">
                        <i class="far fa-calendar mr-1"></i>${post.date}
                    </span>
                    <button onclick="openBlogPost(${post.id})" class="text-agro-green font-semibold hover:text-agro-green-dark transition">
                        Прочети повече <i class="fas fa-arrow-right ml-1"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// Function to get category name in Bulgarian
function getCategoryName(category) {
    const categoryNames = {
        'сезонни': 'Сезонни грижи',
        'защита': 'Защита на растения',
        'подхранване': 'Подхранване',
        'биопрепарати': 'Биопрепарати'
    };
    return categoryNames[category] || category;
}

// Function to filter blog posts by category
function filterBlogPosts(category) {
    let filtered = blogPosts;
    
    if (category !== 'all') {
        filtered = blogPosts.filter(post => post.category === category);
    }
    
    renderBlogPosts(filtered);
    
    // Update active button
    const buttons = document.querySelectorAll('.blog-category-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-agro-green', 'text-white');
        btn.classList.add('bg-white', 'text-agro-dark');
        
        if (btn.dataset.category === category) {
            btn.classList.add('active', 'bg-agro-green', 'text-white');
            btn.classList.remove('bg-white', 'text-agro-dark');
        }
    });
}

// Function to open blog post (for now, just shows an alert)
function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    
    if (post) {
        // For a complete implementation, this would open a modal or navigate to a detail page
        // For now, we'll show an alert with more info
        alert(`${post.title}\n\n${post.excerpt}\n\nПълната статия ще бъде достъпна скоро. За повече информация, свържете се с нашия агроном на тел. 0885 227 915`);
    }
}

// Initialize blog on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render all blog posts initially
    renderBlogPosts(blogPosts);
    
    // Add event listeners to category buttons
    const categoryButtons = document.querySelectorAll('.blog-category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterBlogPosts(category);
        });
    });
});