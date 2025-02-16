var posts=["2025/02/14/Fiddler-工具/","2025/02/14/Postman-工具/","2025/02/12/Python语言/","2025/02/15/测试理论/","2025/02/15/JMeter-工具/","2025/02/16/读书笔记/","2025/02/16/自动化测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };