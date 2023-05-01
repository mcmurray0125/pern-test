import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"
import RestaurantFinder from '../apis/RestaurantFinder';

function UpdateRestaurant(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`)
            console.log(response.data.data);
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setPriceRange(response.data.data.restaurant.price_range)
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        })
        navigate('/');
    }

  return (
    <>
    <Form>
        <Form.Group>
            <Form.Label htmlFor='name'>Name</Form.Label>
            <Form.Control value={name} onChange={e => setName(e.target.value)} id='name' type='text'/>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor='location'>Location</Form.Label>
            <Form.Control value={location} onChange={e => setLocation(e.target.value)} id='location' type='text'/>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor='price-range'>Price Range</Form.Label>
            <Form.Control value={priceRange} onChange={e => setPriceRange(e.target.value)} id='price-range' type='number'/>
        </Form.Group>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
    </Form>
    </>
  )
}

export default UpdateRestaurant