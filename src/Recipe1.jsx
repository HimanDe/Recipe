import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Recipe1() {
    const [recipes, setrecipes] = useState([]);
    console.log(recipes)
    const getAllRecipe = async () => {
        let res = await fetch('https://api.edamam.com/search?q=biryani&app_id=f852ca8c&app_key=437e0084a83c2598fc23949202983163')
        let data = await res.json()
        // console.log(data)
        setrecipes(data.hits)
    }
    useEffect(() => {
        getAllRecipe()
    }, [])

    // const recipeDetail = (id)=>{
    //     console.log(id)

    // }

    return (
        <div className='recipePage ro'>
            {
                recipes.map((e) => {
                    return <div className="card" style={{ width: '18rem' }}>
                        <img src={e.recipe.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{e.recipe.label}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/view" state={e} className="btn btn-primary">Go somewhere</Link>
                                {/* <button>click me</button> */}
                            </div>
                        </div>

               
                })
            }
        </div>
    )
}

export default Recipe1