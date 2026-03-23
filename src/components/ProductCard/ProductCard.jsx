import Badge from '../Badge/Badge';
import Rating from '../Badge/Rating';
import Button from '../Button/Button';
import { IconHeartFilled, IconHeart, IconClose } from '../Icons';

function PriceDisplay({ originalPrice, salePrice, discount }) {
  return (
    <div className="flex flex-col gap-0.5">
      {discount && (
        <div className="flex items-center gap-1">
          <span className="font-kr text-body-14 font-semibold text-[var(--color-text-brand)]">{discount}</span>
          {originalPrice && (
            <span className="font-kr text-body-14 font-regular text-[var(--color-text-subtlest)] line-through">{originalPrice}</span>
          )}
        </div>
      )}
      <span className="font-kr text-body-16 font-semibold text-[var(--color-text-default)]">{salePrice}</span>
    </div>
  );
}

function ProductCardHome({ product, onWishlist }) {
  return (
    <div className="w-[165px] flex flex-col gap-2">
      <div className="relative w-full aspect-square bg-[var(--color-bg-subtlest)] rounded-md overflow-hidden">
        {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover" />}
        <button type="button" onClick={onWishlist} className="absolute top-2 right-2">
          {product.wishlisted
            ? <IconHeartFilled className="w-6 h-6 text-[var(--color-icon-brand)]" />
            : <IconHeart className="w-6 h-6 text-[var(--color-text-subtlest)]" />
          }
        </button>
      </div>
      {product.badge && <Badge label={product.badge} type="default" size="small" />}
      <p className="font-kr text-body-14 font-regular text-[var(--color-text-default)] line-clamp-2">{product.name}</p>
      <PriceDisplay originalPrice={product.originalPrice} salePrice={product.salePrice} discount={product.discount} />
      {product.rating !== undefined && <Rating value={product.rating} color="primary" />}
    </div>
  );
}

function ProductCardList({ product, variant = 'cart', onRemove, onAction, disabled = false }) {
  return (
    <div className={`flex gap-4 p-4 ${disabled ? 'opacity-50' : ''}`}>
      <div className="w-20 h-20 shrink-0 bg-[var(--color-bg-subtlest)] rounded-md overflow-hidden">
        {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover" />}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex items-start justify-between">
          <p className="font-kr text-body-14 font-regular text-[var(--color-text-default)] line-clamp-2 flex-1">{product.name}</p>
          {onRemove && (
            <button type="button" onClick={onRemove} className="shrink-0 ml-2">
              <IconClose className="w-5 h-5 text-[var(--color-text-subtlest)]" />
            </button>
          )}
        </div>
        {product.option && (
          <span className="font-kr text-caption-12 font-regular text-[var(--color-text-subtle)]">{product.option}</span>
        )}
        <PriceDisplay originalPrice={product.originalPrice} salePrice={product.salePrice} discount={product.discount} />
        {variant === 'cart' && product.quantity && (
          <span className="font-kr text-caption-12 font-regular text-[var(--color-text-subtle)]">수량: {product.quantity}</span>
        )}
      </div>
    </div>
  );
}

export default function ProductCard({
  variant = 'home',
  product = {},
  disabled = false,
  onAction,
  onWishlist,
  onRemove,
  className = '',
}) {
  if (variant === 'home') {
    return <ProductCardHome product={product} onWishlist={onWishlist} />;
  }

  return (
    <div className={`border-b border-[var(--color-border-default)] ${className}`}>
      <ProductCardList product={product} variant={variant} onRemove={onRemove} onAction={onAction} disabled={disabled} />
    </div>
  );
}
