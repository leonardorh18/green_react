import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Import compoents */
import Menu from './components/Menu'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Feed from './pages/Feed';
import Mensagem from './pages/Mensagem';
import Horarios from './pages/Horarios';
import Info from './pages/Info';
import Material from './pages/Material';
import Configuracao from './pages/Configuracao';
import Biblioteca from './pages/Biblioteca';
import Notas from './pages/Notas';
import Ru from './pages/Ru';
import Login from './pages/Login';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/feed" component={Feed} exact={true} />
          <Route path="/login" component={Login} exact={true} />
       
          <Route path="/notas" component={Notas} />
          <Route path="/Horarios" component={Horarios} />
          <Route path="/Material" component={Material} />
          <Route path="/Mensagem" component={Mensagem} />
          <Route path="/biblioteca" component={Biblioteca} exact={true} />
          <Route path="/ru" component={Ru} />
          <Route path="/info" component={Info} />
          <Route path="/Configuracao" component={Configuracao} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
