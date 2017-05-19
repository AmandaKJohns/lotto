import React from 'react';
import Show from './Show';

const ShowContainer = (props) => {
  let shows = props.data.map((show) => {
    return <Show title={show.title}
                   desc={show.description}
                   img={show.img_src}
                   key={show.id} />
  }); 
  return (
    <div>
      <ul>
        {shows}    
      </ul>
    </div>
  );
}

export default ShowContainer;