import React,{useState} from 'react'
import StudentsData from "./StudentsApi";
import "./style.css";
const Tableinfo=() =>{
    const [stuData,setStuData]= useState(StudentsData);
    const [filterData,setFilterData]=useState("");
    return (
        <>
        <table className="table table-striped mt-5 container">
  <thead>
    <tr className="bg-dark text-white">
      <th scope="col">ID <br />
      <input type="text" onChange={(e)=>setFilterData(e.target.value)} /></th>
      <th scope="col">Name<br />
      <input type="text" onChange={(e)=>setFilterData(e.target.value)} /> </th>
      <th scope="col">Class<br />
      <input type="text" onChange={(e)=>setFilterData(e.target.value)} /></th>
      <th scope="col">Gender<br />
      <input type="text" onChange={(e)=>setFilterData(e.target.value)} /></th>
      <th scope="col">Total Marks(%)<br />
      <input type="text" onChange={(e)=>setFilterData(e.target.value)} /></th>
    </tr>
  </thead>
  <tbody>
      {

      stuData.filter((currVal)=>{
        if(filterData===""){
          return currVal;
        } else if(
          currVal.id.toLowerCase().includes(filterData.toLowerCase())
        ) 
        {
          return currVal;
        }
        else if(
          currVal.name.toLowerCase().includes(filterData.toLowerCase())
        ) 
        {
          return currVal;
        }
        else if(
          currVal.class.toLowerCase().includes(filterData.toLowerCase())
        ) 
        {
          return currVal;
        }
        else if(
          currVal.gender.toLowerCase().includes(filterData.toLowerCase())
        ) 
        {
          return currVal;
        }
        else if(
          currVal.marks.toLowerCase().includes(filterData.toLowerCase())
        ) 
        {
          return currVal;
        }
      })
      .map((currEle)=>{
       return <tr key={currEle.id}>
       <th scope="row">{currEle.id}</th>
       <td>{currEle.name}</td>
       <td>{currEle.class}</td>
       <td>{currEle.gender}</td>
       <td>{currEle.marks}</td>
     </tr>
      })
      }
   
  </tbody>
</table>
   
        </>
    )
}

export default Tableinfo;
