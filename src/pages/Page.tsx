import {
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import Profile from "./Profile";
import Adder from "./Adder";
import Greetings from "./Greetings";
import Translator from "./Translator";
import "./Page.css";
import Multiplication from "./Multiplication";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  let renderedPage = null;
  switch (name) {
    case "Profile":
      renderedPage = <Profile />;
      break;
    case "Adder":
      renderedPage = <Adder />;
      break;
    case "Multiplication":
      renderedPage = <Multiplication />;
      break;
    case "Greetings":
      renderedPage = <Greetings />;
      break;
    case "Translator":
      renderedPage = <Translator />;
      break;
    default:
      renderedPage = null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" fullscreen>{renderedPage}</IonContent>
      <IonFooter>
        <IonToolbar color="dark">
          <IonTitle className="Footer-Title">Victor J. Thomas</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Page;
