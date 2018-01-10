//global functions created to be executed in node....
function addFunc(v1, v2){
    return v1 + v2;
}

function subFunc(v1, v2){
    return v1 -v2;
}

function divFunc(v1, v2){
    return v1 /v2;
}   
//invoking the functions and displaying the results on the Console....
console.log(addFunc(123, 234));
console.log(subFunc(123, 234));
console.log(divFunc(123, 234));
//Nodejs is a framework for creating Javascript apps out of browser. It allows JS Apps to be created at the server side inside a web server and execute the Apps from the terminal.
//Node is made of Modules. Each module is an independent component thro which UR Applications are developed. Each module is designed to be created, executed and tested independently with little or less dependency on other components.
//Node itself is made of Core Modules which are the part of the Node Js Framework. U could create modules using the JS functions... 
//NodeJs allows ur modules to be deployed and accessible thro a repository of node modules called NPM.
//With every installation of NodeJs, NPM will also be installed.The node can be executed thro the command prompt as, the path of the node is associated with the path attribute of the Command prompt. 
//When U create any module, U should expose the module by creating a file called package.json.  This file contains a JSON object which contain the informatioon in the form a JSON array. This info includes Author, dependencies, UR startup component, testing framework and many more. Once this file is created, U could use the package manager commands to install the Node module into the repository of the NPM.
