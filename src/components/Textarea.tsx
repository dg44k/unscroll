import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || props.name;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-black text-[#0c0d1c] uppercase tracking-wider flex items-center gap-1.5"
        >
          {icon && <span className="text-[#0c0d1c]/60">{icon}</span>}
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full px-4 py-3 bg-[#F8FAFF] rounded-xl border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] font-bold text-sm text-[#0c0d1c] placeholder:text-[#0c0d1c]/40 focus:outline-none focus:bg-white focus:shadow-[0_6px_0_0_#FF007A] transition-all resize-y min-h-[110px] ${
          error ? 'border-red-500 shadow-[0_4px_0_0_#ef4444]' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-bold text-red-600">{error}</span>}
    </div>
  );
};
