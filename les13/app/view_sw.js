export default class ViewSW{
    constructor(handleClick){
        this.btn = document.querySelector('.btn_sw-gen');
        this.info = document.querySelector('.sw_info');

        this.btn.addEventListener('click', handleClick);
    }

    renderInfo(people){
        this.info.innerHTML = people.map(this.renderCard).join('');
    }

    renderCard(data){
        const {
            name,
            gender,
            height,
            birth_year,
            eye_color,
            hair_color,
            skin_color,
            mass,
            homeworld,
            url
        } = data;

        return `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${ name }</h5>
          <h6 class="card-subtitle mb-2 text-muted">gender: ${ gender }, height: ${ height }</h6>
          <p class="card-text">
          Birth Year: ${ birth_year }, Eyes : ${ eye_color }, Hair: ${ hair_color }, Skin: ${ skin_color }, Mass: ${ mass }</p>
          <a href="${ homeworld }" class="card-link">Homeworld</a>
          <a href="${ url }" class="card-link">${ name }</a>
        </div>
      </div>`;
    }
}