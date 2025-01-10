interface ToggleProps {
  leftLabel: string;
  rightLabel: string;
  isChecked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export const Toggle = ({ leftLabel, rightLabel, isChecked, onChange, disabled }: ToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`text-sm font-medium ${isChecked ? 'text-gray-400' : 'text-white'}`}>
        {leftLabel}
      </span>
      <button
        onClick={onChange}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          disabled ? 'bg-gray-600 cursor-not-allowed' : isChecked ? 'bg-primary' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-medium ${isChecked ? 'text-white' : 'text-gray-400'}`}>
        {rightLabel}
      </span>
    </div>
  );
}; 