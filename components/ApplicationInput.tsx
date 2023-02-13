import { UseFormRegister } from "react-hook-form";
// eslint-disable-next-line import/no-cycle
import { SchemaType } from "../pages/application";

interface Props {
  // display name
  fieldName: string;
  // internal name
  name: keyof SchemaType;
  // placeholder display text
  placeholder: string;
  // register function from RHF
  register: UseFormRegister<SchemaType>;
  // error message
  error: any;
}

const ApplicationInput = ({
  fieldName,
  name,
  placeholder,
  register,
  error,
}: Props) => {
  console.log(error);
  return (
    <div className="w-full">
      <p>{fieldName}</p>
      <input
        className="w-full border-b-2 border-grey bg-transparent bg-black p-1 placeholder-grey duration-200 ease-in-out focus:border-blue-mid"
        type="text"
        placeholder={placeholder}
        {...register(name)}
      />
      {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
    </div>
  );
};

export default ApplicationInput;
