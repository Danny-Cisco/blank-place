// \src\routes\(the_place)\the_place\openai_tester\+page.server.js

import { askQuestionGPT3 } from '$lib/openai/openaiUseCases.js';

/** @type {import('./$types').Actions} */
export const actions = {
	askQuestionGPT3: async ({ request }) => {
		const data = await request.formData();
		const text = data.get('text'); // Assuming 'text' is the key of the text data in the form

		try {
			const summary = await askQuestionGPT3(text);
			console.log('🚀 ~ file: +page.server.js:34 ~ askQuestionGPT3: ~ summary:', summary.content);
			return summary.content;
		} catch (error) {
			console.error('Error in summarizing:', error);
			return { success: false, error: error.message };
		}
	}
};
