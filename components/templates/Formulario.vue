<template>
  <div class="formulario">
    <Container class="container_form">
      <TituloForm />
      <form @submit.prevent="addUsuario">
        <input
          type="text"
          placeholder="Nome"
          v-model="novoUsuario.name"
          id="name"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          v-model="novoUsuario.email"
          id="email"
          required
        />
        <input
          type="text"
          placeholder="Idade"
          v-model="novoUsuario.age"
          id="age"
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  </div>
</template>

<script>
import axios from "axios"; // Certifique-se de importar o axios
import { mapActions, mapGetters } from "vuex";

export default {
  
  data() {
    return {
      novoUsuario: {
        name: "",
        email: "",
        age: "",
      },
    };
  },
  methods: {
    ...mapActions(['buscarDados']),
    async addUsuario() {
      try {
        const response = await this.$axios.post(
          "/usuarios",
          this.novoUsuario
        );
       
        // Limpar o formulário após o envio
        this.novoUsuario = { name: "", email: "", age: null };
        this.buscarDados();
      } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        alert("Erro ao adicionar o usuário!");
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  gap: 15px;
}

input {
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 10px;
}

button {
  background-color: #bbf2ed;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  transition: transform 0.3s ease;
}

button:hover {
  background-color: #4bf3e5;
  transform: scale(1.1);
  font-size: larger;
}
</style>
