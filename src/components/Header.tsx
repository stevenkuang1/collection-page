import logo from "../images/transparent_logo.png";
import {
  LeftHeader,
  RightHeader,
  Logo,
  Button,
  HeaderList,
  ButtonList,
} from "../style/HeaderStyle";
import { BackgroundDiv } from "../style/BackgroundStyle";
import { Flex } from "../style/FlexStyle";
import { theme } from "../style/Theme";
import { Container } from "../style/ContainerStyle";
import {
  SIGN_IN,
  COLLECTION_URL,
  ABOUT_US_URL,
  SUPPORT_URL,
} from "./helpers/constants";

function Header() {
  const headerLink = [
    {
      name: "Collections",
      link: COLLECTION_URL,
    },
    {
      name: "About Us",
      link: ABOUT_US_URL,
    },
    {
      name: "Support",
      link: SUPPORT_URL,
    },
  ];

  return (
    <BackgroundDiv color={theme.color1}>
      <Container>
        <Flex direction="row">
          <LeftHeader>
            <a href="/">
              {" "}
              <Logo src={logo} />
            </a>
          </LeftHeader>
          <RightHeader>
            <ul>
              {headerLink.map((headerLink, index) => (
                <HeaderList key={index}>
                  <a href={headerLink.link}>{headerLink.name}</a>
                </HeaderList>
              ))}
              <ButtonList>
                <a href={SIGN_IN}>
                  <Button
                    primaryColor={theme.color2}
                    secondayColor={theme.color3}
                  >
                    Sign In
                  </Button>
                </a>
              </ButtonList>
            </ul>
          </RightHeader>
        </Flex>
      </Container>
    </BackgroundDiv>
  );
}

export default Header;
