import AuthForm from "./AuthForm";

export default function Signup({ error }: { error: string | null }) {
  return (
    <div>
      <AuthForm type="signup" error={error} />
    </div>
  );
}
