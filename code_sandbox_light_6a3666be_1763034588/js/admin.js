// Admin Panel JavaScript

// Admin password (change this in production!)
const ADMIN_PASSWORD = 'admin123';

// Check if user is logged in
function checkAuth() {
    return sessionStorage.getItem('adminLoggedIn') === 'true';
}

// Login function
function login(password) {
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        return true;
    }
    return false;
}

// Logout function
function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    location.reload();
}

// Get all inquiries from localStorage
function getInquiries() {
    try {
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        // Sort by timestamp (newest first)
        return inquiries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (error) {
        console.error('Error loading inquiries:', error);
        return [];
    }
}

// Save inquiries to localStorage
function saveInquiries(inquiries) {
    try {
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        return true;
    } catch (error) {
        console.error('Error saving inquiries:', error);
        return false;
    }
}

// Update inquiry status
function updateInquiryStatus(inquiryId, status, reply = null) {
    const inquiries = getInquiries();
    const index = inquiries.findIndex(i => i.id === inquiryId);
    
    if (index !== -1) {
        inquiries[index].status = status;
        if (reply) {
            inquiries[index].adminReply = reply;
            inquiries[index].adminReplyDate = new Date().toISOString();
        }
        saveInquiries(inquiries);
        return true;
    }
    return false;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('bg-BG', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Get status badge HTML
function getStatusBadge(status) {
    const badges = {
        'new': '<span class="px-3 py-1 rounded-full text-sm font-semibold bg-agro-green/10 text-agro-green">Ново</span>',
        'read': '<span class="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">Прочетено</span>',
        'replied': '<span class="px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">Отговорено</span>',
        'closed': '<span class="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">Затворено</span>'
    };
    return badges[status] || badges['new'];
}

// Render inquiry card
function renderInquiry(inquiry) {
    const hasReply = inquiry.adminReply ? 'border-l-4 border-l-purple-500' : '';
    return `
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-agro-light dark:border-slate-700 ${hasReply} hover:shadow-lg transition">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div class="flex-1">
                    <div class="flex items-start justify-between mb-3">
                        <div>
                            <h3 class="text-lg font-bold text-agro-dark dark:text-white mb-1">
                                ${escapeHtml(inquiry.name || 'Без име')}
                            </h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                <i class="fas fa-clock mr-1"></i>${formatDate(inquiry.timestamp)}
                            </p>
                        </div>
                        ${getStatusBadge(inquiry.status)}
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 mb-1">
                                <i class="fas fa-phone mr-2"></i>Телефон:
                            </p>
                            <p class="font-semibold text-agro-dark dark:text-white">
                                <a href="tel:${inquiry.phone}" class="hover:text-agro-green transition">
                                    ${escapeHtml(inquiry.phone || 'Няма')}
                                </a>
                            </p>
                        </div>
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 mb-1">
                                <i class="fas fa-envelope mr-2"></i>Имейл:
                            </p>
                            <p class="font-semibold text-agro-dark dark:text-white">
                                ${inquiry.email ? `<a href="mailto:${inquiry.email}" class="hover:text-agro-green transition">${escapeHtml(inquiry.email)}</a>` : 'Няма'}
                            </p>
                        </div>
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 mb-1">
                                <i class="fas fa-box mr-2"></i>Продукт:
                            </p>
                            <p class="font-semibold text-agro-dark dark:text-white">
                                ${escapeHtml(inquiry.product || 'Няма')}
                            </p>
                        </div>
                        ${inquiry.quantity ? `
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 mb-1">
                                <i class="fas fa-hashtag mr-2"></i>Количество:
                            </p>
                            <p class="font-semibold text-agro-dark dark:text-white">
                                ${escapeHtml(inquiry.quantity)}
                            </p>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="mb-4">
                        <p class="text-gray-500 dark:text-gray-400 mb-2">
                            <i class="fas fa-comment mr-2"></i>Съобщение:
                        </p>
                        <div class="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                            <p class="text-agro-dark dark:text-gray-100 whitespace-pre-wrap">
                                ${escapeHtml(inquiry.message || 'Няма съобщение')}
                            </p>
                        </div>
                    </div>
                    
                    ${inquiry.adminReply ? `
                    <div class="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                        <p class="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">
                            <i class="fas fa-reply mr-2"></i>Вашият отговор (${formatDate(inquiry.adminReplyDate)}):
                        </p>
                        <p class="text-purple-900 dark:text-purple-200 whitespace-pre-wrap">
                            ${escapeHtml(inquiry.adminReply)}
                        </p>
                    </div>
                    ` : ''}
                </div>
                
                <div class="flex flex-col gap-2 md:min-w-[200px]">
                    ${inquiry.status === 'new' ? `
                    <button 
                        data-mark-read 
                        data-inquiry-id="${inquiry.id}" 
                        class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-semibold"
                    >
                        <i class="fas fa-eye mr-2"></i>Маркирай като прочетено
                    </button>
                    ` : ''}
                    
                    ${inquiry.status !== 'replied' && inquiry.status !== 'closed' ? `
                    <button 
                        data-reply 
                        data-inquiry-id="${inquiry.id}" 
                        class="w-full px-4 py-2 bg-agro-green text-white rounded-lg hover:bg-agro-green-dark transition text-sm font-semibold"
                    >
                        <i class="fas fa-reply mr-2"></i>Отговори
                    </button>
                    ` : ''}
                    
                    ${inquiry.status !== 'closed' ? `
                    <button 
                        data-close 
                        data-inquiry-id="${inquiry.id}" 
                        class="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition text-sm font-semibold"
                    >
                        <i class="fas fa-times mr-2"></i>Затвори
                    </button>
                    ` : ''}
                    
                    <button 
                        data-delete 
                        data-inquiry-id="${inquiry.id}" 
                        class="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm font-semibold"
                    >
                        <i class="fas fa-trash mr-2"></i>Изтрий
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render all inquiries
function renderInquiries(filter = 'all') {
    const inquiries = getInquiries();
    const filtered = filter === 'all' ? inquiries : inquiries.filter(i => i.status === filter);
    const container = document.getElementById('inquiries-list');
    const noInquiries = document.getElementById('no-inquiries');
    
    if (!container) return;
    
    if (filtered.length === 0) {
        container.innerHTML = '';
        if (noInquiries) noInquiries.classList.remove('hidden');
        return;
    }
    
    if (noInquiries) noInquiries.classList.add('hidden');
    container.innerHTML = filtered.map(inquiry => renderInquiry(inquiry)).join('');
    
    // Update stats
    updateStats(inquiries);
    
    // Attach event listeners
    attachInquiryListeners();
}

// Update statistics
function updateStats(inquiries) {
    const stats = {
        new: inquiries.filter(i => i.status === 'new').length,
        read: inquiries.filter(i => i.status === 'read').length,
        replied: inquiries.filter(i => i.status === 'replied').length,
        total: inquiries.length
    };
    
    document.getElementById('stat-new').textContent = stats.new;
    document.getElementById('stat-read').textContent = stats.read;
    document.getElementById('stat-replied').textContent = stats.replied;
    document.getElementById('stat-total').textContent = stats.total;
}

// Attach event listeners to inquiry cards
function attachInquiryListeners() {
    // Mark as read
    document.querySelectorAll('[data-mark-read]').forEach(btn => {
        btn.addEventListener('click', function() {
            const inquiryId = this.getAttribute('data-inquiry-id');
            if (updateInquiryStatus(inquiryId, 'read')) {
                renderInquiries(getCurrentFilter());
            }
        });
    });
    
    // Reply button
    document.querySelectorAll('[data-reply]').forEach(btn => {
        btn.addEventListener('click', function() {
            const inquiryId = this.getAttribute('data-inquiry-id');
            openReplyModal(inquiryId);
        });
    });
    
    // Close button
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Сигурни ли сте, че искате да затворите това запитване?')) {
                const inquiryId = this.getAttribute('data-inquiry-id');
                if (updateInquiryStatus(inquiryId, 'closed')) {
                    renderInquiries(getCurrentFilter());
                }
            }
        });
    });
    
    // Delete button
    document.querySelectorAll('[data-delete]').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Сигурни ли сте, че искате да изтриете това запитване? Това действие не може да бъде отменено.')) {
                const inquiryId = this.getAttribute('data-inquiry-id');
                deleteInquiry(inquiryId);
            }
        });
    });
}

