import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} {...props}>
      <g data-name="Group 77" fill="#F00">
        <path d="M 17.523438 0 L 19.277344 1.753906 L 1.753906 19.277344 L 0 17.523438 Z M 17.523438 0 " />
        <path d="M 19.277344 17.523438 L 17.523438 19.277344 L 0 1.753906 L 1.753906 0 Z M 19.277344 17.523438 " />
      </g>
    </svg>
  );
}

export default SvgComponent;
