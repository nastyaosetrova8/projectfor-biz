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
        borderColor="#CBDED3"
        barColor="#9FBAAE"
      />
    </LoaderWrapper>
  );
};

export default Loader;
