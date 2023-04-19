import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...restProps
}) => {
  return (
    <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8A2B06" : "white";
};

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8A2B06";
};

const getColor = (props) => {
  return props.variant === "contained" ? "white" : "38A2B06";
};

const getBorderValues = (props) => {
  return props.borderStyle === "rounded" ? "20px" : "16px";
};

const StyledButton = styled(MuiButton)(({ variant, borderStyle, theme }) => ({
  padding: " 10px 26px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
  color: getColor(variant),
  border: getBorder(variant),
  backgroundColor: getBackgroundColor(variant),
  backgroundColor: theme.palette.primary.main,
  color: "white",
  borderRadius: getBorderValues(borderStyle),

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },

  "&:active": {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText,
  },
}));
