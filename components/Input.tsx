import { FC } from "react";

interface InputProps {
	placeholder?: string;
	value?: string;
	type?: string;
	disabled?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
	placeholder,
	value,
	type,
	disabled,
	onChange,
}) => {
	return (
		<input
			disabled={disabled}
			onChange={onChange}
			value={value}
			type={type}
			placeholder={placeholder}
			className="w-full p-4 text-lg bg-black border-2 border-neutral-800 outline-none text-white focus:border-sky-500 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
		/>
	);
};

export default Input;
