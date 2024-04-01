import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
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
        path:'*',
        page: NotFoundPage
    }
]
