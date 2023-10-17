
import Heading from '../../../Components/Heading/Heading';

const News = () => {
    return (
        <div className='mb-20'>
            <Heading subHeading={"GET ACQUAINTED"} heading={"BLOGS & NEWS"}></Heading>
            <div className='md:grid grid-cols-2 justify-center items-center gap-8 mx-28 mb-10'>
                <div>
                    <img  src="https://i.postimg.cc/KzQCXwzW/blog-img.webp" alt="" />
                </div>
                <div className='space-y-4'>
                    <h3 className='text-5xl font-bold'>Barber Services ForYour style</h3>
                    <h5 className='text-2xl text-orange-500 font-semibold'>JULY 20, 2020</h5>
                    <p className='font-semibold text-lg'>Etiam semper nibh orci, ac tincident mi consecteture a .in quis tortor ex. Morbi cursus sed neque quis dictum. Dius bibdendum ullamcor per pharetra.</p>
                    <button className='btn btn-warning'>REED MORE</button>
                </div>
            </div>
            <div className='md:grid grid-cols-2 justify-center items-center gap-8 mx-28'>
            <div className='space-y-4'>
                    <h3 className='text-5xl font-bold'>Barber Services ForYour style</h3>
                    <h5 className='text-2xl text-orange-500 font-semibold'>JULY 20, 2020</h5>
                    <p className='font-semibold text-lg'>Etiam semper nibh orci, ac tincident mi consecteture a .in quis tortor ex. Morbi cursus sed neque quis dictum. Dius bibdendum ullamcor per pharetra.</p>
                    <button className='btn btn-warning'>REED MORE</button>
                </div>
                <div>
                    <img  src="https://i.postimg.cc/rsDTfMJj/blog-img-2.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default News;