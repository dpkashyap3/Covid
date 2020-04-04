import React,{useState} from 'react'
import View from "./SearchView"

function SearchOfficial({region}) {

const [input, setinput] = useState("")
let [data,setdata]=useState({})
  const [ismodal, setismodal] = useState(false)

    const search=(e)=>{
    e.preventDefault();
    setdata(region.filter(item=>item.loc.toLowerCase()===input.toLowerCase()))
    setismodal(true)
    }

    return (
        <div>
        <form className="form-inline ml-5">
        <div className="form-group mx-sm-3 mb-2">
        <input type="text" className="form-control-lg" placeholder="Search...." onChange={(e)=>setinput(e.target.value)}/>
        </div>
        <button type="submit" onClick={search} className="btn btn-primary btn-lg mb-2">Search</button>
        </form>
        <hr/>
        <View data={data} ismodal={ismodal} setismodal={setismodal}/>
        </div>
    )
}

export default SearchOfficial
