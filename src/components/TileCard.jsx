import '../styles/TileCard.css';

const TileCard = ({ name, image }) => {
    const handleClick = () => {
        console.log('clicked');
    }

    return(
        <div className='tileCard'>
            <img src={image}/>
            {name}
        </div>
    )
}

export default TileCard;