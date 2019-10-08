import api from '../api/index';


export const fetchChats = ({ commit }) => {
  api.getChats()
    .then((chats) => {
      commit('setChats', chats);
    });
};

export const fetchMessages = ({ commit }, chatId) => {
  commit('setLoading', true);
  commit('setMessages', []);
  api.getMessages(chatId)
    .then((messages) => {
      commit('setMessages', messages);
      commit('setLoading', false);
    });
};

export const addMessage = ({ commit }, { chatId, message }) => {
  commit('setLoading', true);
  api.addMessage(chatId, message)
    .then((response) => {
      commit('addMessage', response);
      commit('setLoading', false);
    });
};
