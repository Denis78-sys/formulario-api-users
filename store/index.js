import axios from 'axios';

export const state = () => ({
  usuarios: [], // Estado inicial vazio
});

export const getters = {
  todosOsDados: (state) => state.usuarios, // Getter para acessar os dados
};

export const mutations = {
  SET_USUARIOS(state, usuarios) {
    state.usuarios = usuarios; // Atualiza o estado com os dados recebidos
  },
};

export const actions = {
  async buscarDados({ commit }) {
    try {
      const response = await this.$axios.get('/usuarios'); // Chamada à API
      const usuariosOrdenados = response.data.sort((a, b) => {
        return a.name.localeCompare(b.name); // Comparação alfabética
      });
      commit('SET_USUARIOS', usuariosOrdenados);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  },
};
