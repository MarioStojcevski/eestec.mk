import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input
  } from "@chakra-ui/react";
  import { HTMLInputTypeAttribute } from "react";
  
  type InputFieldProps = {
    name: string;
    type: HTMLInputTypeAttribute;
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText: string;
  };
  
  const InputField = ({
    name,
    type,
    label,
    placeholder,
    onChange,
    helperText,
  }: InputFieldProps) => {
    return (
      <FormControl textAlign="left" mb="5" w="full" px={10}>
        <FormLabel fontSize={{ base: "12px", md: "16px" }}>{label}</FormLabel>
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          w="full"
          boxShadow="inner"
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          onChange={onChange}
        />
  
        <FormHelperText hidden={true}>{helperText}</FormHelperText>
      </FormControl>
    );
  };
  
  export default InputField;