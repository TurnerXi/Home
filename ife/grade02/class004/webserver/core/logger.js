export default {
  info: function(){
    console.log.apply(null,arguments);
  },
  error: function(){
    console.error.apply(null,arguments);
  }
}
