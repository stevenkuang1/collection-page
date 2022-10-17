import { useState } from "react";
import { InputText, InputButton } from "../style/SearchbarStyle";
import { theme } from "../style/Theme";
import { SearchBarProps } from "./helpers/types";

//Searchbar for searching card collection
function Searchbar({ updateQuery }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSubmit = () => {
    updateQuery(searchInput);
  };

  const updateQuery1 = (e: any) => {
    setSearchInput(e.target.value);
  };

  //prevent page reload from Enter key
  const handleEnter = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleEnter}>
      <InputText
        placeholder="Enter ID or Name"
        value={searchInput}
        onChange={updateQuery1}
      ></InputText>
      <InputButton
        primaryColor={theme.color7}
        secondayColor={theme.color6}
        value="Search"
        type="button"
        onClick={handleSubmit}
      ></InputButton>
    </form>
  );
}

export default Searchbar;
