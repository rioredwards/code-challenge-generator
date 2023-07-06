import "./Machine.css";

interface MachineProps {
  signs: React.ReactNode[];
  lockSwitches: React.ReactNode[];
  lights: React.ReactNode[];
  lever: React.ReactNode;
}

const Machine: React.FC<MachineProps> = ({
  signs,
  lockSwitches,
  lever,
  lights,
}) => {
  return (
    <div className="machine">
      <div className="signs-container">{signs}</div>
      <div className="lock-switches-container">{lockSwitches}</div>
      <div className="reels-container">{}</div>
      <div className="lever-container">{lever}</div>
      <div className="lights-container">{lights}</div>
      <div className="results-container">{}</div>
    </div>
  );
};

export default Machine;

// Solution: Have two different reel components, one for the draggable reel and one for the spinning reel.
