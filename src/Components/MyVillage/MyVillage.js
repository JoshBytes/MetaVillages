import React from 'react'

function MyVillage() {
  return (
    <div>
        <div className="headerBox"><h1 className="headerBoxh1">My Village</h1></div>
        <table class="customTable">
        <thead>
          <tr>
            <th>Propoesed Plans</th>
            <th>Purpose</th>
            <th>Expected Cost</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Factory</td>
            <td>Clothing Creation</td>
            <td>1500 MV's</td>
            <td><progress id="file" value="75" max="100"> 75% </progress></td>
          </tr>
          <tr>
            <td>Farm</td>
            <td>Food harvesting</td>
            <td>800MV's</td>
            <td><progress id="file" value="32" max="100"> 32% </progress></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyVillage;