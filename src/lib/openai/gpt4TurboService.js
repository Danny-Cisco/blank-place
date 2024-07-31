// src/lib/openai/completionService.js
/**
 * gpt4TurboService
 *
 * This module contains a service for interacting with various OpenAI APIs,
 * including chat completions, text completions, and audio transcriptions.
 * Each function in this module is designed to handle specific types of interactions
 * with the OpenAI API, abstracting the complexity and providing a simplified interface.
 *
 * Usage:
 * - Import the desired service function (e.g., createChatCompletion, createTextCompletion).
 * - Call the function with the required parameters and handle the returned promise.
 */

import openai from "$lib/openai/openaiClient.js";

/**
 * Creates a chat completion using OpenAI's GPT-4 turbo model.
 *
 * This function sends a series of messages to the OpenAI API and receives
 * a chat completion response. It's useful for simulating a conversation.
 *
 * @param {Array} messages - An array of message objects in the format { role: 'user', content: 'Message content' }
 * @returns {Promise<String>} - The response message from the chat completion.
 * @throws {Error} - Throws an error if the OpenAI API call fails.
 */

export async function gpt4TurboCompletion(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages,
    });
    return response.choices[0].message;
  } catch (error) {
    console.error("Error in chat completion:", error);
    throw error;
  }
}
