import React,{useState,useEffect} from 'react'
import axios from "axios"

function ICMR() {
     
     const [data, setdata] = useState([])

    useEffect(()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/testing/raw")
        .then(response=>{
            setdata(response.data.data);
        })
    })

    return (
    <div className="container table-responsive">
    
    <p className="display-3 text-white">ICMR Testing Data<p className="h1">(March Data)</p></p>
    <table className="table table-secondary table-hover" style={{fontSize:"13px"}}>
    <thead>
    <tr>
      <th scope="col">Time & Date</th>
      <th scope="col">Total Sample</th>
      <th scope="col">Total Individual</th>
      <th scope="col">Positive</th>
    </tr>
    </thead>
    <tbody>
    {data.map(item=>{
        return(
    <tr>
      <td><b><i>{item.timestamp}</i></b></td>
      <td><i>{item.totalSamplesTested}</i></td>
      <td><i>{item.totalIndividualsTested}</i></td>
      <td><i>{item.totalPositiveCases}</i></td>
    </tr>
    )
    })
    }
    </tbody>
    </table>
    
    </div>
      )
}

export default ICMR
