import {useEffect} from "react";
import Video from '..components/Video';

const Videos = () => {
  const handleDelete =(id) => {
    console.log(`Deleting video ${id}`);
}

    return (
        <>
        <video
          id="1"
          title=""
          dateAdded=""
          channel=""
          thumbnail=""
          description=""
          handleDelete={handleDelete}/>

        <Video
          id="2"
          title=""
          dateAdded=""
          channel=""
          thumbnail=""
          description=""
          handleDelete={handleDelete}/>

        <Video
          id="3"
          title=""
          dateAdded=""
          channel=""
          thumbnail=""
          description=""
          handleDelete={handleDelete}/>

        </>
    )
}

export default Videos;