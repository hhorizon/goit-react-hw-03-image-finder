import Spinner from "react-loader-spinner";
import { LoaderWrapper, LoaderContent } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContent>
        <Spinner type="TailSpin" color="#3b5998" height={100} width={100} />
      </LoaderContent>
    </LoaderWrapper>
  );
};

export default Loader;
