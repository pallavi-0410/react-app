export default class ProductService {
    getProductData(params) {
        const api_key = 'ywLrkk7wIy3wxvfkZRRcAw';
            return new Promise((resolve, reject) => {
            fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${api_key}&q=${params}`).then((result) => result.text()).then((r) => resolve(r)).catch((e) => reject(e));
        });
    }
}