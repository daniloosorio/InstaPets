import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = withPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>

  )
}




/*
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import {withPhotos} from '../../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(withPhotos,{ variables: { categoryId } })  // destructuras la data y el estado de loading y error 
  if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}*/