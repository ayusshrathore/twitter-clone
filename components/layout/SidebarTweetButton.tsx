import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const onClick = useCallback(() => {
		loginModal.onOpen();
	}, [loginModal]);

	return (
		<div onClick={onClick}>
			<div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 items-center justify-center bg-sky-500 hover:bg-opacity-80 cursor-pointer transition">
				<FaFeather size={24} color="white" />
			</div>
			<div className="hidden mt-6 lg:block px-4 py-2 rounded-full bg-sky-500 hover:opacity-90 cusror-pointer transition">
				<p className="hidden lg:block text-center font-semibold text-white text-[20px]">
					Tweet
				</p>
			</div>
		</div>
	);
};

export default SidebarTweetButton;
