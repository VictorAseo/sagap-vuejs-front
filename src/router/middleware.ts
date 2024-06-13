import router from ".";
import type {UserInfos} from "@/@types/services/auth";
const checkAuthenticationUser = (token: string | null) => !!token;

const handleRedirect = (userType: number) => {
  if (userType === 1) return "home"
  if (userType === 2) return "projects"
  if (userType === 3) return "signup"
  return ""
}

router.beforeEach(async (to, from, next) => {
  const userInfosLocalStorage = localStorage.getItem("userInfos");
  const userInfos: UserInfos = userInfosLocalStorage?JSON.parse( userInfosLocalStorage || ""): {} as UserInfos;
  const isLoggedUser = checkAuthenticationUser(localStorage.getItem("token"));

  const allowedUsers = !!to.meta?.allowedUsers ? (to.meta.allowedUsers as number[]) : [];

  if(to.meta.authenticate && !isLoggedUser) return next({name: 'signin'})

  if( userInfos && allowedUsers.length && !allowedUsers.includes(userInfos.userType)) return next({name: handleRedirect(userInfos.userType)});

  next();
});
