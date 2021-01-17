import React from "react";
const Empdata = (props) => {
  const { people } = props;
  // let curDate = new Date().toLocaleDateString();
  let currDate = new Date();
      let cDate = currDate.getDate();  
      let cDate1 = cDate < 10 ? `0${cDate}` : `${cDate}`;
      let month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      let cMonth = month[currDate.getMonth()];
      let actCDate = `${cDate1} ${cMonth}`;    // actDate = actual Date
        console.log("current:", actCDate)
        return people.map((item) => {
          const { id, name, dob, gender, image } = item;    
          let myDate = item.dob;
          console.log("date of birth:", myDate)
    let isTrue = (myDate == actCDate)
    if(isTrue) {
      return (      
        <article key={id} className="person">
          
          <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Gender: {gender}</p>
              <p>{dob}</p>
            </div>
        </article>
      );
    } else {
      <h4>No data available</h4>}
    });
    }
export default Empdata;