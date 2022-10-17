import logo from "../images/transparent_logo.png";
import { Flex } from "../style/FlexStyle";
import {
  FooterLogo,
  CenterItemStyle,
  FooterSocialMediaList,
  ImageDivStyle,
} from "../style/FooterStyle";
import { theme } from "../style/Theme";
import { SocialIcon } from "react-social-icons";
import { BackgroundDiv } from "../style/BackgroundStyle";
import { Container } from "../style/ContainerStyle";
import { PRIVACY, SOCIAL_LINKS, TOS } from "./helpers/constants";

function Footer() {
  return (
    <BackgroundDiv color={theme.color4}>
      <Container>
        <Flex direction="column">
          <CenterItemStyle>
            <ImageDivStyle>
              <FooterLogo src={logo} />
            </ImageDivStyle>
            <h3>Joepegs is the trusted NFT Marketplace on Avalanche</h3>
          </CenterItemStyle>
          <CenterItemStyle>
            {SOCIAL_LINKS.map((socialLink, index) => (
              <FooterSocialMediaList key={index}>
                <SocialIcon bgColor={theme.white} url={socialLink.link} />
              </FooterSocialMediaList>
            ))}
          </CenterItemStyle>
          <CenterItemStyle>
            <h5>
              <a href={PRIVACY}>Privacy Policy</a>
            </h5>
            <h5>
              <a href={TOS}>Terms of Service</a>
            </h5>
          </CenterItemStyle>
        </Flex>
      </Container>
    </BackgroundDiv>
  );
}

export default Footer;
