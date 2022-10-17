import { BackgroundDiv } from "../style/BackgroundStyle";
import {
  CollectionNameText,
  DescriptionText,
  CreationDateText,
  InformationCollectionText,
  InformationDiv,
  InformationSocialDiv,
  SocialIconList,
  BannerImg,
  CollectionPfpDiv,
  Pfp,
  FlexCenter,
  CollectionDiv,
  CollectionInfoDiv,
  VerifiedImg,
  AvaxImg,
  GeneralInformationDiv,
} from "../style/BannerStyle";
import { Container } from "../style/ContainerStyle";
import verified from "../images/green_check.svg.webp";
import avaxImg from "../images/avax.svg";
import { SocialIcon } from "react-social-icons";
import moment from "moment";
import { Flex } from "../style/FlexStyle";
import { format } from "./helpers/api";
import { theme } from "../style/Theme";
import Error from "./Error";
import { BannerProps } from "./helpers/types";

function Banner({ error, collection, isLoadingCollection }: BannerProps) {
  if (!isLoadingCollection) {
    return (
      <BackgroundDiv color={theme.white}>
        <Container>
          <BannerImg src={collection?.bannerUrl} />
          <CollectionDiv>
            <FlexCenter direction="row">
              <CollectionPfpDiv>
                <Pfp src={collection?.pfpUrl} />
              </CollectionPfpDiv>
              <CollectionInfoDiv>
                <GeneralInformationDiv>
                  <CollectionNameText>
                    {collection?.name}{" "}
                    <VerifiedImg
                      hidden={collection?.verified !== "verified"}
                      src={verified}
                    />
                  </CollectionNameText>
                  <CreationDateText>
                    (Created on{" "}
                    {moment.unix(collection?.createdAt!).format("MMMM D, YYYY")}
                    )
                  </CreationDateText>
                  <DescriptionText>{collection?.description}</DescriptionText>
                </GeneralInformationDiv>
                <Flex direction="row">
                  <InformationDiv>
                    <InformationCollectionText>
                      Items: {collection?.numItems}
                    </InformationCollectionText>
                    <InformationCollectionText>
                      Volume: {format(collection?.volumeTotal!)}
                    </InformationCollectionText>
                  </InformationDiv>
                  <InformationDiv>
                    <InformationCollectionText>
                      Owners: {collection?.numOwners}
                    </InformationCollectionText>
                    <InformationCollectionText>
                      Floor: {format(collection?.floor!)}{" "}
                      <AvaxImg src={avaxImg} />
                    </InformationCollectionText>
                  </InformationDiv>
                  <InformationSocialDiv>
                    <SocialIconList hide={collection?.websiteUrl}>
                      <SocialIcon
                        bgColor="black"
                        url={collection?.websiteUrl}
                      />
                    </SocialIconList>
                    <SocialIconList hide={collection?.twitterUrl}>
                      <SocialIcon
                        bgColor="black"
                        url={collection?.twitterUrl}
                      />
                    </SocialIconList>
                    <SocialIconList hide={collection?.discordUrl}>
                      <SocialIcon
                        bgColor="black"
                        url={collection?.discordUrl}
                      />
                    </SocialIconList>
                  </InformationSocialDiv>
                </Flex>
              </CollectionInfoDiv>
            </FlexCenter>
          </CollectionDiv>
        </Container>
      </BackgroundDiv>
    );
  } else {
    return <Error error={error} content={"Banner"} />;
  }
}

export default Banner;
