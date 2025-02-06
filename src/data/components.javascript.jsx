import { Memoization, Callback, Closure, EventLoop, Exercises, Promises, ScopeJs, Variables, SolidJS, AsyncAwait, ArrowFunction, This, PromisesAsyncAwait } from "../pages";
import DataTypes from "../pages/Javascript/DataTypes/DataTypes";
import Hoisting from "../pages/Javascript/Hosting/Hosting";
import Objects from "../pages/Javascript/Objects/Objects";
import Operators from "../pages/Javascript/Operators/Operators";
import SortMethods from "../pages/Javascript/SortMethods/SortMethods";

export const componentsJavascript = {
    titlemenu: 'Javascript',
    menu: [
        {
            component: <This/>,
            name: 'This',
            path: '/javascript/this',
            title: 'This'
        },
        {
            component: <Hoisting/>,
            name: 'Hoisting',
            path: '/javascript/hoisting',
            title: 'Hoisting'
        },
        {
            component: <ScopeJs/>,
            name: 'ScopeJs',
            path: '/javascript/scopeJs',
            title: 'Scope'
        },
        {
            component: <Variables/>,
            name: 'Variables',
            path: '/javascript/objects',
            title: 'Variables var, let, const'
        },
        {
            component: <DataTypes/>,
            name: 'Tipos de Datos',
            path: '/javascript/tipo-datos',
            title: 'Tipo de Datos'
        },
        {
            component: <Operators/>,
            name: 'Operadores',
            path: '/javascript/operadores',
            title: 'Operadores'
        },
        {
            component: <Objects/>,
            name: 'Objects',
            path: '/javascript/variables',
            title: 'Objects Fundamentals'
        },
        {
            component: <Closure />,
            name: 'closure',
            path: '/javascript/closure',
            title: 'Closures'
        },
        {
            component: <EventLoop />,
            name: 'EventLoop',
            path: '/javascript/eventLoop',
            title: 'Event Loop'
        },
        {
            component: <Callback />,
            name: 'Callback',
            path: '/javascript/callback',
            title: 'Callback'
        },
        
        {
            component: <SortMethods/>,
            name: 'SortMethods',
            path: '/javascript/sortMethods',
            title: 'Sort Methods'
        },
        {
            component: <Promises/>,
            name: 'Promises',
            path: '/javascript/promises',
            title: 'Promesas'
        },
        {
            component: <AsyncAwait/>,
            name: 'AsyncAwait',
            path: '/javascript/async-await',
            title: 'Async Await'
        },
        {
            component: <PromisesAsyncAwait/>,
            name: 'PromisesAsyncAwait',
            path: '/javascript/diferencias-promises-async-await',
            title: 'Diferencias Promises y Async Await'
        },
        {
            component: <ArrowFunction/>,
            name: 'ArrowFunction',
            path: '/javascript/arrow-function',
            title: 'Arrow Function'
        },
        {
            component: <Memoization/>,
            name: 'Memoization',
            path: '/javascript/memoization',
            title: 'Memoization'
        },
        {
            component: <SolidJS/>,
            name: 'Solid',
            path: '/javascript/solid',
            title: 'Principles Solid'
        },
        {
            component: <Exercises/>,
            name: 'Exercises',
            path: '/javascript/exercises',
            title: 'Exercises'
        }
    ] 
}
