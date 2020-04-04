import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Pie} from "react-chartjs-2"

function ICMR() {
     
     const [bar, setbar] = useState([])
     const [data, setdata] = useState([])
     const [figure, setfigure] = useState({})

    useEffect(()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/testing/raw")
        .then(response=>{
            setdata(response.data.data);
            
        })
    },[])




  const setbardata=()=>{
    setbar(
    {labels:["Total Individual","Positive Cases"],
    datasets:[{label:"Total Cases",
    data:[figure.totalIndividualsTested,figure.totalPositiveCases],
    backgroundColor:["teal","tomato"]
    }]
    })}

    useEffect(() => {
      setbardata()
    }, [figure])


    const setupdata=()=>{
      let length=Math.max(data.length)
      let figured=data[length-1]
      setfigure(figured)
      
    }


   

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
    {data.map((item,i)=>{
        return(
    <tr key={i}>
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

    <hr/>
    <button className="btn btn-lg btn-warning" onClick={setupdata}>Show Graph</button>
    <hr/>
    <div className="bg-white container card">
        <h2>Total ICMR Testing</h2>
            <br/>
            <Pie
                data={bar}
                options={{}}
            />
            <br/>
          </div>
    </div>
      )
}

export default ICMR
