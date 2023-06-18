<script setup>
import TitleService from './TitleService/index.vue';
import {useServiceStore} from '../../store/serviceStore'
const serviceStore = useServiceStore()
serviceStore.getTasks()

</script>
<template>
  <TitleService/>
</template>


<style>

</style>