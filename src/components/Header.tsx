import { SlArrowUp, SlMenu } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggle } from "../features/navSlice";
import { ToggledNav } from "./Nav";

const Header: React.FC = () => {

  const isToggled = useAppSelector((state) => state.toggle.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <h1>Umami</h1>
        <div className="icon-container"
          onClick={() => dispatch(toggle())}>
          {!isToggled ? (
            <SlMenu className="icon" />
          ) : (
            <SlArrowUp className="icon" />
          )}
        </div>
      </header>
      {isToggled ? (
        <ToggledNav class={"slide-in"} />
      ) : (
        <ToggledNav class={"slide-out"} />
      )}
    </>
  );
};

export default Header;
