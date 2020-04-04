import React,{useState,useEffect} from 'react'
import {Bar, Pie} from "react-chartjs-2"
import axios from "axios"

function SummaryChart() {

    const [database, setdatabase] = useState([])
    const [Gbar, setGbar] = useState([])
    const [age, setage] = useState()
    const [type, settype] = useState()

    useEffect(() => {
      axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org")
      .then(response=>{
          setdatabase(response.data.data.rawPatientData)
           
      })
    }, [])


    const setGbardata=()=>{
        setGbar(
        {labels:["Male","Female"],
        datasets:[{label:"Total Cases",
        data:[database.filter(item=>item.gender=="male").length,database.filter(item=>item.gender=="female").length],
        backgroundColor:["blue","pink"]
        }]
        })}

    const setAgebardata=()=>{
        setage(
        {labels:["Below 30","Below 40","Below 60","Below 80"],
        datasets:[{label:"Total Cases",
        data:[database.filter(item=>item.ageEstimate>=30).length,database.filter(item=>item.ageEstimate>=40).length,database.filter(item=>item.ageEstimate>=60).length,database.filter(item=>item.ageEstimate>=80).length],
        backgroundColor:["blue","pink","black","crimson","teal"]
        }]
        })}
    

useEffect(() => {
    setGbardata();
    setAgebardata();
    
    },[database]
)
    


    


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 card">   
                <h3>Gender Wise</h3> 
                <Bar
                data={Gbar}
                options={{}}
                 />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 card">
                   <h3>Age Wise</h3> 
                <Bar
                data={age}
                options={{}}
                 />
                </div>
                
            </div>
        </div>
    )
}

export default SummaryChart
