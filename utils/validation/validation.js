class ValidationStrategy
{

  verify(input, validation)
  {
    if (input && input.trim().length > 0)
    {
      return validation.verify(input);
    }
    return false;
  }

}

class EmailValidation 
{
  verify(input)
  {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(input);
  }
}

class PasswordValidation 
{
  verify(input)
  {
    const regex = /^(\w){6,}/;
    return regex.test(input);
  }
}

module.exports = {
  ValidationStrategy,
  EmailValidation,
  PasswordValidation,
}