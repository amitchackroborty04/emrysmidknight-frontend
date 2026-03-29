"use client";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      className={`relative w-11 h-6 rounded-full border-0 cursor-pointer transition-colors duration-200 shrink-0 ${
        checked ? "bg-[color:var(--accent)]" : "bg-[color:var(--border)]"
      }`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200 ${
          checked ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}
