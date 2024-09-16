<template>
  <div>
    <Toast position="center" />
    <ConfirmDialog />
    <NuxtLayout>
      <div class="wrapper">
        <div class="card header">
          <Menubar :model="menu" class="custom-menubar" />
        </div>
      </div>

      <main class="content">
        <NuxtPage />
      </main>

      <footer class="footer">
        <div class="container mx-auto flex justify-content-evenly">
          <div>&copy; <span>{{ annoAttuale }}</span> Bar Lassa Gì.</div>
          <div>
            <NuxtLink to="/contatti" class="text-0 text-white no-underline">Contatti</NuxtLink>
          </div>
          <div class="flex">
            <a href="mailto:barlassagi@gmail.com" class="text-0"><i class="text-white pi pi-envelope text-2xl mr-2"></i></a>
            <a href="tel:0755178706" class="text-0"><i class="text-white pi pi-phone text-2xl mr-2"></i></a>
            <a href="https://www.facebook.com/BarLassaGi/" target="_blank" class="text-white text-0"><i
                class="pi pi-facebook text-2xl mr-2"></i></a>
            <a href="https://www.instagram.com/lassagiperugia/" target="_blank" class="text-white text-0"><i
                class="pi pi-instagram text-2xl mr-2"></i></a>
          </div>
        </div>
      </footer>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const annoAttuale = ref(new Date().getFullYear());
const router = useRouter()

const menu = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Menu',
    icon: 'pi pi-receipt',
    command: () => router.push('/menu')
  },
  {
    label: 'Drink della settimana',
    icon: 'pi pi-star',
    command: () => router.push('/drinksettimana')
  },
  {
    label: 'Chi siamo',
    icon: 'pi pi-info-circle',
    command: () => router.push('/chisiamo')
  }
])
</script>

<style scoped>
.custom-menubar {
  background-color: #9472fc !important;
  border: none;
  color: white;
}

.custom-menubar .p-menubar-root-list>li>a {
  color: white !important;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 16px;
  background-color: #9472fc;
  z-index: 10;
}

.content {
  margin-top: 80px;
  /* Spazio per la navbar fissa */
  margin-bottom: 60px;
  /* Spazio per il footer fisso */
  padding: 16px;
  flex: 1;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 16px;
  text-align: center;
  background-color: #9472fc;
  z-index: 10;
}
</style>
