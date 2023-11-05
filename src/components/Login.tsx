import AuthForm from "./AuthForm";

export default function Login({ error }: { error: string | null }) {
  return (
    <div>
      <AuthForm type="login" error={error} />
    </div>
  );
}
