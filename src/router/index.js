import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Stream from "../views/Stream.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/stream", component: Stream },
  { path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogPost }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});
