import React from "react";

import styles from "./Avatar.module.css";

const Avatar = (props) => {
  const { image, alt, width } = props;
  return (
    <div className={`${styles.avatar} ${props.className}`} style={props.style}>
      <img src={image} alt={alt} style={{ width, height: width }} />
    </div>
  );
};

export default Avatar;
