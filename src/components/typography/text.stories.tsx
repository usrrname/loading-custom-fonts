import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text as TextComponent, TextProps } from "./text";

export default {
  title: "Tokens/Text",
  component: TextComponent,
} as ComponentMeta<typeof TextComponent>;

const Template = (args: TextProps) => <TextComponent {...args} />;

export const Text: ComponentStory<typeof TextComponent> = Template.bind({});

Text.args = {
  children: "The quick brown fox jumps over the lazy dog.",
};
