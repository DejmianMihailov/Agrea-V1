// Seasonal Calendar for Agricultural Care

const seasonalData = {
    0: { // January
        name: "Януари",
        tasks: [
            {
                category: "зърнени",
                title: "Подготовка на почвата",
                description: "Планиране на сеитба, избор на сортове, подготовка на семена",
                icon: "fas fa-seedling"
            },
            {
                category: "овощни",
                title: "Подрязване на дървета",
                description: "Подрязване на ябълки, круши, сливи. Премахване на сухи и болни клони",
                icon: "fas fa-cut"
            },
            {
                category: "общо",
                title: "Планиране на сезона",
                description: "Закупуване на семена, препарати и торове. Подготовка на инвентар",
                icon: "fas fa-clipboard-list"
            }
        ]
    },
    1: { // February
        name: "Февруари",
        tasks: [
            {
                category: "зърнени",
                title: "Ранна сеитба",
                description: "При подходящи условия започва сеитба на ечемик и пшеница",
                icon: "fas fa-wheat-awn"
            },
            {
                category: "зеленчуци",
                title: "Сеитба в оранжерии",
                description: "Започва сеитба на ранни зеленчуци в оранжерии",
                icon: "fas fa-seedling"
            },
            {
                category: "общо",
                title: "Торене",
                description: "Прилагане на азотни торове за зърнени култури",
                icon: "fas fa-flask"
            }
        ]
    },
    2: { // March
        name: "Март",
        tasks: [
            {
                category: "зеленчуци",
                title: "Сеитба на открито",
                description: "Започва сеитба на домати, чушки, краставици на открито",
                icon: "fas fa-seedling"
            },
            {
                category: "препарати",
                title: "Превантивна защита",
                description: "Прилагане на фунгициди за превантивна защита срещу болести",
                icon: "fas fa-shield-alt"
            },
            {
                category: "овощни",
                title: "Пръскане срещу вредители",
                description: "Първо пръскане срещу зимни вредители по овощните дървета",
                icon: "fas fa-spray-can"
            }
        ]
    },
    3: { // April
        name: "Април",
        tasks: [
            {
                category: "зеленчуци",
                title: "Активна сеитба",
                description: "Масово засаждане на зеленчуци. Поливане и торене",
                icon: "fas fa-carrot"
            },
            {
                category: "препарати",
                title: "Защита срещу вредители",
                description: "Регулярно пръскане срещу листни въшки, бръмбари и други вредители",
                icon: "fas fa-bug"
            },
            {
                category: "торове",
                title: "Подхранване",
                description: "Прилагане на комплексни торове за активен растеж",
                icon: "fas fa-leaf"
            }
        ]
    },
    4: { // May
        name: "Май",
        tasks: [
            {
                category: "зеленчуци",
                title: "Пикиране и подвързване",
                description: "Пикиране на разсада, подвързване на домати и краставици",
                icon: "fas fa-hand-paper"
            },
            {
                category: "препарати",
                title: "Интензивна защита",
                description: "Регулярни пръскания срещу болести и вредители",
                icon: "fas fa-shield-virus"
            },
            {
                category: "овощни",
                title: "Цъфтеж",
                description: "Подхранване по време на цъфтеж. Защита срещу пръстеници",
                icon: "fas fa-flower"
            }
        ]
    },
    5: { // June
        name: "Юни",
        tasks: [
            {
                category: "зеленчуци",
                title: "Първи реколти",
                description: "Започва прибиране на ранни зеленчуци. Продължава торене",
                icon: "fas fa-basket-shopping"
            },
            {
                category: "препарати",
                title: "Лятна защита",
                description: "Интензивна защита срещу топло-любиви вредители",
                icon: "fas fa-sun"
            },
            {
                category: "зърнени",
                title: "Зърненене",
                description: "Наблюдение на зърнените култури. При нужда допълнителна защита",
                icon: "fas fa-wheat-awn"
            }
        ]
    },
    6: { // July
        name: "Юли",
        tasks: [
            {
                category: "зеленчуци",
                title: "Пик на реколтата",
                description: "Масово прибиране на зеленчуци. Регулярно поливане",
                icon: "fas fa-tractor"
            },
            {
                category: "препарати",
                title: "Защита срещу горещина",
                description: "Пръскане в хладни часове. Защита срещу слънчеви изгаряния",
                icon: "fas fa-thermometer-half"
            },
            {
                category: "зърнени",
                title: "Прибиране на жито",
                description: "Започва прибиране на пшеница и ечемик",
                icon: "fas fa-harvest"
            }
        ]
    },
    7: { // August
        name: "Август",
        tasks: [
            {
                category: "зеленчуци",
                title: "Втора реколта",
                description: "Сеитба на втора реколта. Прибиране на лятни култури",
                icon: "fas fa-seedling"
            },
            {
                category: "овощни",
                title: "Прибиране на овощия",
                description: "Прибиране на ябълки, круши, сливи. Подготовка за съхранение",
                icon: "fas fa-apple-alt"
            },
            {
                category: "препарати",
                title: "Осенна подготовка",
                description: "Последни пръскания преди есен",
                icon: "fas fa-leaf"
            }
        ]
    },
    8: { // September
        name: "Септември",
        tasks: [
            {
                category: "зърнени",
                title: "Есенна сеитба",
                description: "Започва сеитба на есенни зърнени култури",
                icon: "fas fa-wheat-awn"
            },
            {
                category: "зеленчуци",
                title: "Есенни зеленчуци",
                description: "Сеитба на зеле, моркови, целина за есенна реколта",
                icon: "fas fa-carrot"
            },
            {
                category: "общо",
                title: "Торене",
                description: "Прилагане на фосфорно-калиеви торове",
                icon: "fas fa-flask"
            }
        ]
    },
    9: { // October
        name: "Октомври",
        tasks: [
            {
                category: "зеленчуци",
                title: "Прибиране на есенни култури",
                description: "Прибиране на картофи, зеле, моркови. Подготовка за съхранение",
                icon: "fas fa-basket-shopping"
            },
            {
                category: "общо",
                title: "Подготовка за зима",
                description: "Почистване на полето, компостиране, подготовка на почвата",
                icon: "fas fa-snowflake"
            },
            {
                category: "овощни",
                title: "Есенна подрязване",
                description: "Лека подрязване на дърветата. Премахване на болни части",
                icon: "fas fa-cut"
            }
        ]
    },
    10: { // November
        name: "Ноември",
        tasks: [
            {
                category: "общо",
                title: "Зимна подготовка",
                description: "Завършване на полските работи. Почистване и съхранение на инвентар",
                icon: "fas fa-tools"
            },
            {
                category: "зърнени",
                title: "Наблюдение на есенни култури",
                description: "Проверка на есенните зърнени култури. При нужда допълнителна защита",
                icon: "fas fa-eye"
            },
            {
                category: "общо",
                title: "Планиране",
                description: "Планиране на следващия сезон. Закупуване на материали",
                icon: "fas fa-clipboard-list"
            }
        ]
    },
    11: { // December
        name: "Декември",
        tasks: [
            {
                category: "общо",
                title: "Почивка и планиране",
                description: "Време за почивка и планиране на следващия сезон",
                icon: "fas fa-calendar-alt"
            },
            {
                category: "общо",
                title: "Закупуване",
                description: "Закупуване на семена, препарати и торове за следващия сезон",
                icon: "fas fa-shopping-cart"
            },
            {
                category: "общо",
                title: "Обучение",
                description: "Четене на специализирана литература, участие в семинари",
                icon: "fas fa-book"
            }
        ]
    }
};

