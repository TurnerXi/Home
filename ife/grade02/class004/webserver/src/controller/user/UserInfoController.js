var hello_api = async function(ctx,next){
  console.log("helloing");
}


var routers = [
                {path:'Get /user/hello',method:hello_api,auth:true}
              ]

export default routers
