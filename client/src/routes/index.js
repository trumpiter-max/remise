import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Account from "../pages/ProfilePage/Account";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ResetPassword from "../pages/login/ResetPassword";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";

export const routes=[
    {
        path:'/',
        page: HomePage,
        isShowHeader:true,
    },
    {
        path:'/product',
        page: ProductPage,
        isShowHeader:true,
    },
    {
        path:'/profile',
        page: ProfilePage,
        isShowHeader:true,
    },
    {
        path:'/reset-password',
        page: ResetPassword,
        isShowHeader:false,
    },
    {
        path:'/signin',
        page: SignIn,
        isShowHeader:false,
    },
    {
        path:'/signup',
        page: SignUp,
        isShowHeader:false,
    },
    {
        path:'/account_profile',
        page: Account,
        isShowHeader:true,
    },
    {
        path:'*',
        page: NotFoundPage
    }
]
