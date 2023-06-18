<script setup>
import TitleService from "./TitleService/index.vue";
import ServiceDescription from "./ServiceDescription/index.vue";
import TotalService from "./TotalService/index.vue";

import { useServiceStore } from "../../store/serviceStore";

const serviceStore = useServiceStore();
serviceStore.getTasks()

</script>
<template>
  <main class="main-services">
    <TitleService />
    <section class="section-services">
      <ServiceDescription />
      <TotalService/>
    </section>
  </main>
</template>

<style>
.main-services {
  padding: 0 9.6rem;
}
.section-services{
  display: flex;
  justify-content: space-between;
}
</style>