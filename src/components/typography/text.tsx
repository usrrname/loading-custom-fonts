import React from "react";
import styled from "styled-components";
import { fonts } from "../../tokens/fonts";

export type TypeProps = {
  fontWeight?: "bold" | "regular" | "semibold";
  color?: string;
  ref?: any;
};

export const TextStyle = styled.p<TypeProps>`
  color: ${(props) => props.color};
  font-family: ${fonts.body};
  line-height: 1.4;
`;

export const Text: React.FC<TypeProps> = React.forwardRef(
  ({ color, ...rest }, ref: any) => {
    return <TextStyle color={color} {...rest} ref={ref} />;
  }
);
