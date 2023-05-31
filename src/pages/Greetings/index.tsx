import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";

const Greetings: React.FC = () => {
  return (
    <IonCard>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <IonCardHeader>
        <IonCardSubtitle>Título del video</IonCardSubtitle>
        <IonCardTitle>Nombre del video</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Descripción del video.</IonCardContent>
    </IonCard>
  );
};

export default Greetings;

