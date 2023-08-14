import { fakeMessage, sendTask } from "./fakeMessage";

export const messageService = {
  createMessage(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve(sendTask[value?.toLowerCase()] ?? sendTask[0]);
        }

        resolve(...fakeMessage);
      }, 1000);
    });
  },
};
