import React from 'react';
import { IonMenuToggle, IonItem, IonIcon, IonLabel, IonMenu, IonContent, IonList, IonListHeader} from '@ionic/react';

import './Menu.css'


const routes = {
    appPages: [
        {
            title: "Biblioteca",
            path: "/biblioteca"
        },
        {
            title: "Feed",
            path: "/feed"
        },
        {
            title: "Notas",
            path: "/notas"
        },
        {
            title: "Ru",
            path: "/ru"
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