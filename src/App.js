import './App.css';
import React from 'react'

//Components
import Home from './Components/Home/Home.js'
import Nav from './Components/Nav/Nav.js';
import JobsA from './Components/Available/JobsA.js';
import MaterialsA from './Components/Available/MaterialsA.js';
import PartnersA from './Components/Available/PartnersA.js';
import ProductsA from './Components/Available/ProductsA.js';
import SuppliersA from './Components/Available/SuppliersA.js';
import WasteA from './Components/Available/WasteA';
import Wallet from './Components/Wallet/Wallet.js';
import JobsR from './Components/Requested/JobsR.js';
import MaterialR from './Components/Requested/JobsR.js';
import PartnersR from './Components/Requested/JobsR.js';
import ProductsR from './Components/Requested/JobsR.js';
import SupplierR from './Components/Requested/JobsR.js';
import WasteR from './Components/Requested/JobsR.js';
import Map from './Components/Map/Map.js';
import Roadmap from './Components/Roadmap/Roadmap.js';
import MyVillage from './Components/MyVillage/MyVillage.js'
//Routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  
  return (
    
    <Router>
        <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/MyVillage" exact element={ <MyVillage/> }/>
          <Route path="/VillageMap" exact element={ <Map/> }/>
          <Route path="/RoadMap" exact element={ <Roadmap/> }/>
          <Route path="/AvailableJobs" exact element={ <JobsA/> }/>
          <Route path="/Wallet" exact element={ <Wallet/> }/>
          <Route path="/AvailableMaterials" exact element={<MaterialsA/>}/>
          <Route path="/AvailablePartners" exact element={<PartnersA/>}/>
          <Route path="/AvailableProducts" exact element={<ProductsA/>}/>
          <Route path="/AvailableSuppliers" exact element={<SuppliersA/>}/>
          <Route path="/AvailableWaste" exact element={<WasteA/>}/>
          <Route path="/RequestedJobs" exact element={ <JobsR/> }/>
          <Route path="/RequestedMaterials" exact element={ <MaterialR/> }/>
          <Route path="/RequestedPartners" exact element={ <PartnersR/> }/>
          <Route path="/RequestedProducts" exact element={ <ProductsR/> }/>
          <Route path="/RequestedSuppliers" exact element={ <SupplierR/> }/>
          <Route path="/RequestedWaste" exact element={ <WasteR/> }/>
        </Routes> 
        </div>
    </Router>
    
  );
}

export default App;
