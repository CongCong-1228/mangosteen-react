import { Icon } from "@/components/Icon";

export default function SignInPage() {
  return (
    <div h-full className="bg-[var(--primary-color)]" flex flex-col>
      <header min-h-8vh></header>
      <main px-16px flex flex-col items-center justify-center gap-20 flex-1>
        <div flex flex-col items-center justify-center>
          <Icon name="logo" className="h-128px w-128px" />
          <h1 font-700 text-24px className="text-[var(--text-color)]">
            Yolk Accounting
          </h1>
        </div>
        <form action="" w-full flex flex-col gap-28px justify-start>
          <label htmlFor="email" flex items-center gap-8px>
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
                clear-end
                className="w-full p-l-16px p-r-32px p-y-4px rounded-8px border-none outline-none h-14 text-16px font-600 focus:border-[var(--text-color)] focus:border-1 focus:border-solid"
              />
              <span
                absolute
                right-12px
                top-0
                bottom-0
                flex
                items-center
                justify-center
              >
                <Icon
                  name="close"
                  className="w-20px h-20px color-[var(--icon-color)]"
                />
              </span>
            </div>
          </label>
          <label htmlFor="Verification Code" flex items-center gap-8px>
            <div flex items-center justify-center>
              <Icon
                name="verify"
                className="w-34px h-34px color-[var(--icon-color)]"
              />
            </div>
            <div flex items-center relative>
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                placeholder="Verification Code"
                className="w-full p-l-16px p-y-4px p-r-32px rounded-8px border-none outline-none h-14 min-h-48px text-16px font-600 focus:border-[var(--text-color)] focus:border-1 focus:border-solid"
              />
              <span
                absolute
                right-12px
                top-0
                bottom-0
                flex
                items-center
                justify-center
              >
                <Icon
                  name="close"
                  className="w-20px h-20px color-[var(--icon-color)]"
                />
              </span>
            </div>
            <button
              text-12px
              className="text-[var(--text-color)] font-700 h-48px w-2/5 border-1 border-solid border-[var(--text-color)] rounded-8px text-16px"
            >
              Get Code
            </button>
          </label>
        </form>
        <button
          text-16px
          className="text-[var(--text-color)] font-700 h-48px w-full border-none rounded-8px bg-[var(--button-bg-color)]"
        >
          Sign In
        </button>
      </main>
    </div>
  );
}
