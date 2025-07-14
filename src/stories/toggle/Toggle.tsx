import styles from "./toggle.module.css";
import { useId } from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  labelLeft?: boolean;
  ariaLabel?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  label,
  labelLeft,
  ariaLabel = "toggle",
}: ToggleProps) {
  const labelStyles = `${styles["toggle-label"]} ${
    disabled ? styles.disabled : ""
  }`.trim();

  const id = useId();

  return (
    <label htmlFor={id} className={labelStyles}>
      {label && labelLeft && <span>{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={styles["visually-hidden"]}
        aria-label={label ? undefined : ariaLabel}
      />
      <span
        className={styles["toggle-outer"]}
        style={{
          background: checked ? "#4caf50" : "#ccc",
        }}
      >
        <span
          className={styles["toggle-inner"]}
          style={{
            left: checked ? 20 : 2,
          }}
        />
      </span>
      {label && !labelLeft && <span>{label}</span>}
    </label>
  );
}
