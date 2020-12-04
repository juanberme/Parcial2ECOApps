const vista = 'vista';
const historiales = 'historial';
const basedata = firebase.database();


class parte1{

    constructor(preguntaView){
        this.preguntaView = preguntaView;
    }

    render = () =>{
        //para mostrar la pregunta
        let component = document.createElement('div');
        component.className = 'componentView';

        let question1 = document.createElement('div');
        component.innerHTML = (
            this.preguntaView.pregunta
        );


        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = 'X';

        

        component.appendChild(question1);

        questionBtn.addEventListener('click', ()=>{
            if(this.preguntaView.estado === vista){
                this.preguntaView.estado = historiales;
                basedata.ref('preguntas/vista/'+this.preguntaView.id).set(null);
                basedata.ref('preguntas/historial/'+this.preguntaView.id).set(this.preguntaView);
            }
            
            
        });


        if(this.preguntaView.estado === historiales){
            component.appendChild(deleteBtn);
        }
        
        deleteBtn.addEventListener('click', () =>{  
            basedata.ref('preguntas/historial/'+this.preguntaView.id).set(null);
        });

        

        return component;
        
        

    }

    render2 = () =>{
        let points = document.createElement('div');
        points.className = 'promedio';

        let average = document.createElement('div');
        
        points.innerHTML = (
            this.preguntaView.puntos
        );

        points.appendChild(average);

        return points;

    }
}