import { gql } from "@apollo/client"

const GET_USER = gql`
    query getUser($id: ID!) {
        user(id: $id){
            id,
            name,
            phone,
        }
    }
`

const GET_USERS = gql `
query {
    users{
      data{
        name,
        email,
        id
      }
    }
  }
`

export { GET_USER, GET_USERS};