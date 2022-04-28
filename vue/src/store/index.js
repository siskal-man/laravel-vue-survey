import {
    createStore
} from 'vuex';

import axiosClient from '../axios';

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic YouTube channel content",
        slug: "thecodeholic-youtube-channel-content",
        status: "draft",
        image: "https://avatars.githubusercontent.com/u/4627922?v=4",
        description: "My name is murat. <br /> I'm Web Developer with 5+ months of experience",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_at: "2021-12-20 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        { uuid: "0a208e3a-c1f8-11ec-9d64-0242ac120002", text: "USA" },
                        { uuid: "139329aa-c1f8-11ec-9d64-0242ac120002", text: "Russia" },
                        { uuid: "166b71d2-c1f8-11ec-9d64-0242ac120002", text: "China" },
                        { uuid: "3b8e38f0-c1f8-11ec-9d64-0242ac120002", text: "Turkey" }
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "Which language videos do you want to see on my channel?",
                description: "Lorem",
                data: {
                    options: [
                        { uuid: "9c826f14-c1f8-11ec-9d64-0242ac120002", text: "JS" },
                        { uuid: "a0dbfd3c-c1f8-11ec-9d64-0242ac120002", text: "PHP" },
                        { uuid: "a3c918a4-c1f8-11ec-9d64-0242ac120002", text: "HTML + CSS" },
                        { uuid: "c2df3868-c1f8-11ec-9d64-0242ac120002", text: "All of the above" }
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "Which PHP framework videos do you want to see on my channel?",
                description: "Lorem",
                data: {
                    options: [
                        { uuid: "f93540ec-c1f8-11ec-9d64-0242ac120002", text: "Django" },
                        { uuid: "f81da96a-c1f8-11ec-9d64-0242ac120002", text: "Laravel" },
                        { uuid: "f706a900-c1f8-11ec-9d64-0242ac120002", text: "Yii" },
                        { uuid: "f1d93678-c1f8-11ec-9d64-0242ac120002", text: "Symfony" }
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel Framework version do you love most?",
                description: "Lorem",
                data: {
                    options: [
                        { uuid: "681727aa-c1f9-11ec-9d64-0242ac120002", text: "Laravel 5" },
                        { uuid: "6732948c-c1f9-11ec-9d64-0242ac120002", text: "Laravel 6" },
                        { uuid: "6639bc5e-c1f9-11ec-9d64-0242ac120002", text: "Laravel 7" },
                        { uuid: "6521fcd2-c1f9-11ec-9d64-0242ac120002", text: "Laravel 8" }
                    ]
                }
            },
            {
                id: 5,
                type: "checkbox",
                question: "What type of project do you want to see on my channel built with Laravel?",
                description: "Lorem",
                data: {
                    options: [
                        { uuid: "681727aa-c1f9-11ec-9d64-0242ac120002", text: "REST API" },
                        { uuid: "6732948c-c1f9-11ec-9d64-0242ac120002", text: "E-commerce" },
                        { uuid: "6639bc5e-c1f9-11ec-9d64-0242ac120002", text: "Real Estate" },
                        { uuid: "6521fcd2-c1f9-11ec-9d64-0242ac120002", text: "All of the above" }
                    ]
                }
            },
            {
                id: 6,
                type: "textarea",
                question: "What are you favourite YouTube channel?",
                description: null,
                data: {}
            },
            {
                id: 7,
                type: "textarea",
                question: "What do you think about TheCodeholic channel?",
                description: "Wrtite your honest opinion. Everything is anonymoust",
                data: {}
            },
        ]
    },
    {
        id: 200,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "active",
        image: "https://camo.githubusercontent.com/7071bdb7bef2504a84f1da4f62e771727e9ad9724d1b1c088d057ff5a4bbc77f/68747470733a2f2f692e6962622e636f2f564c736e5062312f3132303070782d4c61726176656c2d7376672e706e67",
        description: "Laravel is a web application framework with expressive, elegant syntax.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_at: "2021-12-20 18:00:00",
        questions: []
    },
    {
        id: 300,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        description: "Vue(pronounced /vju:/, like view) is as progressive framework",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_at: "2021-12-20 18:00:00",
        questions: []
    },
    {
        id: 400,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: "https://laravelnews.imgix.net/images/tailwindcss-1633184775.jpg?ixlib=php-3.3.1",
        description: "Tailwind is were good",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_at: "2021-12-20 18:00:00",
        questions: []
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        },
        surveys: [...tmpSurveys],
        questionTypes: ['text', 'select', 'radio', 'checkbox', 'textarea'],
    },
    getters: {},
    actions: {
        register({
            commit
        }, user) {
            return axiosClient.post("/register", user)
                .then(({
                    data
                }) => {
                    commit("setUser", data);
                    return data;
                });
        },
        login({
            commit
        }, user) {
            return axiosClient.post("/login", user)
                .then(({
                    data
                }) => {
                    commit("setUser", data);
                    return data;
                });
        },
        logout({ commit }) {
            return axiosClient.post('/logout').then(response => {
                commit('logout');
                return response;
            })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
});


export default store;