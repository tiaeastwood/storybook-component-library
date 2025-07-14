import styles from "./toggle.module.css";

interface ToggleProps {
  checked: boolean;
  onChange: (event: any) => void;
  disabled?: boolean;
  label?: string;
  labelLeft?: boolean;
}

export default function ToggleSwitch({
  checked,
  onChange,
  disabled,
  label,
  labelLeft,
}: ToggleProps) {
  const labelStyles = `${styles["toggle-label"]} ${
    disabled ? styles.disabled : ""
  }`.trim();

  return (
    <label className={labelStyles}>
      {label && labelLeft && <span>{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={styles["visually-hidden"]}
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
