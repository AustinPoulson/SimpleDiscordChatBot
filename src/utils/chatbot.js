import {dialog} from '../dialog.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function chatbot(message) {
  var item;
  var intent;
  for (item of dialog) {
    for (intent of item.intents) {
      if (message.includes(intent)) {
        var responseIndex = getRandomInt(item.responses.length);
        return item.responses[responseIndex];
      }
    }
  }
}

export function getImageLink(message) {
  var item;
  var intent;
  for (item of dialog) {
    for (intent of item.intents) {
      if (message.includes(intent)) {
        if (item.images) {
          var responseIndex = getRandomInt(item.images.length);
          return item.images[responseIndex];
        }
      }
    }
  }
}
