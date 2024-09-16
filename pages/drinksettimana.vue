<template>
    <div :class="['card', { dark: isDarkMode }]">
        <img :src="products[currentProductIndex].image" :alt="products[currentProductIndex].name"
            class="product-image" />
        <h2>{{ products[currentProductIndex].name }}</h2>
        <p>{{ products[currentProductIndex].description }}</p>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    useHead({
    title: 'Bar Lassa Gì - Drink settimanale',
})

    const products = [
        {
            name: 'Product 1',
            image: 'https://www.repstatic.it/content/contenthub/img/2022/01/11/120126309-8bf9fa8d-426b-4d73-9dde-e3122485701a.jpg',
            description: 'Description of product 1'
        },
        {
            name: 'Product 2',
            image: 'https://www.ristorazioneitalianamagazine.it/CMS/wp-content/uploads/2022/05/drink-piu-bevuti.jpg',
            description: 'Description of product 2'
        },
        {
            name: 'Product 3',
            image: 'https://www.gruppovege.it/uploads/articles/1562679924-5fd3c4ed5a3ff.jpeg',
            description: 'Description of product 3'
        },
        {
            name: 'Product 4',
            image: 'https://www.ilgiornaledelcibo.it/wp-content/uploads/2015/04/i-drinh-pi---famosi-al-mondo.jpg',
            description: 'Description of product 4'
        },
        {
            name: 'Product 5',
            image: 'https://drinkabile.cdaweb.it/wp-content/uploads/2020/07/categorie-cocktail.jpg',
            description: 'Description of product 5'
        }
    ]

    const currentProductIndex = ref(0)

    const getWeekOfYear = (date) => {
        const startOfYear = new Date(date.getFullYear(), 0, 1)
        const pastDaysOfYear = (date - startOfYear) / 86400000
        return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7)
    }

    const updateProductIndex = () => {
        const currentWeek = getWeekOfYear(new Date())
        currentProductIndex.value = currentWeek % products.length
    }

    const startWeeklyUpdate = () => {
        updateProductIndex()

        const now = new Date()
        const nextMonday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (1 + 7 - now.getDay()) % 7, 0, 0, 0)
        const millisecondsUntilNextMonday = nextMonday - now

        setTimeout(() => {
            updateProductIndex()

            // Dopo il primo aggiornamento, avvia un intervallo che aggiorna il drink ogni settimana
            setInterval(updateProductIndex, 7 * 24 * 60 * 60 * 1000) // 7 giorni in millisecondi
        }, millisecondsUntilNextMonday)
    }

    onMounted(() => {
        startWeeklyUpdate()
    })
</script>

<style scoped>
    .card {
        max-width: 400px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, background-color 0.3s, color 0.3s;
        background-color: #fff;
        color: #000;
    }

    .product-image {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    h2 {
        margin: 10px 0;
        font-size: 24px;
    }

</style>
