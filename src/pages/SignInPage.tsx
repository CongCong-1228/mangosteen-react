import { Icon } from "@/components/common/Icon";
import { http } from "@/request/http";
import {
  validate,
  hasError,
  FormError,
  Rule,
  Rules,
  Data,
} from "@/utils/validate";
import { FormEvent, FormEventHandler, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  code: string;
};

const rules: Rules<FormData> = [
  { key: "email", type: "required", message: "Email is required" },
  {
    key: "email",
    type: "pattern",
    regex: /^.+@.+$/,
    message: "Email address format is incorrect",
  },
  {
    key: "code",
    type: "required",
    message: "Verification Code is required",
  },
  {
    key: "code",
    type: "length",
    min: 6,
    max: 6,
    message: "Verification Code must be 6 digits",
  },
];

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });
  const [errors, setErrors] = useState<FormError<typeof formData>>({
    email: [],
    code: [],
  });
  const nav = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const validationErrors = validate(formData, rules);
    setErrors(validationErrors);
    if (!hasError(validationErrors)) {
      try {
        const { data } = await http.post("/api/v1/session", formData);
        console.log("submit", data);
        if (data.code === 0) {
          // TODO: 保存jwt作为登录凭证
          localStorage.setItem("jwt", data.data.jwt);
          nav("/");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const validateData = (key: keyof typeof formData) => {
    const filterRules = rules.filter((rule) => rule.key === key);
    const filterErrors = validate(formData, filterRules);
    setErrors({ ...errors, [key]: filterErrors[key] });
  };

  const clearFormData = (
    e: MouseEvent<HTMLDivElement>,
    key: keyof typeof formData
  ) => {
    e.preventDefault();
    setFormData({ ...formData, [key]: "" });
  };

  const handleGetCode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateData("email");
    if (errors.email?.[0]) {
      return;
    }
    // TODO: 发送验证码
    console.log("get code");
  };

  return (
    <div h-screen className="bg-[var(--primary-color)]" flex flex-col>
      <header min-h-8vh></header>
      <main px-16px flex flex-col items-center justify-start gap-20 flex-1>
        <div flex flex-col items-center justify-center>
          <Icon name="logo" className="h-128px w-128px" />
          <h1 font-700 text-24px className="text-[var(--text-color)]">
            Yolk Accounting
          </h1>
        </div>
        <form
          action=""
          w-full
          flex
          flex-col
          gap-28px
          justify-start
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" flex items-center gap-8px relative>
            <div flex items-center justify-center>
              <Icon
                name="email"
                className="w-34px h-34px color-[var(--icon-color)]"
              />
            </div>
            <div flex items-center relative w-full>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={() => validateData("email")}
                className="w-full p-l-16px p-r-32px p-y-4px rounded-8px border-none outline-none h-14 text-16px font-600 focus:border-[var(--text-color)] focus:border-1 focus:border-solid"
              />
              {formData.email && (
                <span
                  absolute
                  right-12px
                  top-0
                  bottom-0
                  flex
                  items-center
                  justify-center
                  onMouseDown={(e) =>
                    clearFormData(e as MouseEvent<HTMLDivElement>, "email")
                  }
                >
                  <Icon
                    name="close"
                    className="w-20px h-20px color-[var(--icon-color)]"
                  />
                </span>
              )}
            </div>
            <span
              text-12px
              className="text-[var(--error-color)]"
              absolute
              bottom--20px
              left-44px
            >
              {errors.email?.[0]}
            </span>
          </label>

          <label htmlFor="Verification Code" flex items-center gap-8px relative>
            <div flex items-center justify-center>
              <Icon
                name="verify"
                className="w-34px h-34px color-[var(--icon-color)]"
              />
            </div>
            <div flex items-center relative>
              <input
                type="text"
                id="code"
                name="code"
                placeholder="Verification Code"
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                onBlur={() => validateData("code")}
                className="w-full p-l-16px p-y-4px p-r-32px rounded-8px border-none outline-none h-14 min-h-48px text-16px font-600 focus:border-[var(--text-color)] focus:border-1 focus:border-solid flex-1"
              />

              {formData.code && (
                <span
                  absolute
                  right-12px
                  top-0
                  bottom-0
                  flex
                  items-center
                  justify-center
                  onMouseDown={(e) =>
                    clearFormData(e as MouseEvent<HTMLDivElement>, "code")
                  }
                >
                  <Icon
                    name="close"
                    className="w-20px h-20px color-[var(--icon-color)]"
                  />
                </span>
              )}
            </div>
            <button
              text-12px
              className="text-[var(--text-color)] font-700 h-48px w-2/5 border-1 border-solid border-[var(--text-color)] rounded-8px text-16px"
              onClick={handleGetCode}
            >
              Get Code
            </button>
            <span
              text-12px
              className="text-[var(--error-color)]"
              absolute
              bottom--20px
              left-44px
            >
              {errors.code?.[0]}
            </span>
          </label>
          <button
            text-16px
            className="text-[var(--text-color)] font-700 h-48px w-full border-none rounded-8px bg-[var(--button-bg-color)]"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
