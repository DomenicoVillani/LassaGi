<template>
    <div class="md:flex justify-content-center">
        <div class="text-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure est tenetur, harum vitae reprehenderit beatae provident repudiandae minima. Consequuntur veritatis consequatur quos quo pariatur mollitia, earum officia nisi possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic officia aut officiis enim consequatur vero quod, laborum blanditiis architecto, perferendis dolores doloribus quisquam id nam dolorem quibusdam, ab excepturi.
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5826.228770029664!2d12.310039632727497!3d43.10211099006916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ea70d8ab8f1f1%3A0x49132be4edba6315!2sBar%20Lassa%20G%C3%AC!5e0!3m2!1sit!2sit!4v1726509345980!5m2!1sit!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Bar Lassa Gì - Chi siamo',
})
</script>

<style scoped>
.text-container {
    flex: 1;
    padding: 1rem;
}

/* Mappa responsiva */
.map-container {
    flex: 1;
    position: relative;
    padding-bottom: 56.25%; /* Rapporto 16:9 */
    height: 0;
    overflow: hidden;
    max-width: 100%;
}

/* Mappa in modalità mobile */
.map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

/* Media queries per limitare la dimensione su schermi più grandi */
@media (min-width: 768px) {
    .map-container {
        padding-bottom: 0; /* Rimuove il rapporto di aspetto 16:9 */
        height: 450px; /* Altezza fissa su schermi più grandi */
        max-width: 600px; /* Limita la larghezza della mappa su desktop */
    }
}
</style>
