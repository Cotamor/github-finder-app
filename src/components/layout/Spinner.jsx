import spinner from "./assets/spinner.gif";
const Spinner = () => {
  return (
    <div className="w-80 mt-20 mx-auto">
      <img width='180' src={spinner} alt="Loading..." className="text-center"></img>
    </div>
  );
};
export default Spinner;
