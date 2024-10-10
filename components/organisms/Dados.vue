<template>
  <div class="dados">
    <Container class="container_dados" v-for="dado in dados" :key="dado.id">
      <div class="dados_pessoa">
        <label><strong>Nome: </strong>{{ dado.name }}</label>
        <label><strong>E-mail: </strong>{{ dado.email }}</label>
        <label><strong>Idade: </strong>{{ dado.age }} anos</label>
      </div>

      <div class="icone">
        <img
          src="@/assets/img/bloquear.png"
          alt="deletar"
          @click="deleteUser(dado.id)"
        />
      </div>
    </Container>
    <div v-if="!dados.length">
      <Container> Nenhum dado encontrado. </Container>
    </div>
    <!-- Mensagem caso não haja dados -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from 'axios';

export default {
  computed: {
    ...mapGetters(["todosOsDados"]),
    dados() {
      return this.todosOsDados; // Acesso aos dados do Vuex
    },
  },
  methods: {
    ...mapActions(["buscarDados"]),
    async deleteUser(id) {
      try {
        await axios.delete(`https://api-de-usuarios.vercel.app/usuarios/${id}`);
        //alert("Usuário deletado com sucesso!");
        await this.buscarDados();
      } catch (error) {
        console.log("Erro ao deletar usário:", error);
      }
    },
  },
  async mounted() {
    console.log("Chamando a API para buscar dados...");
    await this.buscarDados(); // Carrega os dados assim que o componente for montado
    console.log("Dados carregados:", this.dados); // Verifica se os dados foram carregados
  },
};
</script>

<style scoped>
.dados {
  display: grid;
  gap: 15px;
}
.dados_pessoa {
  display: grid;
  gap: 5px;
}

.container_dados {
  display: flex;
  position: relative;
}
img {
  width: 60px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.2);
}

.icone {
  position: absolute;
  margin-right: 0;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
