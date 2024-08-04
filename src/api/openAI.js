import axios from 'axios';

const {apiKey} = require('../constants');

const client = axios.create({
  headers: {
    Authorization: 'Bearer ' + apiKey,
    'content-Type': 'application/json',
  },
});

const chatGPTEndpoint = 'https://api.openai.com/v1/chat/completions';
const dalleEndpoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages) => {
  try {
    const res = await client.post(chatGPTEndpoint, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Does this message want to generate an AI picture, image, art or anything smilar? ${prompt}. Simply answer with yes or no.`,
        },
      ],
    });

    console.log('data :, res.data');
  } catch (err) {
    console.log('error: ', err);
    return Promise.resolve({success: false, msg: err.message});
  }
};
