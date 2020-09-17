import ModelLoop from "./model-loop.js";
import ViewLoop from "./view-loop.js";

export default class ControllerLoop{
    constructor(){
        this.view = new ViewLoop(this.onAddClick);
        this.model = new ModelLoop();

        this.view.renderList(this.model.data);
    }

    onAddClick = () => {//обработка клика на кнопку
        const inputsData = this.view.getInputs();

        this.model.addDate(inputsData);

        // this.view.renderList(this.model.dates);
        this.view.renderList(this.model.data);
    }
}