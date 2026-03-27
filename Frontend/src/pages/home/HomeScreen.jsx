import { useAuthStore } from "../../store/authUser"

const HomeScreen = () => {
  const { logout } = useAuthStore();
  return (
    <div>This is HomeScreen

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomeScreen