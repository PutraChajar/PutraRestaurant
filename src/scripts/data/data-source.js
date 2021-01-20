import API_ENDPOINT from '../globals/api-endpoint.js';

class DataSource {
    static async loadRestaurants() {
        const response = await fetch(API_ENDPOINT.RESTAURANTS);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async loadRestaurant(idresto) {
        const response = await fetch(API_ENDPOINT.DETAIL(idresto));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
}

export default DataSource;