// Delete inquiry
function deleteInquiry(inquiryId) {
    const inquiries = getInquiries();
    const filtered = inquiries.filter(i => i.id !== inquiryId);
    if (saveInquiries(filtered)) {
        renderInquiries(getCurrentFilter());
    }
}

// Get current filter
function getCurrentFilter() {
    const activeFilter = document.querySelector('.filter-btn.active');
    return activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
}

// Open reply modal
function openReplyModal(inquiryId) {
    const inquiries = getInquiries();
    const inquiry = inquiries.find(i => i.id === inquiryId);
    
    if (!inquiry) return;
    
    const modal = document.getElementById('reply-modal');
    const details = document.getElementById('reply-inquiry-details');
    
    details.innerHTML = `
        <div class="space-y-2">
            <p><strong>От:</strong> ${escapeHtml(inquiry.name)}</p>
            <p><strong>Телефон:</strong> <a href="tel:${inquiry.phone}" class="text-agro-green hover:underline">${escapeHtml(inquiry.phone)}</a></p>
            ${inquiry.email ? `<p><strong>Имейл:</strong> <a href="mailto:${inquiry.email}" class="text-agro-green hover:underline">${escapeHtml(inquiry.email)}</a></p>` : ''}
            <p><strong>Продукт:</strong> ${escapeHtml(inquiry.product)}</p>
            <p><strong>Съобщение:</strong></p>
            <div class="bg-white dark:bg-slate-600 rounded p-2 mt-1">
                <p class="text-sm whitespace-pre-wrap">${escapeHtml(inquiry.message)}</p>
            </div>
        </div>
    `;
    
    document.getElementById('reply-form').setAttribute('data-inquiry-id', inquiryId);
    document.getElementById('reply-message').value = '';
    modal.classList.remove('hidden');
}

