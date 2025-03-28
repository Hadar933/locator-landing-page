import { AIRecommendationResponse } from '../pages/free-tools/ai-recommendations';

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function getAIRecommendations(prompt: string): Promise<{ parsed: AIRecommendationResponse, raw: string }> {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: prompt
          }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 1,
        max_completion_tokens: 1024,
        top_p: 1,
        stream: false, // Changed to false for simpler handling
        stop: null
      })
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    const rawContent = data.choices[0].message.content;
    
    try {
      const recommendations = JSON.parse(rawContent);
      return {
        parsed: {
          ...recommendations,
          disclaimer: "Note: AI-generated recommendations may not be completely accurate. Please verify important details before making travel plans."
        } as AIRecommendationResponse,
        raw: rawContent
      };
    } catch (e) {
      console.error('Failed to parse AI response:', e);
      throw new Error('Invalid response format from AI');
    }
  } catch (error) {
    console.error('AI service error:', error);
    throw error;
  }
}
