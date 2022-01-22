function getDataUser() {
    const name = document.querySelector(".js_name");
    const lastname = document.querySelector(".js_lastname");
    const age = document.querySelector(".js_age");
    const country = document.querySelector(".js_country");
    const image = document.querySelector(".js_image");
    const mail = document.querySelector(".js_mail");
    const description = document.querySelector(".js_description");
    const dataUser = {
        name: name.value,
        lastname: lastname.value,
        age: age.value,
        country: country.value,
        image: image.value,
        mail: mail.value,
        description: description.value
    }
    return dataUser;
}
   
function createCard(dataUser){
    const cards= document.querySelector(".js-cards")
    const card = document.createElement("div");
    card.innerHTML = `   
    <div class="card text-center  style="width: 18rem;"">
        <button class=" btn btn-outline-danger rounded-circle" style="position: absolute; right: -10px; top: -20px;">X</button>        
        <div class="py-4">
            <img src="${dataUser.image}" class="rounded-circle" width="80%">
        </div>
        <div class="card-body">
            <h2 class="card-title h3"><b>${dataUser.name} ${dataUser.lastname}</b></h2>
            <p class="card-text my-0"><b>Edad: </b> <span class="text-success">${dataUser.age} </span> </p>
            <p class="card-text my-0"><b>Email: </b> <span class="text-success">${dataUser.mail}</span> </p>
            <p class="card-text my-0"><b>Pais: </b> <span class="text-success">${dataUser.country}</span> </p>
            <article>${dataUser.description}</article>
        </div>
    </div>    
       
    `;
    console.log("card: ",card);
    // card.classList.add("col", "col-4", "mb-4");
    
    card.querySelector("button").onclick=function() {
        if(confirm(`Desea eliminar al user: ${dataUser.name} ?`)){
            card.remove();
        };
    };
    cards.appendChild(card);
    
}

function createUsers(){
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        let dataUserX = getDataUser();
        console.log(dataUserX);
        createCard(dataUserX);
        form.reset();
    }
    
}

createUsers();