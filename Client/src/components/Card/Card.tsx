import "./Card.scss";
import { useState } from 'react';

type CardProps = {
  id: number,
  username: string,
  img: string,
  status: string,
  email: string,
  age: number,
}


export function Card(props: CardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">

        <h2>{props.username}</h2>
        <button onClick={() => setShowDetails(isShow => !isShow)}>{showDetails?"Show Less": "View Details"}</button>
        {showDetails && <>
          <h3>Age: {props.age}</h3>
          <p>Email :{props.email}</p>
          <p> Status: {props.status}</p>
        </> 
        }
      
    </div>
  )
};


