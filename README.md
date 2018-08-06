# cache-request
cache 
http
cacheRequest.create(config)
Vue.prototype.$http = cacheRequest
cacheRequest.get('http://dev-api.hfjy.com/mock/150/study/Lesson/getStudentCommentAppV2', {id:'5555'}).then(function(e){
  console.log(e)
})
