import {ReactElement} from 'react'
import { useState } from 'react';


export const useMultiStepForm = (steps: ReactElement[]) => {

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () =>  {
        setCurrentStepIndex(cur => {
            if (cur >= steps.length-1) return cur
            return cur + 1
        })
    }

    function previous() {
        setCurrentStepIndex(cur => {
            if (cur <= 0) return cur
            return cur - 1
        })
    }

    function goTO(index: number)  {setCurrentStepIndex(index);}

  return {
    next,
    previous,
    goTO,
    steps,
    step: steps[currentStepIndex],
    isFirst: currentStepIndex === 0,
    isLast: currentStepIndex === steps.length - 1,
    currentStepIndex,
    setCurrentStepIndex,
  }
}
