
import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './ATables.css';

function PartnersA() {
  return (
    <div className="Home">
      <div className="headerBox"><h1 className="headerBoxh1">Available Partners</h1></div>
      
      <table class="customTable">
        <thead>
          <tr>
            <th>Partners</th>
            <th>Contract</th>
            <th>Resources</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Woolworths</td>
            <td>Cheaper food and Products from village for discount and supplying free Waste</td>
            <td>Food / Clothing / Capital</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartnersA;