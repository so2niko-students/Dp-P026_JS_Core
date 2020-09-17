export default class ViewLoop{
    constructor(onAddClick){
        this.inpDate = document.querySelector('.inp_date');
        this.inpName = document.querySelector('.inp_name');
        this.btnAdd = document.querySelector('.btn_add');
        this.infoFields = document.querySelector('.info_fields');

        this.btnAdd.addEventListener('click', onAddClick);
    }

    renderList(dates){//работа с DOM, графикой
        const htmlStr = dates.map(({ name, month, date, daysLeft }) => {
            return `<div>${ daysLeft } days to ${ month }.${ date } : ${ name }</div>`;
        }).join('');

        this.infoFields.innerHTML = htmlStr;
    }

    getInputs(){
        const name = this.inpName.value;//DOM
        const [month, date] = this.inpDate.value.split('-').slice(1);

        return {
            name,
            month,
            date
        };
    }
}