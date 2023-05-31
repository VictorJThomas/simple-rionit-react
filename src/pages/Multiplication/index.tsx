import {  IonCard } from "@ionic/react";
import { useState } from "react";

const Multiplication: React.FC = () => {
  const [number, setNumber] = useState('')
  const [table, setTable] = useState<string[]>([])

  const generarTabla = () => {
    const num = parseInt(number);

    if(!isNaN(num)) {
      const multTable: string [] = [];

      for (let i = 1; i <= 13; i++){
        multTable.push(`${num} x ${i} = ${num * i}`)
      }

      setTable(multTable)
    }
  }

  return (
    <IonCard>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={generarTabla}>Generar Tabla</button>
      <ul>
        {table.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </IonCard>
  );
};

export default Multiplication;
