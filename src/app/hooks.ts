import {
  TypedUseSelectorHook,
  useDispatch as hook_useDispatch,
  useSelector as hook_useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect } from "react";

// 不要直接用store.getState(),useSelector會在你store發生改變時重新渲染，省掉"訂閱"部分
export const useDispatch = () => hook_useDispatch<AppDispatch>();

// redux會自動幫我們創建context
export const useSelector: TypedUseSelectorHook<RootState> = hook_useSelector;

// 判斷點擊事件是否在該元素外面
export const useClickOutside = (ref_element: any, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref_element.current && !ref_element.current.contains(event.target as any)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

/**
 * 
 * @param timer debounce timer by useRef
 * @param delay debounce delay time
 * @param setInputStateCallBack callback when input changed
 * @returns (e) => setInputState(e.target.value)
 * 
 * 
 * Create a debounced setinputstate callback for your input onChange
 * 
 * ex :
 * 
 *    const [searchInput, setSearchInput] = useState("");
 *    const ref_DebounceTimer = useRef<any>(null);
 *    debouncedInputChanged = useDebouncedInput(ref_DebounceTimer, 200, setInput)
 * 
 *    return(
 *      <input type="text" onChange={debouncedInputChanged} />
 *    )
 */
export const useDebouncedInput = (
  timer: any,
  delay: number,
  setInputStateCallBack: React.Dispatch<React.SetStateAction<string>>
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer?.current !== null) {
      clearTimeout(timer.current);
    }
    try {
      timer.current = setTimeout(() => {
        let val = e.target.value || "";
        setInputStateCallBack.call(this, val);
      }, delay);
    } catch (error) {
      throw new Error("useDebouncedInput Error");
    }
  };
};
