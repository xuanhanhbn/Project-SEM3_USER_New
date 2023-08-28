import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const CustomButton = styled(MuiButton) (() => ({
  borderRadius: '50px',
  padding: '15px 50px',
  color: "white",
  fontSize: '16px',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#091156'
  }
}))

export default CustomButton
