import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './ATables.css';

function MaterialsA() {
  return (
    <div>
      <div className="headerBox"><h1 className="headerBoxh1">Available Materials</h1></div>
      
      <table class="customTable">
        <thead>
          <tr>
            <th>From</th>
            <th>Materials</th>
            <th>Uses</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Village X</td>
            <td>Bricks Excess</td>
            <td>Construction</td>
            <td>8 000</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
          <tr>
            <td>Village X</td>
            <td>MetalSheets Excess</td>
            <td>Construction</td>
            <td>700</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MaterialsA;