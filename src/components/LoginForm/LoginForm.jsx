const LoginForm = ({ onLogin }) => {

    const handleSubmit = (evt) => {
      evt.preventDefault();

      const form = evt.target;
      const { login, password } = form.elements;

      // Викликаємо пропс onLogin
      onLogin({
        login: login.value,
        password: password.value,
      });

      form.reset();
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  };

export default LoginForm;