import { useNavigate } from "react-router-dom";

type Props = {
  handleSetCurrent: (tab: string) => void;
};

const OHRowTwo: React.FC<Props> = ({ handleSetCurrent }) => {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex jusify-center items-center px-5 border-b border-gray-300 pb-1">
      <ul className="flex flex-row gap-5 text-blue-600 cursor-pointer">
        <li
          className="hover:underline"
          onClick={() => {
            handleSetCurrent("orders");
          }}
        >
          Orders
        </li>
        <li
          className="hover:underline"
          onClick={() => {
            navigate("/buyagain");
          }}
        >
          Buy Again
        </li>
        <li
          className="hover:underline"
          onClick={() => {
            handleSetCurrent("not-yet-shipped");
          }}
        >
          Not Yet Shipped
        </li>
      </ul>
    </nav>
  );
};

export default OHRowTwo;
