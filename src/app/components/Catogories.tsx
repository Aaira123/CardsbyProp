
import React from 'react'
import Cards from './Cards'

const Catogories = () => {
    const carDetail=[
        {
            image:"/pic3.jpg",
            car_name:"Honda",
            car_Price:560,
            car_reviews:5

        },
        {
            image:"/pic2.jpeg",
            car_name:"Cover",
            car_Price:560,
            car_reviews:5

        }, {
            image:"/pic1.jpg",
            car_name:"corolla",
            car_Price:560,
            car_reviews:5

        },{
            image:"/pic3.jpg",
            car_name:"corolla",
            car_Price:560,
            car_reviews:5

        },{ image:"/pic2.jpeg",
            car_name:"corolla",
            car_Price:560,
            car_reviews:5

        },{
            image:"/pic1.jpg",
            car_name:"corolla",
            car_Price:560,
            car_reviews:5

        },{
            image:"/pic3.jpg",
            car_name:"corolla",
            car_Price:560,
            car_reviews:5

        },{
            image:"/pic2.jpeg",
            car_name:"corolla",
            car_Price:560,
            car_reviews:5

        }
    ]
  return (
    <div className='grid grid-cols-4 ml-4 mr-4 gap-5'>
        {
            carDetail.map((vehicle)=>{
                return(
                    <Cards image={vehicle.image}
                    name={vehicle.car_name}
                    price={vehicle.car_Price}
                    reviews={vehicle.car_reviews} />

                )
            })
        }
      
    </div>
  )
}

export default Catogories
