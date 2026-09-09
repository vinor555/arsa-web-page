import { cn } from '@/lib/cn';
import type { ServiceCategory, ServiceCategoryId } from '@/data/services';

export type CategoryFilterValue = ServiceCategoryId | 'todos';

interface CategoryFilterProps {
  categories: ServiceCategory[];
  countByCategory: Record<ServiceCategoryId, number>;
  total: number;
  value: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
}

/** Filtros del catálogo. Se comportan como pestañas accesibles por teclado. */
export function CategoryFilter({
  categories,
  countByCategory,
  total,
  value,
  onChange,
}: CategoryFilterProps) {
  const options: Array<{ id: CategoryFilterValue; label: string; count: number }> = [
    { id: 'todos', label: 'Todos', count: total },
    ...categories.map((category) => ({
      id: category.id as CategoryFilterValue,
      label: category.shortLabel,
      count: countByCategory[category.id],
    })),
  ];

  return (
    <div role="tablist" aria-label="Categorías de servicio" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.id === value;

        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition',
              isActive
                ? 'border-ember-500 bg-ember-500 text-white'
                : 'border-steel-200 bg-white text-steel-600 hover:border-steel-300 hover:text-petrol-900',
            )}
          >
            {option.label}
            <span
              className={cn(
                'text-xs tabular-nums',
                isActive ? 'text-white/70' : 'text-steel-400',
              )}
            >
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
