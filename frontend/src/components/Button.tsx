import { ButtonProps } from "../types";

export default function Button(props: ButtonProps) {
  return (
    <div className="my-6 bg-gray-800 text-white rounded border p-2 text-center hover:bg-stone-600">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}
