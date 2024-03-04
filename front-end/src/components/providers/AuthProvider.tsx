import { api } from "@/common/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export type UserType = {
  email: string;
  _id: string;
  name: string;
  password: string;
  image: string;
};

type AuthContextType = {
  isLogged: boolean;
  signup: (email: String, password: String, name: String) => Promise<void>;
  login: (email: String, password: String) => Promise<void>;
  logout: () => void;
  userData: UserType | null;
  setUserData?: Dispatch<SetStateAction<UserType | null>>;
  checkAdmin: boolean;
  setCheckAdmin?: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [checker, setChecker] = useState(false);
  const [userData, setUserData] = useState<UserType | null>(null);
  const [checkAdmin, setCheckAdmin] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [checker]);

  const login = async (email: String, password: String) => {
    try {
      const { data } = await api.post("/logIn", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      toast.success(data.message);

      setChecker((prev) => !prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message ?? error.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setIsLogged(false);
    setChecker((prev) => !prev);
  };

  const signup = async (name: String, email: String, password: String) => {
    try {
      const { data } = await api.post("signUp", {
        name,
        email,
        password,
      });

      const { token } = data;
      router.push("/");
      localStorage.setItem("token", token);
      toast.success(data.message);
    } catch (error) {
      console.log("login error");
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get("/user/getUser", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      if (data.role === "admin") {
        setCheckAdmin(true);
      }

      setUserData(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogged, signup, login, logout, userData, checkAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
