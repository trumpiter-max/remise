import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Account from "../pages/ProfilePage/Account";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
        path:'/account_profile',
        page: Account,
        isShowHeader:true,
    },
    {
        path:'*',
        page: NotFoundPage
    }
]
