export default class Loop{
    // dates = [];//данные

    constructor(){
        // this.inpDate = document.querySelector('.inp_date');
        // this.inpName = document.querySelector('.inp_name');
        // this.btnAdd = document.querySelector('.btn_add');
        // this.infoFields = document.querySelector('.info_fields');

        // this.btnAdd.addEventListener('click', this.onAddClick);
        //работа с DOM

        // this.firstLoad();//работа с данными

        // this.renderList();//работа с DOM, графикой
    }

    // firstLoad(){//работа с данными
    //     const str = localStorage.getItem('dates');
    //     if(str){
    //         this.dates = JSON.parse(str);
    //     }
    // }

    // onAddClick = () => {//обработка клика на кнопку
    //     const name = this.inpName.value;//DOM
    //     const [month, date] = this.inpDate.value.split('-').slice(1);

    //     this.dates.push({//данные
    //         name,
    //         month,
    //         date 
    //     });

    //     this.calculateDays();
        
    //     localStorage.setItem('dates', JSON.stringify(this.dates));//данные

    //     this.renderList();
    // }

    // calculateDays(){//данные
    //     this.dates.forEach(el => {
    //         const { month, date } = el;
    //         const td = new Date();

    //         const d = new Date(td.getFullYear() + 1, month - 1, date);
            
    //         el.daysLeft = Math.ceil(Math.abs((td - d) / ( 1000 * 60 * 60 * 24))) % 365;
    //     });

    //     this.dates.sort((prev, next) => prev.daysLeft - next.daysLeft);
    // }

    // renderList(){//работа с DOM, графикой
    //     const htmlStr = this.dates.map(({ name, month, date, daysLeft }) => {
    //         return `<div>${ daysLeft } days to ${ month }.${ date } : ${ name }</div>`;
    //     }).join('');

    //     this.infoFields.innerHTML = htmlStr;
    // }
}
