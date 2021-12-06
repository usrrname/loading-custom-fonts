import styled from "styled-components";
import React, { FC, ReactNode } from "react";
import { fonts } from "../../tokens/fonts";

type HeadingElementTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  as: HeadingElementTags;
  children: JSX.Element | JSX.Element[] | ReactNode | string;
};

const HeadingStyle = styled.div<HeadingProps>`
  font-family: ${fonts.heading};
  line-height: 1.25;
  color: "darkgrey";
`;

export const Heading: FC<HeadingProps> = ({ as, children }) => {
  return <HeadingStyle as={as}>{children}</HeadingStyle>;
};
