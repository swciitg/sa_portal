import LatestUpdates from "./LatestUpdates";
import QuickLinks from "./QuickLinks";
const QuickLinksAndLatestUpdates = ({ prop }) => {
  return (
    <>
      <div className="flex flex-col lg:justify-between lg:flex-row">
        <QuickLinks prop={prop} />
        <LatestUpdates prop={prop} />
      </div>
    </>
  );
};
export default QuickLinksAndLatestUpdates;
