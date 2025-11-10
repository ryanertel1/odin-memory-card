import '../styles/TileCard.css';

const TileCard = ({ name, image }) => {
    return(
        <div className='tileCard'>
            <img src={image}/>
            {name}
        </div>
    )
}

export default TileCard;