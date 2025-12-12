import '../styles/TileCard.css';

const TileCard = ({ name, image, onChildClick }) => {
    return(
        <div className='tileCard' onClick={() => onChildClick(name)}>
            <img src={image}/>
            {name}
        </div>
    )
}

export default TileCard;