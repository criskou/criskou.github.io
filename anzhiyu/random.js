var posts=["2025/02/14/Fiddler-工具/","2025/02/12/Python语言/","2025/02/14/Postman-工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };