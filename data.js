// data.js
// Mock Data (Infused with Human Narrative)

const MENU_DATA = {
    pt: {
        categories: ["Entradas", "Peixes", "Carnes", "Sobremesas"],
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
        sections: [
            {
                id: "sec-1",
                name: "Appetizers",
                image: "assets/appetizer.jpg",
                items: [
                    { id: "i1", name: "Salmon Carpaccio", price: "14.00", desc: "Fresh salmon slices delivered every morning, finished with crispy capers and Sicilian lemon", ingredients: ["Salmon", "Capers", "Lemon", "Olive Oil"], image: "assets/salmon.jpg", tags: ["GF"] },
                    { id: "i2", name: "Creamy Burrata", price: "12.50", desc: "Authentic Puglia Burrata, served with cherry tomatoes slowly confited in extra virgin olive oil", ingredients: ["Burrata", "Tomato", "Basil"], image: "https://picsum.photos/seed/burrata/600/400", tags: ["V"] },
                    { id: "i5", name: "Tuna Tartare", price: "16.00", desc: "Freshly chopped tuna with ripe avocado, toasted sesame and a subtle touch of ginger", ingredients: ["Tuna", "Avocado", "Sesame", "Ginger"], image: "https://picsum.photos/seed/tuna/600/400", tags: ["GF"] },
                    { id: "i6", name: "Jamón Croquettes", price: "11.00", desc: "Our artisanal Jamón Ibérico croquettes, with a creamy bechamel interior", ingredients: ["Jamón Ibérico", "Bechamel", "Queijo"], image: "assets/appetizer.jpg", tags: [] },
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
                    { id: "i8", name: "Glazed Salmon", price: "22.00", desc: "Salmon loin with an artisanal miso and ginger glaze, perfect balance between sweet and salty", ingredients: ["Salmon", "Miso", "Ginger"], image: "assets/salmon.jpg", tags: ["GF"] },
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
                    { id: "i11", name: "Wagyu Steak", price: "45.00", desc: "Premium Wagyu cut, seared at high temperature with Maldon salt and herb butter from our garden", ingredients: ["Wagyu", "Butter", "Parsley"], image: "https://picsum.photos/seed/wagyu/600/400", tags: ["GF"] },
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
                    { id: "i21", name: "Passion Fruit Mousse", price: "8.00", desc: "Light and airy fresh passion fruit mousse with pistachio crunch", ingredients: ["Passion Fruit", "Pistachio"], image: "https://picsum.photos/seed/passion-fruit/600/400", tags: ["GF"] },
                    { id: "i22", name: "Fruit Pavlova", price: "12.00", desc: "Crispy on the outside and soft on the inside meringue, with light cream and seasonal fruits", ingredients: ["Egg Whites", "Sugar", "Fruits"], image: "https://picsum.photos/seed/pavlova/600/400", tags: ["GF"] }
                ]
            }
        ]
    },
    es: {
        categories: ["Entrantes", "Pescados", "Carnes", "Postres"],
        sections: [
            {
                id: "sec-1",
                name: "Entrantes",
                image: "assets/appetizer.jpg",
                items: [
                    { id: "i1", name: "Carpaccio de Salmón", price: "14.00", desc: "Láminas de salmón fresco que llegan todas las mañanas, finalizadas con alcaparras crujientes y limón siciliano", ingredients: ["Salmón", "Alcaparras", "Limón", "Aceite"], image: "assets/salmon.jpg", tags: ["GF"] },
                    { id: "i2", name: "Burrata Cremosa", price: "12.50", desc: "La auténtica Burrata de Puglia, servida con tomates cereza confitados lentamente en aceite extra virgen", ingredients: ["Burrata", "Tomate", "Albahaca"], image: "https://picsum.photos/seed/burrata/600/400", tags: ["V"] },
                    { id: "i5", name: "Tártara de Atún", price: "16.00", desc: "Atún fresco picado al momento con aguacate maduro, sésamo tostado y un toque sutil de jengibre", ingredients: ["Atún", "Aguacate", "Sésamo", "Jengibre"], image: "https://picsum.photos/seed/tuna/600/400", tags: ["GF"] },
                    { id: "i6", name: "Croquetas de Jamón", price: "11.00", desc: "Nuestras croquetas artesanales de Jamón Ibérico, con un interior cremoso de bechamel", ingredients: ["Jamón Ibérico", "Bechamel", "Queso"], image: "assets/appetizer.jpg", tags: [] },
                    { id: "i15", name: "Bruschetta de Higos", price: "13.00", desc: "Pan de masa madre tostado con queso de cabra, higos frescos y miel de acacia", ingredients: ["Higo", "Queso de Cabra", "Miel"], image: "https://picsum.photos/seed/fig/600/400", tags: ["V"] },
                    { id: "i16", name: "Carpaccio de Remolacha", price: "12.00", desc: "Remolacha asada en costra de sal, con requesón cremoso y nueces caramelizadas", ingredients: ["Remolacha", "Nueces", "Requesón"], image: "https://picsum.photos/seed/beet/600/400", tags: ["V", "GF"] }
                ]
            },
            {
                id: "sec-2",
                name: "Pescados",
                image: "assets/salmon.jpg",
                items: [
                    { id: "i3", name: "Bacalao Negro", price: "28.00", desc: "Lomo de bacalao rigurosamente curado, con una costra crujiente de sésamo negro y patatas cocidas", ingredients: ["Bacalao", "Sésamo", "Patata"], image: "https://picsum.photos/seed/cod/600/400", tags: ["GF"] },
                    { id: "i4", name: "Lubina a la Plancha", price: "24.00", desc: "Lubina fresca asada al punto exacto, acompañada de verduras de temporada salteadas con ajo", ingredients: ["Lubina", "Verduras", "Aceite"], image: "https://picsum.photos/seed/bass/600/400", tags: ["GF"] },
                    { id: "i7", name: "Pulpo a la Lagareiro", price: "26.00", desc: "Pulpo tierno, cocido lentamente y finalizado con aceite generoso y patatas panaderas", ingredients: ["Pulpo", "Aceite", "Ajo", "Patata"], image: "https://picsum.photos/seed/octopus/600/400", tags: ["GF"] },
                    { id: "i8", name: "Salmón Glaseado", price: "22.00", desc: "Lomo de salmón con un glaseado artesanal de miso y jengibre, equilibrio perfecto entre dulce y salgado", ingredients: ["Salmón", "Miso", "Jengibre"], image: "assets/salmon.jpg", tags: ["GF"] },
                    { id: "i17", name: "Linguine con Almejas", price: "21.00", desc: "Pasta fresca al dente con almejas de la costa, ajo, perejil y un toque de vino blanco", ingredients: ["Pasta", "Almejas", "Vino Blanco"], image: "https://picsum.photos/seed/pasta-fish/600/400", tags: [] },
                    { id: "i18", name: "Vieiras Selladas", price: "26.00", desc: "Vieiras frescas selladas en mantequilla de noisette, servidas sobre puré de coliflor", ingredients: ["Vieiras", "Mantequilla", "Coliflor"], image: "https://picsum.photos/seed/scallops/600/400", tags: ["GF"] }
                ]
            },
            {
                id: "sec-3",
                name: "Carnes",
                image: "assets/steak.jpg",
                items: [
                    { id: "i9", name: "Solomillo Mignon", price: "32.00", desc: "Medallón de ternera seleccionada, servida sobre un risotto cremoso de setas silvestres", ingredients: ["Ternera", "Setas", "Arroz Arborio"], image: "assets/steak.jpg", tags: ["GF"] },
                    { id: "i10", name: "Costillas de Cordero", price: "30.00", desc: "Cordero asada lentamente, con un puré rústico de guisantes frescos y toque de menta", ingredients: ["Cordero", "Guisantes", "Menta"], image: "https://picsum.photos/seed/lamb/600/400", tags: ["GF"] },
                    { id: "i11", name: "Wagyu Steak", price: "45.00", desc: "Corte premium de Wagyu, sellado a alta temperatura con sal Maldon y mantequilla de hierbas de nuestro jardín", ingredients: ["Wagyu", "Mantequilla", "Perejil"], image: "https://picsum.photos/seed/wagyu/600/400", tags: ["GF"] },
                    { id: "i19", name: "Magret de Pato", price: "29.00", desc: "Pechuga de pato glaseada con reducción de frutos rojos y puré de zanahoria", ingredients: ["Pato", "Frutos Rojos", "Zanahoria"], image: "https://picsum.photos/seed/duck/600/400", tags: ["GF"] },
                    { id: "i20", name: "Risotto de Carne", price: "24.00", desc: "Arroz arborio cremoso con puntas de solomillo, parmesano reggiano y toque de trufa", ingredients: ["Carne", "Arroz", "Trufa"], image: "https://picsum.photos/seed/meat-risotto/600/400", tags: [] }
                ]
            },
            {
                id: "sec-4",
                name: "Postres",
                image: "assets/dessert.jpg",
                items: [
                    { id: "i12", name: "Fondant de Chocolate", price: "10.00", desc: "Chocolate belga fundido, con corazón líquido, servida con una bola de helado de vainilla artesanal", ingredients: ["Chocolate", "Vainilla", "Huevos"], image: "https://picsum.photos/seed/fondant/600/400", tags: [] },
                    { id: "i13", name: "Cheesecake de Frutos", price: "9.00", desc: "Cheesecake cremoso con una salsa vibrante de frutos del bosque recogidos en temporada", ingredients: ["Queso Crema", "Frutos Rojos"], image: "https://picsum.photos/seed/cheesecake/600/400", tags: ["GF"] },
                    { id: "i14", name: "Tarte Tatin", price: "11.00", desc: "La clásica tarta de manzana caramelizada, servida caliente con una cucharada de crème fraîche", ingredients: ["Manzana", "Caramelo", "Masa Hojaldrada"], image: "https://picsum.photos/seed/tatin/600/400", tags: [] },
                    { id: "i21", name: "Mousse de Maracuyá", price: "8.00", desc: "Mousse ligera y aireada de maracuyá fresco con crocante de pistacho", ingredients: ["Maracuyá", "Pistacho"], image: "https://picsum.photos/seed/passion-fruit/600/400", tags: ["GF"] },
                    { id: "i22", name: "Pavlova de Frutos", price: "12.00", desc: "Merengue crujiente por fuera y suave por dentro, con crema ligera y frutas de temporada", ingredients: ["Claras de Huevo", "Azúcar", "Frutas"], image: "https://picsum.photos/seed/pavlova/600/400", tags: ["GF"] }
                ]
            }
        ]
    },
    fr: {
        categories: ["Entrées", "Poissons", "Viandes", "Desserts"],
        sections: [
            {
                id: "sec-1",
                name: "Entrées",
                image: "assets/appetizer.jpg",
                items: [
                    { id: "i1", name: "Carpaccio de Saumon", price: "14.00", desc: "Fines tranches de saumon frais livrées chaque matin, finies avec des câpres croquantes et du citron sicilien", ingredients: ["Saumon", "Câpres", "Citron", "Huile d'olive"], image: "assets/salmon.jpg", tags: ["GF"] },
                    { id: "i2", name: "Burrata Crémeuse", price: "12.50", desc: "L'authentique Burrata des Pouilles, servie avec des tomates cerises confites lentement dans l'huile d'olive extra vierge", ingredients: ["Burrata", "Tomate", "Basilic"], image: "https://picsum.photos/seed/burrata/600/400", tags: ["V"] },
                    { id: "i5", name: "Tartare de Thon", price: "16.00", desc: "Thon frais haché minute avec avocat mûr, sésame grillé et une subtile touche de gingembre", ingredients: ["Thon", "Avocat", "Sésame", "Gingembre"], image: "https://picsum.photos/seed/tuna/600/400", tags: ["GF"] },
                    { id: "i6", name: "Croquettes de Jamón", price: "11.00", desc: "Nos croquettes artisanales de Jamón Ibérico, avec un intérieur crémeux de béchamel", ingredients: ["Jamón Ibérico", "Béchamel", "Fromage"], image: "assets/appetizer.jpg", tags: [] },
                    { id: "i15", name: "Bruschetta aux Figues", price: "13.00", desc: "Pain au levain grillé avec fromage de chèvre, figues fraîches et miel d'acacia", ingredients: ["Figue", "Fromage de Chèvre", "Miel"], image: "https://picsum.photos/seed/fig/600/400", tags: ["V"] },
                    { id: "i16", name: "Carpaccio de Betterave", price: "12.00", desc: "Betterave rôtie en croûte de sel, avec du fromage cottage crémeux et des noix caramélisées", ingredients: ["Betterave", "Noix", "Fromage Cottage"], image: "https://picsum.photos/seed/beet/600/400", tags: ["V", "GF"] }
                ]
            },
            {
                id: "sec-2",
                name: "Poissons",
                image: "assets/salmon.jpg",
                items: [
                    { id: "i3", name: "Cabillaud Noir", price: "28.00", desc: "Longe de cabillaud rigoureusement curée, avec une croûte croquante de sésame noir et pommes de terre bouillies", ingredients: ["Cabillaud", "Sésame", "Pomme de terre"], image: "https://picsum.photos/seed/cod/600/400", tags: ["GF"] },
                    { id: "i4", name: "Bar Grillé", price: "24.00", desc: "Bar frais grillé à la perfection, accompagné de légumes de saison sautés à l'ail", ingredients: ["Bar", "Légumes", "Huile d'olive"], image: "https://picsum.photos/seed/bass/600/400", tags: ["GF"] },
                    { id: "i7", name: "Poulpe à la Lagareiro", price: "26.00", desc: "Poulpe tendre, cuit lentement et fini avec une huile d'olive généreuse et des pommes de terre écrasées", ingredients: ["Poulpe", "Huile d'olive", "Ail", "Pomme de terre"], image: "https://picsum.photos/seed/octopus/600/400", tags: ["GF"] },
                    { id: "i8", name: "Saumon Glaçé", price: "22.00", desc: "Longe de saumon avec un glaçage artisanal miso et gingembre, équilibre parfait entre sucré et salé", ingredients: ["Saumon", "Miso", "Gingembre"], image: "assets/salmon.jpg", tags: ["GF"] },
                    { id: "i17", name: "Linguine aux Palourdes", price: "21.00", desc: "Pâtes fraîches al dente avec des palourdes de la côte, ail, persil et une touche de vin blanc", ingredients: ["Pâtes", "Palourdes", "Vin Blanc"], image: "https://picsum.photos/seed/pasta-fish/600/400", tags: [] },
                    { id: "i18", name: "Noix de Saint-Jacques", price: "26.00", desc: "Noix de Saint-Jacques fraîches saisies au beurre noisette, servies sur une purée de chou-fleur", ingredients: ["Saint-Jacques", "Beurre", "Chou-fleur"], image: "https://picsum.photos/seed/scallops/600/400", tags: ["GF"] }
                ]
            },
            {
                id: "sec-3",
                name: "Viandes",
                image: "assets/steak.jpg",
                items: [
                    { id: "i9", name: "Filet Mignon", price: "32.00", desc: "Médaillon de veau sélectionné, servi sur un risotto crémeux de champignons sauvages", ingredients: ["Veau", "Champignons", "Riz Arborio"], image: "assets/steak.jpg", tags: ["GF"] },
                    { id: "i10", name: "Côtes d'Agneau", price: "30.00", desc: "Agneau rôti lentement, avec une purée rustique de petits pois frais et une touche de menthe", ingredients: ["Agneau", "Petits Pois", "Menthe"], image: "https://picsum.photos/seed/lamb/600/400", tags: ["GF"] },
                    { id: "i19", name: "Magret de Canard", price: "29.00", desc: "Poitrine de canard glaçante avec réduction de fruits rouges et purée de carottes", ingredients: ["Canard", "Fruits Rouges", "Carotte"], image: "https://picsum.photos/seed/duck/600/400", tags: ["GF"] },
                    { id: "i20", name: "Risotto à la Viande", price: "24.00", desc: "Riz arborio crémeux avec des pointes de filet, parmesan reggiano et une touche de truffe", ingredients: ["Viande", "Riz", "Truffe"], image: "https://picsum.photos/seed/meat-risotto/600/400", tags: [] }
                ]
            },
            {
                id: "sec-4",
                name: "Desserts",
                image: "assets/dessert.jpg",
                items: [
                    { id: "i12", name: "Fondant au Chocolat", price: "10.00", desc: "Chocolat belge fondu, avec un cœur liquide, servi avec une boule de glace à la vanille artisanale", ingredients: ["Chocolat", "Vanille", "Œufs"], image: "https://picsum.photos/seed/fondant/600/400", tags: [] },
                    { id: "i13", name: "Cheesecake aux Fruits", price: "9.00", desc: "Cheesecake crémeux avec un glaçage vibrant de fruits des bois cueillis en saison", ingredients: ["Fromage à la crème", "Fruits Rouges"], image: "https://picsum.photos/seed/cheesecake/600/400", tags: ["GF"] },
                    { id: "i14", name: "Tarte Tatin", price: "11.00", desc: "La classique tarte aux pommes caramélisées, servie chaude avec une cuillerée de crème fraîche", ingredients: ["Pomme", "Caramel", "Pâte Feuilletée"], image: "https://picsum.photos/seed/tatin/600/400", tags: [] },
                    { id: "i21", name: "Mousse au Fruit de la Passion", price: "8.00", desc: "Mousse légère et aérienne de fruit de la passion frais avec crocant de pistache", ingredients: ["Fruit de la Passion", "Pistache"], image: "https://picsum.photos/seed/passion-fruit/600/400", tags: ["GF"] },
                    { id: "i22", name: "Pavlova aux Fruits", price: "12.00", desc: "Meringue croquante à l'extérieur et moelleuse à l'intérieur, avec crème légère et fruits de saison", ingredients: ["Blancs d'œufs", "Sucre", "Fruits"], image: "https://picsum.photos/seed/pavlova/600/400", tags: ["GF"] }
                ]
            }
        ]
    }
};
