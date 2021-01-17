import React from "react";
import image1 from "./img/mavtar.png"
import image2 from "./img/favtar.png"
const Empdata_all = (props) => {
  const { people } = props;

  return people.map((item) => {
    const { id, name, dob, gender, image } = item;   
    
      return (      
        <article key={id} className="person">
          
          <img src={gender=="Male" ? image1 : image2} alt={name} />
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