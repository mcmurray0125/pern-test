import React, { useContext, useState } from 'react'
import { Form, Button } from "react-bootstrap"
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

function AddRestaurant() {
    const { addRestaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post("/", {
                name,
                location,
                price_range: priceRange
            })
            addRestaurants(response.data.data.restaurant);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='mb-4'>
       <Form className='d-flex align-items-center justify-content-center gap-2'>
            <Form.Group >
                <Form.Control placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Control placeholder="location" value={location} onChange={e => setLocation(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                    <option disabled>Price Range</option>
                    <option value={1}>$</option>
                    <option value={2}>$$</option>
                    <option value={3}>$$$</option>
                    <option value={4}>$$$$</option>
                    <option value={5}>$$$$$</option>
                </Form.Select>
            </Form.Group>
            <Button onClick={handleSubmit} type="submit">Add</Button>
        </Form> 
    </div>
  )
}

export default AddRestaurant