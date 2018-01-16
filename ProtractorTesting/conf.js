exports.config={
    framework : 'jasmine',
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs:['specDemo.js']
    // multiCapabilities: [
    //     {
    //         shardTestFiles: true,
    //         maxInstances: 1,
    //         sequential: true,
    //         browserName: 'chrome',
    //         specs: ['spec1.js']
    //     },
    //     {
    //         shardTestFiles: true,
    //         maxInstances: 1,
    //         sequential: true,
    //         browserName: 'chrome',
    //         specs: ['spec2.js']
    //     }]
    // multiCapabilities:[{
    //     browserName :'firefox'
    // },{
    //     browserName :'chrome'
    // }]
    
}