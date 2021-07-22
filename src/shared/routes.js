import Home from "./Home";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";



// fetchInitialData: (id) => //TODO dodać funkcje która szuka w DB danego id i wyciąga informacje o stylach szablonach itd
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/step1',
        exact: true,
        component: Step1,
    },
    {
        path: '/step2',
        exact: true,
        component: Step2,
    },
    {
        path: '/step3',
        exact: true,
        component: Step3,
    },
    


]


export default routes;