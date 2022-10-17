import { ErrorDiv } from "../style/ErrorStyle";
import { ErrorProps } from "./helpers/types";

function Error({ error, content }: ErrorProps) {
  return (
    <ErrorDiv hidden={!error}>
      Connection timed out loading {content}, please refresh page.
    </ErrorDiv>
  );
}

export default Error;
