import styled from "styled-components";

export const AttributeFilterDiv = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color6};
`;

export const TraitText = styled.h3`
  cursor: pointer;
`;

export const ValueTraitDiv = styled.div`
  margin: 10px;
`;

export const TraitInput = styled.input`
  width: 20px;
  height: 20px;
`;

export const TraitLabel = styled.h4`
  font-size: 15px;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 0px;
`;
