import styled from "styled-components";

export const FooterLogo = styled.img`
  width: 105px;
`;

export const FooterSocialMediaList = styled.li`
  list-style-type: none;
  display: inline-block;
  margin: 10px;
`;

export const CenterItemStyle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.white};

  h1 {
    font-weight: normal;
  }

  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.color1};
    }
  }
`;

export const ImageDivStyle = styled.div`
  margin-top: 30px;
`;
