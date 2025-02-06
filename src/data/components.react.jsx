
import { State } from "../pages";
import { Context, ControlledFormComponent, CreateProject, HighOrderComponent, LifeCycle, ReactHooks, ReactRouterDom, Reducer } from "../pages/React";
import HighOrderComponent2 from "../pages/React/HighOrderComponent/HighOrderComponent";

export const componentsReact = {
        titlemenu: 'React',
        menu: [
            {
                component: <CreateProject />,
                name: 'CreateProject',
                path: '/react/createProject',
                title: 'Create Project'
            },
            {
                component: <State />,
                name: 'State',
                path: '/react/state',
                title: 'State in React'
            },
            {
                component: <LifeCycle/>,
                name: 'LifeCycle',
                path: '/react/lifecycle',
                title: 'LifeCycle'
            },
            {
                component: <ControlledFormComponent/>,
                name: 'ControlledFormComponent',
                path: '/react/controlled-form-component',
                title: 'Controlled Form Component'
            },
            {
                component: <HighOrderComponent/>,
                name: 'HighOrderComponent',
                path: '/react/high-order-component',
                title: 'High Order Components'
            },
            {
                component: <ReactHooks/>,
                name: 'ReactHooks',
                path: '/react/reactHooks',
                title: 'UseRef - UseCallback - UseMemo'
            },
            {
                component: <ReactRouterDom/>,
                name: 'ReactRouterDom',
                path: '/react/reactRouterDom',
                title: 'Configure React Router Dom'
            },
            {
                component: <Context/>,
                name: 'Context',
                path: '/react/context',
                title: 'Context Global state'
            },
            {
                component: <Reducer/>,
                name: 'Reducer',
                path: '/react/reducer',
                title: 'Reducer - useReducer Hook'
            },
        ]
    }
    
