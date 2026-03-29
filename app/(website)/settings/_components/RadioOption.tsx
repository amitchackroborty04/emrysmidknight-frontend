"use client";

type RadioOptionProps = {
  label: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
};

export function RadioOption({ label, value, selected, onChange }: RadioOptionProps) {
  const isSelected = selected === value;

  return (
    <label onClick={() => onChange(value)} className="flex items-center gap-2.5 cursor-pointer">
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
          isSelected ? "border-[color:var(--accent)]" : "border-[color:var(--border)]"
        }`}
      >
        {isSelected && <span className="w-2 h-2 rounded-full bg-[color:var(--accent)] block" />}
      </span>
      <span className="text-sm text-[color:var(--text-primary)]">{label}</span>
    </label>
  );
}
