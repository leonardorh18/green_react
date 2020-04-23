import { IonContent, IonHeader,IonMenuButton,IonToast,  IonImg, IonPage, IonCard, IonCardContent, IonCardHeader,IonTitle, IonToolbar, IonInput, IonItem, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Login.css'
import Feed from './Feed';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//import './Feed.css';
var image = 'https://www.opresente.com.br/wp-content/uploads/2020/02/uffs.png'

const Login: React.FC<RouteComponentProps> = (props) => {
const [matricula, setMatricula] = useState();
const [senha, setSenha] = useState();
const [showToast1, setShowToast1] = useState(false);


function authLogin(){
    console.log(props);
    if(matricula == 'admin' && senha == 'admin'){
      
      props.history.push("/feed");
    }else{
      setShowToast1(true);
    }


}
  return (
    <IonPage >

      <IonContent color = "white" class ='conteudo'>
      <IonToast
        isOpen={showToast1}
        position = "top"
        onDidDismiss={() => setShowToast1(false)}
        message="ERRRROUUUUUU"
        duration={3000}
      />
      <IonImg src={image}  class = 'Logo' />

        
            <IonItem class='inputs'>
                <IonInput  value={matricula} placeholder="Matrícula" clearInput  onIonChange = {(e:any) =>setMatricula(e.target.value)}></IonInput>
            </IonItem>
            
            <IonItem class='inputs'>
                <IonInput  placeholder="Senha" clearInput onIonChange = {(e:any) =>setSenha(e.target.value)}></IonInput>
            </IonItem>
           
                <IonButton color ='green' size="large" onClick={authLogin} class='btn' >Entrar</IonButton>
       


      </IonContent>
    </IonPage>
  );
};

export default Login;
