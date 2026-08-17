import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
  className,
}: FormFieldProps) {
  const errorId = error ? `${htmlFor}-error` : undefined;
  const hintId = hint ? `${htmlFor}-hint` : undefined;

  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground">
        {label}
        {required && (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClasses =
  "w-full rounded-xl border bg-surface px-4 py-3.5 text-base text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 min-h-[48px]";

export function getInputClassName(hasError?: boolean): string {
  return cn(
    inputClasses,
    hasError
      ? "border-red-500/60 focus:border-red-500"
      : "border-border focus:border-accent",
  );
}

type RadioGroupProps = {
  name: string;
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
  hasError?: boolean;
};

export function RadioGroup({
  name,
  value,
  options,
  onChange,
  hasError,
}: RadioGroupProps) {
  return (
    <div
      className={cn(
        "grid gap-2 sm:grid-cols-3",
        hasError && "rounded-xl ring-1 ring-red-500/40",
      )}
      role="radiogroup"
    >
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        const isSelected = value === option.value;

        return (
          <label
            key={option.value}
            htmlFor={id}
            className={cn(
              "flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition-all duration-200",
              isSelected
                ? "border-accent bg-accent/10 text-foreground"
                : "border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground",
            )}
          >
            <input
              type="radio"
              id={id}
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}
