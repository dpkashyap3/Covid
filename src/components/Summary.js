import React,{useState,useEffect} from 'react'
import axios from "axios"
import Total from "./images/total.png"
import Recover from "./images/recover.png"
import Dead from "./images/rip.png"
import Serious from "./images/serious.png"
import New from "./images/new.png"
import Treatment from "./images/treatment.png"
import Viewer from "./Viewer"

function Summary() {

const [data, setdata] = useState([])

useEffect(()=>{
  axios.get("https://thevirustracker.com/free-api?global=stats")
  .then(response=>{
    setdata(response.data.results[0])
    
  })
},[])

return (
<div className="container">
<h1 className="banner-heading display-4">World Informations</h1>
<div className="row">
<Viewer title={"Total Case"} image={Total} count={data.total_cases}/>
<Viewer title={"Recovered"} image={Recover} count={data.total_recovered}/>
<Viewer title={"Total Death"} image={Dead} count={data.total_deaths}/>
<Viewer title={"New Cases"} image={New} count={data.total_new_cases_today}/>
<Viewer title={"New Deaths"} image={Dead} count={data.total_new_deaths_today}/>
<Viewer title={"Serious Case"} image={Serious} count={data.total_serious_cases}/>
<Viewer title={"Treatments"} image={Treatment} count={data.total_unresolved}/>
</div>
</div>

    )
}

export default Summary
