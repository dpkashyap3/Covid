import React,{useState,useEffect} from 'react'
import {Pie,Bar} from "react-chartjs-2"


function IndiaPie({chart}) {

const [pie, setpie] = useState([])
const [bar, setbar] = useState([])


const setchartdata=()=>{
setpie(
{labels:["Hospitalize","Recovered","Death"],
datasets:[{label:"Total Cases",
data:[chart.total_active_cases,chart.total_recovered,chart.total_deaths],
backgroundColor:["aqua","teal","tomato"]
}]
})}


const setbardata=()=>{
setbar(
{labels:["Total Cases","Hospitalize","Recovered","Death","Serious Cases"],
datasets:[{label:"Total Cases",
data:[chart.total_cases,chart.total_active_cases,chart.total_recovered,chart.total_deaths,chart.total_serious_cases],
backgroundColor:["crimson","aqua","teal","tomato","red"]
}]
})}

useEffect(() => {
    setchartdata();
    setbardata();
    },[chart]
)

    return (
        <div className="bg-white card text-center">
        <h1 className="display-3">Chart Representation</h1>
        <hr/>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h2>Total Cases</h2>
            <br/>
            <Pie
                data={pie}
                options={{}}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h2>Total Cases with Serious Cases</h2>
            <br/>
            <Bar
                data={bar}
                options={{}}
            />
            <br/>
          </div>
          
        </div>
        </div>
    )
}

export default IndiaPie
