import { inputFormType } from "../types";
export default function InputForm(props: inputFormType) {
  return (
    <div className="">
      <div className="my-2 font-medium text-lg">{props.name}</div>
      <input className="w-80 border p-3 rounded-md" type={props.type} placeholder={props.placeholder}></input>
    </div>
  );
}
