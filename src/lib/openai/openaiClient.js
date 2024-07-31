// src/lib/openai/openaiService.js

import { API_OPENAI_API_KEY } from "$env/static/private";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: API_OPENAI_API_KEY,
});

export default openai;
