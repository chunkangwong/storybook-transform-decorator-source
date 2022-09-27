import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  active: true,
  children: "Active",
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  children: "Inactive",
};
