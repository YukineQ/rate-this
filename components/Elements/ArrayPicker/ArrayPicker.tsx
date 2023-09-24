import { twMerge } from "tailwind-merge";
import { FieldError } from "react-hook-form";

import { Button } from "../Button";

type ValueType = string | number;

type ArrayPickerProps = {
    options: ValueType[];
    value: ValueType;
    onChange: React.Dispatch<React.SetStateAction<ValueType>>;
    className?: string;
    label?: string;
    description?: string;
    error?: FieldError | undefined;
}

export const ArrayPicker = ({
    options,
    value,
    onChange,
    className,
    label,
    description,
    error
}: ArrayPickerProps) => {
    return (
        <fieldset>
            <legend className="block text-sm font-medium leading-none">{label}</legend>
            <div className={twMerge('flex flex-row flex-wrap gap-1 my-1.5', className)}>
                {options.map((val, index) => (
                    <label key={`${val}` + index}>
                        <Button
                            size='md'
                            variant={value === val ? 'default' : 'outline'}
                            onClick={() => onChange(val)}
                            className='w-fit'
                        >
                            {val}
                        </Button>
                    </label>
                ))}
            </div>
            {description && (
                <div role='contentinfo' aria-label={description} className='text-xs text-gray-500'>
                    {description}
                </div>
            )}
            {error?.message && (
                <div role='alert' aria-label={error.message} className='text-xs leading-none font-medium text-red-500'>
                    {error.message}
                </div>
            )}
        </fieldset>
    )
}