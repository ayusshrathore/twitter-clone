import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { IconType } from "react-icons";
import { BsDot } from "react-icons/bs";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, href, icon: Icon, onClick, auth, alert }) => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      return loginModal.onOpen();
    }
    router.push(href!);
  }, [onClick, router, href, auth, currentUser, loginModal]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
        {alert && <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert && <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />}
      </div>
    </div>
  );
};

export default SidebarItem;
