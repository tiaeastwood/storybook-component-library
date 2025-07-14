import { useId } from "react";
import styles from "./checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  variant?: "default" | "large";
  ariaLabel?: string;
}

const sizeStyles = {
  default: { width: 16, height: 16 },
  large: { width: 24, height: 24 },
};

export default function Checkbox({
  checked,
  onChange,
  disabled = false,
  label,
  variant = "default",
  ariaLabel = "checkbox",
}: CheckboxProps) {
  const id = useId();

  return (
    <label htmlFor={id} className={styles["checkbox-label"]}>
      <input
        id={id}
        className={styles["checkbox-input"]}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        style={{
          ...sizeStyles[variant],
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        aria-label={label ? undefined : ariaLabel}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
