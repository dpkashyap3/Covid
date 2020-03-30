import React,{useState,useEffect} from 'react'
import axios from "axios"
import FetchViewer from "./FetchViewer"

function Fetch() {
    const [database, setdatabase] = useState([])
    const [data, setdata] = useState([])
    const [death] = useState([])
    const [progress] = useState([])
    const [recover] = useState([])
    

    useEffect(() => {
      axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org")
      .then(response=>{
          setdatabase(response.data.data.rawPatientData)
      })
    }, [])

    const deathData=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.status==="Deceased"))
    console.log(death)
    }

    const progressData=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.status==="Hospitalized"))
    console.log(progress)
    }
    
    const recoverData=(e)=>{
    e.preventDefault();
    setdata(database.filter(item=>item.status==="Recovered"))
    console.log(recover)
    }

    return (
    <div className="container">
    <br/><hr/>
        <div className="row">
            <h1 className="display-2 ml-5 text-white">Patient Summary</h1>
        </div><br/><hr/>

    <div className="row">
    <button className="btn btn-lg btn-danger ml-5" onClick={deathData}>Death</button>
    <button className="btn btn-lg btn-success ml-5" onClick={recoverData}>Recover</button>
    <button className="btn btn-lg btn-warning ml-5" onClick={progressData}>Hospitialize</button>
  </div>
    <div className="row">
    <FetchViewer data={data}/>
    </div>

    
    

        </div>
    )
}

export default Fetch
