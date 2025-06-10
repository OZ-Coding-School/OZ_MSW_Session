import FullLogo from "../../assets/logos/FullLogo.png";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../_common/buttons";
import { CustomModal } from "../_common/modal";

import LoginForm from "../login/Login.Form";

export const Navbar = () => {
  const LoginModal = useModal();

  return (
    <nav className="fixed top-0 right-0 left-0 w-full h-20 flex justify-between items-center px-10 shadow-md bg-white">
      <div className="h-full py-3">
        <img
          src={FullLogo}
          alt="POSTS 로고"
          width={219}
          height={93}
          className="h-full w-full object-fit"
        />
      </div>
      <CustomButton mode="button" onClick={() => LoginModal.setIsOpen(true)}>
        로그인
      </CustomButton>
      {LoginModal.isOpen && (
        <CustomModal onClose={() => LoginModal.setIsOpen(false)}>
          <LoginForm onClose={() => LoginModal.setIsOpen(false)} />
        </CustomModal>
      )}
    </nav>
  );
};
