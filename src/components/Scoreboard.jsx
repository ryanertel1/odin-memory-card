const Scoreboard = ({ score, highScore }) => {
    return(
        <>
            <span className='score'>Score: {score}</span>
            <span className='highScore'>High Score: {highScore}</span>
        </>
    )
}

export default Scoreboard;