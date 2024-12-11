const http=require('http');
const serv=http.createServer((req,res)=>{
    res.write("Such feeling comin ove on me")
    res.end('Hello World')
})
serv.listen(5050,()=>{
    console.log("Server listening on")
})