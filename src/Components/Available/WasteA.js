import './ATables.css';
import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function WasteA() {
  return (
    <div className="Home">
      <div className="headerBox"><h1 className="headerBoxh1">Available Waste</h1></div>
      
      <table class="customTable">
        <thead>
          <tr>
            <th>VillageName</th>
            <th>Waste</th>
            <th>Purpose</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Village X</td>
            <td>Hemp</td>
            <td>Clothing/Bioenergy</td>
            <td>15Kg's</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
          <tr>
            <td>Village Y</td>
            <td>Food</td>
            <td>Consumables</td>
            <td>15Kg's</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WasteA;