// Close reply modal
function closeReplyModal() {
    document.getElementById('reply-modal').classList.add('hidden');
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!checkAuth()) {
        // Show login screen
        document.getElementById('login-screen').classList.remove('hidden');
        document.getElementById('admin-panel').classList.add('hidden');
        
        // Handle login form
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('admin-password').value;
            const errorDiv = document.getElementById('login-error');
            
            if (login(password)) {
                location.reload();
            } else {
                errorDiv.classList.remove('hidden');
                setTimeout(() => {
                    errorDiv.classList.add('hidden');
                }, 3000);
            }
        });
    } else {
        // Show admin panel
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('admin-panel').classList.remove('hidden');
        
        // Load inquiries
        renderInquiries();
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('active', 'bg-agro-green', 'text-white');
                    b.classList.add('bg-gray-200', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
                });
                this.classList.add('active', 'bg-agro-green', 'text-white');
                this.classList.remove('bg-gray-200', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
                
                const filter = this.getAttribute('data-filter');
                renderInquiries(filter);
            });
        });
        
        // Reply form
        document.getElementById('reply-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const inquiryId = this.getAttribute('data-inquiry-id');
            const reply = document.getElementById('reply-message').value;
            
            if (reply.trim()) {
                if (updateInquiryStatus(inquiryId, 'replied', reply)) {
                    closeReplyModal();
                    renderInquiries(getCurrentFilter());
                }
            }
        });
        
        // Close reply modal buttons
        document.getElementById('close-reply-modal').addEventListener('click', closeReplyModal);
        document.getElementById('cancel-reply').addEventListener('click', closeReplyModal);
        
        // Logout button
        document.getElementById('logout-btn').addEventListener('click', logout);
        
        // Auto-refresh every 30 seconds
        setInterval(() => {
            renderInquiries(getCurrentFilter());
        }, 30000);
    }
});



