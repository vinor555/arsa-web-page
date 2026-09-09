import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { useId } from 'react';
import { cn } from '@/lib/cn';

const controlStyles =
  'w-full rounded-md border border-steel-200 bg-white px-3.5 py-2.5 text-sm text-petrol-950 transition placeholder:text-steel-400 focus:border-ember-500 focus:ring-2 focus:ring-ember-500/20 focus:outline-none';

interface LabelledProps {
  label: string;
  hint?: string;
  className?: string;
}

export function TextField({
  label,
  hint,
  className,
  id,
  ...props
}: LabelledProps & InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-petrol-900">
        {label}
        {props.required && <span className="ml-1 text-ember-600">*</span>}
      </label>
      <input id={inputId} className={controlStyles} {...props} />
      {hint && <p className="text-xs text-steel-500">{hint}</p>}
    </div>
  );
}

export function TextAreaField({
  label,
  hint,
  className,
  id,
  rows = 4,
  ...props
}: LabelledProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-petrol-900">
        {label}
        {props.required && <span className="ml-1 text-ember-600">*</span>}
      </label>
      <textarea id={inputId} rows={rows} className={cn(controlStyles, 'resize-y')} {...props} />
      {hint && <p className="text-xs text-steel-500">{hint}</p>}
    </div>
  );
}
