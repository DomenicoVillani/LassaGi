<template>
    <div class="menu-page">

        <!-- Layout delle categorie e degli elementi del menu -->
        <div class="grid">
            <div v-for="(category, index) in menuItems" :key="categories[index]"
                :class="['menu-category', index === menuItems.length - 1 ? 'col-12' : 'col-12 md:col-6']">
                <!-- Intestazione della categoria -->
                <h2>{{ categories[index] }}</h2>

                <!-- Lista di elementi della categoria -->
                <div class="grid">
                    <div class="col-12" v-for="item in category" :key="item.label">
                        <p>{{ item.label }} - {{ item.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Bar Lassa Gì - Menu',
})

// Categorie e voci di menu organizzate
const categories = ref([
    'Pinsa',
    'Torta al Testo',
    'Panini',
    'Taglieri di Salumi con Torta al Testo',
    'Fritti',
    'Piccola Cucina (Tapas)',
    'Dolci & Frutta'
])

const menuItems = ref([
    [
        { label: 'Margherita', price: '€ 7,00' },
        { label: 'Fresca', price: '€ 9,00' },
        { label: 'Vegetariana', price: '€ 8,00' },
        { label: 'Perugina', price: '€ 8,00' },
        { label: 'Piccante', price: '€ 8,00' },
        { label: 'Bologna', price: '€ 9,00' }
    ],
    [
        { label: 'Prosciutto e Fontina', price: '€ 5,00' },
        { label: 'Salame e Pecorino', price: '€ 5,00' },
        { label: 'Mozzarella Pomodoro Basilico', price: '€ 5,00' },
        { label: 'Rapi e Salsiccia', price: '€ 5,00' },
        { label: 'Rucola e Stracchino', price: '€ 5,00' },
        { label: 'Verdure Grigliate e Caciotta', price: '€ 5,00' }
    ],
    [
        { label: 'Lassa - Burger', price: '€ 8,50' },
        { label: 'Lassa - Hotdog', price: '€ 8,50' }
    ],
    [
        { label: 'Lassa-Gì Small (Per due persone)', price: '€ 12,00' },
        { label: 'Lassa-Gì Large (Per quattro persone)', price: '€ 18,00' },
        { label: 'Formaggi con Mostarde', price: '€ 9,50' }
    ],
    [
        { label: 'Salvia', price: '€ 5,00' },
        { label: 'Anelli di Cipolla', price: '€ 5,00' },
        { label: 'Mozzarelline', price: '€ 6,00' },
        { label: 'Olive Ascolane', price: '€ 6,00' },
        { label: 'Patate Barchetta', price: '€ 5,00' },
        { label: 'Jalapeño (Peperoni Ripieni)', price: '€ 6,00' },
        { label: 'Misto (di tutto un po\')', price: '€ 15,00' },
        { label: 'Alette di Pollo alla Paprika con Salsa allo Yogurt', price: '€ 8,00' }
    ],
    [
        { label: 'Crostini Sfiziosi (Base di Mozzarella)', price: '€ 7,50' },
        { label: 'Pan Tomoto', price: '€ 6,00' },
        { label: 'Capresina', price: '€ 6,00' },
        { label: 'Tartar Lassa Gì', price: '€ 8,50' },
        { label: 'Pollo al Curry con Riso Basmati', price: '€ 8,50' },
        { label: 'Arrosticini (7 pezzi)', price: '€ 5,00' },
        { label: 'Patatas Bravas', price: '€ 5,00' }
    ],
    [
        { label: 'Panna Cotta', price: '€ 5,00' },
        { label: 'Tiramisù', price: '€ 5,00' },
        { label: 'Crema Catalana', price: '€ 5,00' },
        { label: 'Brownies con Panna alla Cannella', price: '€ 5,00' },
        { label: 'Fragole con Panna', price: '€ 5,00' }
    ]
])
</script>

<style scoped>
.menu-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.menu-category {
    margin-bottom: 30px;
}

h2 {
    background-color: #A78BFA;
    color: white;
    padding: 10px;
    margin: 0;
    text-transform: uppercase;
}

p {
    font-size: 16px;
    margin: 5px 0;
}
</style>