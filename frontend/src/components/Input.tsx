import { InputBoxType } from "../types";
export default function InputForm(props: InputBoxType) {
  return (
    <div >
      <div className="my-2 font-medium text-lg">{props.name}</div>
      <input
        name = {props.name}
        onChange={props.onChange}
        className="w-80 border p-3 rounded-md"
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
