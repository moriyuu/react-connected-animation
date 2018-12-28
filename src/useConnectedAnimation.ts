import { useState, useEffect, CSSProperties } from "react";

type State = {
  [key: string]: {
    start: CSSProperties;
    end: CSSProperties;
  };
};

export function useConnectedAnimation() {
  const [state, update] = useState<State>({});

  useEffect(() => {
    // console.log("state st", state.head && state.head.start);
    // console.log("state en", state.head && state.head.end);
  });

  const getStart = (key: string) => {
    if (!state[key]) return undefined;
    return state[key].start;
  };
  const setStart = (key: string, payload: Object) => {
    update(_state => ({
      ..._state,
      [key]: { ..._state[key], start: payload }
    }));
  };
  const getEnd = (key: string) => {
    if (!state[key]) return undefined;
    return state[key].end;
  };
  const setEnd = (key: string, payload: Object) => {
    update(_state => ({
      ..._state,
      [key]: { ..._state[key], end: payload }
    }));
  };

  return { getStart, setStart, getEnd, setEnd };
}
