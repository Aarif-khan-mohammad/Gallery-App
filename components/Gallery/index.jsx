import {Component} from 'react';
import ThumbnailItem from '../ThumbnailItem/index.jsx'
import './index.css';

const imagesList = [
    {
      "id": 0,
      "imageUrl": "https://i.ibb.co/VmDfdfJ/pexels-anton-atanasov-364086.jpg",
      "thumbnailUrl": "https://i.ibb.co/FmwxQS6/pexels-anton-atanasov-3640861709459044.jpg",
      "imageAltText": "pexels-anton-atanasov-364086",
      "thumbnailAltText": "pexels-nathan-cowley-11926711709459040"
    },
    {
      "id": 1,
      "imageUrl": "https://i.ibb.co/Df8sqmf/pexels-pok-rie-1426827.jpg",
      "thumbnailUrl": "https://i.ibb.co/QCvLFhZ/pexels-pok-rie-14268271709459044.jpg",
      "imageAltText": "pexels-pok-rie-1426827",
      "thumbnailAltText": "pexels-eberhard-grossgasteiger-6291621709459041"
    },
    {
      "id": 2,
      "imageUrl": "https://i.ibb.co/ph32vjm/pexels-peter-fazekas-1089451.jpg",
      "thumbnailUrl": "https://i.ibb.co/bWtcjGh/pexels-peter-fazekas-10894511709459039.jpg",
      "imageAltText": "pexels-peter-fazekas-1089451",
      "thumbnailAltText": "pexels-photo-12765181709459041"
    },
    {
      "id": 3,
      "imageUrl": "https://i.ibb.co/9sL2F1V/pexels-pixabay-459038.jpg",
      "thumbnailUrl": "https://i.ibb.co/yYRg9SF/pexels-pixabay-4590381709459039.jpg",
      "imageAltText": "pexels-pixabay-459038",
      "thumbnailAltText": "pexels-tiana-2342721709459042"
    },
    {
      "id": 4,
      "imageUrl": "https://i.ibb.co/gDhNn2S/pexels-nathan-cowley-1192671.jpg",
      "thumbnailUrl": "https://i.ibb.co/MfBWMy6/pexels-nathan-cowley-11926711709459040.jpg",
      "imageAltText": "pexels-nathan-cowley-1192671",
      "thumbnailAltText": "pexels-stein-egil-liland-34087441709459043"
    },
    {
      "id": 5,
      "imageUrl": "https://i.ibb.co/61KKHYR/pexels-eberhard-grossgasteiger-629162.jpg",
      "thumbnailUrl": "https://i.ibb.co/qYNW1wK/pexels-eberhard-grossgasteiger-6291621709459041.jpg",
      "imageAltText": "pexels-eberhard-grossgasteiger-629162",
      "thumbnailAltText": "pexels-eberhard-grossgasteiger-7073441709459043"
    },
    {
      "id": 6,
      "imageUrl": "https://i.ibb.co/19t4LJt/pexels-photo-1276518.jpg",
      "thumbnailUrl": "https://i.ibb.co/4p3Bfy3/pexels-photo-12765181709459041.jpg",
      "imageAltText": "pexels-photo-1276518",
      "thumbnailAltText": "pexels-anton-atanasov-3640861709459044"
    },
    {
      "id": 7,
      "imageUrl": "https://i.ibb.co/2ZFDqxm/pexels-tiana-234272.jpg",
      "thumbnailUrl": "https://i.ibb.co/M6PW3kP/pexels-tiana-2342721709459042.jpg",
      "imageAltText": "pexels-tiana-234272",
      "thumbnailAltText": "pexels-pok-rie-14268271709459044"
    },
    {
      "id": 8,
      "imageUrl": "https://i.ibb.co/HYLPt81/pexels-stein-egil-liland-3408744.jpg",
      "thumbnailUrl": "https://i.ibb.co/FxQzNpJ/pexels-stein-egil-liland-34087441709459043.jpg",
      "imageAltText": "pexels-stein-egil-liland-3408744",
      "thumbnailAltText": "pexels-pixabay-4590381709459039"
    },
    {
      "id": 9,
      "imageUrl": "https://i.ibb.co/GQ8mtWf/pexels-eberhard-grossgasteiger-707344.jpg",
      "thumbnailUrl": "https://i.ibb.co/y4qNz4w/pexels-eberhard-grossgasteiger-7073441709459043.jpg",
      "imageAltText": "pexels-eberhard-grossgasteiger-707344",
      "thumbnailAltText": "pexels-peter-fazekas-10894511709459039"
    }
  ];

class Gallery extends Component{

  state = {activeThumbnailId : imagesList[0].id}

  handleThumbnailClick = (id) =>{
    this.setState({activeThumbnailId : id})
  }
  
  
  render(){
    const {activeThumbnailId} = this.state;
    const {imageUrl , imageAltText} = imagesList[activeThumbnailId]
    return(
      <div className='container'>
        <img src={imageUrl} alt={imageAltText} className='mainImg'/>
  
          <h3 className='heading'>Nature Photography</h3>
          <p className='para'>Nature Photography by Aarvi</p>
        
        <ul className='thumbnai-card'>
          {imagesList.map((each)=> <ThumbnailItem thumbnailDetails = {each} handleThumbnail = {this.handleThumbnailClick} key={each.id} isActive = { activeThumbnailId === each.id }/> )}
        </ul>
      </div>
    )
  }
}

export default Gallery;