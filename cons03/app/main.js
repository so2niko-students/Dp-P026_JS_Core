const inputFourTen = document.querySelector('#inputFourTen'),
        buttonFourTen = document.querySelector('#buttonFourTen');

    buttonFourTen.addEventListener('click', () => {
        console.log(inputFourTen.value);
        const DataMassNum = inputFourTen.value.split("-").map(x => +x);
        console.log(DataMassNum);

        if ((DataMass[0] % 4 == 0 && DataMass[0] % 100 != 0 || DataMass[0] % 400 == 0) && //проверка на высокосность
             (DataMassNum[1] == 2 && DataMassNum[2] == 29)) {//и 29 февраля
            // Високосний рік
            // Якщо користувач ввів 29 лютого високосного року, простий перехід на наступний місяць
            DataMassNum[2] = 1;
            ++DataMassNum[1];
            // Якщо користувач ввів 30 або 31 лютого (з ким не буває?), попередження про хибні данні. 
            /*
                Такою була моя логіка, але схема не працює. Бо якщо ввести такі дати, то просто отримаємо NaN та undefined.
                Запитання, ЧОМУ?
            */

            if (DataMass[2] > 29) {
                alert('В цьому році в лютому максимум 29 днів!')
            }
        } else if ((DataMass[0] % 4 != 0 && DataMass[0] % 100 == 0 || DataMass[0] % 400 != 0) && //проверка на не высокосность
             (DataMassNum[1] == 2 && DataMassNum[2] == 28)) {//и 28 февраля
            // Звичайний рік
            DataMassNum[2] = 1;
            ++DataMassNum[1];
            if (DataMass[2] > 28) {
                alert('В цьому році в лютому максимум 28 днів!')
            }
        } else if (DataMassNum[1] == 12 && DataMassNum[2] == 31) {//31 декабря
            DataMassNum[2] = 1;
            DataMassNum[1] = 1;
            ++DataMassNum[0];
            alert('Завтра новий рік! Де твій новорічний настрій?')
        } else if ((DataMassNum[1] == 1 || DataMassNum[1] == 3 || DataMassNum[1] == 5 || DataMassNum[1] == 7 || DataMassNum[1] == 8 || DataMassNum[1] == 10) && DataMassNum[2] == 31) {//месяцы с 31 днем и дата 31
            DataMassNum[2] = 1;
            ++DataMassNum[1];
        } else if ((DataMassNum[1] == 4 || DataMassNum[1] == 6 || DataMassNum[1] == 8 || DataMassNum[1] == 9 || DataMassNum[1] == 11) && DataMassNum[2] == 30) {//месяцы с 30 днями и дата 30
            DataMassNum[2] = 1;
            ++DataMassNum[1];
        } else {//все остальное
            ++DataMassNum[2];

            if (DataMassNum[2] > 9) {
                alert(`Завтрішня дата: ${DataMassNum[2]}.${DataMassNum[1]}.${DataMassNum[0]}`)
            } else {
                alert(`Завтрішня дата: 0${DataMassNum[2]}.0${DataMassNum[1]}.${DataMassNum[0]}`)
            }
        }

    });


    let [ year, month, day ] = DataMass;  //[2020, 8, 27]

    day++;
    if(day == 32 || is31Of30month(day, month) || checkFeb(day, month, year)){
        day = 1;
        month++;

        if(month == 13){
            month = 1;
            year++;
        }
    }


function is31Of30month(day, month){
    return day == 31 && (month == 4 || month == 6 || month == 8 || month == 9 || month == 11);
}

function isLeapY(year){
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function checkFeb(day, month, year){
    return month == 2 && (isLeapY(year) && day == 30 || !isLeapY(year) && day == 29);
}

    //если февраль
        //и дата >=28
        //если высокосный 
    //если дата 30

