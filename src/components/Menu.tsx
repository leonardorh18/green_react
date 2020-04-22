import React from 'react';
import { IonMenuToggle, IonItem, IonIcon, IonLabel, IonMenu, IonContent, IonList, IonListHeader, IonAvatar} from '@ionic/react';

import './Menu.css'


const routes = {
    appPages: [
        {
            title: "Feed",
            path: "/feed"
           
        },
        {
            title: "Notas",
            path: "/notas"
        },
        {
            title: "Horarios",
            path: "/Horarios"

        },
        {
            title: "Material Didatico",
            path: "/Material"
        },
        {
            title: "Mensagem CCR",
            path: "/Mensagem"
        },
        {
            title: "Biblioteca",
            path: "/biblioteca"
        },
        
        {
            title: "Ru",
            path: "/ru"
        },
        {
            title: "Info UFFS",
            path: "/Info"
        },
        {
            title: "Configuração",
            path: "/Configuração"
        },

    ]
}

interface Pages {
    title: string,
    path: string,
    routerDirection?: string
}


const Menu: React.FC = () => {

    return (
        <IonMenu contentId="main">
            <IonContent>
                <IonList lines="none" className="menu-header">
                    <IonListHeader color="primary">
                        <IonLabel className="header-text">
                            <IonAvatar>
                                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                            </IonAvatar>
                            <h1>Fulano.Ciclano</h1>
                            <h3>Campus Chapecó</h3>
                        </IonLabel>
                    </IonListHeader>
                    {
                        routes.appPages
                        .map(p => (
                            <IonMenuToggle auto-hide="false" key={p.title}>
                                <IonItem  routerLink={p.path} routerDirection="none">
                                    <IonLabel>{p.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}


export default Menu