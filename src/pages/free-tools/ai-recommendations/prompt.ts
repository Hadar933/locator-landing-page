export const buildAIPrompt = (
  userInput: string, 
  categories: string[], 
  selectedMonth: string | null, 
  country: string | null,
  all_categories: string[]
): string => {
  const monthContext = selectedMonth ? `The trip is planned for ${selectedMonth}.` : 'Anytime of the year is fine.';
  const countryContext = country ? `Only provide recommendations in ${country}.` : 'Anywhere in the world is fine.';

  return `
    You are an AI travel recommendation assistant. Your task is to provide 3-4 travel recommendations based on the user's input and constraints. 
    The inputs you will receive are:

    1. **Categories of Interest:** A list of travel-related categories, one of: ${all_categories.join(', ')}.
    2. **Travel Timing:** A specific month or anytime of the year
    3. **Location Constraint:** A specific country or anywhere in the world
    4. **User Description:** A free text input where the user explains what they liked about previous travels and what they are looking for in future trips.

    Based on these inputs, generate a list of travel recommendations that are particularly suitable for the constraints.
    For the categories of interest - aligning the recommendations with the user's preferences. 
    For the travel timing - considering weather, seasonal activities, and special events.
    For the location constraint - ensuring that the recommendations are within the specified country.
    For the user description - identifying destinations that match the user's interests and travel style.

    For each recommendation, include the following details:

    - **Destination Name:** Provide a specific destination name (city, region, or specific location).
    - **Country:** include the full country name where the destination is located.
    - **Description:** A brief summary of the destination and why it fits the user's interests.
    - **Relevant Categories:** The categories from the user's input that this destination aligns with.
    - **Highlights:** Key attractions or experiences the destination offers (e.g., museums, natural landscapes, local cuisine, adventure activities).
    - **Recommendation Reasoning:** A short explanation of why this destination is a good match based on the user's description.

    Return your answer in the following structured JSON format:

    {
    "recommendations": [
        {
        "destination": Destination Name,
        "country": Country Name,
        "description": Description,
        "relevant_categories": ["category1", "category2"],
        "highlights": ["highlight1", "highlight2"],
        "reasoning": Recommendation Reasoning"
        },
        ...
    ]
    }
    Return NOTHING ELSE.
    Ensure that your recommendations are specific, and align closely with both the provided categories and the nuanced details mentioned in the user's free text description. 
    do not respond with generic recommendations like a city or a country - think outside the box!
    Lets start:
    categories: ${categories.join(', ')}
    timing: ${monthContext}
    location: ${countryContext}
    user wrote: ${userInput}
`;
};
