import { askQuestionGPT3 } from '$lib/openai/openaiUseCases.js';

export const POST = async ({ request }) => {
	const data = await request.formData();
	const text = data.get('text'); // Assuming 'text' is the key of the text data in the form

	try {
		const summary = await askQuestionGPT3(text);
		console.log('🚀 ~ file: +server.js:10 ~ POST: ~ summary:', summary.content);
		return new Response(JSON.stringify({ success: true, summary: summary.content }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Error in summarizing:', error);
		return new Response(JSON.stringify({ success: false, error: error.message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};
