import styled from "styled-components";
import { Flex } from "./FlexStyle";

export const CollectionDiv = styled.div`
  margin-top: -100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: -50px;
  }
`;

export const AvaxImg = styled.img`
  width: 25px;
  vertical-align: -5%;

  @media (max-width: ${({ theme }) => theme.smobile}) {
    width: 15px;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
`;

export const CollectionPfpDiv = styled.div`
  text-align: right;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    width: 100%;
  }
`;

export const GeneralInformationDiv = styled.div`
  width: 90%;
  padding-top: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: auto;
  }
`;

export const CollectionNameText = styled.h1`
  font-size: 50px;
  display: inline;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    margin: 0px;
  }
`;

export const CreationDateText = styled.h5`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0px;
    display: block;
  }
`;

export const InformationCollectionText = styled.h2`
  @media (max-width: ${({ theme }) => theme.smobile}) {
    font-size: 15px;
  }
`;

export const DescriptionText = styled.h3`
  margin: 10px 0;
  @media (max-width: ${({ theme }) => theme.smobile}) {
    font-size: 15px;
  }
`;

export const CollectionInfoDiv = styled.div`
  text-align: left;
  padding-left: 30px;
  padding-top: 90px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
    text-align: center;
  }
`;

export const VerifiedImg = styled.img`
  width: 20px;
`;
export const Pfp = styled.img`
  width: 250px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.grey};
  border: ${({ theme }) => theme.grey} 5px solid;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    max-width: 200px;
  }
`;

export const FlexCenter = styled(Flex)`
  justify-content: center;
`;

export const InformationDiv = styled.div`
  text-align: left;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    h2 {
      margin: 10px 20px;
      display: inline;
    }
  }
`;
export const InformationSocialDiv = styled(InformationDiv)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 20px;
  }
`;

export const SocialIconList = styled.li<{ hide?: string }>`
  list-style-type: none;
  margin: 10px;
  display: ${(props) => (props.hide ? "inline" : "none")};
`;
