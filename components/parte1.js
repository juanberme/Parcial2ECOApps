const vista = 'vista';
const historiales = 'historial';
const basedata = firebase.database();


class parte1{

    constructor(preguntaView){
        this.preguntaView = preguntaView;
    }
    //como se va a organizar el render
    render = () =>{
        //para mostrar la pregunta
        let component = document.createElement('div');
        component.className = 'componentView';

        //para recoger la pregunta que yo escrbí
        let question1 = document.createElement('div');
        component.innerHTML = (
            this.preguntaView.pregunta
        );

        //para crear el boton eliminar
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = 'X';

        
        //para que guarde dentro del div a la pregunta
        component.appendChild(question1);

        //la accion que va a hacer el boton
        questionBtn.addEventListener('click', ()=>{
            if(this.preguntaView.estado === vista){
                this.preguntaView.estado = historiales;
                basedata.ref('preguntas/vista/'+this.preguntaView.id).set(null);
                basedata.ref('preguntas/historial/'+this.preguntaView.id).set(this.preguntaView);
            }
            
            
        });

        //para indicar donde debe mostrarse y funcionar el deleteBtn
        if(this.preguntaView.estado === historiales){
            component.appendChild(deleteBtn);
        }
        
        //para eliminar el elemento seleccionado de la base de datos
        deleteBtn.addEventListener('click', () =>{  
            basedata.ref('preguntas/historial/'+this.preguntaView.id).set(null);
        });

        

        return component;
        
        

    }

    render2 = () =>{
        //para crear un div donde se guarde todo lo de adentro de promedio
        let points = document.createElement('div');
        points.className = 'promedio';

        
        let average = document.createElement('div');
        
        //para sacar los promedios de los puntos
        points.innerHTML = (
            this.preguntaView.puntos
        );

        //para agregarlo a promedio
        points.appendChild(average);

        return points;

    }
}