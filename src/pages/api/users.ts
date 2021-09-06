import {NextApiResponse, NextApiRequest} from "next"


// eslint-disable-next-line import/no-anonymous-default-export
export default (request:NextApiRequest, response:NextApiResponse)=>{
    const users=[
        {id:1, name: 'Levy'},
        {id:2, name: 'Chacon'},
        {id:3, name: 'Almeida'}
    ]

    return response.json(users)
}