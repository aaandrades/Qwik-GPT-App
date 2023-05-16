import type { RequestHandler } from "@builder.io/qwik-city";
// import cohere from "cohere-ai";
// import { request } from "http";
interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

import { Configuration, OpenAIApi } from "openai";

// console.log(completion.data.choices[0].message);

export const onGet: RequestHandler<ProductData | any> = async ({
  params,
}: any) => {
  try {
    console.log(params);
    const fakeAPI = "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";
    const configuration = new Configuration({
      apiKey: fakeAPI,
      // apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello world" }],
    });

    console.log(completion);
    console.log(completion.data.choices[0].message);
    // const token = "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";
    // console.log("TOKEN: ", token);
    return {
      statusCode: 200,
      body: completion.data.choices[0].message,
    };
  } catch (error) {
    console.log(error);
  }
  // cohere.init("my-secret-key");
  // console.log(params);
  // const response = await cohere.generate({
  //   model: "xlarge",
  //   prompt:
  //     'Give me an answer for the question "What is the most important thing when creating a system design?"',
  //   max_tokens: 796,
  //   temperature: 0.6,
  //   k: 0,
  //   p: 0.75,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  //   stop_sequences: [],
  //   return_likelihoods: "NONE",
  // });
  // return response;
};
