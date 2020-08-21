import { MESSAGES } from '../constants';

const addMessage = (messageData) => ({
  type: MESSAGES.ADD_MESSAGE,
  payload: messageData,
});

const addMessageSuccess = (message) => ({
  type: MESSAGES.ADD_MESSAGE_SUCCESS,
  payload: message,
});

const addMessageFail = (error) => ({
  type: MESSAGES.ADD_MESSAGE_FAIL,
  payload: error,
});

const setMessages = (messages) => ({
  type: MESSAGES.SET_MESSAGES,
  payload: messages,
});

export { addMessage, addMessageSuccess, addMessageFail, setMessages };
