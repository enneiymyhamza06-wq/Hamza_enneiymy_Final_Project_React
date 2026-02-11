import React from 'react'
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <Carousel className="rounded-xl">
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="d-block w-100 h-full object-cover"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="d-block w-100 h-full object-cover"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="d-block w-100 h-full object-cover"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home