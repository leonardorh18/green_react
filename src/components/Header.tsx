import React from 'react';
import './Header.css';
import { IonHeader, IonToolbar, IonTitle, IonMenuButton } from '@ionic/react';

interface HeaderProps {
    pageName: string,
}


const Header: React.FC<HeaderProps> = ({ pageName }: HeaderProps) => {
    return (
        <IonHeader className="app-header">
            <IonToolbar color="primary">
                <IonMenuButton slot="start"></IonMenuButton>
                <IonTitle>{pageName}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;