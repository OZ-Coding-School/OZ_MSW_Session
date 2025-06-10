import FullLogo from "../../assets/logos/FullLogo.png";
import { useUserInfo } from "../../contexts/UserContext";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../_common/buttons";
import { CustomModal } from "../_common/modal";
import { UserCard } from "../_common/userCard";
import LoginForm from "../login/Login.Form";

export const Navbar = () => {
  const LoginModal = useModal();
  const { userInfo } = useUserInfo();
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
      {userInfo.isLoggedIn ? (
        <UserCard userInfo={userInfo} />
      ) : (
        <CustomButton mode="button" onClick={LoginModal.openModal}>
          로그인
        </CustomButton>
      )}

      <CustomModal onClose={LoginModal.closeModal} isOpen={LoginModal.isOpen}>
        <LoginForm onClose={LoginModal.closeModal} />
      </CustomModal>
    </nav>
  );
};
