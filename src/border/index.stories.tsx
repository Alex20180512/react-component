import { StoryObj, type Meta } from "@storybook/react";
import { StreamerBorder } from ".";

const meta = {
  title: "component/StreamerBorder",
  component: StreamerBorder,
  tags: ["autodocs"],
} satisfies Meta<typeof StreamerBorder>;

export default meta;
type Story = StoryObj<Meta<typeof StreamerBorder>>;

export const Primary: Story = {};
