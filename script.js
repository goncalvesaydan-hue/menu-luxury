        /*
           STEP 4: LOGIC & MOTION
        */

        // Mock Data (Infused with Human Narrative)
        const MENU_DATA = {
            pt: {
                categories: ["Entradas", "Peixes", "Carnes", "Sobremesas"],
                tags: {
                    "V": "Vegetariano",
                    "GF": "Sem Glúten"
                },
                sections: [
                    {
                        id: "sec-1",
                        name: "Entradas",
                        image: "assets/appetizer.jpg",
                        items: [
                            { id: "i1", name: "Carpaccio de Salmão", price: "14.00", desc: "Lâminas de salmão fresco que chegam todas as manhãs, finalizadas com alcaparras crocantes e limão siciliano", ingredients: ["Salmão", "Alcaparras", "Limão", "Azeite"], image: "assets/salmon.jpg", tags: ["GF"] },
                            { id: "i2", name: "Burrata Cremosa", price: "12.50", desc: "A autêntica Burrata de Puglia, servida com tomates cereja confitados lentamente em azeite extra virgem", ingredients: ["Burrata", "Tomate", "Manjericão"], image: "https://picsum.photos/seed/burrata/600/400", tags: ["V"] },
                            { id: "i5", name: "Tartare de Atum", price: "16.00", desc: "Atum fresco picado na hora com abacate maduro, sésamo tostado e um toque sutil de gengibre", ingredients: ["Atum", "Abacate", "Sésamo", "Gengibre"], image: "https://picsum.photos/seed/tuna/600/400", tags: ["GF"] },
                            { id: "i6", name: "Croquetas de Jamón", price: "11.00", desc: "Nossas croquetas artesanais de Jamón Ibérico, com um interior cremoso de bechamel", ingredients: ["Jamón Ibérico", "Bechamel", "Queijo"], image: "assets/appetizer.jpg", tags: [] },
                            { id: "i15", name: "Bruschetta de Figos", price: "13.00", desc: "Pão de fermentação natural tostado com queijo de cabra, figos frescos e mel de acácia", ingredients: ["Figo", "Queijo de Cabra", "Mel"], image: "https://picsum.photos/seed/fig/600/400", tags: ["V"] },
                            { id: "i16", name: "Carpaccio de Beterraba", price: "12.00", desc: "Beterraba assada em crosta de sal, com requeijão cremoso e nozes caramelizadas", ingredients: ["Beterraba", "Nozes", "Requeijão"], image: "https://picsum.photos/seed/beet/600/400", tags: ["V", "GF"] }
                        ]
                    },
                    {
                        id: "sec-2",
                        name: "Peixes",
                        image: "assets/salmon.jpg",
                        items: [
                            { id: "i3", name: "Bacalhau Preto", price: "28.00", desc: "Lombo de bacalhau rigorosamente curado, com uma crosta crocante de sésamo preto e batatas cozidas", ingredients: ["Bacalhau", "Sésamo", "Batata"], image: "https://picsum.photos/seed/cod/600/400", tags: ["GF"] },
                            { id: "i4", name: "Robalo Grelhado", price: "24.00", desc: "Robalo fresco grelhado no ponto certo, acompanhado por legumes da época salteados no alho", ingredients: ["Robalo", "Legumes", "Azeite"], image: "https://picsum.photos/seed/bass/600/400", tags: ["GF"] },
                            { id: "i7", name: "Polvo à Lagareiro", price: "26.00", desc: "Polvo tenro, cozido lentamente e finalizado com azeite generoso e batatas a murro", ingredients: ["Polvo", "Azeite", "Alho", "Batata"], image: "https://picsum.photos/seed/octopus/600/400", tags: ["GF"] },
                            { id: "i8", name: "Salmão Glaciado", price: "22.00", desc: "Lombo de salmão com uma glaciada artesanal de missô e gengibre, equilíbrio perfeito entre doce e salgado", ingredients: ["Salmão", "Missô", "Gengibre"], image: "assets/salmon.jpg", tags: ["GF"] },
                            { id: "i17", name: "Linguine com Amêijoas", price: "21.00", desc: "Massa fresca al dente com amêijoas da costa, alho, salsa e um toque de vinho branco", ingredients: ["Massa", "Amêijoas", "Vinho Branco"], image: "https://picsum.photos/seed/pasta-fish/600/400", tags: [] },
                            { id: "i18", name: "Vieiras Seladas", price: "26.00", desc: "Vieiras frescas seladas na manteiga de noisette, servidas sobre puré de couve-flor", ingredients: ["Vieiras", "Manteiga", "Couve-flor"], image: "https://picsum.photos/seed/scallops/600/400", tags: ["GF"] }
                        ]
                    },
                    {
                        id: "sec-3",
                        name: "Carnes",
                        image: "assets/steak.jpg",
                        items: [
                            { id: "i9", name: "Filete Mignon", price: "32.00", desc: "Medalhão de vitela selecionada, servido sobre um risotto cremoso de cogumelos silvestres", ingredients: ["Vitela", "Cogumelos", "Arroz Arborio"], image: "assets/steak.jpg", tags: ["GF"] },
                            { id: "i10", name: "Costelas de Cordeiro", price: "30.00", desc: "Cordeiro assado lentamente, com um puré rústico de ervilhas frescas e toque de menta", ingredients: ["Cordeiro", "Ervilhas", "Menta"], image: "https://picsum.photos/seed/lamb/600/400", tags: ["GF"] },
                            { id: "i11", name: "Wagyu Steak", price: "45.00", desc: "Corte premium de Wagyu, selado em alta temperatura com sal Maldon e manteiga de ervas do nosso jardim", ingredients: ["Wagyu", "Manteiga", "Salsa"], image: "https://picsum.photos/seed/wagyu/600/400", tags: ["GF"] },
                            { id: "i19", name: "Magret de Pato", price: "29.00", desc: "Peito de pato glaciado com redução de frutos vermelhos e puré de cenoura", ingredients: ["Pato", "Frutos Vermelhos", "Cenoura"], image: "https://picsum.photos/seed/duck/600/400", tags: ["GF"] },
                            { id: "i20", name: "Risotto de Carne", price: "24.00", desc: "Arroz arborio cremoso com pontas de filé, parmesão reggiano e toque de trufa", ingredients: ["Carne", "Arroz", "Trufa"], image: "https://picsum.photos/seed/meat-risotto/600/400", tags: [] }
                        ]
                    },
                    {
                        id: "sec-4",
                        name: "Sobremesas",
                        image: "assets/dessert.jpg",
                        items: [
                            { id: "i12", name: "Fondant de Chocolate", price: "10.00", desc: "Chocolate belga fundido, com coração líquido, servida com uma bola de gelado de baunilha artesanal", ingredients: ["Chocolate", "Baunilha", "Ovos"], image: "https://picsum.photos/seed/fondant/600/400", tags: [] },
                            { id: "i13", name: "Cheesecake de Frutos", price: "9.00", desc: "Cheesecake cremoso com uma calda vibrante de frutos do bosque colhidos na estação", ingredients: ["Queijo Creme", "Frutos Vermelhos"], image: "https://picsum.photos/seed/cheesecake/600/400", tags: ["GF"] },
                            { id: "i14", name: "Tarte Tatin", price: "11.00", desc: "A clássica tarte de maçã caramelizada, servida quente com uma colher de creme fraîche", ingredients: ["Maçã", "Caramelo", "Massa Folhada"], image: "https://picsum.photos/seed/tatin/600/400", tags: [] },
                            { id: "i21", name: "Mousse de Maracujá", price: "8.00", desc: "Mousse leve e aerada de maracujá fresco com crocante de pistache", ingredients: ["Maracujá", "Pistache"], image: "https://picsum.photos/seed/passion-fruit/600/400", tags: ["GF"] },
                            { id: "i22", name: "Pavlova de Frutos", price: "12.00", desc: "Merengue crocante por fora e macio por dentro, com creme leve e frutas da época", ingredients: ["Claras de Ovo", "Açúcar", "Frutas"], image: "https://picsum.photos/seed/pavlova/600/400", tags: ["GF"] }
                        ]
                    }
                ]
            },
            en: {
                categories: ["Appetizers", "Fish", "Meat", "Desserts"],
                tags: {
                    "V": "Vegetarian",
                    "GF": "Gluten-Free"
                },
                sections: [
                    {
                        id: "sec-1",
                        name: "Appetizers",
                        image: "assets/appetizer.jpg",
                        items: [
                            { id: "i1", name: "Salmon Carpaccio", price: "14.00", desc: "Fresh salmon slices delivered every morning, finished with crispy capers and Sicilian lemon", ingredients: ["Salmon", "Capers", "Lemon", "Olive Oil"], image: "assets/salmon.jpg", tags: ["GF"] },
                            { id: "i2", name: "Creamy Burrata", price: "12.50", desc: "Authentic Puglia Burrata, served with cherry tomatoes slowly confited in extra virgin olive oil", ingredients: ["Burrata", "Tomato", "Basil"], image: "https://picsum.photos/seed/burrata/600/400", tags: ["V"] },
                            { id: "i5", name: "Tuna Tartare", price: "16.00", desc: "Freshly chopped tuna with ripe avocado, toasted sesame and a subtle touch of ginger", ingredients: ["Tuna", "Avocado", "Sesame", "Ginger"], image: "https://picsum.photos/seed/tuna/600/400", tags: ["GF"] },
                            { id: "i6", name: "Jamón Croquettes", price: "11.00", desc: "Our artisanal Jamón Ibérico croquettes, with a creamy bechamel interior", ingredients: ["Jamón Ibérico", "Bechamel", "Cheese"], image: "assets/appetizer.jpg", tags: [] },
                            { id: "i15", name: "Fig Bruschetta", price: "13.00", desc: "Toasted sourdough bread with goat cheese, fresh figs and acacia honey", ingredients: ["Fig", "Goat Cheese", "Honey"], image: "https://picsum.photos/seed/fig/600/400", tags: ["V"] },
                            { id: "i16", name: "Beetroot Carpaccio", price: "12.00", desc: "Salt-crusted roasted beetroot, with creamy cottage cheese and caramelized walnuts", ingredients: ["Beetroot", "Walnuts", "Cottage Cheese"], image: "https://picsum.photos/seed/beet/600/400", tags: ["V", "GF"] }
                        ]
                    },
                    {
                        id: "sec-2",
                        name: "Fish",
                        image: "assets/salmon.jpg",
                        items: [
                            { id: "i3", name: "Black Cod", price: "28.00", desc: "Rigorously cured cod loin, with a crispy black sesame crust and boiled potatoes", ingredients: ["Cod", "Sesame", "Potato"], image: "https://picsum.photos/seed/cod/600/400", tags: ["GF"] },
                            { id: "i4", name: "Grilled Sea Bass", price: "24.00", desc: "Fresh sea bass grilled to perfection, accompanied by seasonal vegetables sautéed in garlic", ingredients: ["Sea Bass", "Vegetables", "Olive Oil"], image: "https://picsum.photos/seed/bass/600/400", tags: ["GF"] },
                            { id: "i7", name: "Octopus Lagareiro", price: "26.00", desc: "Tender octopus, slowly cooked and finished with generous olive oil and smashed potatoes", ingredients: ["Octopus", "Olive Oil", "Garlic", "Potato"], image: "https://picsum.photos/seed/octopus/600/400", tags: ["GF"] },
                            { id: "i8", name: "Glazed Salmon", price: "22.00", desc: "Salmon loin with an artisanal miso and ginger glaze, perfect balance between sweet and salty", ingredients: ["Salmon", "Miso", "Gengibre"], image: "assets/salmon.jpg", tags: ["GF"] },
                            { id: "i17", name: "Linguine with Clams", price: "21.00", desc: "Fresh al dente pasta with coastal clams, garlic, parsley and a touch of white wine", ingredients: ["Pasta", "Clams", "White Wine"], image: "https://picsum.photos/seed/pasta-fish/600/400", tags: [] },
                            { id: "i18", name: "Seared Scallops", price: "26.00", desc: "Fresh scallops seared in noisette butter, served over cauliflower puree", ingredients: ["Scallops", "Butter", "Cauliflower"], image: "https://picsum.photos/seed/scallops/600/400", tags: ["GF"] }
                        ]
                    },
                    {
                        id: "sec-3",
                        name: "Meat",
                        image: "assets/steak.jpg",
                        items: [
                            { id: "i9", name: "Filet Mignon", price: "32.00", desc: "Selected veal medallion, served over a creamy wild mushroom risotto", ingredients: ["Veal", "Mushrooms", "Arborio Rice"], image: "assets/steak.jpg", tags: ["GF"] },
                            { id: "i10", name: "Lamb Chops", price: "30.00", desc: "Slow-roasted lamb, with a rustic fresh pea puree and a touch of mint", ingredients: ["Lamb", "Peas", "Mint"], image: "https://picsum.photos/seed/lamb/600/400", tags: ["GF"] },
                            { id: "i11", name: "Wagyu Steak", price: "45.00", desc: "Premium Wagyu cut, seared at high temperature with Maldon salt and herb butter from our garden", ingredients: ["Wagyu", "Manteiga", "Salsa"], image: "https://picsum.photos/seed/wagyu/600/400", tags: ["GF"] },
                            { id: "i19", name: "Duck Magret", price: "29.00", desc: "Glazed duck breast with red fruit reduction and carrot puree", ingredients: ["Duck", "Red Fruits", "Carrot"], image: "https://picsum.photos/seed/duck/600/400", tags: ["GF"] },
                            { id: "i20", name: "Meat Risotto", price: "24.00", desc: "Creamy arborio rice with filet tips, reggiano parmesan and a touch of truffle", ingredients: ["Meat", "Rice", "Truffle"], image: "https://picsum.photos/seed/meat-risotto/600/400", tags: [] }
                        ]
                    },
                    {
                        id: "sec-4",
                        name: "Desserts",
                        image: "assets/dessert.jpg",
                        items: [
                            { id: "i12", name: "Chocolate Fondant", price: "10.00", desc: "Melted Belgian chocolate, with a liquid heart, served with a scoop of artisanal vanilla ice cream", ingredients: ["Chocolate", "Vanilla", "Eggs"], image: "https://picsum.photos/seed/fondant/600/400", tags: [] },
                            { id: "i13", name: "Fruit Cheesecake", price: "9.00", desc: "Creamy cheesecake with a vibrant berry glaze picked in season", ingredients: ["Cream Cheese", "Red Fruits"], image: "https://picsum.photos/seed/cheesecake/600/400", tags: ["GF"] },
                            { id: "i14", name: "Tarte Tatin", price: "11.00", desc: "The classic caramelized apple tart, served warm with a dollop of crème fraîche", ingredients: ["Apple", "Caramel", "Puff Pastry"], image: "https://picsum.photos/seed/tatin/600/400", tags: [] },
                            { id: "i21", name: "Passion Fruit Mousse", price: "8.00", desc: "Mousse leve e aerada de maracujá fresco com crocante de pistache", ingredients: ["Passion Fruit", "Pistachio"], image: "https://picsum.photos/seed/passion-fruit/600/400", tags: ["GF"] },
                            { id: "i22", name: "Fruit Pavlova", price: "12.00", desc: "Crispy on the outside and soft on the inside meringue, with light cream and seasonal fruits", ingredients: ["Egg Whites", "Sugar", "Fruits"], image: "https://picsum.photos/seed/pavlova/600/400", tags: ["GF"] }
                        ]
                    }
                ]
            }
        };

        const ViewManager = {
            navigateTo(viewId) {
                const current = document.querySelector('.view.active');
                const next = document.getElementById(viewId);

                if (!current || !next) return;

                current.style.opacity = '0';
                current.style.transform = 'translateY(-10px)';

                setTimeout(() => {
                    current.classList.remove('active');
                    next.classList.add('active');
                    next.style.opacity = '1';
                    next.style.transform = 'translateY(0)';
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
                                <div class="item-main">
                                    <div class="item-name">
                                        ${item.name}
                                        <div class="item-tags">
                                            ${item.tags.map(tag => `<span class="diet-tag">${tag}</span>`).join('')}
                                        </div>
                                        <span class="item-dots"></span>
                                    </div>
                                    <div class="item-desc">${item.desc}</div>
                                </div>
                                <div class="item-price">€${item.price}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        function filterCategory(el, cat) {
            document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');

            document.querySelectorAll('.section-group').forEach((sec, index) => {
                if (sec.dataset.category === cat) {
                    sec.style.display = 'block';
                    sec.classList.remove('reveal');
                    void sec.offsetWidth;
                    sec.classList.add('reveal');
                    sec.style.animationDelay = `${index * 0.1}s`;
                } else {
                    sec.style.display = 'none';
                }
            });

            document.querySelectorAll('.item-row').forEach((item, idx) => {
                item.classList.remove('reveal');
                void item.offsetWidth;
                item.classList.add('reveal');
                item.style.animationDelay = `${(idx * 0.05)}s`;
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

            document.getElementById('detail-sheet').classList.add('active');
            document.getElementById('sheet-overlay').classList.add('active');
        }

        function closeDetail() {
            document.getElementById('detail-sheet').classList.remove('active');
            document.getElementById('sheet-overlay').classList.remove('active');
        }

        window.addEventListener('DOMContentLoaded', () => {
            const savedLang = localStorage.getItem('menu_lang') || 'pt';
            if(savedLang) {
                ViewManager.navigateTo('view-main');
                initMenu();
            } else {
                ViewManager.navigateTo('view-language');
            }
        });
