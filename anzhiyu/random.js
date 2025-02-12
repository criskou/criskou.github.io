var posts=["2025/02/12/Python语言/","2025/02/12/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };