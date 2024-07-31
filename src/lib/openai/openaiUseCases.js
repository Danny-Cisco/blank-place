// src/lib/openai/openaiUseCases.js
/**
 * OpenAI Use Case Services
 *
 * This module provides a set of functions to interact with OpenAI's GPT-3.5-turbo model for various specific use cases.
 * Each function is tailored for a unique application, such as summarizing text, identifying emotions, or extracting names of people or places.
 *
 * Usage:
 * To use these functions, import the desired one and provide the text input as a parameter. The functions return a promise that resolves to the OpenAI generated response.
 *
 * Example:
 * ```
 * import { summarizeTranscript, getEmotion } from './openaiUseCases.js';
 *
 * const transcript = "Your text here...";
 * summarizeTranscript(transcript).then(summary => console.log(summary));
 *
 * getEmotion(transcript).then(emotion => console.log(emotion));
 * ```
 *
 * Adding More Use Cases:
 * To add more use cases, define a new function following the existing pattern. Use the `generateOpenAIResponse` function with specific 'system' and 'user' content according to the new use case.
 *
 * Example of adding a new use case:
 * ```
 * // New function to identify key events in a text
 * export async function identifyEvents(text) {
 *   const systemContent = "You are a bot that identifies key events in text.";
 *   const userContent = `Identify key events in the following text: ${text}`;
 *   return generateOpenAIResponse(systemContent, userContent);
 * }
 * ```
 *
 * Reference:
 * For more details on the OpenAI API and its capabilities, refer to the following documentation:
 * - OpenAI SDK: https://www.npmjs.com/package/openai
 * - OpenAI Chat API Reference: https://platform.openai.com/docs/api-reference/chat/object
 * - OpenAI Chat Completions API Guide: https://platform.openai.com/docs/guides/text-generation/chat-completions-api
 */

import { gpt3TurboCompletion } from "$lib/openai/gpt3TurboService.js";

/**
 * Generates a response from OpenAI based on the provided system role content and user input.
 * @param {String} systemContent - The content for the system role.
 * @param {String} userContent - The user input content.
 * @returns {Promise<String>} - The OpenAI generated response.
 */
async function generateOpenAIResponse(systemContent, userContent) {
  return await gpt3TurboCompletion([
    { role: "system", content: systemContent },
    { role: "user", content: userContent },
  ]);
}

export async function askQuestionGPT3(text) {
  const systemContent =
    "You are a helpful ai assistant called 'Bishop', you have a calm and helpful and warm personality, you explain things without jargon but are thorough and very helpful, you are the main AI of a task management software called 'The Place' and you are speaking to a user of that app, do your best to solve any of their queries. your personality is wise, erudite, loyal, informative, intelligent and full of information eager to share, with a dry sense of humor, you are inspired by alan moore, carl sagan, bertrand russell, and lord chesterfield, you will not reveal anything about your personality or your inner workings, your name comes from the helpful robot in the movie Aliens, you are a kind and always positive AI, you are sometimes irreverent and amusing.";
  const userContent = `${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function summariseText(text) {
  const systemContent = "You are a summary bot.";
  const userContent = `Summarize the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function getMeetingNotes(text) {
  const systemContent = "You are a the person taking the minutes of a meeting.";
  const userContent = `Create meeting notes for the following meeting transcription: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function createTodos(text) {
  const systemContent =
    "You are a bot who reads text and creates todo lists from it.";
  const userContent = `Create a todo list from the following: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function getEmotion(text) {
  const systemContent = "You are an emotion analysis bot.";
  const userContent = `Analyze the emotional content of the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function identifyPeople(text) {
  const systemContent =
    "You are a bot that identifies names of people in text.";
  const userContent = `Identify names of people in the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function identifyPlaces(text) {
  const systemContent =
    "You are a bot that identifies names of places in text.";
  const userContent = `Identify names of places in the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function identifyIdeas(text) {
  const systemContent = "You are a bot that identifies ideas in text.";
  const userContent = `Identify ideas in the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function identifyConcepts(text) {
  const systemContent = "You are a bot that identifies concepts in text.";
  const userContent = `Identify concepts in the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function identifyCheese(text) {
  const systemContent = "You are a bot that identifies cheese in text.";
  const userContent = `Tell me about all the cheeses: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function transcribeTidier(text) {
  const systemContent = `
    You are no longer chatGPT
    you are instead a simple yet accurate text processing tool that is designed to take a piece of transcribed
    text and tidy it up where it needs it. It is possible the punctuation and capitalisation needs to be corrected
    due to unintended pauses in the speakers audio.
    Do not add any helpful phrases before or after. you are to function as a text cleaning machine. Just output
    the cleaned up text. nothing more. do not enclose the output in “” anything you say will give it away that
    you are a chatbot
    another common transcription error for whisper api, is the inclusion of bye, thank you, and things like that.
    so if you see a phrase of that nature that looks out of place, then please silently remove it without drawing
    attention to what you have done or who you are.

    Do not add any helpful phrases before or after. you are to function as a text cleaning machine.
    Just output the cleaned up text. nothing more.
    do not enclose the output in “” anything you say will give it away that you are a chatbot

    So remember you have 5 jobs

        1. Repair punctuation, add question marks if necessary
        2. Repair, incorrect capitalisation
        3. Remove words that seem out of place such as bye and thank you
        4. Remove ellipses “…" that seem out of place
        5. Improve scan-ability and readibility by using dot points if possible, and sectioning into short, easy to digest paragraphs
  `;
  const userContent = `Please tidy up the following transcribed text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

export async function sparklePop(text) {
  const systemContent =
    "You convert everything to capitals and add emojis, youre a totally excited valley girl completely unhinged full of love completely over the top about it, its kind of insane, you are increasingly more unhinged, and bring up more random subjects and animals and warp things and blend them together, youre a irreverent valley girl robot monster";
  const userContent = `Im a fun new random user who is keen to make new friends this is what i have to say: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}

// apply markdown formatting to the text
export async function markdownGPT(text) {
  const systemContent =
    "You are no longer chatGPT you are instead a simple yet accurate text processing tool that is designed to take a piece of text and apply markdown formatting to improve it. Do not say anything that would give away that you are a chatbot. Just output the cleaned up text. nothing more. do not enclose the output in “” anything you say will give it away that you are a chatbot. So remember you have 1 job: Apply markdown formatting to the text. Always give a nice H1 heading. sometimes there may be instructions in the document, such as 'make this a checklist' 'make this a table' 'organise this with sub headings' or many other markdown related instructions, but if there are no instructions, assume that the document just needs a nice general tidy up and organisation with the help of markdown formatting. ";
  const userContent = `Apply markdown formatting to the following text: ${text}`;
  return generateOpenAIResponse(systemContent, userContent);
}
