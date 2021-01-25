import API_ENDPOINT from '../globals/api-endpoint.js';
import CONFIG from '../globals/config.js';

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

    static async addNewReview(data_review) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": CONFIG.KEY
            },
            body: JSON.stringify(data_review)
        }
 
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
        const responseJson = await response.json();
        return responseJson;
    }
}

export default DataSource;