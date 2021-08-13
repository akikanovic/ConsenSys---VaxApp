const messages = [];

async function getAll() {
  return messages;
}

async function createMessage(message) {
  messages.push(message);
  return message;
}
export const messageRepository = {
  getAll,
  createMessage,
};
