const user = {
    name : 'Nick',
    _location : 'Dnipro',
    '0name' : '0namdsfdsfsd fasd fasd fasdfsda fe',
    '' : 33,
    'SECOND PART' : 33,
    greeting : function(){
        console.log(this);
        console.log(`Hello, ${this.name}, I am in ${this._location}`);
    }
}

console.log(user);
console.log(user["SECOND PART"]);

const names = ['Nick', 'Denys', 'Alex', 'Anton', 'Natalia', 'Serhii'];

class Gamer{
    hp = 1000;
    mp = 100;
    race = 'Human';

    constructor(name){
        this.name = name;
        this.chooseRace();
        this.chooseRole();
    }

    chooseRace(){
        const races = ['Human', 'Orc', 'Dwarf', 'Elven', 'Hobbit', 'Dragon', 'Reptiloid', 'Fairy', 'Enth'];

        this.race = this.random(races);
    }

    chooseRole(){
        const roles = ['Warior', 'Mage', 'Thief', 'Rogue', 'Archer', 'Druid', 'Crusader', 'Healer', 'Necromant', 'Monk'];

        this.role = this.random(roles);
    }

    random = arr => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

}

const heroes = names.map(name => new Gamer(name));

console.log(heroes);

