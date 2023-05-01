import React, { useState } from 'react'
import { Form, Button, Row } from "react-bootstrap"
import RestaurantFinder from '../apis/RestaurantFinder'
import { useParams } from 'react-router-dom'

const AddReview = () => {
    const { id } = useParams();
    console.log(location);
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        try {
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating,
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='mb-2'>
            <Form action=''>
                <Row>
                    <Form.Group className='col-8'>
                        <Form.Label htmlFor='name'>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id='name' placeholder='name'
                            type='text'>   
                        </Form.Control>
                    </Form.Group> 
                    <Form.Group className='col-4'>
                        <Form.Label htmlFor='rating'>Rating</Form.Label>
                        <Form.Select id='rating' value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option disabled>Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Form.Select>
                    </Form.Group> 
                </Row>
                <Form.Group className='mt-3'>
                    <Form.Label htmlFor='review'>Review</Form.Label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        id='review'
                        className='form-control'></textarea>
                </Form.Group>
                <Button type='submit' onClick={handleSubmitReview} className='mt-3'>Submit</Button>
            </Form>
    </div>
  )
}

export default AddReview