import React,{useState,useEffect} from 'react'
import axios from "axios"
import Total from "./images/total.png"
import Recover from "./images/recover.png"
import Dead from "./images/rip.png"
import Native from "./images/nativecase.png"
import Forign from "./images/foreign.png"
import Treatment from "./images/treatment.png"
import Viewer from "./Viewer"
import Table from "./OfficialTable"

function Summary() {

const [data, setdata] = useState([])
const [region, setregion] = useState([])

useEffect(()=>{
  axios.get("https://api.rootnet.in/covid19-in/stats/latest")
  .then(response=>{
    setdata(response.data.data.summary)
    setregion(response.data.data.regional)
  })
},[])

return (
<div className="container">
<br/>
<h1 className="banner-heading display-4">India Official Information</h1>
<hr/>
<div className="row">



<Viewer title={"Total Case"} image={Total} count={data.total}/>
<Viewer title={"Recovered"} image={Recover} count={data.discharged}/>
<Viewer title={"Total Death"} image={Dead} count={data.deaths}/>
<Viewer title={"Indian Cases"} image={Native} count={data.confirmedCasesIndian}/>
<Viewer title={"Foreign Cases"} image={Forign} count={data.confirmedCasesForeign}/>
<Viewer title={"Treatments"} image={Treatment} count={data.total-data.discharged}/>
<Table region={region}/>




</div>
</div>

    )
}

export default Summary
