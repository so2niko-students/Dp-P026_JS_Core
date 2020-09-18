import ChuckModel from "./chuck_model.js";
import ChuckView from "./chuck_view.js";

export default class ChuckController{
    constructor(){
        this.model = new ChuckModel(this.handleLoadJoke);
        this.view = new ChuckView(this.handleGetJoke);

    }

    handleGetJoke = () => {
        // this.model.loadJoke();

        this.model.loadJoke2()
            .then(joke => this.view.renderJoke(joke));
    }

    handleLoadJoke = joke => {
        this.view.renderJoke(joke);
    }
}