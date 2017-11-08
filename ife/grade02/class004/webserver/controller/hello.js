var hello_api = async function(ctx,next){
  ctx.body = "say hello !";
}


var routers = [
                {path:'/hello',method:hello_api}
              ]
              
export default routers
