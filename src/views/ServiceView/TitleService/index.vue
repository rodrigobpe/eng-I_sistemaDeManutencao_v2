<script setup>
import { useServiceStore } from "../../../store/serviceStore";

const serviceStore = useServiceStore();
</script>
<template>
  <div class="title-service">
    <h1>Carrinho</h1>
    <p>
      {{ serviceStore.services.length }}
      {{ serviceStore.services.length === 1 ? "produto" : "produtos" }}
    </p>
  </div>
</template>

<style >
.title-service {
  display: flex;
  padding: 0 9.6rem;
  align-items: baseline;
}

.title-service h1 {
  font-family: "Newsreader", serif;
  margin-right: 2.3rem;
}

.title-service p {
  font-weight: 300;
  font-size: 2rem;
  line-height: 130%;
}
</style>