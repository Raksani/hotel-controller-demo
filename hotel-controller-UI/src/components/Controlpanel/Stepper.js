import React from "react";
import "../Styles/Aircon.scss";

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { curValue: 25 };
  }

  changeValue = ({ curValue, newValue }) => {
    this.setState({ curValue: newValue });
  };

  handleValueChange = (newValue) => {
    const {
      state: { curValue },
    } = this;

    if (newValue < 18 || newValue > 28) newValue = curValue;
    else {
      this.inputRef.current.style.transform =
        newValue > curValue ? "translateX(100%)" : "translateX(-100%)";
      this.inputRef.current.style.opacity = 0;

      setTimeout(() => {
        this.inputRef.current.style.transitionDuration = "0s";
        this.inputRef.current.style.transform =
          newValue > curValue ? "translateX(-100%)" : "translateX(100%)";
        this.inputRef.current.style.opacity = 0;

        this.changeValue({ curValue, newValue });

        setTimeout(() => {
          this.inputRef.current.style.transitionDuration = "0.5s";
          this.inputRef.current.style.transform = "translateX(0)";
          this.inputRef.current.style.opacity = 1;
        }, 30);
      }, 250);
    }
  };

  render() {
    const {
      state: { curValue },
    } = this;

    return (
      <div {...{ className: "counter" }}>
        <div {...{ className: "stepper-wrapper" }}>
          <button
            {...{
              className: "button",
              onClick: () => {
                this.handleValueChange(curValue - 1);
              },
              title: "-1",
            }}
          >
            −
          </button>

          <div {...{ className: "input-wrapper" }}>
            <input
              {...{ className: "input", value: curValue, ref: this.inputRef }}
              disabled
            ></input>
          </div>
          <button
            {...{
              className: "button",
              onClick: () => {
                this.handleValueChange(curValue + 1);
              },
              title: "+1",
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
