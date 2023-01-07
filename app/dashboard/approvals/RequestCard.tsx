import { BsCircleFill } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import {
  HiOutlineCalendarDays,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHandThumbDown,
  HiOutlineHandThumbUp,
} from "react-icons/hi2";
type Props = {
  requested: Requests;
  onClick: () => void;
};

const RequestCard = ({ requested, onClick }: Props) => {
  return (
    <div
      className="flex flex-col rounded-lg  shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out  border dark:text-gray-300 dark:border-gray-600"
      
    >
      <div className="flex-1 flex  flex-col p-5 ">
        <h3>{requested.requestedBy}</h3>

        <div className="flex  items-center my-3 border-t pt-1 border-t-gray-400">
        <BsCircleFill className="text-deep-sapphire-600 mr-2"/>
        <h2 className="font-bold  "> {requested?.type} Leave</h2>
        </div>

        

        <div className="flex justify-between items-center my-3 border-t pt-1 border-t-gray-400  text-gray-500 dark:text-gray-300">
          <HiOutlineCalendarDays className="h-6 w-6   " />
          <GiSandsOfTime className="h-6 w-6 " />
        </div>
        <div className="flex justify-between items-center my-2 border-t pt-1 border-t-gray-400">
          <p className=" ">
            {" "}
            {requested?.startDate} - {requested.endDate}{" "}
          </p>
          <p className="text-center"> {requested.days_taken} days</p>
        </div>
        <div className="flex  items-center my-3 border-t pt-1 border-t-gray-400">
          <HiOutlineChatBubbleOvalLeft className="h-6 w-6 text-deep-sapphire-600 mr-2 dark:text-gray-300" />
          <p> {requested.Note}</p>
        </div>
        <div className=""> 
        <button className="flex items-center p-2 rounded-lg bg-deep-sapphire-600 hover:bg-deep-sapphire-700 text-white" onClick={onClick}> 
            <HiOutlineHandThumbUp className="mr-2 h-6 w-6 "/> /
            <HiOutlineHandThumbDown className="ml-2 h-6 w-6 "/>
            </button>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default RequestCard;
