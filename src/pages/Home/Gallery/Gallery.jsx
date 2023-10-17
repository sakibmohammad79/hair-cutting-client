
import Heading from '../../../Components/Heading/Heading';

const Gallery = () => {
    return (
        <div>
        <div>
            <Heading heading={"GALLERY PHOTOS"} subHeading={"GET YOUR BEARD"}></Heading>
        </div>

        <div className="flex justify-center items-center">
                <img className='h-[600px]' src="https://i.postimg.cc/g2bS4ctc/img-40.webp" alt="" />
                <div className='grid grid-cols-2'>
                    <img className='h-[300px]' src="https://i.postimg.cc/bNxM72tS/img-41-1.webp" alt="" />
                    <img className='h-[300px]' src="https://i.postimg.cc/13MdthM9/img-42.webp" alt="" />
                    <img className='h-[300px]' src="https://i.postimg.cc/vBDYSRt0/img-43-1.webp" alt="" />
                    <img className='h-[300px]' src="https://i.postimg.cc/yYHpyYb1/img-44.webp" alt="" />
                </div>
                <img className='h-[600px]' src="https://i.postimg.cc/g2bS4ctc/img-40.webp" alt="" />
            </div>
            </div>
    );
};

export default Gallery;