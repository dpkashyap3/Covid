import React,{useState} from 'react'


function OfficialTable({region}) {
    
const [input, setinput] = useState("")


    return (    
<div className="row mt-5 table-responsive">
     <h2 className="banner-heading h1 ml-5">India Official Information Statewise</h2>
    <hr/>

     <form className="form-inline ml-5">
        <div className="form-group mx-sm-3 mb-2">
        <input type="text" className="form-control-lg" placeholder="Search...." onChange={(e)=>setinput(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg mb-2">Search</button>
    </form>

    <hr/>

    <table class="table table-hover table-secondary m-3" style={{fontSize:"13px"}}>
    <thead>
    <tr>
      <th scope="col">State</th>
      <th scope="col">Indian</th>
      <th scope="col">Foreign</th>
      <th scope="col">Total</th>
      <th scope="col">Recover</th>
      <th scope="col">Death</th>
    </tr>
  </thead>
  <tbody>
    {
        region.map(item=>{
            return(
    <tr key={item.loc}>
        <td><b><i>{item.loc}</i></b></td>
         <td><b>{item.confirmedCasesIndian}</b></td>
         <td><b>{item.confirmedCasesForeign}</b></td>
         <td><b>{item.confirmedCasesIndian+item.confirmedCasesForeign}</b></td>
         <td><b>{item.discharged}</b></td>
         <td><b>{item.deaths}</b></td>
    </tr>
        )})
   
    }
    
    
  </tbody>
</table>
</div> 
        
    )
}

export default OfficialTable
