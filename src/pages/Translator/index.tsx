import { IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { useState } from "react";

const Translator: React.FC = () => {
  const [numero, setNumero] = useState<number | undefined>(undefined);
  const [resultado, setResultado] = useState<string>('');

  
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = [
      'diez',
      'once',
      'doce',
      'trece',
      'catorce',
      'quince',
      'dieciséis',
      'diecisiete',
      'dieciocho',
      'diecinueve',
    ];
    const decenas = [
      '',
      'diez',
      'veinte',
      'treinta',
      'cuarenta',
      'cincuenta',
      'sesenta',
      'setenta',
      'ochenta',
      'noventa',
    ];
    const centenas = [
      '',
      'ciento',
      'doscientos',
      'trescientos',
      'cuatrocientos',
      'quinientos',
      'seiscientos',
      'setecientos',
      'ochocientos',
      'novecientos',
    ];

    const traducirNumero = (numero: number): string => {
      if (numero >= 0 && numero < 10) {
        return unidades[numero];
      } else if (numero >= 10 && numero < 20) {
        return especiales[numero - 10];
      } else if (numero >= 20 && numero < 100) {
        if (numero % 10 === 0) {
          return decenas[numero / 10];
        } else {
          return `${decenas[Math.floor(numero / 10)]} y ${unidades[numero % 10]}`;
        }
      } else if (numero >= 100 && numero < 1000) {
        if (numero % 100 === 0) {
          return centenas[numero / 100];
        } else {
          return `${centenas[Math.floor(numero / 100)]} ${traducirNumero(numero % 100)}`;
        }
      } else if (numero === 1000) {
        return 'mil';
      } else {
        return 'Número fuera de rango';
      }
    };

    const handleTraducir = () => {
      if(numero && numero >= 1 && numero <= 1000){
        const numeroEnLetras = traducirNumero(numero)
        setResultado(numeroEnLetras)
      } else {
        setResultado('Numero fuera de rango')
      }
    }
  

  return (
    <IonCard>
      <IonItem>
      <input
        type="number"
        value={numero !== undefined ? numero.toString() : ''}
        onChange={(e) => setNumero(parseInt(e.target.value))}
        min="1"
        max="1000"
      />
        
      </IonItem>
      <IonButton expand="block" onClick={handleTraducir}>
        Traducir
      </IonButton>
      <IonLabel>{resultado}</IonLabel>
    </IonCard>
  );
};

export default Translator;
