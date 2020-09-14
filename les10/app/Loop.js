export default class Loop{
    dates = [];

    constructor(){
        this.inpDate = document.querySelector('.inp_date');
        this.inpName = document.querySelector('.inp_name');
        this.btnAdd = document.querySelector('.btn_add');
        this.infoFields = document.querySelector('.info_fields');

        this.btnAdd.addEventListener('click', this.onAddClick);
    }

    onAddClick = () => {
        const name = this.inpName.value;
        const [month, date] = this.inpDate.value.split('-').slice(1);

        this.dates.push({
            name,
            month,
            date
        });


        console.log(this.dates);

        this.renderList();
    }

    renderList(){
        const htmlStr = this.dates.map(({ name, month, date }) => {
            const td = new Date();

            const d = new Date(td.getFullYear() + 1, month - 1, date);
            
            const days = Math.ceil(Math.abs((td - d) / ( 1000 * 60 * 60 * 24))) % 365;

            return `<div>${days} days to ${month}.${date} : ${name}</div>`;
        }).join('');

        this.infoFields.innerHTML = htmlStr;
    }
}
