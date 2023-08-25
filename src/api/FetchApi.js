const BASE_URL = 'https://api.publicapis.org'; // Replace with your API base URL

export const fetchDataFromAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/entries`);
    const data = await response.json();
    console.log("api response in fetch api file====>",data)
    return data.entries;
  } catch (error) {
    throw new Error('Failed to fetch data from API');
  }
};