import React from "react";
import { TextStyle } from "./style";
import sofa1 from '../../../assets/images/sofa1.jpg'
import sofa2 from '../../../assets/images/sofa2.jpg'

const TextSection = () => {
  return (
    <TextStyle>
      <TextStyle.Container>
        <TextStyle.Wrapper>
          <TextStyle.TitleBox>
            <TextStyle.Title>Description</TextStyle.Title>
            <TextStyle.ReTitle>Additional Information</TextStyle.ReTitle>
            <TextStyle.ReTitle>Reviews [5]</TextStyle.ReTitle>
          </TextStyle.TitleBox>
          <TextStyle.Redesc>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </TextStyle.Redesc>
          <TextStyle.Redesc>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </TextStyle.Redesc>
          <TextStyle.ImgBox>
            <TextStyle.Img src={sofa1}/>
            <TextStyle.Img  src={sofa2}/>
          </TextStyle.ImgBox>
        </TextStyle.Wrapper>
      </TextStyle.Container>
    </TextStyle>
  );
};

export default TextSection;
