import * as React from "react";
import MuiTextField from "@mui/material/TextField";

interface TextFieldProps {
  label: string;
  updateAmount: React.Dispatch<React.SetStateAction<number>>;
  errorLabel?: string;
}

export const TextField = ({
  label,
  updateAmount,
  errorLabel,
}: TextFieldProps) => {
  return (
    <MuiTextField
      sx={{ minWidth: 300 }}
      id="amountInput"
      label={label}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        updateAmount(+event.target.value);
      }}
      InputProps={{
        inputProps: { min: 0 },
      }}
      type="number"
      error={!!errorLabel}
      helperText={errorLabel}
    />
  );
};
