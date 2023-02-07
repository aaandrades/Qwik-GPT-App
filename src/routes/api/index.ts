import type { RequestHandler } from "@builder.io/qwik-city";
import cohere from "cohere-ai";
interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

export const onGet: RequestHandler<ProductData | any> = async ({
  params,
}: any) => {
  return {
    statusCode: 200,
    body: {
      id: "efe85c24-dff0-48bf-89ad-28a8d6380328",
      generations: [
        {
          id: "11e50295-6cb6-45cb-99d2-cb32e923c7b8",
          text: "\n\nAs a system designer, you should be able to know how to deal with the information that is essential for the project.\n\nIf you're an experienced system designer, you may know that you need to know how to identify the important information and the information that is not important.\n\nSo, the key is to understand the information and how to deal with the different types of information that you have.\n\nIf you're not an experienced system designer and you don't have the experience, you might be a little bit lost.\n\nIf there's something that you can't figure out, you need a little help from someone who has the experience.\n\nIf this is the case, then you can ask your system designer to help you figure out what is the most crucial information that you need for the project.\n\nYou can ask the system designer to help you to figure the information that is important for the project.\n\nThis can be the most important information for you, but you need someone who has experience to help you.\n\nIf the system is not working, then the system designer needs to figure the information so that the system can work.\n\nYou need to ask the system designer for help to figure your information, because you need the information to work.\n\nSo, you need some help to figure it out, but if you don't have someone who can help you figure it, you're not going to be able do it.\n\nSo it's really important to have someone who knows how to find the information and figure out what is important.\n\nThis is a question that you should ask the system, because it's important to know what is the best information for your project.\n\nIt's important that you ask the designer to figure it for you, because if you don't have someone that can help with that, you're not likely to be able get the information from the system.\n\nYou need someone to help figure out what is necessary for the system to work, because you need that information to work correctly.\n\nSo if you're working on a project and you're not getting the information from the systems, then you need someone with the experience and the knowledge to figure that out.\n\nSo if you have a problem with the system or you're getting some information that's not working, then ask the System Designer to help you figure out the information for you to get it working correctly.\n\nSo it's a question to ask the system to figure your information and figure out what you need to do to get that information working correctly.\n\nSo ask the System Designer, and if you get the information you need from the system correctly, then you can start the project and get the project done.\n\nSo in this way, the system can work correctly, but you can't get the information to work, so you can use the system to get things done.\n\nSo if you have a project that's not working correctly, and you're getting some data that's wrong, then it's time to ask your System Designer for help.\n\nIf the System Designer has the experience, he or she can help with the information and figure the information correctly.\n\nSo you can use the system to get a project done, but you have to figure out the information correctly, so the system can get things done correctly.\n\nSo the System Designer can help the System to get things working correctly and figure out what is needed to get it working correctly so that it can work.\n\nIf you have a problem or you have some information that's wrong, then the System Designer can help figure it, but the System can't figure it because it's not working correctly.\n\nSo the System Designer can help figure it correctly, but if the System can't figure the information, then the System won't be able get things to work correctly.\n\n",
        },
      ],
      prompt:
        'Give me an answer for the question "What is the most important thing when creating a system design?"',
    },
  };
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
