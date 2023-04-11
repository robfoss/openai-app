import { Configuration, OpenAIApi } from 'openai';

export default async function generatePost(req, res) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Generate a blog post about rap music.',
    temperature: 0,
    max_tokens: 3600,
  });
  console.log('response: ', response);
  res.status(200).json({ post: response.data.choices });
}
