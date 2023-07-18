import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarCheck = () => {
  return (
    <div className="mx-[2px] my-auto inline-block h-[18px] w-[18px]">
      <FontAwesomeIcon icon={faStar} color="#FEED60" />
    </div>
  );
};

export const StarUnCheck = () => {
  return (
    <div className="mx-[2px] my-auto inline-block h-[18px] w-[18px]">
      <FontAwesomeIcon icon={faStar} color="#E7F2F1" />
    </div>
  );
};
