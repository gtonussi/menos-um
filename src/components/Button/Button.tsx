import { IButtonProps } from "./Button.types";
import * as S from './Button.styles';

const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  size = "medium",
  variation = "primary",
}) => {
  return (
    <S.ButtonContainer
      disabled={disabled}
      size={size}
      variation={variation}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
