import React from "react";
import { Mutation } from '@apollo/client/react/components'
import { gql } from '@apollo/client'


const LIKE_PHOTO =  gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id
    liked
    likes
  }
}
`

export const ToggleLikeMutation = ({children}) => {
    return <Mutation mutation={LIKE_PHOTO}>
        {children}
    </Mutation>
}