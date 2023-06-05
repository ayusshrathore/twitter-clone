import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ImageUpload from "../ImageUpload";
import Input from "../Input";
import Modal from "./Modal";

const EditModal = () => {
	const { data: currentUser } = useCurrentUser();
	const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
	const editModal = useEditModal();

	const [profileImage, setProfileImage] = useState("");
	const [coverImage, setCoverImage] = useState("");
	const [name, setName] = useState("");
	const [bio, setBio] = useState("");
	const [username, setUsername] = useState("");

	useEffect(() => {
		if (!currentUser) return;

		setProfileImage(currentUser?.profileImage);
		setCoverImage(currentUser?.coverImage);
		setName(currentUser?.name);
		setBio(currentUser?.bio);
		setUsername(currentUser?.username);
	}, [
		currentUser?.name,
		currentUser?.bio,
		currentUser?.username,
		currentUser?.profileImage,
		currentUser?.coverImage,
	]);

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			await axios.patch("/api/edit", {
				name,
				username,
				bio,
				profileImage,
				coverImage,
			});
			mutateFetchedUser();
			toast.success("Profile updated.");
			editModal.onClose();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong.");
		} finally {
			setIsLoading(false);
		}
	}, [
		editModal,
		bio,
		profileImage,
		name,
		username,
		coverImage,
		mutateFetchedUser,
	]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<ImageUpload
				value={profileImage}
				disabled={isLoading}
				onChange={(image) => setProfileImage(image)}
				label="Upload profile Image"
			/>
			<ImageUpload
				value={coverImage}
				disabled={isLoading}
				onChange={(image) => setCoverImage(image)}
				label="Upload cover Image"
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
				placeholder="Bio"
				value={bio}
				onChange={(e) => setBio(e.target.value)}
				disabled={isLoading}
			/>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={editModal.isOpen}
			onClose={editModal.onClose}
			title="Edit Profile"
			actionLabel="Save"
			onSubmit={onSubmit}
			body={bodyContent}
		/>
	);
};

export default EditModal;
