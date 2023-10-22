// ColorPicker.js
import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      selectedColor: null,
    };
  }

  toggleColorDisplay = () => {
    this.setState((prevState) => ({ showColors: !prevState.showColors }));
  };

  pickColor = (color) => {
    this.setState({ selectedColor: color, showColors: false });
  };

  render() {
    const { colors } = this.props;
    const { showColors, selectedColor } = this.state;

    return (
      <div style={{ backgroundColor: selectedColor }} className='bg'>
       
      <div className="color-picker"  >
        {showColors && (
          <div className="color-container">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.pickColor(color)}
              ></div>
            ))}
          </div>
        )}
        <button onClick={this.toggleColorDisplay}>Pick a Color</button>
        {/* {selectedColor && (
          <div
            className="selected-color"
            style={{ backgroundColor: selectedColor }}
          ></div>
        )} */}
      </div>
      </div>
    );
  }
}

export default ColorPicker;