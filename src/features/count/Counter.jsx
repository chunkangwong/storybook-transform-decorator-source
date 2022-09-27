import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { increment } from "./countSlice";

export default function Counter({ label }) {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <Button onClick={handleIncrement} active={count > 5}>
      {count} {label}
    </Button>
  );
}
