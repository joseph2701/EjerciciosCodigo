//services usando fetch

function createEnroll(){
    //RETORNA OBJETO USUARIO CON VALORES DEL FORMULARIO
    function getValuesUserForm(){
        return{
            name:document.querySelector(".js_name").value,
            lastname:document.querySelector(".js_lastname").value,
            cellphone:document.querySelector(".js_cellphone").value,        
            photo:document.querySelector(".js_image").value,
            country:document.querySelector(".js_country").value,
            description:document.querySelector(".js_description").value,
        }
    }

    //Function POST    
    function saveUsers(user,callback){
        fetch("https://61ef3e1fd593d20017dbb3c6.mockapi.io/users",{
            method:"POST",
            body: JSON.stringify(user),
            headers:{
                "Content-type": "application/json; charset=utf-8",
            },
        })
        .then((respuesta) => {
            return respuesta.json(); //interpreta con formato json
        })
        .then(() => {     
            // console.log("respuesta",respuesta);      
            callback()
        })
        .catch((error) => {
            console.log("error de envio: ",error);
        });
    }

    //function GET
    function getUsers(callback){
        fetch("https://61ef3e1fd593d20017dbb3c6.mockapi.io/users")
        .then((respuesta) => {
            return respuesta.json(); //interpreta con formato json
        })
        .then((respuesta) => {            
            callback(respuesta);
        })
        .catch((error) => {
            console.log("error de carga: ",error);
        });
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
            <button class=" btn btn-outline-danger rounded-circle" style="position: absolute; right: -10px; top: -20px;">X</button>        
            <div class="py-4">
                <img src="${user.image}" class="rounded-circle" width="80%">
            </div>
            <div class="card-body">
                <h2 class="card-title h3"><b>${user.name} ${user.lastname}</b></h2>
                <p class="card-text my-0"><b>Celular: </b> <span class="text-success">${user.cellphone} </span> </p>                
                <p class="card-text my-0"><b>Pais: </b> <span class="text-success">${user.country}</span> </p>
                <article>${user.description}</article>
            </div>
        </div>               
        `;       
        
        card.querySelector("button").onclick=function() {
            if(confirm(`Desea eliminar al user: ${user.name} ?`)){
                card.remove();
            };
        };
        cards.appendChild(card);        
    }

    
    function eventForm(){
        const form=document.querySelector("form"); //selecciona el formulario
        form.onsubmit =function(event){
            event.preventDefault();
            // console.log("getvalueform",getValuesUserForm());
            saveUsers(getValuesUserForm(),function(respuesta){
                getUsers(
                    function(respuesta){
                        cleanCards();
                        respuesta.forEach((user)=>{
                            createCard(user);
                        });
                    }
                );
            });
        };
    }


    getUsers(
        function(respuesta){
            respuesta.forEach((user)=>{
                createCard(user);
            });
        }
    );
    eventForm();
}

createUser();

