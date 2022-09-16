import useValidate from "./useValidate";

function useInputChecker() {
  const { validateEmail, validatePassword, validateName } = useValidate();

  const checkEmail = (setError, inputValue) => {
    const set = (val) => setError(() => val);
    const value = inputValue;
    return () => {
      let delay;
      clearTimeout(delay);
      delay = setTimeout(() => {
        const { error } = validateEmail({ email: value.current?.value });
        if (error) set(true);
        if (!error) set(false);
      }, 1000);
    };
  };

  const checkPassword = (setError, inputValue) => {
    const set = (val) => setError(() => val);
    const value = inputValue;
    return () => {
      const { error } = validatePassword({
        password: value.current?.value,
      });
      if (error) set(true);
      if (!error) set(false);
    };
  };

  const checkName = (setError, inputValue) => {
    const set = (val) => setError(() => val);
    const value = inputValue;
    return () => {
      const { error } = validateName({
        name: value.current?.value,
      });
      if (error) set(true);
      if (!error) set(false);
    };
  };

  const checkDescription = (setError, inputValue) => {
    const set = (val) => setError(() => val);
    const value = inputValue;
    return () => {
      const { error } = validateName({
        name: value.current?.value,
      });
      if (error) set(true);
      if (!error) set(false);
    };
  };

  return { checkEmail, checkPassword, checkName, checkDescription };
}

export default useInputChecker;
