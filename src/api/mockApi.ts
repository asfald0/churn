export const mockApiRequest = async (): Promise<any> => {
  try {
    //Loodetavasti api veel töötab, selleks ajaks, kui testima hakkad.
    // backup. https://mocki.io/v1/f8d2da4b-b37f-47ad-bb9b-c56dad3dfc03
    const response = await fetch(
      'https://run.mocky.io/v3/31cca3f4-c41d-459b-87d8-fb44fbcae520'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
