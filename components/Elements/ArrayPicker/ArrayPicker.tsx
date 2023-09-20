import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { InputWrapper, InputWrapperPassThroughProps } from "../Input";

type ValueType = string | number;

type ArrayPickerProps = {
    options: ValueType[];
    value: ValueType;
    onChange: React.Dispatch<React.SetStateAction<ValueType>>;
    className?: string;
} & InputWrapperPassThroughProps
//TODO: label
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
        <InputWrapper label={label} description={description} error={error}>
            <div className={twMerge('flex flex-row flex-wrap gap-1', className)}>
                {options.map((val, index) => (
                    <Button
                        key={`${val}` + index}
                        size='md'
                        variant={value === val ? 'default' : 'outline'}
                        onClick={() => onChange(val)}
                        className='w-fit'
                    >
                        {val}
                    </Button>
                ))}
            </div>
        </InputWrapper>
    )
}