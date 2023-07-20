import { faCircleArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";
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

export const ArrowAltCircleDown = () => {
  return (
    <div className="mx-auto my-[10px] h-[50px] w-[50px]">
      <FontAwesomeIcon icon={faCircleArrowDown} color="#B1C951" />
    </div>
  );
};
