
import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './ATables.css';

function ProductsA() {
  return (
    <div className="Home">
      <div className="headerBox"><h1 className="headerBoxh1">Available Products</h1></div>
      
      <table class="customTable">
        <thead>
          <tr>
            <th>VillageName</th>
            <th>Products</th>
            <th>Quantity</th>
            <th>Price Per Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Village X</td>
            <td>Hemp TShirts</td>
            <td>200</td>
            <td>150 MVS</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
          <tr>
            <td>Village Y</td>
            <td>1KG Compost Bag</td>
            <td>90</td>
            <td>15 MVS</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductsA;