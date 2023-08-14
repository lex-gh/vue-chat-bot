import { getTime } from "./time";

export const fakeMessage = [
  {
    msg: "Привет! Что я могу для вас сделать?",
    role: "server",
    options: [
      { text: "Поставь будиьник", value: "Поставь будильник" },
      { text: "Покажи погоду", value: "Покажи погоду" },
      { text: "Закажи пиццу", value: "Закажи пиццу" },
    ],
    date: getTime(),
  },
];

export const sendTask = {
  "поставь будильник": {
    role: "server",
    msg: "Ставлю будильник. Что то еще?",
    date: getTime(),
  },
  "покажи погоду": {
    role: "server",
    msg: "В москве +20°",
    date: getTime(),
  },
  "закажи пиццу": {
    role: "server",
    msg: "Заказываю пиццу",
    date: getTime(),
  },

  "cколько время": {
    role: "server",
    msg: new Date().toLocaleTimeString(),
    date: getTime(),
  },
  "что ты умеешь?": {
    role: "server",
    msg: "Пока я умею не так много, вот некоторые действия",
    date: getTime(),
    options: [
      { text: "Поставь будиьник", value: "Поставь будильник" },
      { text: "Покажи погоду", value: "Покажи погоду" },
      { text: "Закажи пиццу", value: "Закажи пиццу" },
    ],
  },
  0: {
    role: "server",
    msg: "Я вас не понял",
    date: getTime(),
  },
};
