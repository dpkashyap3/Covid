import React from 'react'

function FetchViewer({data}) {
    return (
        <div className="container">
            <div className="table-responsive">
    <table class="table table-hover table-secondary m-3" style={{fontSize:"13px"}}>
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Report Date</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Status</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>

  <tbody>
    {
        data.map(item=>{
            return(
        <tr key={item.patientId}>
        <td><b><i>{item.patientId}</i></b></td>
        <td><b>{item.reportedOn}</b></td>
         <td><b>{item.ageEstimate}</b></td>
         <td><b>{item.gender}</b></td>
         <td><b>{item.city}</b></td>
         <td><b>{item.state}</b></td>
         <td><b>{item.status}</b></td>
         <td><b>{item.notes}</b></td>
         
    </tr>
        )})
   
    }
    
    
  </tbody>
</table>

</div>
        </div>
    )
}

export default FetchViewer
