// src/lib/openai/transcriptionService.js
/**
 * Transcription Service using OpenAI's Whisper model.
 *
 * This service handles the transcription of audio files using OpenAI's Whisper model.
 * It is capable of converting speech in various audio formats to text, which can be
 * useful in applications requiring audio processing and transcription.
 *
 * Usage:
 * - Import the createTranscription function from this module.
 * - Call createTranscription with the file path of the audio to be transcribed.
 * - Handle the returned promise which resolves to the transcription result.
 */

import openai from "$lib/openai/openaiClient.js";
import fs from "fs";

/**
 * Creates a transcription using OpenAI's Whisper model.
 *
 * This function takes an audio file and uses OpenAI's Whisper model to transcribe
 * the audio content to text. Suitable for processing speech in various audio formats.
 *
 * @param {String} audioFilePath - The file path to the audio file to be transcribed.
 * @returns {Promise<Object>} - The transcription response from OpenAI.
 * @throws {Error} - Throws an error if the OpenAI API call fails or the file cannot be read.
 */
export async function createTranscription(audioFilePath) {
  try {
    const response = await openai.audio.transcriptions.create({
      model: "whisper-1",
      file: fs.createReadStream(audioFilePath),
    });
    return response;
  } catch (error) {
    console.error("Error in transcription:", error);
    throw error;
  }
}
