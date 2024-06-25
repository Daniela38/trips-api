
const API_URL = 'http://localhost:8080/api/flights';

export const getFlights = async() => {
    const response = await fetch(API_URL);
    return response.json();
}

export async function getFlightsByCategory(categoryUrl) {
    const response = await fetch(`${API_URL}/categories/${categoryUrl}`);
    return response.json();
}

export async function getFlightById(categoryUrl, id) {
    const response = await fetch(`${API_URL}/categories/${categoryUrl}/${id}`);
    return response.json();
}