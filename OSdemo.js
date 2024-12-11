var os = require('os');
const { dirname } = require('path');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log(os.arch())
console.log(os.version())
console.log(os.tmpdir())
console.log(__dirname)
console.log(__filename)
console.log(os.cpus())
console.log(os.userInfo())