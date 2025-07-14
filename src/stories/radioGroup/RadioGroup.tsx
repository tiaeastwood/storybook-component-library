import styles from "./radioGroup.module.css";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  direction?: "row" | "column";
  ariaLabel?: string;
}

export default function RadioGroup({
  name,
  options,
  value,
  onChange,
  disabled = false,
  direction = "column",
  ariaLabel = "radio group",
}: RadioGroupProps) {
  return (
    <div
      className={styles["radiogroup"]}
      style={{ flexDirection: direction }}
      role="radiogroup"
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <label
          className={styles["radiogroup-label"]}
          key={option.value}
          style={{
            cursor: disabled || option.disabled ? "not-allowed" : "pointer",
            opacity: disabled || option.disabled ? 0.6 : 1,
          }}
        >
          <input
            className={styles["radiogroup-input"]}
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            disabled={disabled || option.disabled}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
