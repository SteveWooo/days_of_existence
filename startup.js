const CONFIG = {
    port : 201
}

const express = require("express")
const app = express()

async function main(){
    app.use("/days_of_existence", express.static("./static"))

    app.listen(CONFIG.port, function(){
        console.log(`Days of existence服务运行于端口:` + 201)
    })
}
main()