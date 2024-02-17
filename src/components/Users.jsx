import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../graphql/queries';



function Users() {
  const {loading, data, error} = useQuery(GET_USERS);
  console.log({data});
  if(loading) return <h3>loading</h3>

  if (error) return <h3>Error</h3>
  return (
    <>
    <div>{data.users.data.map(i => <p key={i.id}> {i.name}</p>)}</div>
    </>
  )
}

export default Users