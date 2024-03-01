import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ArrayElement from "./ArrayElement";

interface Props {
  array: string[] | number[];
}

interface ArrayNode {
  id: string;
  val: string | number;
  active: boolean;
}

const Arrays = ({ array }: Props) => {
  const [timerIsOn, setTimerIsOn] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([]);
  const [idList, setIdList] = useState<ArrayNode[]>([]);

  useEffect(() => {
    setIdList(
      array.map((val) => {
        const id = uuidv4();
        return { id, val, active: false };
      }),
    );
  }, []);

  const reset = () => {
    const array: ArrayNode[] = [];
    idList.forEach((node) => {
      const nodeCopy = { ...node, active: false };
      array.push(nodeCopy);
    });
    setIdList(array);
  };

  const elementList = idList.map((el) => {
    return (
      <ArrayElement val={el.val} id={el.id} active={el.active} key={el.id} />
    );
  });

  const traverse = () => {
    if (timerIsOn) {
      // Clear all timeouts
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      setTimeoutIds([]);
      setTimerIsOn(false);
      console.log("Traversal Terminated");
      return;
    }
    setTimerIsOn(true);
    console.log("Traversal Initiated");
    const ids: NodeJS.Timeout[] = [];
    if (elementList)
      elementList.forEach((el, index) => {
        const timeoutId = setTimeout(
          () => {
            const index = idList.findIndex((node) => el.props.id === node.id);
            const activateNode = { ...idList[index], active: true };
            const newArr = [...idList];
            newArr[index] = activateNode;
            setIdList(newArr);
          },
          index * 1 * 1000,
        );
        ids.push(timeoutId);
      });
    setTimeoutIds(ids);
  };

  return (
    <div className="flex w-full flex-col border border-dashed">
      <h2 className="p-10 text-6xl text-white">Arrays</h2>
      <div className="flex w-full overflow-auto p-10">{elementList}</div>
      <div className="controls flex items-center justify-center">
        <button
          className="mx-auto my-10 min-w-40 rounded-full bg-slate-300 p-5 active:scale-105"
          onClick={traverse}
        >
          Traverse Array
        </button>
        <button
          className="mx-auto my-10 min-w-40 rounded-full bg-slate-300 p-5 active:scale-105"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Arrays;
