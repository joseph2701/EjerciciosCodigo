//services usando fetch

//RETORNA OBJETO USUARIO CON VALORES DEL FORMULARIO
function getValuesUserForm(form){
    return{
        name:form.querySelector(".js_name").value,
        lastname:form.querySelector(".js_lastname").value,
        cellphone:form.querySelector(".js_cellphone").value,        
        photo:form.querySelector(".js_photo").value,
        country:form.querySelector(".js_country").value,
        description:form.querySelector(".js_description").value,
    }
}
  
function chargeUsersToForm(user){        
    const inputName = document.querySelector(".js_form_edit .js_name");
    const inputLastname = document.querySelector(".js_form_edit .js_lastname");
    const inputCellphone = document.querySelector(".js_form_edit .js_cellphone");
    const inputCountry = document.querySelector(".js_form_edit .js_country");
    const inputImage = document.querySelector(".js_form_edit .js_photo");
    const inputDescription = document.querySelector(".js_form_edit .js_description");
    const inputId = document.querySelector(".js_form_edit .js_id");
    inputName.value=user.name;
    inputLastname.value=user.lastname;
    inputCellphone.value=user.cellphone;
    inputCountry.value=user.country;
    inputImage.value=user.photo;
    inputDescription.value=user.description;
    inputId.value=user.id;
}

function cleanCards(){
    const cards= document.querySelector(".js-cards")                
    cards.innerHTML = "";        
}

function createCard(user){
    const cards= document.querySelector(".js-cards")        
    const card = document.createElement("div");
    card.innerHTML = `  
    <div class="card text-center  style="width: 18rem;"">
        <button class="js_delete_card btn btn-outline-danger rounded-circle" style="position: absolute; right: -10px; top: -20px;">X</button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="js_edit_card btn btn-outline-success rounded-circle" style="position: absolute; right: 30px; top: -20px;">✓</button>            
        <div class="py-4">
            <img src="${user.photo}" class="rounded-circle" width="80%">
        </div>
        <div class="card-body">
            <h2 class="card-title h3"><b>${user.name} ${user.lastname}</b></h2>
            <p class="card-text my-0"><b>Celular: </b> <span class="text-success">${user.cellphone} </span> </p>                
            <p class="card-text my-0"><b>Pais: </b> <span class="text-success">${user.country}</span> </p>
            <article>${user.description}</article>
        </div>
    </div>               
    `;       
    
    card.querySelector(".js_delete_card").onclick=function() {
        if(confirm(`Desea eliminar al user: ${user.name} ?`)){
            deleteUsers(user,card);
        };
    };
    card.querySelector(".js_edit_card").onclick=function() {
        chargeUsersToForm(user);
        };
    cards.appendChild(card);        
}

//function GET
function getUsers(){
    fetch("https://61ef3e1fd593d20017dbb3c6.mockapi.io/users")
    .then((respuesta) => {
        return respuesta.json(); //interpreta con formato json
    })
    .then(
        function(respuesta){
            cleanCards();
            respuesta.forEach((user)=>{
                createCard(user);
            });                            
        }
    )
    .catch((error) => {
        console.log("error de carga: ",error);
    });        
}

//Function POST    
function saveUsers(){
    const form=document.querySelector(".js_form_create");
    form.onsubmit =function(event){
        event.preventDefault();
        fetch("https://61ef3e1fd593d20017dbb3c6.mockapi.io/users",{
            method:"POST",
            body: JSON.stringify(getValuesUserForm(form)),
            headers:{
                "Content-type": "application/json; charset=utf-8",
            },
        })
        .then((respuesta) => {
            return respuesta.json(); //interpreta con formato json
        })
        .then((respuesta) => {     
            form.reset;
            getUsers();
            
        })
        .catch((error) => {
            console.log("error de envio: ",error);                
        });
    };
}

// PUT
function updateUsers() {
    const form = document.querySelector(".js_form_edit");
    const botonClose = form.querySelector(".js_close");  
    form.onsubmit = function (event) {
        event.preventDefault();
        const idValue = form.querySelector(".js_id").value;
        console.log("ivalue",idValue);
        fetch(`https://61ef3e1fd593d20017dbb3c6.mockapi.io/users/${idValue}`,{
            method:"PUT",
            body: JSON.stringify(getValuesUserForm(form)),
            headers:{
                "Content-type": "application/json; charset=utf-8",
            },
        })
        .then((respuesta) => {
            return respuesta.json(); //interpreta con formato json
        })
        .then((respuesta) => {     
            // console.log("respuesta",respuesta);      
            alert(`Se edito correctamente user_id: ${idValue}`);                            
            form.reset();
            botonClose.click();
            getUsers();
        })
        .catch((error) => {
            console.log("error al editar: ",error);
            form.reset();
            botonClose.click();
        });
    };
}

//function DELETE
function deleteUsers(user,card){ 

    fetch(`https://61ef3e1fd593d20017dbb3c6.mockapi.io/users/${user.id}`,{
        method: "DELETE",
    })
    .then((respuesta) => {
        return respuesta.json(); //interpreta con formato json
    })
    .then((respuesta) => {            
        card.remove();
        alert(`Se elimino correctamente: ${user.name}`)
    })
    .catch((error) => {
        alert(`No se pudo eliminar: ${user.name}`)
    });      
}

getUsers();
saveUsers();
updateUsers();


