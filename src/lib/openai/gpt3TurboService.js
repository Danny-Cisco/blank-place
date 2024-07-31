// src/lib/openai/chatCompletionService.js
/**
 * Chat Completion Service using OpenAI's GPT-3.5-turbo model.
 *
 * This service interacts with the OpenAI Chat API to generate conversation-like responses.
 * It accepts an array of messages with specific roles: 'user' and 'system'.
 *
 * Message Format:
 * - Each message should be an object with two properties: 'role' and 'content'.
 * - 'role': Can be either 'system' or 'user'.
 *   - 'system': Used for messages that provide context or instructions for the AI (e.g., "You are a helpful assistant.").
 *   - 'user': Represents messages from the user, such as queries or statements (e.g., transcriptions of a meeting).
 * - 'content': The actual text of the message.
 *
 * Example:
 * ```
 * const messages = [
 *   { role: "system", content: "If this message is short, make a summary, if it seems to be a meeting make meeting notes." },
 *   { role: "user", content: "In todays meeting we will be discussing..." }
 * ];
 * createChatCompletion(messages).then(response => console.log(response));
 * ```
 *
 * Usage:
 * - Import the createChatCompletion function from this module.
 * - Call createChatCompletion with the array of formatted message objects.
 * - Handle the returned promise which resolves to the chat completion response.
 *
 * For more details on the OpenAI Chat API, refer to:
 * - OpenAI SDK Documentation: https://www.npmjs.com/package/openai
 * - OpenAI API Reference for Chat: https://platform.openai.com/docs/api-reference/chat/object
 * - OpenAI Guide for Chat Completions API: https://platform.openai.com/docs/guides/text-generation/chat-completions-api
 */

import openai from "$lib/openai/openaiClient.js";

/**
 * Creates a chat completion using OpenAI's GPT-3.5-turbo model.
 *
 * This function sends a series of messages to the OpenAI API and receives
 * a chat completion response. It's useful for simulating a conversation.
 *
 * @param {Array} messages - An array of message objects in the format { role: 'user', content: 'Message content' }
 * @returns {Promise<String>} - The response message from the chat completion.
 * @throws {Error} - Throws an error if the OpenAI API call fails.
 */
export async function gpt3TurboCompletion(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });
    return response.choices[0].message;
  } catch (error) {
    console.error("Error in chat completion:", error);
    throw error;
  }
}
