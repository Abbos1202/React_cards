import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h3>{this.props?.title}</h3>
          <div className="card_text">
            <img className="img_1" src={this.props?.src1} alt="img" />
            <img className="img_2" src={this.props?.src2} alt="img" />
            <img className="img_3" src={this.props?.src3} alt="img" />
            <img className="img_4" src={this.props?.src4} alt="img" />
            <button className="btn">{this.props?.btn}</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
