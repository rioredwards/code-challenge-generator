import { useAppDispatch, useAppSelector } from "../store/hooks";
import LockSwitch from "./LockSwitch";
import "./ReelUnit.css";
import Sign from "./Sign";
import Reel from "./Reel";
import SpinLight from "./SpinLight";
import { ReelName } from "../types";
import { allChoices } from "../data/allChoices";
import { ReelState } from "../store/reels/reelsSlice";
import { useRef } from "react";

interface Props {
  name: ReelName;
}

const ReelUnit: React.FC<Props> = ({ name }) => {
  const reel = useAppSelector((state) =>
    state.reels.find((reel) => reel.name === name)
  ) as ReelState;
  const { spinState, chosenIdx, isSpinLocked, isUserLocked } = reel;
  const choiceIdxAtCurrYPos = useRef<null | number>(null);
  const choices = allChoices[name];
  const dispatch = useAppDispatch();

  const toggleIsUserLocked = () => {
    dispatch({
      type: "reels/lockSwitchToggled",
      payload: { name, choiceIdxAtCurrYPos: choiceIdxAtCurrYPos.current },
    });
  };

  const onFinishedIdleStart = () => {
    dispatch({
      type: "reels/finishedIdleStart",
      payload: name,
    });
  };

  const onFinishedStopping = () => {
    dispatch({
      type: "reels/finishedStopping",
      payload: name,
    });
  };

  const onClickSpinLight = () => {
    dispatch({
      type: "reels/spinLightClicked",
      payload: name,
    });
  };

  return (
    <div className="reel-unit">
      <Sign name={name} />
      <LockSwitch isLocked={isUserLocked} toggleLock={toggleIsUserLocked} />
      <Reel
        choices={choices}
        chosenIdx={chosenIdx}
        spinState={spinState}
        onFinishedIdleStart={onFinishedIdleStart}
        onFinishedStopping={onFinishedStopping}
        isLocked={isSpinLocked || isUserLocked}
        choiceIdxAtCurrYPos={choiceIdxAtCurrYPos}
      />
      <SpinLight spinState={spinState} onClickSpinLight={onClickSpinLight} />
    </div>
  );
};

export default ReelUnit;
