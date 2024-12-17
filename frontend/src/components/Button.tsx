import { ButtonProps } from "../types";

export default function Button(props: ButtonProps) {
  return (
    <div className="bg-gray-800 text-white rounded border p-2 text-center rounded-xl hover:bg-stone-600">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}
