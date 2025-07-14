import React from "react";

interface ControlledWrapperProps<T> {
  initialValue: T;
  children: (
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
  ) => React.ReactNode;
}

export default function ControlledWrapper<T>({
  initialValue,
  children,
}: ControlledWrapperProps<T>) {
  const [value, setValue] = React.useState<T>(initialValue);
  return <>{children(value, setValue)}</>;
}
