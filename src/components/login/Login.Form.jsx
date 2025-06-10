import { memo, useCallback, useEffect, useRef, useState } from "react";
import { CustomButton } from "../_common/buttons";
import { LoginInputConfigs } from "./config";
import FormInput from "../_common/inputs/FormInput";
import LoginLogo from "../../assets/logos/POSTS.png";
import { login } from "../../api/auth/auth";

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validate = useCallback((values) => {
    const errors = { email: "", password: "" };

    if (!values.email) {
      errors.email = "이메일을 입력해주세요.";
    }
    if (!values.password) {
      errors.password = "비밀번호를 입력해주세요.";
    }
    return errors;
  }, []);
  const handleTouched = (event) => {
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));
  };
  const handleFormData = useCallback(
    (event) => {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    [setFormData]
  );

  useEffect(() => {
    const runValidate = () => validate(formData);
    const error = runValidate();
    setError(error);
  }, [validate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate(formData);
    setTouched(
      Object.keys(formData).reduce((touched, field) => {
        touched[field] = true;
        return touched;
      })
    );
    setError(errors);
    if (Object.values(errors).some((v) => v)) {
      return;
    }

    await login(formData);
    onClose();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative min-w-72 min-h-96 my-12 mx-10 flex flex-col items-center justify-center"
    >
      <img
        src={LoginLogo}
        alt="login-logo"
        width={255}
        height={80}
        className="absolute -top-20 max-w-48 left-12"
      />
      <div className="w-full flex flex-col justify-between items-stretch pb-4">
        {LoginInputConfigs.map((props, idx) => (
          <FormInput
            key={`${props.name}-${idx}`}
            {...props}
            value={formData[props.name]}
            onChange={handleFormData}
            onBlur={handleTouched}
            error={touched[props.name] ? error[props.name] : ""}
          />
        ))}
      </div>
      <CustomButton mode="button">로그인</CustomButton>
    </form>
  );
};

export default memo(LoginForm);
