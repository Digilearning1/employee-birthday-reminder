import React from "react";
const Empdata_all = (props) => {
  const { people } = props;

  return people.map((item) => {
    const { id, name, dob, gender, image } = item;   
    
      return (      
        <article key={id} className="person">
          
          <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Gender: {gender}</p>
              <p>DOB: {dob}</p>
            </div>
        </article>
      );
    });
}
export default Empdata_all;