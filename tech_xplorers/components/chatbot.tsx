// Define the type for the responses object
type Responses = {
  [key: string]: string[];
};

// Import the responses JSON file
import responses from '../data/responses.json';

// Function to get a random response from a specific category
const getRandomResponse = (category: keyof Responses): string => {
  // Check if the category exists in the responses JSON
  if (category in responses) {
    const categoryResponses = responses[category];
    // Check if there are responses available for the category
    if (categoryResponses.length > 0) {
      // Generate a random index to select a response
      const randomIndex = Math.floor(Math.random() * categoryResponses.length);
      return categoryResponses[randomIndex];
    }
  }
  // Return a default message if no responses are available for the category
  return "I'm sorry, I don't have a response for that.";
};

// Example usage
const userQuery: keyof Responses = 'greetings'; // Example user query
const response = getRandomResponse(userQuery);
console.log(response);

export default getRandomResponse;
