
import React from 'react'
import './Home.css'
import logo from './logo.svg'

function Home() {
  return (
    <div className="home">
        <div className="Logo">
            <img src={ logo } alt='Logo' className="imgS"/>
        </div>
        <div className="container">
                <div className="LeftColumn">
                    <div className="btnGroup">
                        <a href="/AvailableWaste"><button type="button" className="MevillButtons setwidth">Available Waste</button></a><br></br>
                        <a href="/AvailableMaterials"><button type="button" className="MevillButtons setwidth">Available Materials</button></a><br></br>
                        <a href="/AvailableProducts"><button type="button" className="MevillButtons setwidth">Available Products</button></a><br></br>
                        <a href="/AvailableJobs"><button type="button" className="MevillButtons setwidth">Available Jobs</button></a><br></br>
                        <a href="/AvailableSuppliers"><button type="button" className="MevillButtons setwidth">Available Suppliers</button></a><br></br>
                        <a href="/AvailablePartners"><button type="button" className="MevillButtons setwidth">Available Partners</button></a><br></br>
                    </div>
                </div>

                <div className="CenterColumn">
                    <div className="MyVillage">
                        <h3><a href="/MyVillage" className="CenterVillageBTNs"><button type="button" className="MevillButtons">My Village</button></a><a href="/VillageMap" className="CenterVillageBTNs"><button type="button" className="MevillButtons">Village Map</button></a></h3>
                        <div className="AdvertisingSpace">
                            <h2>Adverts Go Here</h2>
                            
                        </div>
                    </div>
                </div>

                <div className="RightColumn">
                    <div className="btnGroup">
                    <a href="/RequestedWaste"><button type="button" className="MevillButtons setwidth">Requested Waste</button></a><br></br>
                    <a href="/RequestedMaterials"><button type="button" className="MevillButtons setwidth">Requested Materials</button></a><br></br>
                    <a href="/RequestedProducts"><button type="button" className="MevillButtons setwidth">Requested Products</button></a><br></br>
                    <a href="/RequestedJobs"><button type="button" className="MevillButtons setwidth">Requested Jobs</button></a><br></br>
                    <a href="/RequestedSuppliers"><button type="button" className="MevillButtons setwidth">Requested Suppliers</button></a><br></br>
                    <a href="/RequestedPartners"><button type="button" className="MevillButtons setwidth">Requested Partners</button></a><br></br>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Home;