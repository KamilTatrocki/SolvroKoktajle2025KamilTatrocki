import React, { useState } from 'react';
import CocktailElement from './CocktailElement';

const Products = ({ Coctaildata, headText, favFun, defaultIsFav }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className='mt-14 mb-12 '>
      <div>
        {/* Header */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-5xl mb-3'>{ headText}</p>
          
        </div>
      </div>
      
      {/* Body - lista produktów */}
      <div className='flex flex-wrap justify-center gap-10 place-items-center'>
        
     {Coctaildata.slice(0, visibleCount).map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            key={data.id}
            className='spacer-y-3'
          >
     <CocktailElement key={data.id} cocktail={data} fun={favFun} defaultIsFav={defaultIsFav}></CocktailElement>
          </div>
   
       
    
        ))}
       
      </div>

    
      {visibleCount < Coctaildata.length && (
        <div className='text-center mt-8'>
          <button
            onClick={handleShowMore}
            className='px-4 py-2 bg-[var(--color5)] text-white rounded hover:bg-[var(--color4)]'
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
