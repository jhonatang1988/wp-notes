export default function Hello({ hello }: { hello: string }) {
  return (
    <div>
      <p>{hello}</p>
      <div>
        <a href='/login'>Login</a>
      </div>
      <div>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}
