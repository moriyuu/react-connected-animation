import { useState, useEffect } from "react";

type State = {
  [key: string]: {
    start: {
      width?: number;
      height?: number;
      x?: number;
      y?: number;
      fontSize?: number;
    };
  };
};

export function useConnectedAnimation() {
  const [state, update] = useState<State>({});

  useEffect(() => {
    console.log("state", state.head && state.head.start);
  });

  const getStart = (key: string) => {
    if (!state[key]) return {};
    return state[key].start;
  };
  const setStart = (key: string, payload: Object) => {
    update(_state => ({ ..._state, [key]: { start: payload } }));
  };

  return { getStart, setStart };
}
