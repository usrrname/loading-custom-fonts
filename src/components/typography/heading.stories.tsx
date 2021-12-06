import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading as HeadingComponent, HeadingProps } from "./heading";

export default {
  title: "Tokens/Heading",
  component: HeadingComponent,
} as ComponentMeta<typeof HeadingComponent>;

const Template = (args: HeadingProps) => <HeadingComponent {...args} />;

export const Heading: ComponentStory<typeof HeadingComponent> = Template.bind(
  {}
);

Heading.args = {
  as: "h1",
  fontSize: "2rem",
  children: "Heading Component",
};
