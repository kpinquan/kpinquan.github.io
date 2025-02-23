var posts=["2025/02/23/hello-world/","2025/01/31/測試/","2025/02/22/說明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };