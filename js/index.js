const database = firebase.database();
const question = document.getElementById("question");
const questionBtn = document.getElementById("questionBtn");
const questionView = document.getElementById("questionView");
const historial = document.getElementById("historial");
const questionContainer = document.getElementById("questionContainer");
const historialContainer = document.getElementById("historialContainer");


asignar = () =>{

    //para mostrar donde se debe guardar la informacion
    let referencia = database.ref('preguntas/vista').push();
    //para crear el elemento
    let preguntaView = {
        id: referencia.key,
        pregunta: question.value,
        puntos: '0',
        estado: 'vista',
        
    }

    //para que se suba a la base de datos
    referencia.set(preguntaView);
    //para que el input se vacie 
    question.value = '';
}

//para que realice todas las funciones del metodo asignar cuando se presione el boton
questionBtn.addEventListener('click', asignar);

//para crear el render de al seccion preguntas
database.ref('preguntas/vista').on('value', function(data){
    questionContainer.innerHTML = '';
    data.forEach(
        preguntaView =>{
            
            let hacer = new parte1(preguntaView.val());
            questionContainer.appendChild(hacer.render());
            questionContainer.appendChild(hacer.render2());
            
        });
    
})

//para crear el render de la seccion historial
database.ref('preguntas/historial').on('value', function(data){
    historialContainer.innerHTML = '';
    data.forEach(
        preguntaView =>{
            let hacer = new parte1(preguntaView.val());
            historialContainer.appendChild(hacer.render());
            historialContainer.appendChild(hacer.render2());
        }
    );
})