import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./style.css"

const Adder: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);
  const calculateSum = () => {
    const result = number1 + number2;
    setSum(result);
  };

  return (
    <IonCard className="Card-Adder">
      <IonItem color="dark">
        <IonLabel position="floating">Add First Number:</IonLabel>
        <IonInput
          type="number"
          value={number1}
          onIonInput={(e) => setNumber1(parseFloat(e.detail.value!))}
        ></IonInput>
      </IonItem>
      <IonItem color="dark">
        <IonLabel position="floating">Add Second Number:</IonLabel>
        <IonInput
          type="number"
          value={number2}
          onIonInput={(e) => setNumber2(parseFloat(e.detail.value!))}
        ></IonInput>
      </IonItem>
      <IonButton onClick={calculateSum}>
        Calculate Sum
      </IonButton>

      <IonItem color="dark">
        <IonLabel>Result:</IonLabel>
        <IonLabel>{sum}</IonLabel>
      </IonItem>
    </IonCard>
  );
};

export default Adder;
