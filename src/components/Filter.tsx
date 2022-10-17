import { FilterDiv, AttributeText } from "../style/FilterStyle";
import AttributeFilter from "./AttributeFilter";
import { useState } from "react";
import { FilterProps } from "./helpers/types";

//A list of all Attribute Filters for Collection
function Filter({ show, updateAttr, attributes }: FilterProps) {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <FilterDiv show={show}>
      <AttributeText onClick={() => setHide(!hide)}>Attributes ☰</AttributeText>
      <div hidden={hide}>
        {attributes?.map((attribute, index) => (
          <AttributeFilter
            key={index + "AttributeFilter"}
            updateAttr={updateAttr}
            attribute={attribute}
          />
        ))}
      </div>
    </FilterDiv>
  );
}

export default Filter;
