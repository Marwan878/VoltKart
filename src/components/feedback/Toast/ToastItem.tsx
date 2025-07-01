import { useAppDispatch } from "@store/hooks";
import { removeToast, stopDelayAnimation } from "@store/toasts/toastsSlice";
import { useCallback, useEffect, useState } from "react";

import { TToast } from "@types";

import styles from "./styles.module.css";

const { toastItem } = styles;

const ToastItem = ({
  id,
  type,
  delayAnimation,
  title,
  message,
  onCloseToast,
}: TToast) => {
  const dispatch = useAppDispatch();

  const totalWidth = 100;
  const totalDurationInMS = 4000;
  const intervalTime = totalDurationInMS / totalWidth;
  const delayAnimationDuration = totalDurationInMS / 2;

  const [progressBarIndicator, setProgressBarIndicator] = useState(0);
  const [pauseProgressBarIndicator, setPauseProgressBarIndicator] =
    useState(false);

  const closeToastHandler = useCallback(() => {
    dispatch(removeToast(id));
    onCloseToast?.();
  }, [id, onCloseToast, dispatch]);

  const handleMouseEvent = () => {
    setPauseProgressBarIndicator((prevState) => !prevState);
  };

  useEffect(() => {
    if (delayAnimation) return;

    const timerId = setInterval(() => {
      setProgressBarIndicator((prevState) => {
        if (!pauseProgressBarIndicator)
          if (prevState < 100) {
            return prevState + 1;
          }
        return prevState;
      });
    }, intervalTime);

    return () => clearInterval(timerId);
  }, [intervalTime, pauseProgressBarIndicator, delayAnimation]);

  useEffect(() => {
    if (progressBarIndicator === 100) {
      closeToastHandler();
    }
  }, [progressBarIndicator, closeToastHandler]);

  useEffect(() => {
    if (delayAnimation) {
      const myTimeout = setTimeout(() => {
        dispatch(stopDelayAnimation(id));
      }, 1000);

      return () => clearTimeout(myTimeout);
    }
  }, [dispatch, delayAnimation, delayAnimationDuration, id]);

  if (delayAnimation) return;

  return (
    <div
      className={`alert ${`alert-${type}`} ${toastItem}`}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <h5>{title ?? type}</h5>
      <p>{message}</p>
      <button type="button" className="btn-close" onClick={closeToastHandler} />
      <span
        className="placeholder"
        style={{
          width: `${progressBarIndicator}%`,
          transition: `width ${intervalTime}ms linear`,
        }}
      ></span>
    </div>
  );
};

export default ToastItem;
