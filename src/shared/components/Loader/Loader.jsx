import { ProgressBar } from "react-loader-spinner";
import { LoaderWrapper } from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#41ddd3"
        barColor="#41ddd3"
      />
    </LoaderWrapper>
  );
};

export default Loader;
