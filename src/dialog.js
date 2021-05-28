export const dialog = [
  {
    intents: [
      'help',
      `If a message sent to this bot contains a string in this field, the bot will respond with a response from below.`,
    ],
    responses: [
      `This is where you should write responses for your bot. Responses are selected randomly if there are more than one.
      Images can be added to the images array like below.
    If you'd like to make a donation, here are some methods:
    Cash app: $AustaPasta
    Venmo: @AustinPoulson`,
    ],
  },
  {
    intents: ['hi', 'hello', 'hey'],
    responses: ['Hi there', 'Hello, nice to meet you'],
    images: [`https://i.redd.it/un44882dvyj21.jpg`],
  },
];
