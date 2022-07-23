import '../Styles/Gallery.css'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'
import image7 from '../Images/image7.png'
import image8 from '../Images/image8.png'
import image9 from '../Images/image9.png'


export default function Gallery() {
    return(
        <div className='galleryContainer'>
            <div className='Gallery'>
                <div className='row1'>
                    <img className='galleryImg image1' src={image1}></img>
                </div>
                <div className='row2'>
                    <img className='galleryImg image2' src={image2}></img>
                    <img className='galleryImg image3' src={image3}></img>
                </div>
                <div className='row3'>
                    <img className='galleryImg image4' src={image4}></img>
                    <img className='galleryImg image5' src={image5}></img>
                </div>
                <div className='row4'>
                    <img className='galleryImg image6' src={image6}></img>
                    <img className='galleryImg image7' src={image7}></img>
                </div>
                <div className='row5'>
                    <img className='galleryImg image8' src={image8}></img>
                    <img className='galleryImg image9' src={image9}></img>
                </div>
            </div>
        </div>
    )
}