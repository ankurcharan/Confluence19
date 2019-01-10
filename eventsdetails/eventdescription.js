import React,{Component} from 'react';
import './eventdescription.css';
import Aux from "../../hoc/Auxi.js";

const desc =[{title:"event 1",image:"http://pamplinmedia.com/images/artimg/00003592381059.jpg", description:"At the age of 13, Mahatma Gandhi wed Kasturba Makanji, a merchant’s daughter, in an arranged marriage. In 1885, he endured the passing of his father and shortly after that the death of his young baby. In 1888, Gandhi’s wife gave birth to the first of four surviving sons. A second son was born in India 1893; Kasturba would give birth to two more sons while living in South Africa, one in 1897 and one in 1900.At the age of 13, Mahatma Gandhi wed Kasturba Makanji, a merchant’s daughter, in an arranged marriage. In 1885, he endured the passing of his father and shortly after that the death of his young baby. In 1888, Gandhi’s wife gave birth to the first of four surviving sons. A second son was born in India 1893; Kasturba would give birth to two more sons while living in South Africa, one in 1897 and one in 1900.At the age of 13, Mahatma Gandhi wed Kasturba Makanji, a merchant’s daughter, in an arranged marriage. In 1885, he endured the passing of his father and shortly after that the death of his young baby. In 1888, Gandhi’s wife gave birth to the first of four surviving sons. A second son was born in India 1893; Kasturba would give birth to two more sons while living in South Africa, one in 1897 and one in 1900.", coordinators:"ram, shayam", prize:"20000"},
            {title:"event 2", description:"sample text", coordinators:"ram, shayam", prize:"20000",image:"https://images.pexels.com/photos/930899/pexels-photo-930899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
            {title:"event 3", description:"sample text", coordinators:"ram, shayam", prize:"20000",image:"https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
            {title:"event 4", description:"sample text", coordinators:"ram, shayam", prize:"20000",image:"http://pamplinmedia.com/images/artimg/00003592381059.jpg"}
          ];
class description extends Component{
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(){
    return(
      <Aux>
      <h1 className="title">{desc[this.props.index].title}</h1>
      <div className="image col s12 l4">
        <img src={desc[this.props.index].image}/>
      </div>
      <div className="card col s12 l6">
        <div className="textarea" >
          <p>{desc[this.props.index].description}</p>
          <p>{desc[this.props.index].coordinators}</p>
        </div>
      </div>
      </Aux>
    )
  }
}
export default description;
