import React from 'react'




const shop = () => {
  return (
    <section className='flex justify-between p-10 bg-gray-400 rounded-2xl'>

        <div className='bg-gray-300 p-5 ml-5 w-full rounded-l-2xl'>
           <h3 className='text-3xl text-center font-bold font-serif'>
            Soft Fleece <br /> Cat Pillow
           </h3>

           <div className='flex justify-between mt-5'>
             <box-icon type='solid' name='star' color='green'></box-icon>
             <box-icon type='solid' name='star' color='green'></box-icon>
             <box-icon type='solid' name='star' color='green'></box-icon>
             <box-icon type='solid' name='star' color='green'></box-icon>
             <box-icon name='star-half' type='solid' color='green' ></box-icon>
             <p className='ml-5'>ratings</p>
           </div>

          <div className='flex justify-center mt-11'>
          <p className='text-2xl mr-8'>Colors</p>
          <div class="inline-block border-2 border-black">
            <box-icon name='checkbox' type='solid' size='md' color='skyblue'></box-icon>
          </div>
            <box-icon name='checkbox' type='solid' size='md' color='red'></box-icon>
            <box-icon name='checkbox' type='solid' size='md' color='blue'></box-icon>
            <box-icon name='checkbox' type='solid' size='md' color='black'></box-icon>
          </div>

          <div className='flex justify-between mt-5'>
              <p className='text-2xl'>Sizes</p>
              <h2 className="underline text-2xl font-bold">M</h2>
              <h2 className='text-2xl'>L</h2>
              <h2 className='text-2xl'>XL</h2>
               <h2 className='text-2xl'>XXL</h2>
          </div>

          <h2 className='text-2xl font-bold mt-5'>
            $149.99
          </h2>

          <div className='flex mt-6 justify-between'>
          <button className='bg-black text-white px-16 py-2.5 rounded-2xl'>
              Order Now
          </button>
          
          <box-icon type='solid' name='heart' size="md"></box-icon>
          </div>
          

        </div>

        <div>
        <img className='h-fit w-screen' src='./images/cat_pillow-removebg-preview.png' alt="Soft Fleece Cat Pillow" />

        <hr className='ml-10'></hr>

        <div className='h-20 w-15 flex justify-center mt-5'>
        <box-icon type='solid' name='left-arrow' color="black"></box-icon>
        <img className= '' src='./images/red_pillow-removebg-preview.png' alt="Soft Fleece Cat Pillow" />
        <img className= '' src='./images/pillow_bb-removebg-preview.png' alt="Soft Fleece Cat Pillow" />
        <box-icon type='solid' name='right-arrow' color="black"></box-icon>
        </div>

        </div>

        

    </section>
  )
}

export default shop