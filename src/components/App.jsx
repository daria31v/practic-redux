import { useSelector, useDispatch } from "react-redux";
import { update, getClicks } from "../redux/clicksSlice";

export const App = () => {
const dispatch = useDispatch();
const numberOfclicks= useSelector(getClicks);
  
return (
    <div>
      <h1>Number of clicks: {numberOfclicks}</h1>
      <button type="button" onClick={()=>dispatch(update(5))}>Add 5 ckliks</button>
      <button type="button" onClick={()=>dispatch(update(10))}>Add 10 ckliks</button>
      <button type="button" onClick={()=>dispatch(update(20))}>Add 20 ckliks</button>
    
    </div>
  );
};
