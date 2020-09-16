export default class Loop{
    dates = [];

    constructor(){
        this.inpDate = document.querySelector('.inp_date');
        this.inpName = document.querySelector('.inp_name');
        this.btnAdd = document.querySelector('.btn_add');
        this.infoFields = document.querySelector('.info_fields');

        this.btnAdd.addEventListener('click', this.onAddClick);

        this.firstLoad();

        this.renderList();
    }

    firstLoad(){
        const str = localStorage.getItem('dates');
        if(str){
            this.dates = JSON.parse(str);
        }
    }

    onAddClick = () => {
        const name = this.inpName.value;
        const [month, date] = this.inpDate.value.split('-').slice(1);

        this.dates.push({
            name,
            month,
            date 
        });

        this.calculateDays();
        
        localStorage.setItem('dates', JSON.stringify(this.dates));

        this.renderList();
    }

    calculateDays(){
        this.dates.forEach(el => {
            const { month, date } = el;
            const td = new Date();

            const d = new Date(td.getFullYear() + 1, month - 1, date);
            
            el.daysLeft = Math.ceil(Math.abs((td - d) / ( 1000 * 60 * 60 * 24))) % 365;
        });

        this.dates.sort((prev, next) => prev.daysLeft - next.daysLeft);
    }

    renderList(){
        const htmlStr = this.dates.map(({ name, month, date, daysLeft }) => {
            return `<div>${ daysLeft } days to ${ month }.${ date } : ${ name }</div>`;
        }).join('');

        this.infoFields.innerHTML = htmlStr;
    }
}
