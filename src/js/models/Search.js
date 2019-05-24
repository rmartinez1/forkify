import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    //every async function returns a promise
    async getResults() {
        const key = '789a2a1955c456cfe9718434aec12606';
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (err) {
            alert(err);
        }
    }
}