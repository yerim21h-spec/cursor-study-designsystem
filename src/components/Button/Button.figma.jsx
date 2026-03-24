import figma from "@figma/code-connect";
import Button from "./Button";

figma.connect(Button, "https://www.figma.com/design/YiJtQZ1q1hrXXW1v9OnNnX/?node-id=148-2428", {
  props: {
    label: figma.string("Label"),
    variant: figma.enum("Variant", {
      Primary: "primary",
      Outline: "outline",
    }),
    size: figma.enum("Size", {
      Default: "default",
      Medium: "medium",
      Small: "small",
    }),
    disabled: figma.boolean("Disabled"),
  },
  example: (props) => (
    <Button
      label={props.label}
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
    />
  ),
});
