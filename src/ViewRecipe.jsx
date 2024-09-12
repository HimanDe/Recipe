import React from 'react'
import { useLocation } from 'react-router-dom'
import Recipe1 from './Recipe1'

const ViewRecipe = () => {
    const location = useLocation()
    console.log(location)

    return (
        <div>
            {
                <img src={location.state.recipe.image} alt="" />
            }
        </div>
  )
}

export default ViewRecipe
