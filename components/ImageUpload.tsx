import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
	onChange: (base64: string) => void;
	label: string;
	value?: string;
	disabled?: boolean;
}

const ImageUpload: FC<ImageUploadProps> = ({
	onChange,
	label,
	value,
	disabled,
}) => {
	const [base64, setBase64] = useState(value);

	const handleChange = useCallback(
		(base64: string) => {
			onChange(base64);
		},
		[onChange]
	);

	const handleDrop = useCallback(
		(files: any) => {
			const file = files[0];
			const reader = new FileReader();

			reader.onload = (e: any) => {
				setBase64(e.target.result as string);
				handleChange(e.target.result as string);
			};

			reader.readAsDataURL(file);
		},
		[handleChange]
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: handleDrop,
		maxFiles: 1,
		disabled,
		accept: {
			"image/png": [],
			"image/jpeg": [],
		},
	});

	return (
		<div
			{...getRootProps({
				className:
					"w-full p-8 text-white text-center border-2 border-dotted rounded-md border-neutral-700 cursor-pointer hover:border-neutral-500 transition",
			})}
		>
			<input {...getInputProps()} />
			{base64 ? (
				<div className="flex items-center justify-center">
					<Image src={base64} width={100} height={100} alt="Uploaded image" />
				</div>
			) : (
				<p className="text-white">{label}</p>
			)}
		</div>
	);
};

export default ImageUpload;
