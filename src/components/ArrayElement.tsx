interface Props {
  val: string | number;
  id: string;
  active: boolean;
}

const ArrayElement = ({ val, id, active }: Props) => {
  return (
    <div
      className={`relative flex aspect-square w-full min-w-20 items-center justify-center border-2 border-r-0 border-black text-5xl last-of-type:border-r-2 ${active ? "text-yellow-500" : "text-black"}`}
      key={id}
    >
      {val}
    </div>
  );
};

export default ArrayElement;
