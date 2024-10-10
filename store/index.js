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
      const response = await axios.get('https://api-de-usuarios.vercel.app/usuarios'); // Chamada à API
      commit('SET_USUARIOS', response.data); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  },
};
