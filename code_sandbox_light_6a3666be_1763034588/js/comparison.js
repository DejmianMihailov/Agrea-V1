// Product Comparison System
// Based on best practices from e-commerce platforms like Amazon, eBay, and agricultural product sites

// Comparison state
let comparisonList = [];

// Load comparison from localStorage
function loadComparison() {
    const stored = localStorage.getItem('productComparison');
    if (stored) {
        try {
            comparisonList = JSON.parse(stored);
        } catch (e) {
            comparisonList = [];
        }
    }
    updateComparisonUI();
}

// Save comparison to localStorage
function saveComparison() {
    localStorage.setItem('productComparison', JSON.stringify(comparisonList));
    updateComparisonUI();
}

// Add product to comparison
function addToComparison(productId) {
    if (!productsData) return;
    
    const product = productsData.find(p => p.id === parseInt(productId));
    if (!product) return;
    
    // Check if already in comparison (max 4 products)
    if (comparisonList.find(p => p.id === product.id)) {
        showNotification('Продуктът вече е в списъка за сравнение', 'info');
        return;
    }
    
    if (comparisonList.length >= 4) {
        showNotification('Можете да сравнявате максимум 4 продукта', 'warning');
        return;
    }
    
    comparisonList.push(product);
    saveComparison();
    showNotification(`${product.name} е добавен за сравнение`, 'success');
}

// Remove product from comparison
function removeFromComparison(productId) {
    comparisonList = comparisonList.filter(p => p.id !== parseInt(productId));
    saveComparison();
    showNotification('Продуктът е премахнат от сравнението', 'info');
}

