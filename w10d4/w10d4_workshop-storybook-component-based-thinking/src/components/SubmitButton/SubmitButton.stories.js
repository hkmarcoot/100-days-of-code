import SubmitButton from "./index";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Submit Button",
  component: SubmitButton,
};

export const button = () => {
  return (
    <>
      <SubmitButton
        handleSubmit={() => {
          console.log("Submitted");
        }}
      />
    </>
  );
};
