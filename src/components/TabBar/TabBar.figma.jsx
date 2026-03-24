import figma from "@figma/code-connect";
import TabBar from "./TabBar";

figma.connect(TabBar, "https://www.figma.com/design/YiJtQZ1q1hrXXW1v9OnNnX/?node-id=286-7095", {
  props: {
    activeTab: figma.enum("Active", {
      Home: "home",
      Brand: "brand",
      MY: "my",
      Menu: "menu",
    }),
  },
  example: (props) => (
    <TabBar
      activeTab={props.activeTab}
      tabs={["home", "brand", "my", "menu"]}
    />
  ),
});