// Update comparison UI (badge, button states)
function updateComparisonUI() {
    // Update comparison badge
    const badge = document.getElementById('comparison-badge');
    if (badge) {
        if (comparisonList.length > 0) {
            badge.textContent = comparisonList.length;
            badge.classList.remove('hidden');
            // Make badge more visible with animation
            badge.classList.add('animate-pulse');
            setTimeout(() => {
                badge.classList.remove('animate-pulse');
            }, 1000);
        } else {
            badge.classList.add('hidden');
        }
    }
    
    // Update comparison button states
    document.querySelectorAll('[data-compare-btn]').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-product-id'));
        const isInComparison = comparisonList.find(p => p.id === productId);
        
        if (isInComparison) {
            btn.classList.add('bg-agro-green', 'text-white');
            btn.classList.remove('product-btn-secondary');
            btn.innerHTML = '<i class="fas fa-check mr-0.5 sm:mr-1"></i><span class="hidden sm:inline">Добавен</span><span class="sm:hidden">✓</span>';
        } else {
            btn.classList.remove('bg-agro-green', 'text-white');
            btn.classList.add('product-btn-secondary');
            btn.innerHTML = '<i class="fas fa-balance-scale mr-0.5 sm:mr-1"></i><span class="hidden sm:inline">Сравни</span><span class="sm:hidden">Сравн.</span>';
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'warning' ? 'bg-yellow-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('translate-x-0', 'opacity-100');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Render comparison modal
function renderComparisonModal() {
    if (comparisonList.length === 0) {
        showNotification('Добавете продукти за сравнение', 'info');
        return;
    }
    
    const modal = document.getElementById('comparison-modal');
    if (!modal) {
        createComparisonModal();
        return;
    }
    
    const modalContent = document.getElementById('comparison-content');
    if (!modalContent) return;
    
    // Get all unique attributes from products
    const allAttributes = new Set();
    comparisonList.forEach(product => {
        if (product.activeSubstance) allAttributes.add('activeSubstance');
        if (product.brand) allAttributes.add('brand');
        if (product.price) allAttributes.add('price');
        if (product.unit) allAttributes.add('unit');
        if (product.features) allAttributes.add('features');
        if (product.culture) allAttributes.add('culture');
        if (product.availability) allAttributes.add('availability');
    });
    
    // Build comparison table
    let html = `
        <div class="overflow-x-auto">
            <table class="w-full border-collapse">
                <thead>
                    <tr>
                        <th class="sticky left-0 bg-white dark:bg-slate-800 p-4 text-left border-b-2 border-agro-green z-10 min-w-[200px]">
                            Характеристика
                        </th>
    `;
    
    // Product headers
    comparisonList.forEach(product => {
        html += `
            <th class="p-4 text-center border-b-2 border-agro-green min-w-[250px]">
                <div class="flex flex-col items-center">
                    <button 
                        onclick="removeFromComparison(${product.id})" 
                        class="ml-auto text-red-500 hover:text-red-700 mb-2"
                        aria-label="Премахни"
                    >
                        <i class="fas fa-times"></i>
                    </button>
                    <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded-lg mb-2">
                    <h3 class="font-bold text-agro-dark dark:text-white mb-2">${escapeHtml(product.name)}</h3>
                    <span class="text-sm text-gray-500">${product.brand || 'N/A'}</span>
                </div>
            </th>
        `;
    });
    
    html += `
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Price row
    html += `
        <tr class="border-b">
            <td class="sticky left-0 bg-white dark:bg-slate-800 p-4 font-semibold z-10">
                <i class="fas fa-tag mr-2 text-agro-green"></i>Цена
            </td>
    `;
    comparisonList.forEach(product => {
        const bestPrice = Math.min(...comparisonList.map(p => p.price));
        const isBest = product.price === bestPrice;
        html += `
            <td class="p-4 text-center ${isBest ? 'bg-green-50 dark:bg-green-900/20 font-bold' : ''}">
                <span class="text-2xl text-agro-green">${product.price.toFixed(2)}</span>
                <span class="text-sm text-gray-500">лв / ${product.unit}</span>
                ${isBest ? '<div class="text-xs text-green-600 mt-1"><i class="fas fa-check-circle"></i> Най-добра цена</div>' : ''}
            </td>
        `;
    });
    html += `</tr>`;
    
    // Active Substance row
    if (allAttributes.has('activeSubstance')) {
        html += `
            <tr class="border-b">
                <td class="sticky left-0 bg-white dark:bg-slate-800 p-4 font-semibold z-10">
                    <i class="fas fa-flask mr-2 text-agro-green"></i>Активна съставка
                </td>
        `;
        comparisonList.forEach(product => {
            html += `
                <td class="p-4 text-center">
                    ${product.activeSubstance || 'N/A'}
                </td>
            `;
        });
        html += `</tr>`;
    }
    
    // Features row
    if (allAttributes.has('features')) {
        html += `
            <tr class="border-b">
                <td class="sticky left-0 bg-white dark:bg-slate-800 p-4 font-semibold z-10">
                    <i class="fas fa-star mr-2 text-agro-green"></i>Характеристики
                </td>
        `;
        comparisonList.forEach(product => {
            html += `
                <td class="p-4">
                    <ul class="text-left space-y-1">
                        ${(product.features || []).map(f => `<li class="text-sm"><i class="fas fa-check text-agro-green mr-2"></i>${escapeHtml(f)}</li>`).join('')}
                    </ul>
                </td>
            `;
        });
        html += `</tr>`;
    }
    
    // Culture row
    if (allAttributes.has('culture')) {
        html += `
            <tr class="border-b">
                <td class="sticky left-0 bg-white dark:bg-slate-800 p-4 font-semibold z-10">
                    <i class="fas fa-seedling mr-2 text-agro-green"></i>Подходящ за
                </td>
        `;
        comparisonList.forEach(product => {
            html += `
                <td class="p-4 text-center">
                    <div class="flex flex-wrap gap-2 justify-center">
                        ${(product.culture || []).map(c => `<span class="px-2 py-1 bg-agro-light dark:bg-slate-700 rounded text-sm">${escapeHtml(c)}</span>`).join('')}
                    </div>
                </td>
            `;
        });
        html += `</tr>`;
    }
    
    // Availability row
    html += `
        <tr class="border-b">
            <td class="sticky left-0 bg-white dark:bg-slate-800 p-4 font-semibold z-10">
                <i class="fas fa-box mr-2 text-agro-green"></i>Наличност
            </td>
    `;
    comparisonList.forEach(product => {
        const availability = getAvailabilityMeta(product);
        html += `
            <td class="p-4 text-center">
                <span class="${availability.className}">${availability.label}</span>
            </td>
        `;
    });
    html += `</tr>`;
    
    // Description row
    html += `
        <tr>
            <td class="sticky left-0 bg-white dark:bg-slate-800 p-4 font-semibold z-10">
                <i class="fas fa-info-circle mr-2 text-agro-green"></i>Описание
            </td>
    `;
    comparisonList.forEach(product => {
        html += `
            <td class="p-4 text-sm text-gray-600 dark:text-gray-400">
                ${escapeHtml(product.description || 'N/A')}
            </td>
        `;
    });
    html += `</tr>`;
    
    html += `
                </tbody>
            </table>
        </div>
        <div class="mt-6 flex gap-4 justify-center">
            <button 
                onclick="clearComparison()" 
                class="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
                <i class="fas fa-trash mr-2"></i>Изчисти всички
            </button>
            <button 
                onclick="printComparison()" 
                class="px-6 py-3 bg-agro-green text-white rounded-lg hover:bg-agro-green-dark transition"
            >
                <i class="fas fa-print mr-2"></i>Принтирай
            </button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    modal.classList.remove('hidden');
}

// Create comparison modal
function createComparisonModal() {
    const modal = document.createElement('div');
    modal.id = 'comparison-modal';
    modal.className = 'hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div class="p-6 border-b border-agro-light dark:border-slate-700 flex justify-between items-center">
                <h2 class="text-2xl font-bold text-agro-dark dark:text-white">
                    <i class="fas fa-balance-scale mr-2"></i>Сравнение на продукти
                </h2>
                <button onclick="closeComparisonModal()" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto p-6" id="comparison-content">
                <!-- Content will be loaded here -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    renderComparisonModal();
}

// Close comparison modal
function closeComparisonModal() {
    const modal = document.getElementById('comparison-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Clear all comparisons
function clearComparison() {
    if (confirm('Сигурни ли сте, че искате да изчистите всички продукти от сравнението?')) {
        comparisonList = [];
        saveComparison();
        closeComparisonModal();
        showNotification('Сравнението е изчистено', 'info');
    }
}

// Print comparison
function printComparison() {
    window.print();
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally available
window.addToComparison = addToComparison;
window.removeFromComparison = removeFromComparison;
window.clearComparison = clearComparison;
window.closeComparisonModal = closeComparisonModal;
window.printComparison = printComparison;
window.renderComparisonModal = renderComparisonModal;

// Initialize comparison system
document.addEventListener('DOMContentLoaded', function() {
    loadComparison();
    
    // Add event listeners for compare buttons
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.addEventListener('click', function(e) {
            const compareBtn = e.target.closest('[data-compare-btn]');
            if (compareBtn) {
                e.preventDefault();
                e.stopPropagation();
                const productId = compareBtn.getAttribute('data-product-id');
                addToComparison(productId);
            }
        });
    }
    
    // Add comparison button to navigation (if needed)
    // This can be added to show comparison badge in header
});

// Add comparison button to header (as icon only, next to theme toggle)
function addComparisonButtonToHeader() {
    const nav = document.querySelector('nav .container');
    if (nav && !document.getElementById('comparison-header-btn')) {
        const btn = document.createElement('button');
        btn.id = 'comparison-header-btn';
        btn.type = 'button';
        btn.onclick = function(e) {
            e.preventDefault();
            renderComparisonModal();
        };
        btn.className = 'relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-agro-dark transition hover:bg-agro-light dark:border-slate-700 dark:text-gray-100 dark:hover:bg-slate-800';
        btn.setAttribute('aria-label', 'Сравнение на продукти');
        btn.innerHTML = `
            <i class="fas fa-balance-scale text-lg"></i>
            <span id="comparison-badge" class="absolute -top-1 -right-1 bg-red-600 text-white text-lg rounded-full min-w-[28px] h-7 px-2.5 flex items-center justify-center hidden font-black shadow-2xl border-4 border-white dark:border-slate-900 z-10 leading-none transform scale-110">0</span>
        `;
        
        // Insert before theme toggle
        const themeToggle = nav.querySelector('[data-theme-toggle]');
        if (themeToggle && themeToggle.parentElement) {
            themeToggle.parentElement.insertBefore(btn, themeToggle);
        }
    }
}

// Call this after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addComparisonButtonToHeader, 500);
});

