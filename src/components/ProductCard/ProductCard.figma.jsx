import figma from "@figma/code-connect";
import ProductCard from "./ProductCard";

figma.connect(ProductCard, "https://www.figma.com/design/YiJtQZ1q1hrXXW1v9OnNnX/?node-id=286-8650", {
  props: {
    variant: figma.enum("Property", {
      Home: "home",
      Cart: "cart",
      Purchase: "purchase",
      "Order history": "order",
      Wishlist: "wishlist",
      Review_product: "review",
    }),
    productName: figma.string("Product name"),
    brand: figma.string("Brand"),
    discount: figma.string("Discount"),
    discountPercent: figma.string("Discount percent"),
    price: figma.string("Price"),
    showBadge: figma.boolean("Show badge"),
    disabled: figma.boolean("State", {
      true: false,
      false: true,
    }),
  },
  example: (props) => (
    <ProductCard
      variant={props.variant}
      product={{
        name: props.productName,
        badge: props.brand,
        originalPrice: props.discount,
        salePrice: props.price,
        discount: props.discountPercent,
      }}
      disabled={props.disabled}
    />
  ),
});
