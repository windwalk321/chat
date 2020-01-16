export default {
  user: {
    username: 'first',
    name: 'First User'
  },
  rooms: [
    {
      id: '11',
      name: 'General'
    },
    {
      id: '12',
      name: 'Special'
    }
  ],
  activeRoom: {
    id: '11'
  },
  messages: [
    {
      name: 'First User',
      username: 'first',
      date: '11/12/1234',
      text: 'Hi guys!'
    },
    {
      name: 'Second User',
      username: 'second',
      date: '11/12/1234',
      text: 'Hello!'
    },
    {
      name: 'First User',
      username: 'first',
      date: '11/12/1234',
      text: 'sup?'
    }
  ],
  users: [
    {
      username: 'first',
      name: 'First User',
      presence: 'online'
    },
    {
      username: 'second',
      name: 'Second User',
      presence: 'offline'
    }
  ]
}
