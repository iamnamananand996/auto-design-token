import React, { useState, useRef, useEffect } from 'react';
import '../../styles.css';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  className = '',
  size = 'medium',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update internal state when prop value changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  // CSS classes
  const dropdownClasses = ['dropdown', className].filter(Boolean).join(' ');
  
  const triggerClasses = [
    'dropdown-trigger',
    `btn-${size}`,
    disabled ? 'dropdown-trigger-disabled' : '',
  ].filter(Boolean).join(' ');
  
  const menuClasses = [
    'dropdown-menu',
    `btn-${size}`,
  ].filter(Boolean).join(' ');

  const getItemClasses = (option: DropdownOption) => [
    'dropdown-item',
    option.value === selectedValue ? 'dropdown-item-selected' : 'dropdown-item-hover',
  ].join(' ');

  return (
    <div className={dropdownClasses} ref={dropdownRef}>
      <button
        type="button"
        className={triggerClasses}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={!selectedOption ? 'text-gray-400' : ''}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={menuClasses} role="listbox">
          {options.map((option) => (
            <div
              key={option.value}
              className={getItemClasses(option)}
              role="option"
              aria-selected={option.value === selectedValue}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 