import React from "react";

const StatusCard = (props) => {
  const style = {
    backgroundColor: props.color,
    height: "140px"
  };

  return (
    <>
      <div className="card p-4 text-white" style={style}>
        <h6>{props.title}</h6>
        <h4>{props.value}</h4>
        <span>
          {props.growth > 0 && `${props.growth > 10000 ? 9999 : props.growth}%`}
          {props.growth < 0 && `${props.growth < -10000 ? -9999 : props.growth}%`}
        </span>
      </div>
    </>
  );
};

export default StatusCard;
