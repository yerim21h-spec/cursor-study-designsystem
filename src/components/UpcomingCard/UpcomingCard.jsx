export default function UpcomingCard({
  image,
  date = '',
  brand = '',
  productName = '',
  discount = '',
  salePrice = '',
  originalPrice = '',
  className = '',
}) {
  return (
    <div
      className={`relative flex flex-col items-start justify-end overflow-hidden rounded-lg px-6 py-7 w-[284px] h-[379px] shrink-0 ${className}`}
    >
      {image && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-lg">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <img alt="" className="absolute h-full left-0 top-0 w-full object-cover" src={image} />
          </div>
          <div className="absolute inset-0 rounded-lg bg-[var(--color-bg-dim)]" />
        </div>
      )}

      {date && (
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-kr text-header-28 font-semibold text-[var(--color-text-inverse)] text-center whitespace-nowrap">
          {date}
        </p>
      )}

      <div className="relative flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-3 w-[145px] leading-normal">
          <span className="font-kr text-caption-12 font-semibold leading-normal text-[var(--color-text-inverse)]">
            {brand}
          </span>
          <span className="font-kr text-body-14 font-regular text-[var(--color-text-inverse)] truncate">
            {productName}
          </span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <span className="font-kr text-body-16 font-semibold text-[var(--color-text-brand-subtlest)]">
              {discount}
            </span>
            <span className="font-kr text-body-16 font-bold text-[var(--color-text-inverse)]">
              {salePrice}
            </span>
          </div>
          {originalPrice && (
            <span className="font-kr text-caption-12 font-medium leading-normal text-[var(--color-text-subtlest)] line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
