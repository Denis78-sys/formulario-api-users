<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container {
  width: 40%;
  padding: 20px;
  gap: 20px;
  background-color: #081826;
  width: 40%;
  border-radius: 10px;
  margin: auto;
}


/* Para telas menores que 1024px (tablets e monitores pequenos) */
@media (max-width: 1024px) {
  .container {
    width: 60%; /* Ajuste a largura para telas médias */
  }
}

/* Para telas menores que 768px (tablets verticais e smartphones grandes) */
@media (max-width: 768px) {
  .container {
    width: 80%; /* Ajuste a largura para telas pequenas */
  }
}

/* Para telas menores que 480px (smartphones) */
@media (max-width: 360px) {
  .container {
    width: 95%; /* Ajuste a largura para smartphones */
  }
}
</style>
