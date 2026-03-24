import figma from "@figma/code-connect";
import Footer from "./Footer";

figma.connect(Footer, "https://www.figma.com/design/YiJtQZ1q1hrXXW1v9OnNnX/?node-id=246-7284", {
  props: {
    state: figma.enum("State", {
      Default: "default",
      Open: "open",
    }),
  },
  example: (props) => (
    <Footer
      state={props.state}
      links={[
        { label: "회사소개", href: "#" },
        { label: "이용약관", href: "#" },
        { label: "개인정보처리방침", href: "#" },
        { label: "이용안내", href: "#" },
      ]}
      companyInfo="COPYRIGHT © 땡스킴 thanks_kim. ALL RIGHTS RESERVED."
    />
  ),
});
