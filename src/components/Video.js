import { useEffect,useState } from "react";

const Video = ({id, thumbnail, title, dateAdded, channel, description, handleDelete}) => {
    const [rate,setRate] = useState(0);

    useEffect(() =>{
        console.log(`Video component did mount ${id}`);
    }, []);
    
    const handleRate = () => {
        setRate(rate+1);       
}

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={thumbnail} alt=""/>
            </div>  
            <div className="video-info">
            <h3>{title}</h3>
            <botton onClick={handleRate}>Rate</botton> {rate} starts
            <button onClick={() =>  handleDelete(id)}>Delete video</button>
            <p>uplload date: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>{description}</p>
            </div>
        </div>
        
    );
}

export default Video;