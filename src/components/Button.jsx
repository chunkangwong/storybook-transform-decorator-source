import MuiButton from "@mui/material/Button";

export default function Button({ active, ...props }) {
  return <MuiButton variant={active ? "contained" : "outlined"} {...props} />;
}

Button.defaultProps = {
  active: true,
};
