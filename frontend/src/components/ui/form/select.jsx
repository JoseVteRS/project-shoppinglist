import Select from "react-select";
import { Controller } from "react-hook-form";

const CustomSelect = ({ name, values = [], control }) => {



  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => {
        return (
          <Select
            options={values}
            placeholder={"Choose..."}
            isMulti={false}
            onChange={(values) => onChange(values.value)}
            onBlur={onBlur}
            value={values.filter((option) => value?.includes(option.value))}
            defaultValue={values.filter((option) =>
              value?.includes(option.value)
            )}
          />
        );
      }}
    />
  );
};

export default CustomSelect;
