import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './ATables.css';

function JobsA() {
  return (
    <div>
      <div className="headerBox"><h1 className="headerBoxh1">Available Jobs</h1></div>
      
      <table class="customTable">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Salary in MV's</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MetaVillage Marketer</td>
            <td>Siyabuswa</td>
            <td>Help market the MetaVillage Platoform to users and other villages</td>
            <td>Commission Based + 500MV's</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
          <tr>
            <td>MetaVillage Security Agent</td>
            <td>Siyabuswa</td>
            <td>Protect and Monitor MetaVillage Infrastructure</td>
            <td>12000MV's</td>
            <td><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default JobsA;