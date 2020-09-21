export default class ModelSW{
    url = 'https://swapi.dev/api/people/';
    maxPeople = 83;
    people = [];

    loadPeople(){
        const r = this.getRandom();
        return fetch(`${ this.url }${ r }/`)
            .then(r => r.json())
            .then(d => {
                this.people.unshift(d);
                return this.people;
            });
    }

    getRandom(){
        return Math.floor(Math.random() * this.maxPeople) + 1;
    }
}