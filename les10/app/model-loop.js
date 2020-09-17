export default class ModelLoop{
    dates = [];//данные

    constructor(){
        this.firstLoad();
    }

    firstLoad(){
        const str = localStorage.getItem('dates');
        if(str){
            this.dates = JSON.parse(str);
        }
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

    addDate(date){
        this.dates.push(date);

        this.calculateDays();
        
        localStorage.setItem('dates', JSON.stringify(this.dates));
    }

    get data(){
        return this.dates;
    }
}