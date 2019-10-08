export const setChats = (state, chats) => {
  state.chats = chats;
};

export const setLoading = (state, loading) => {
  state.isLoading = loading;
};

export const setMessages = (state, messages) => {
  state.messages = messages;
};

export const addMessage = (state, message) => {
  state.messages.push(message);
};
