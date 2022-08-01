import { request, gql } from 'graphql-request';


const GRAPHQL_API = process.env.NEXT_GRAPHQL_ENDPOINT

export const getBlogs = async () => {

    const query = gql`
    query MyQuery {
        bLogs {
          id
          title
          image {
            url
          }
          postslog
        }
      }
      

    `

    const result = await request(GRAPHQL_API, query)

    return result

}

export const getBlog = async (postslug) => {

    const query = gql`
    query MyQuery {
        bLogs(where: {postslog: ${postslug}}) {
          id
          title
          image {
            url
          }
          postslog
        }
      }
      

    `

    const result = await request(GRAPHQL_API, query)

    return result

}