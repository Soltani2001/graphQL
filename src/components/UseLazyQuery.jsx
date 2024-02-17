import React, { useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { GET_USER } from '../graphql/queries'

function UseOnclick() {
    const [id, setId] = useState(2)

    const clickHandeler = e =>{
        setId(e.target.value)
    }
    
    const [getUser, {loading, data, error, called}] = useLazyQuery(GET_USER, {
        variables: {id : id}
    });

    console.log({called});


  return (
    <div>
        <input type="text" value={id} onChange={clickHandeler} />
        <button onClick={()=>getUser()}>get the user</button>
        {loading && <h1>Loading...</h1>}
        {data && (
            <>
            <h1>{data.user.name}</h1>
            <h2>{data.user.phone}</h2>
            </>)
        }
    </div>
  )
}

export default UseOnclick