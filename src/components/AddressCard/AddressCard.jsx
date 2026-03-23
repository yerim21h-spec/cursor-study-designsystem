import Badge from '../Badge/Badge';
import Button from '../Button/Button';

export default function AddressCard({
  name = '',
  address = '',
  phone = '',
  isDefault = false,
  onEdit,
  onDelete,
  className = '',
}) {
  return (
    <div className={`p-6 bg-[var(--color-bg-default)] border border-[var(--color-border-default)] rounded-lg font-kr ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-body-16 font-semibold text-[var(--color-text-default)]">{name}</span>
        {isDefault && <Badge label="기본 배송지" type="default" size="small" />}
      </div>

      <p className="text-body-14 font-regular text-[var(--color-text-default)] mb-1">{address}</p>
      {phone && (
        <p className="text-body-14 font-regular text-[var(--color-text-subtle)] mb-4">{phone}</p>
      )}

      <div className="flex items-center gap-2">
        <Button label="수정" variant="outline" size="small" onClick={onEdit} />
        {!isDefault && <Button label="삭제" variant="outline" size="small" onClick={onDelete} />}
      </div>
    </div>
  );
}
