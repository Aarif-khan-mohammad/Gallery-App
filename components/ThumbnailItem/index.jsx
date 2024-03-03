import './index.css';

const ThumbnailItem = (props) => {

  const {thumbnailDetails , handleThumbnail , isActive} = props;
  const {id ,thumbnailUrl , thumbnailAltText  } = thumbnailDetails;

  const onThumbnailClick = () =>{
    handleThumbnail(thumbnailDetails.id);
  }

  const activeTab = (isActive ? "active" : "");
  
  return(
    <li className='thumbail-image'>
      <button>
        <img src={thumbnailUrl} onClick={onThumbnailClick}  alt={thumbnailAltText}  className={`imge ${activeTab} `}/>
      </button>
      
    </li>
  )
}

export default ThumbnailItem;