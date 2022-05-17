
import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './ATables.css';

function SuppliersA() {
  return (
    <div className="Home">
      <div className="headerBox"><h1 className="headerBoxh1">Available Suppliers</h1></div>
      
      <table class="customTable">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Location</th>
            <th>Resources</th>
            <th>Connect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Village X</td>
            <td>Siyabuswa</td>
            <td>Clothing/Bioenergy</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
          <tr>
            <td>Village Y</td>
            <td>Siyabuswa</td>
            <td>Consumables</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SuppliersA;