import React from 'react'
import { Card } from "react-bootstrap"
import StarRating from './StarRating'

const Reviews = ({reviews}) => {
  return (
    <div className='row row-cols-3 mb-2'>
        {reviews.map((review) => {
            return(
            <Card className='mb-3 me-4 bg-primary text-white' style={{maxWidth: "30%"}} key={review.id}>
                <Card.Header className='d-flex justify-content-between'>
                    <span>{review.name}</span>
                    <span><StarRating rating={review.rating}/></span>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{review.review}</Card.Text>
                </Card.Body>
            </Card> 
            )
        })}
        {/* <Card className='mb-3 me-4 bg-primary text-white' style={{maxWidth: "30%"}}>
            <Card.Header className='d-flex justify-content-between'>
                <span>Joanne</span>
                <span><StarRating rating={3}/></span>
            </Card.Header>
            <Card.Body>
                <Card.Text>This Restaurant was awesome!</Card.Text>
            </Card.Body>
        </Card> 
        <Card className='mb-3 me-4 bg-primary text-white' style={{maxWidth: "30%"}}>
            <Card.Header className='d-flex justify-content-between'>
                <span>Joanne</span>
                <span><StarRating rating={3}/></span>
            </Card.Header>
            <Card.Body>
                <Card.Text>This Restaurant was awesome!</Card.Text>
            </Card.Body>
        </Card> 
        <Card className='mb-3 me-4 bg-primary text-white' style={{maxWidth: "30%"}}>
            <Card.Header className='d-flex justify-content-between'>
                <span>Joanne</span>
                <span><StarRating rating={3}/></span>
            </Card.Header>
            <Card.Body>
                <Card.Text>This Restaurant was awesome!</Card.Text>
            </Card.Body>
        </Card> 
        <Card className='mb-3 me-4 bg-primary text-white' style={{maxWidth: "30%"}}>
            <Card.Header className='d-flex justify-content-between'>
                <span>Joanne</span>
                <span><StarRating rating={3}/></span>
            </Card.Header>
            <Card.Body>
                <Card.Text>This Restaurant was awesome!</Card.Text>
            </Card.Body>
        </Card>  */}
    </div>
  )
}

export default Reviews