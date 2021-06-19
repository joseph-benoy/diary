import Dashboard from "./components/dashboard/Dashboard";
import CreateEntry from "./components/createEntry/Createentry";
import Read from "./components/read/Read";
import Memories from "./components/memories/Memories";
import Settings from "./components/settings/Settings";
import React from "react";

const routes = {
    "/dashboard":()=><Dashboard/>,
    "/createentry":()=><CreateEntry/>,
    "/read":()=><Read/>,
    "/memories":()=><Memories/>,
    "/Settings":()=><Settings/>
};

export default routes;