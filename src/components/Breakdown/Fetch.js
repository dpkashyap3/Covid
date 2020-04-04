import React,{useState,useEffect} from 'react'
import axios from "axios"
import FetchViewer from "./FetchViewer"
import WorldChart from "../../Chart/SummaryChart"
import SummaryChart from "../../Chart/SummaryChart"

function Fetch() {
    const [database, setdatabase] = useState([])
    const [data, setdata] = useState([])
    const [date, setdate] = useState()
    const [city, setcity] = useState()

    useEffect(() => {
      axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org")
      .then(response=>{
          setdatabase(response.data.data.rawPatientData)
      })
    }, [])

    const deathData=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.status==="Deceased"))
    
    }

    const progressData=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.status==="Hospitalized"))
    
    }
    
    const recoverData=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.status==="Recovered"))
    
    }


    const dateWise=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.reportedOn===date))
    }

    const cityWise=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.state.toLowerCase()===city.toLowerCase()))
    
    
    }

    return (
    <div className="container">
    <br/><hr/>
        <div className="row">
            <h1 className="display-2 ml-5 text-white">Patient Summary</h1>
        </div>
        <SummaryChart />
        <br/><hr/>
    <div className="row">

    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="btn-group btn-group-lg ml-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-danger" onClick={deathData}>Death</button>
            <button type="button" class="btn btn-success" onClick={recoverData}>Recovered</button>
            <button type="button" class="btn btn-warning" onClick={progressData}>Hospitalized</button>
        </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <form class="form-inline">
        <div class="form-group ">
            <input type="text" className="form-control form-control-lg mr-2" placeholder="Enter Date (DD/MM/YYYY)" value={date} onChange={(e)=>setdate(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-warning" onClick={dateWise}>Go..</button>
    </form>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
     <form class="form-inline">
        <div class="form-group">
            <input type="text" className="form-control form-control-lg mr-2" placeholder="Enter State Name" onChange={(e)=>setcity(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-warning" onClick={cityWise}>Go..</button>
     </form>
    </div>

    
  </div>





    <div className="row">
    <FetchViewer data={data}/>
    </div>  

        </div>
    )
}

export default Fetch
