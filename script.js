// script.js
// Logic & Motion

const ViewManager = {
    navigateTo(viewId) {
        const current = document.querySelector('.view.active');
        const next = document.getElementById(viewId);

        if (current) {
            current.style.opacity = '0';
            current.style.transform = 'translateY(-10px)';
        }

        setTimeout(() => {
            if (current) current.classList.remove('active');
            if (next) {
                next.classList.add('active');
                next.style.opacity = '1';
                next.style.transform = 'translateY(0)';
            }
        }, 300);
    }
};

function selectLanguage(lang) {
    localStorage.setItem('menu_lang', lang);
    ViewManager.navigateTo('view-main');
    initMenu();
}

function initMenu() {
    const lang = localStorage.getItem('menu_lang') || 'pt';
    const data = MENU_DATA[lang] || MENU_DATA.pt;

    // Botão para voltar à seleção de idioma
    const backBtn = document.getElementById('back-to-language');
    if (backBtn) {
        backBtn.onclick = () => ViewManager.navigateTo('view-language');
    }

    const nav = document.getElementById('cat-nav');
    if (!nav) return;

    nav.innerHTML = data.categories.map((cat, i) => `
        <div class="cat-chip ${i===0?'active':''}" onclick="filterCategory(this, '${cat}')">${cat}</div>
    `).join('');

    renderSections(data);

    const firstCat = data.categories[0];
    const firstChip = nav.querySelector('.cat-chip');
    if (firstChip) {
        filterCategory(firstChip, firstCat);
    }
}

function renderSections(data) {
    const content = document.getElementById('menu-content');
    if (!content) return;

    content.innerHTML = data.sections.map(sec => `
        <div class="section-group reveal" data-category="${sec.name}">
            <div class="section-hero">
                <div class="section-image-wrap">
                    <img src="${sec.image}" class="section-image" alt="${sec.name}">
                </div>
                <div class="section-title-wrap">
                    <h2 class="section-title text-serif">${sec.name}</h2>
                </div>
            </div>
            <div class="items-list">
                ${sec.items.map((item, idx) => `
                    <div class="item-row" style="animation-delay: ${idx * 0.05}s" onclick="showDetail('${item.id}')">
                        <div class="item-top-row">
                            <div class="item-details">
                                <div class="item-thumbnail">
                                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                                </div>
                                <div class="item-name">
                                    ${item.name}
                                    <div class="item-tags">
                                        ${item.tags.map(tag => `<span class="diet-tag">${tag}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                            <div class="item-price">€${item.price}</div>
                        </div>
                        <div class="item-desc">${item.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function filterCategory(el, cat) {
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    let visibleIndex = 0;
    document.querySelectorAll('.section-group').forEach((sec) => {
        if (sec.dataset.category === cat) {
            sec.style.display = 'block';
            sec.classList.remove('reveal');
            void sec.offsetWidth; // trigger reflow
            sec.classList.add('reveal');
            sec.style.animationDelay = `${visibleIndex * 0.1}s`;

            sec.querySelectorAll('.item-row').forEach((item, idx) => {
                item.classList.remove('reveal');
                void item.offsetWidth;
                item.classList.add('reveal');
                item.style.animationDelay = `${(visibleIndex * 0.1) + (idx * 0.05)}s`;
            });
            visibleIndex++;
        } else {
            sec.style.display = 'none';
        }
    });
}

function showDetail(itemId) {
    const lang = localStorage.getItem('menu_lang') || 'pt';
    const data = MENU_DATA[lang] || MENU_DATA.pt;

    let item = null;
    data.sections.forEach(sec => {
        const found = sec.items.find(i => i.id === itemId);
        if(found) item = found;
    });

    if(!item) return;

    document.getElementById('detail-img').src = item.image;
    document.getElementById('detail-title').innerText = item.name;
    document.getElementById('detail-price').innerText = `€${item.price}`;
    document.getElementById('detail-desc').innerText = item.desc;
    document.getElementById('detail-ingredients').innerHTML = item.ingredients.map(ing => `
        <span class="ingredient-tag">${ing}</span>
    `).join('');

    const sheet = document.getElementById('detail-sheet');
    sheet.classList.add('active');
    sheet.style.transform = '';
    document.getElementById('sheet-overlay').classList.add('active');
}

function closeDetail() {
    const sheet = document.getElementById('detail-sheet');
    sheet.classList.remove('active');
    sheet.style.transform = '';
    document.getElementById('sheet-overlay').classList.remove('active');

    // Reset scroll position of the bottom sheet to the top
    sheet.scrollTop = 0;
}

function setupBottomSheetDrag() {
    const sheet = document.getElementById('detail-sheet');
    const handle = document.querySelector('.sheet-handle');

    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    const isMobile = () => window.innerWidth < 1024;

    const onTouchStart = (e) => {
        if (!isMobile() || !sheet.classList.contains('active')) return;

        // Only prevent scroll and allow dragging if we are at the very top of the content
        if (sheet.scrollTop > 0) {
            return;
        }

        if (e.target === handle || e.target.closest('.sheet-handle')) {
            startY = e.touches[0].clientY;
            isDragging = true;
            sheet.classList.add('dragging');
            sheet.style.transition = 'none';
            e.preventDefault();
        }
    };

    const onTouchMove = (e) => {
        if (!isDragging) return;

        currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        if (diff > 0) {
            e.preventDefault();
            sheet.style.transform = `translateY(${diff}px)`;
        }
    };

    const onTouchEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        sheet.classList.remove('dragging');
        sheet.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        const diff = currentY - startY;
        if (diff > 100) {
            closeDetail();
        } else {
            sheet.style.transform = `translateY(0)`;
        }
    };

    sheet.addEventListener('touchstart', onTouchStart, { passive: false });
    sheet.addEventListener('touchmove', onTouchMove, { passive: false });
    sheet.addEventListener('touchend', onTouchEnd);
}

window.addEventListener('DOMContentLoaded', () => {
    setupBottomSheetDrag();
    // Força a tela de idiomas sempre no início
    ViewManager.navigateTo('view-language');
});
