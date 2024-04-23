export const initialTree = [
  {
    id: "01",
    botReplica: "Привет, студент! Чем могу служить?",
    userAnswerOptions: [
      {
        id: "0101",
        text: "Открой учебник по истории южных и западных славян",
      },
      {
        id: "0102",
        text: "Напомни время работы столовой на 1 этаже Шуваловского корпуса",
      },
      {
        id: "0103",
        text: "Дай ссылку на большой словарь польского языка",
      },
    ],
    idForNextChild: "0104",
  },
  {
    id: "0101",
    userReplica: "Открой учебник по истории южных и западных славян",
    botReplica: "Открываю",
    userAnswerOptions: [],
    idForNextChild: "010101",
  },

  {
    id: "0102",
    userReplica:
      "Напомни время работы столовой на 1 этаже Шуваловского корпуса",
    botReplica: "9.00 - 18.00",
    userAnswerOptions: [],
    idForNextChild: "010201",
  },
  {
    id: "0103",
    userReplica: "Дай ссылку на большой словарь польского языка",
    botReplica: "wsjp.pl",
    userAnswerOptions: [],
    idForNextChild: "010301",
  },
];
