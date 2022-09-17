import Joi from "joi";

function useValidate() {
  //

  const validateName = (name) => {
    const rules = Joi.object({
      name: Joi.string().required().min(2).max(20),
    });
    return rules.validate(name);
  };

  const validateEmail = (email) => {
    const rules = Joi.object({
      email: Joi.string().email({ tlds: { allow: false } }),
    });
    return rules.validate(email);
  };

  const validatePassword = (password) => {
    const rules = Joi.object({
      password: Joi.string().required().min(6).max(12),
    });
    return rules.validate(password);
  };

  const validatePhone = (phone) => {
    const rules = Joi.object({
      phone: Joi.string().required().min(6).max(12),
    });
    return rules.validate(phone);
  };

  return { validateEmail, validatePassword, validateName, validatePhone };
}

export default useValidate;
