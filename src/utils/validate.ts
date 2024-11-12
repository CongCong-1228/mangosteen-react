interface Data {
  [key: string]: JSONValue;
}

type Rule<T> = {
  key: keyof T;
  message: string;
} & (
  | { type: "required" }
  | { type: "pattern"; regex: RegExp }
  | { type: "custom"; custom: (value: JSONValue) => boolean }
  | { type: "length"; min?: number; max?: number }
);

type Rules<T> = Rule<T>[];

type FormError<T> = {
  [key in keyof T]?: string[];
};

export type { Rules, Rule, Data, FormError };

// 校验表单
export const validate = <T extends Data>(
  formData: T,
  rules: Rules<T>
): FormError<T> => {
  const error: FormError<T> = {};
  for (const rule of rules) {
    const { key, message, type } = rule;
    // formData = {
    //   username: "123",
    //   password: "123"
    // }
    const value = formData[key];
    switch (type) {
      case "required":
        if (isEmpty(value)) {
          error[key] = error[key] ?? [];
          error[key]?.push(message);
        }
        break;
      case "pattern":
        if (!isEmpty(value) && !rule.regex.test(value as string)) {
          error[key] = error[key] ?? [];
          error[key]?.push(message);
        }
        break;
      case "length":
        if (!isEmpty(value)) {
          if (rule.min && value.toString().length < rule.min) {
            error[key] = error[key] ?? [];
            error[key]?.push(message);
          }
          if (rule.max && value.toString().length > rule.max) {
            error[key] = error[key] ?? [];
            error[key]?.push(message);
          }
        }
        break;
    }
  }
  return error;
};

const isEmpty = (value: JSONValue) => {
  return value === undefined || value === null || value === "";
};

export const hasError = (errors: Record<string, string[]>) => {
  if (!errors) return false;
  let result = false;
  for (const key in errors) {
    if (errors[key]?.length) {
      result = true;
      break;
    }
  }
  return result;
};
