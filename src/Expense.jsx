import React, { useRef, useState } from 'react'

const Expense = () => {
const snoRef = useRef()
const placeRef = useRef()
const priceRef = useRef()

const [arr, setarr] = useState([
        {id:1,
        place: "lucknow",
        price: 300
        },
        {id:2,
        place: "Prayagraj",
        price: 800
        },
        {id:3,
        place: "Varansi",
        price: 1000
        },
        {id:4,
        place: "Bhadohi",
        price: 1200
        },
        {id:5,
        place: "Kanpur",
        price: 1300
        }
])
  const HandelClick = (e)=>{
    e.preventDefault()
    let obj = {
      id:snoRef.current.value,
      place:placeRef.current.value,
      price:priceRef.current.value 
    }
    if(obj.id && obj.place && obj.price){

      setarr([...arr, obj])
    }
    else{
      alert('Fill all fields')
    }
    
  }
  return (
    <div>
        <h4 className='text-center'>Expense Tracker App</h4>

        <form action="" className='bg-dark my-3 p-3 d-flex gap-2 m-auto ' style={{width:"max-content"}}>
          <input type="number" placeholder='S.no' ref={snoRef}/>
          <input type='text'  placeholder='Enter the place' ref={placeRef}/>
          <input type='number'  placeholder='Enter the price' ref={priceRef}/>
          <button className='btn btn-success' onClick={HandelClick}>Add Item</button>
          
        </form>

        
<table className="table table-dark w-75 m-auto text-center" >
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {arr.map((obj)=>{
        return <tr key={obj.id}>
        <th scope="row">{obj.id}</th>
        <td>{obj.place}</td>
        <td>{obj.price}</td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
      
    })}
  </tbody>
</table>

    </div>
  )
}

export default Expense
