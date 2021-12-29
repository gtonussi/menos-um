import styled, { css } from 'styled-components'
import { IButtonProps } from './Button.types'

const initialStyles = () => css`
  font-size: 12px;
`

const modifiers = {
  variation: {
    primary: () => css`
      background-color: red;
      color: white;
    `,
    secondary: () => css`
      background-color: white;
      color: red;
    `,
  },
  size: {
    small: () => css`
      width: 32px;
    `,
    medium: () => css`
      width: 48px;
    `,
    large: () => css`
      width: 64px;
    `,
  },
};

export const ButtonContainer = styled.button<IButtonProps>`
  ${initialStyles}

  ${({ variation, size }) => css`
    ${variation && modifiers.variation[variation]}
    ${size && modifiers.size[size]}
  `}
`;