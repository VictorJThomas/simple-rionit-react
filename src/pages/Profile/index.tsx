import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./style.css"

const Profile: React.FC = () => {

  return (
    <IonCard className="Card-Profile" color="dark">
      <img
        alt="Silhouette of mountains"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      <IonCardHeader>
        <IonCardTitle>Victor J. Thomas</IonCardTitle>
        <IonCardSubtitle>2021-0379</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default Profile;
