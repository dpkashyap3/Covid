import React from 'react'
import Total from "./images/total.png"
import Recover from "./images/recover.png"
import Dead from "./images/rip.png"
import Native from "./images/nativecase.png"
import Forign from "./images/foreign.png"
import Treatment from "./images/treatment.png"
import Viewer from "./Viewer"
import Modal from "react-modal"

function SearchView({data,ismodal,setismodal}) {

    return (
         <Modal isOpen={ismodal} ariaHideApp ={false}>
         <div className="row ml-5">
        {   
        data[0]?
        <div className="container">
        <div className="row">
        <h1 className="display-1">{data[0].loc.toUpperCase()}</h1>
        <div className="row mb-5">
        <Viewer title={"Total Case"} image={Total} count={data[0].confirmedCasesIndian+data[0].confirmedCasesForeign}/>
        <Viewer title={"Recovered"} image={Recover} count={data[0].discharged}/>
        <Viewer title={"Total Death"} image={Dead} count={data[0].deaths}/>
        <Viewer title={"Indian Cases"} image={Native} count={data[0].confirmedCasesIndian}/>
        <Viewer title={"Foreign Cases"} image={Forign} count={data[0].confirmedCasesForeign}/>
        <Viewer title={"Treatments"} image={Treatment} count={data[0].confirmedCasesIndian+data[0].confirmedCasesForeign-data[0].discharged}/>
        </div>
        </div>
        </div>
        
        
        :<h1 className="display-2">Error:Please Check The Input State</h1>
        
        }
        </div>
        <button onClick = {() => setismodal(false) } className = "btn btn-lg btn-danger btn-block"><b> <h1> Close </h1></b></button>
        </Modal>
    )
}

export default SearchView
