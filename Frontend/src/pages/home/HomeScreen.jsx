import Navbar from "../../../components/Navbar";
import { useAuthStore } from "../../store/authUser"

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <>
      <div className="relative h-screen text-white bg-black">
        <Navbar />
      </div>
    </>
  )
}

export default HomeScreen