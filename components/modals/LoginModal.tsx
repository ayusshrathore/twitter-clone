import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "./Modal";

const LoginModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		loginModal.onClose();
		registerModal.onOpen();
	}, [isLoading, loginModal, registerModal]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			await signIn("credentials", {
				email,
				password,
			});
			loginModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [loginModal, email, password]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disabled={isLoading}
			/>
			<Input
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				disabled={isLoading}
				type="password"
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>Don't have an account?</p>
			<span
				onClick={onToggle}
				className="text-white cursor-pointer hover:underline"
			>
				{" "}
				Create an account
			</span>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
			actionLabel="Sign in"
			body={bodyContent}
			onClose={loginModal.onClose}
			onSubmit={onSubmit}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
