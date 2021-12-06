import styled from "styled-components";
import React, { FC, ReactNode } from "react";
import { fonts } from "../../tokens/fonts";

export type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: JSX.Element | JSX.Element[] | ReactNode | string;
  fontSize?: string;
};

const HeadingStyle = styled.div<HeadingProps>`
  font-family: ${fonts.heading};
  line-height: 1.25;
  font-size: ${(props) => props.fontSize};
  color: "darkgrey";
`;

export const Heading: FC<HeadingProps> = ({ as, children, fontSize }) => {
  return (
    <HeadingStyle as={as} fontSize={fontSize}>
      {children}
    </HeadingStyle>
  );
};
