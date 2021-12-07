import React from "react";
import styled from "styled-components";
import { fonts } from "../../tokens/fonts";

export type TextProps = {
  color?: string;
  ref?: any;
};

export const TextStyle = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-family: ${fonts.body};
  line-height: 1.4;
`;

export const Text: React.FC<TextProps> = React.forwardRef(
  ({ color, ...rest }, ref: any) => {
    return <TextStyle color={color} {...rest} ref={ref} />;
  }
);
