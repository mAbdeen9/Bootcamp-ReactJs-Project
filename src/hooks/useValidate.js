import Joi from "joi";

function useValidate() {
  //
  const validateEmail = (email) => {
    const rules = Joi.object({
      email: Joi.string().email({ tlds: { allow: false } }),
    });
    return rules.validate(email);
  };

  const validatePassword = (password) => {
    const rules = Joi.object({
      password: Joi.string().required().min(4).max(10),
    });
    return rules.validate(password);
  };

  return { validateEmail, validatePassword };
}

export default useValidate;
