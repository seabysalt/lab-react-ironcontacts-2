import React from 'react';

const list = (props) => {

  return (
      <div >

        <div className="CelebImg">
            <img src={props.pictureUrl} />
        </div>

        <div className="Name">
            <p>{props.name}</p>
        </div>

        <div className="Name">
          <p>{props.popularity}</p>
        </div>

        <div className="SmallBtn">
          <button onClick={props.clickToDelete}>Delete</button>
        </div>

      </div>
  )
};

export default list;