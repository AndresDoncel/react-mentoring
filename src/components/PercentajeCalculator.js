import React from "react";

class PercentageStat extends React.PureComponent {
  render() {
    const { label } = this.props;
    const today = new Date();
    return (
      <div className="container__date">
        <h3>{label}</h3>
        <h4>
          {today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate()}
        </h4>
      </div>
    );
  }
}

export default PercentageStat;
