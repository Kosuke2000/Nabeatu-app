import "./App.css";
import { useNabeatu } from "./components/counter";
import { count } from "console";

export interface NabeatuProps {
  isAho: boolean;
}

const Nabeatu: React.VFC<NabeatuProps> = ({ isAho }) => (
  <>
    {isAho ? (
      <div className="aho">Nabeatu(Aho)</div>
    ) : (
      <div>Nabeatu(Normal)</div>
    )}
  </>
);

function NabeatuCounter() {
  const [count, countUp, isAho] = useNabeatu();

  return (
    <div className="App">
      <h1>世界のナベアツカウンター</h1>
      <p>{count}</p>
      <div className="btn" onClick={countUp}>
        Count up!
      </div>
      <Nabeatu isAho={isAho} />
    </div>
  );
}

export default NabeatuCounter;
