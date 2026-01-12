import systemConf  from "./system.mjs";
import groupsConf  from "./groups.mjs";
import {allGroups} from "../classes/group.mjs";
import {getGroup}  from "../classes/group.mjs";
//Syntax sugar--------------------------------------------------
function CL(x) { return G.DEBUG ? console.log(x) : false; }
//--------------------------------------------------------------
const config   = new Object();
config.system  = systemConf();
config.groups  = groupsConf();
//--------------------------------------------------------------
//CL(JSON.stringify(config));
//CL(allGroups);
//-----------------------------------------------------------------------------
export default config;