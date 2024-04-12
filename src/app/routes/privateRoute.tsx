import { useAppSelector } from "../redux/hook";

interface PrivateRouteProps {
  inverted: boolean;
  children: React.ReactNode;
  requiredRoles?: string[];
}

const PrivateRoute = ({
  inverted,
  children,
  requiredRoles,
}: PrivateRouteProps) => {
  // const access_token = localStorage.getItem("access_token");
  // const isAuth = access_token ? true : false;
  // const { role: currentRole } = useAppSelector((state) => state.roleCheck);
};
export default PrivateRoute;
