const database = firebase.database();
const question = document.getElementById("question");
const questionBtn = document.getElementById("questionBtn");
const questionView = document.getElementById("questionView");
const historial = document.getElementById("historial");
const questionContainer = document.getElementById("questionContainer");
const historialContainer = document.getElementById("historialContainer");

asignar = () =>{

    let referencia = database.ref('preguntas/vista').push();
    let preguntaView = {
        id: referencia.key,
        pregunta: question.value,
        puntos: '0',
        estado: 'vista',
        
    }

    referencia.set(preguntaView);
    question.value = '';
}

questionBtn.addEventListener('click', asignar);

database.ref('preguntas/vista').on('value', function(data){
    questionContainer.innerHTML = '';
    data.forEach(
        preguntaView =>{
            
            let hacer = new parte1(preguntaView.val());
            questionContainer.appendChild(hacer.render());
            questionContainer.appendChild(hacer.render2());
            
        });
    
})

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