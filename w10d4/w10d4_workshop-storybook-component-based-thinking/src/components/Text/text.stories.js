import Text from "./index";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Text",
  component: Text,
};

export const text = () => {
  return <Text text="hello" color="blue" />;
};
