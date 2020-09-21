import ModelSW from "./model_sw.js";
import ViewSW from "./view_sw.js";

export default class ControllerSW{
    constructor(){
        this.model = new ModelSW();
        this.view = new ViewSW(() => this.handleBtnGenerate());
    }

    async handleBtnGenerate(){
        const data = await this.model.loadPeople();
        this.view.renderInfo(data);
    }
}