import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import Input from "../Input";
import Modal from "./Modal";

const RegisterModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		registerModal.onClose();
		loginModal.onOpen();
	}, [isLoading, loginModal, registerModal]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			await axios.post("/api/register", {
				email,
				password,
				name,
				username,
			});

			toast.success("Account created.");
			signIn("credentials", {
				email,
				password,
			});

			registerModal.onClose();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong.");
		} finally {
			setIsLoading(false);
		}
	}, [registerModal, email, password, name, username]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disabled={isLoading}
			/>
			<Input
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				disabled={isLoading}
			/>
			<Input
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
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
			<p>Already have an account?</p>
			<span
				onClick={onToggle}
				className="text-white cursor-pointer hover:underline"
			>
				{" "}
				Sign in
			</span>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Create an account"
			actionLabel="Register"
			body={bodyContent}
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
