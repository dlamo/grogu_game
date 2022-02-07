import { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext(null)

export const useStore = () => useContext(StoreContext)

const initialValues = {
  cookies: 3,
  eggs: 3,
  frogs: 3
}

export default function StoreContextProvider({children}) {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState(0);
  const [cupboard, setCupboard] = useState(initialValues);

  const nextStep = () => setStep(step + 1)
  const nextPosition = () => setPosition(position + 1)

  const store = useMemo(
    () => ({
      cupboard,
      position,
      step,
      nextStep,
      nextPosition
    }),
    [step, position, cupboard, nextStep, nextPosition]
  )

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}