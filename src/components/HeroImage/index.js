import React from "react";

/*Styles*/
import { Wrapper, Content, Text } from "../HeroImage/HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
  // console.log(image);
  // console.log(title);
  // console.log(text);
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
