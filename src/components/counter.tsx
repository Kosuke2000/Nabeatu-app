import { useCallback, useState } from "react";

export function useNabeatu(): [number, () => void, boolean] {
  const [count, setCount] = useState(0);

  const countUp = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  //初期状態
  const initial = count === 0;
  // 3の倍数かどうかを確認
  const isMultipleOfThree = count % 3 === 0;
  //3の数字がつくかどうかを判定
  const isNumberWithThree = Boolean(count.toString().match(/3/));
  //0を除き、３の倍数化３の付く数字であればtrueを返す
  const isAho = !initial && (isMultipleOfThree || isNumberWithThree);
  return [count, countUp, isAho];
}
