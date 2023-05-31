import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { add, calculator, calculatorSharp, videocam, videocamSharp, personSharp, language, languageSharp, person, addSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Profile',
    url: '/folder/Profile',
    iosIcon: person,
    mdIcon: personSharp
  },
  {
    title: 'Adder',
    url: '/folder/Adder',
    iosIcon: add,
    mdIcon: addSharp
  },
  {
    title: 'Translator',
    url: '/folder/Translator',
    iosIcon: language,
    mdIcon: languageSharp
  },
  {
    title: 'Multiplication Table',
    url: '/folder/Multiplication',
    iosIcon: calculator,
    mdIcon: calculatorSharp
  },
  {
    title: 'Greetings',
    url: '/folder/Greetings',
    iosIcon: videocam,
    mdIcon: videocamSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="push">
      <IonContent color="light">
        <IonList id="inbox-list" className='Menu-Top'>
          <IonListHeader className='Menu-Header' color="dark">Menu</IonListHeader>
          <div>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false} color="light">
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          </div>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
