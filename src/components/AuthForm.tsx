export default function AuthForm({
  type,
  error,
}: {
  type: "login" | "signup";
  error: string | null;
}) {
  const authMap = {
    login: { title: "Login", button: "Login" },
    signup: { title: "Sign Up", button: "Sign Up" },
  };

  return (
    <div>
      <form method='POST' encType='multipart/form-data'>
        <h2>{authMap[type].title}</h2>
        <input type='text' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <button type='submit'>{authMap[type].button}</button>
      </form>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
