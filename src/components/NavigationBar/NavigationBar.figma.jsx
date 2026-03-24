import figma from "@figma/code-connect";
import NavigationBar from "./NavigationBar";

figma.connect(NavigationBar, "https://www.figma.com/design/YiJtQZ1q1hrXXW1v9OnNnX/?node-id=148-2347", {
  props: {
    state: figma.enum("State", {
      Home: "home",
      Default: "default",
    }),
    variant: figma.enum("Variant", {
      Default: "default",
      "Only text": "onlyText",
    }),
    title: figma.string("Title"),
  },
  example: (props) => (
    <NavigationBar
      state={props.state}
      variant={props.variant}
      title={props.title}
    />
  ),
});
