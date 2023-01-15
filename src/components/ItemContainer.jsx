import React from 'react';
import {userRows} from '../datatablesource';
import {Card} from './Card/Card';
import { Link } from 'react-router-dom';

export default function ItemContainer() {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
            userRows.map((row) => (
                <Card {...row} key={row.id}/>
            ))
        }
        <br />

        <Link to='/products' className="showAll">
            <p>Show All</p>
        </Link>
    </div>
  )
}
