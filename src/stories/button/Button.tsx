import styles from "./button.module.css";
export interface ButtonProps {
  mode?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  mode = "primary",
  size = "medium",
  label,
  onClick = () => {},
  disabled = false,
}: ButtonProps) => {
  const getButtonStyles = () => {
    let arr = [
      styles["storybook-button"],
      styles[`storybook-button--${size}`],
      styles[`storybook-button--${mode}`],
    ];
    if (disabled) {
      arr.push(styles["disabled"]);
    }
    return arr.join(" ");
  };

  const buttonStyles = getButtonStyles();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles}
    >
      {label}
    </button>
  );
};
