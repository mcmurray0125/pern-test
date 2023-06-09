import React, { useContext, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export default function RestaurantList() {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                console.log(response.data.data)
                setRestaurants(response.data.data.restaurants);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    },[])

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/restaurants/${id}/update`)
    }

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            setRestaurants(restaurants.filter((restaurant) => {
                return restaurant.id !== id;
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const handleRestaurantSelect = (id) => {
        navigate(`/restaurants/${id}`);
    }

    const renderRating = (restaurant) => {

        if (!restaurant.count) {
            return <span className='text-warning'>0 reviews</span>
        }
        return (
            <>
                <StarRating rating={restaurant.average_rating}/>
                <span className='text-warning ml-1'> ({restaurant.count})</span>
            </>
        )
    }


  return (
    <div>
        <Table bordered hover variant="dark">
            <thead >
                <tr >
                    <th>Restaurant</th>
                    <th>Location</th>
                    <th>Price Range</th>
                    <th>Ratings</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map((restaurant) => {
                    return(
                        <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>{renderRating(restaurant)}</td>
                            <td><Button onClick={(e) => handleUpdate(e, restaurant.id)} variant='warning'>Update</Button></td>
                            <td><Button onClick={(e) => handleDelete(e,restaurant.id)} variant='danger'>Delete</Button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}