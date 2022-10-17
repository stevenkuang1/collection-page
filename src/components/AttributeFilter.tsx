import { useState, useEffect } from "react";
import {
  AttributeFilterDiv,
  TraitInput,
  TraitLabel,
  TraitText,
  ValueTraitDiv,
} from "../style/AttributeFilterStyle";
import { AttributeFilterProps, SearchAttributes } from "./helpers/types";

//Filter Collection by Attributes
function AttributeFilter({ updateAttr, attribute }: AttributeFilterProps) {
  const [hide, setHide] = useState<boolean>(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchAttr, setSearchAttr] = useState<SearchAttributes>();

  useEffect(() => {
    if (selected.length < 0) {
      setSearchAttr({
        traitType: attribute!.traitType,
        values: [],
      });
    } else {
      setSearchAttr({
        traitType: attribute!.traitType,
        values: selected,
      });
    }
  }, [selected, attribute]);

  useEffect(() => {
    if (searchAttr?.values && searchAttr.values.length >= 0) {
      updateAttr(searchAttr!);
    }
    // warpped updateAttr with useCallBack function, not needed in the dependency array
    // eslint-disable-next-line
  }, [searchAttr]);

  const update = (value: string) => {
    const index: number = selected.indexOf(value);
    if (index > -1) {
      selected.splice(index, 1);
      setSelected(selected.concat([]));
    } else {
      setSelected(selected.concat([value]));
    }
  };

  return (
    <AttributeFilterDiv>
      <TraitText onClick={() => setHide(!hide)}>
        {attribute?.traitType}
      </TraitText>
      {attribute?.values.map((value) => (
        <ValueTraitDiv key={value.value + "Div"} hidden={hide}>
          <TraitInput
            key={value + "Input"}
            onClick={() => update(value.value)}
            type="checkbox"
            value={value.value}
          />
          <TraitLabel key={value + "Key"}>
            {value.value} ( {value.count} )
          </TraitLabel>
        </ValueTraitDiv>
      ))}
    </AttributeFilterDiv>
  );
}

export default AttributeFilter;
