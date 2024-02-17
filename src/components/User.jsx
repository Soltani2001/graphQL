import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'



function User() {
    const [id, setId] = useState("")
    // console.log(id);
    const clickHandeler = e =>{
        setId(e.target.value)
    }
    
    const {loading, data, error} = useQuery(GET_USER, {
        variables: {id : id}
    });

    console.log(data);


  return (
    <div>
        <input type="text" value={id} onChange={clickHandeler} />
        {
            data && <>
               <h1>{data.user.name}</h1> 
                <h2>{data.user.phone}</h2>
            
            </>
        }
    </div>
  )
}

export default User