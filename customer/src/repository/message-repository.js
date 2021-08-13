let messages = [];

async function getAll() {
  return messages;
}

async function createMessage(message) {
  messages.push(message);
  return message;
}

async function getOne(id) {
  if (!messages.length) {
    return messages.filter((message) => message.id !== id);
  }
  return null;
}

async function remove(id) {
  messages = messages.filter((message) => message.id !== id);
}
export const messageRepository = {
  getAll,
  createMessage,
  getOne,
  remove,
};
