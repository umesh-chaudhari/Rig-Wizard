import Home from "@/pages/Home.jsx";
import Build from "@/components/builds/Build.jsx";
import FinalBuild from "@/components/builds/FinalBuild.jsx";
import BuildList from "@/components/builds/BuildList.jsx";

const routes = [
    {path: '/', component: Home,},
    {path: '/build', component: Build,},
    {path: '/final-build', component: FinalBuild,},
    {path: 'builds', component: BuildList}
]
export default routes;