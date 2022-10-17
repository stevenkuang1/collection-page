import { CardsProps } from "./helpers/types";
import { CardImg, CardDiv, PriceImg } from "../style/CardStyle";
import avaxImg from "../images/avax.svg";
import { format } from "./helpers/api";
import { ITEM_URL } from "./helpers/constants";

function Card({ item }: CardsProps) {
  return (
    <CardDiv>
      <a href={`${ITEM_URL}${item.collection}/${item.tokenId}`}>
        <CardImg src={item.metadata?.image} />
        <div>
          <h5>
            {item.metadata?.name
              ? item.metadata.name
              : item.collectionSymbol + " #" + item.tokenId}
          </h5>
          <h5>
            Price:{" "}
            {item.currentAsk?.price
              ? format(parseInt(item.currentAsk.price))
              : "N/A"}{" "}
            <PriceImg
              display={item.currentAsk?.price ? "inline" : "none"}
              src={avaxImg}
            />
          </h5>
        </div>
      </a>
    </CardDiv>
  );
}

export default Card;
