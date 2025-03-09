import React from 'react'


const ProductsData = [
    {
        id: 1,
        // img: Img1,
        title: "Coca Cola",
        description: "lorem ipsum"
    },
    {
        id: 2,
        // img: Img2,
        title: "Fanta",
        description: "lorem ipsum "
    },
    {
        id: 3,
        // img: Img3,
        title: "SprarklingWater",
        description: "lorem ipsum"
    }
]
const HighlightedProductList = () => {
  return (
    <div className='ml-4 '>
        <div className='container'>
            {/* Header */}
            <div className='text-center mb-10 '>
                <p data-aos="fade-up" className='text-5xl mb-3'> Are you thirsty?</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Drinks</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, impedit at! Quas ratione, iure molestias nesciunt enim minima quam iusto ipsum facilis, corrupti rerum praesentium vel. Autem nesciunt fugiat in?</p>
             </div>
            {/* Body */}
            
            <div className=' flex flex-wrap justify-center gap-10 place-content-center'>
                {
                    ProductsData.map( (data)=> (
                        <div
                        className='rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group flex items-center justify-center p-4 w-[280px] h-[280px]'
                        >
                            <div>
                                <img src= {data.img} alt="" className="max-w-[250px] max-h-[250px] object-contain  transform  group-hover:scale-105 duration-300 drop-shadow-md"></img>
                            </div>
                               
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default HighlightedProductList