import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/UserPages/ProfilePage/ProfilePage";
import ResetPassword from "../pages/login/ResetPassword";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import SearchForm from "../components/FillterProduct/SearchForm";
import Dashboard from "../pages/ProductPage/Dashboard";
import Account from "../pages/UserPages/ProfilePage/Account";
import Notice from "../pages/UserPages/ProfilePage/Notice";
import EditAccount from "../pages/ProfilePage/EditAccount";
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
        path:'/searchform',
        page: SearchForm,
        isShowHeader:false,
    },
    {
        path:'/dashboard',
        page: Dashboard,
        isShowHeader:false,
    },
    {
        path:'/account',
        page: Account,
        isShowHeader:true,
    },
    {
        path:'/notice',
        page: Notice,
        isShowHeader:true,
    },
    {
        path:'/editaccount',
        page: EditAccount,
        isShowHeader:false,
    },
    {
        path:'*',
        page: NotFoundPage
    }
]
