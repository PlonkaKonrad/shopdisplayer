import Home from "./Home";
import Product from "./Product";
import Category from "./Categry";




const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/category',
        exact: true,
        component: Category,
    },
    {
        path: '/product/:id',
        exact: true,
        component: Product,
    },

    


]


export default routes;