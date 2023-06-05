import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";

interface AvatarProps {
	userId: string;
	isLarge?: boolean;
	hasBorder?: boolean;
}

const Avatar: FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
	const { data: fetchedUser } = useUser(userId);
	const router = useRouter();

	const onClick = useCallback(
		(event: any) => {
			event.stopPropagation();
			const url = `/users/${userId}`;
			router.push(url);
		},
		[router, userId]
	);

	return (
		<div
			className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "w-32 h-32" : "w-12 h-12"}
        rounded-full 
        cursor-pointer
        hover:opacity-90 
        transition
        relative
      `}
		>
			<Image
				fill
				style={{ objectFit: "cover", borderRadius: "100%" }}
				src={fetchedUser?.profileImage || "/images/placeholder.png"}
				alt="Avatar"
				onClick={onClick}
			/>
		</div>
	);
};

export default Avatar;