// Category colors
const categoryColors = {
    "зърнени": { bg: "bg-yellow-100 dark:bg-yellow-900/20", text: "text-yellow-800 dark:text-yellow-200", icon: "fas fa-wheat-awn" },
    "зеленчуци": { bg: "bg-green-100 dark:bg-green-900/20", text: "text-green-800 dark:text-green-200", icon: "fas fa-carrot" },
    "овощни": { bg: "bg-red-100 dark:bg-red-900/20", text: "text-red-800 dark:text-red-200", icon: "fas fa-apple-alt" },
    "препарати": { bg: "bg-blue-100 dark:bg-blue-900/20", text: "text-blue-800 dark:text-blue-200", icon: "fas fa-spray-can" },
    "торове": { bg: "bg-purple-100 dark:bg-purple-900/20", text: "text-purple-800 dark:text-purple-200", icon: "fas fa-flask" },
    "общо": { bg: "bg-gray-100 dark:bg-gray-700", text: "text-gray-800 dark:text-gray-200", icon: "fas fa-tasks" }
};

function renderCalendar(monthIndex) {
    const calendarContent = document.getElementById('calendar-content');
    if (!calendarContent) return;
    
    const monthData = seasonalData[monthIndex];
    if (!monthData) return;
    
    calendarContent.innerHTML = monthData.tasks.map(task => {
        const colors = categoryColors[task.category] || categoryColors["общо"];
        return `
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 ${colors.bg} ${colors.text} rounded-full flex items-center justify-center mr-4">
                        <i class="${task.icon || colors.icon} text-xl"></i>
                    </div>
                    <div>
                        <span class="inline-block ${colors.bg} ${colors.text} text-xs font-semibold px-3 py-1 rounded-full">
                            ${getCategoryLabel(task.category)}
                        </span>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-agro-dark dark:text-white mb-2">
                    ${task.title}
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                    ${task.description}
                </p>
            </div>
        `;
    }).join('');
}

function getCategoryLabel(category) {
    const labels = {
        "зърнени": "Зърнени култури",
        "зеленчуци": "Зеленчуци",
        "овощни": "Овощни култури",
        "препарати": "Растителна защита",
        "торове": "Торене",
        "общо": "Общи задачи"
    };
    return labels[category] || category;
}

// Initialize calendar
document.addEventListener('DOMContentLoaded', function() {
    // Set current month as default
    const currentMonth = new Date().getMonth();
    renderCalendar(currentMonth);
    
    // Update active button
    const monthButtons = document.querySelectorAll('.month-btn');
    monthButtons.forEach((btn, index) => {
        if (index === currentMonth) {
            btn.classList.add('active', 'bg-agro-green', 'text-white');
            btn.classList.remove('bg-gray-200', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
        }
    });
    
    // Add event listeners
    monthButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const monthIndex = parseInt(this.getAttribute('data-month'));
            
            // Update active state
            monthButtons.forEach(b => {
                b.classList.remove('active', 'bg-agro-green', 'text-white');
                b.classList.add('bg-gray-200', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
            });
            this.classList.add('active', 'bg-agro-green', 'text-white');
            this.classList.remove('bg-gray-200', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
            
            // Render calendar
            renderCalendar(monthIndex);
        });
    });
});

