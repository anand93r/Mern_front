import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  var [mlist,setmlist]=useState([])
  useEffect(()=>{
    // axios.get('./movi.json')
    axios.get("http://localhost:3002/")
    .then((response)=>{
      setmlist(
        mlist=response.data
        
      )
      console.log(mlist)

    })

  },[])

  const DeleteM=(id)=>{
    const data = {_id:id}
    axios.post("http://localhost:3002/delete",data)
    .then((response)=>{
      console.log("Deleted")
      // alert("Deleted")
    })
  }

  
  return (
    <div>
      <Table style={{ width: 1500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Actor</TableCell>
            <TableCell>Actress</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Camera</TableCell>
            <TableCell>Release Year</TableCell>
            <TableCell>Language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            mlist.map((value,index)=>{
              return <TableRow key={index}>
                <TableCell>{value.movie}</TableCell>
            <TableCell>{value.director}</TableCell>
            <TableCell>{value.actor}</TableCell>
            <TableCell>{value.actress}</TableCell>
            <TableCell>{value.producer}</TableCell>
            <TableCell>{value.camera}</TableCell>
            <TableCell>{value.year}</TableCell>
            <TableCell>{value.language}</TableCell>
            <TableCell><Button>Edit</Button></TableCell>
            <TableCell><Button onClick={()=>{DeleteM(value._id)}}>Delete</Button></TableCell>


              </TableRow>
              

            })
          }
          

        </TableBody>
        
      </Table>

      
      
    </div>
  )
}

export default Home
