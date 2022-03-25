const emailRegex = /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/;

/**
 * Begin with a letter.
 * Internally include alphanumerics and/or hyphen and underscore (unlimited times).
 * At the end only alphanumerics allowed.
 * @example test-test1_test2
 */
const cnameRegex = /^[a-z](?:([\-_]{1})?(?:[a-z0-9]+)+)*$/;

const RegexHelper = {
  emailRegex: emailRegex,
  testEmail: (value: string, msg?: string) =>
    testRegex(emailRegex, value, msg ?? "Must be a valid email address"),
  cnameRegex: cnameRegex,
  testCname: (value: string, msg?: string) =>
    testRegex(
      cnameRegex,
      value,
      msg ??
        `- Must begin with a letter.\n- End with a letter or digit.\n- Only use non-consecutive hyphen ( - ) and underscore ( _ ) internally, other special characters are not allowed.`
    ),
};

const testRegex = (regex: RegExp, value: string, msg?: string) => {
  const isValid = value ? regex.test(value) : true;
  return { isValid, msg: isValid ? undefined : msg };
};

export { RegexHelper };
