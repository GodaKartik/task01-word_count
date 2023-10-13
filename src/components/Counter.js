import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { word_count: 0 };
  }
  render() {
    return (
      <div>
        <center
          style={{
            border: "1px solid black",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            boxShadow: "10px 10px 10px gray",
            padding: "10px",
            borderRadius: "3px",
          }}
        >
          <h1
            style={{
              fontFamily: "cursive",
              width: "430px",
            }}
          >
            Responsive Paragraph Word Counter
          </h1>
          <textarea
            name="paragraph"
            id="para"
            cols="45"
            rows="10"
            style={{
              resize: "none",
              padding: "10px",
            }}
            onChange={(event) => {
              this.setState({
                word_count:
                  event.target.value.slice(-1) === " "
                    ? event.target.value.split(" ").length - 1
                    : event.target.value.split(" ").length,
              });
            }}
          ></textarea>
          <p>Word Count: {this.state.word_count}</p>
        </center>
      </div>
    );
  }
}

export default Counter;
