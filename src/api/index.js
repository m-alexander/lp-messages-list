class Api {
  static data = [
    {
      id: 1,
      subject: 'Простой запрос',
      created: '2019-08-01 23:59',
      parts: [
        {
          id: 1,
          author: 'vasiliy',
          text: 'Привет, как дела?',
          created: '2019-08-01 23:59',
        },
        {
          id: 2,
          author: 'petya',
          created: '2019-08-02 01:20',
          text: 'Привет, все хорошо, спасибо!',
        },
        {
          id: 3,
          author: 'petya',
          created: '2019-08-02 05:20',
          text: 'А у тебя?',
        },
      ],
    },
    {
      id: 2,
      subject: 'Вопрос по домену',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          author: 'petr',
          created: '2019-08-06 12:20',
          text: 'Здравствуйте, тут есть кто-нибудь?',
        },
        {
          id: 2,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Да, я вас слушаю!',
        },
        {
          id: 3,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Помогите мне настроить домен!',
        },
      ],
    },
    {
      id: 3,
      subject: 'Привет',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          author: 'vasiliy',
          created: '2019-08-06 12:20',
          text: 'Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices '
                + 'mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien '
                + 'quam explicabo conubia egestas vehicula!',
        },
        {
          id: 2,
          author: 'Василий',
          created: '2019-08-06 12:34',
          text: 'Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices '
            + 'mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien quam '
            + 'explicabo conubia egestas vehicula!',
        },
      ],
    },
  ];

  static promiseWithTimeout(data, maxDelay = 0, minDelay = 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, Math.random() * (maxDelay - minDelay) + minDelay);
    });
  }

  static getMessages(id) {
    const chat = Api.data.find(item => item.id === id);
    return Api.promiseWithTimeout(
      chat ? [...chat.parts] : [],
      1500,
      500,
    );
  }

  static getChats() {
    const chats = Api.data.map(item => ({
      id: item.id,
      subject: item.subject,
      created: item.created,
      message: item.parts[0] && item.parts[0].text,
    }));

    return Api.promiseWithTimeout([...chats], 0, 0);
  }

  static addMessage(chatId, text) {
    const chat = Api.data.find(item => item.id === chatId);
    const newItem = {
      id: chat.parts.length + 1,
      author: 'vasiliy',
      text,
      created: new Date().toISOString(),
    };

    chat.parts.push(newItem);

    return Api.promiseWithTimeout({ ...newItem }, 100, 50);
  }
}

export default Api;
