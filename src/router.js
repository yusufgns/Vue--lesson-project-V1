import { createRouter, createWebHashHistory } from 'vue-router';

const roter = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            name : "HomePage",
            path : "/",
            component : () => import("@/views/HomePage.vue")
        },
        {
            name : "NewBookmark",
            path : "/new",
            component : () => import("@/views/NewBookmark.vue")
        },    
    ]
})

export default roter;