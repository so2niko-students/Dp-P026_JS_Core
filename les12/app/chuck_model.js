export default class ChuckModel{
    url = 'https://api.chucknorris.io/jokes/random';
    
    constructor(handleLoadJoke){
        this.handleLoadJoke = handleLoadJoke;
    }

    loadJoke(){
        fetch(this.url)
            .then(req => req.json())
            .then(data => this.handleLoadJoke(data));
    }

    loadJoke2(){
        return fetch(this.url).then(req => req.json());
    }

}