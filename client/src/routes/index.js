import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ResetPassword from "../pages/Authentication/ResetPassword";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import SearchForm from "../components/FillterProduct/SearchForm";
import Dashboard from "../pages/ProductPage/Dashboard";
import Account from "../pages/UserPages/ProfilePage/Account";
import Notice from "../pages/UserPages/ProfilePage/Notice";
import EditAccount from "../pages/ProfilePage/EditAccount";
import FavoriteProduct from "../pages/ProductPage/FavoriteProduct";
export const routes=[
    {
        path:'/',
        page: HomePage,
        isShowHeader:true,
    },
    {
        path:'/product/:id',
        page: ProductPage,
        isShowHeader:true,
    },
    {
        path:'/favoriteproduct',
        page: FavoriteProduct,
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
