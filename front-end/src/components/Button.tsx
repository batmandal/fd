import { Button } from "@mui/material";

type CustomButtonProps = {
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  sx?: object;
  color?: string;
  label?: string;
  disabled?: boolean;
  onClick?: any;
};

export const CustomButton = (props: CustomButtonProps) => {
  const { variant, sx, label, disabled, size, onClick } = props;
  return (
    <Button
      color="primary"
      variant={variant}
      disabled={disabled}
      style={{
        fontSize: "16px",
        fontWeight: "400",
        color: "primary.contrastText",
      }}
      sx={sx}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
