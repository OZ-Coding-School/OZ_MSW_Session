import FullLogo from "../../assets/logos/FullLogo.png";
import Button from "../_common/buttons/Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 w-full h-20 flex justify-between items-center px-10 shadow-md z-50 bg-white">
      <div className="h-full py-3">
        <img
          src={FullLogo}
          alt="POSTS 로고"
          width={219}
          height={93}
          className="h-full w-full object-fit"
        />
      </div>
      <Button mode="button">로그인</Button>
    </nav>
  );
};
