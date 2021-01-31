import FirebaseAuth from "../components/FirebaseAuth";
import { useUser } from "../utils/auth/useUser";

export default function Home() {
  const { user, logout } = useUser();
  console.log(user);
  return (
    <>
      <>
        {user?.id ? (
          <>
            <h2>Loggedin as: {user.email}</h2>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <FirebaseAuth />
        )}
      </>
    </>
  );
}
