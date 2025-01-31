var posts=["2025/01/31/hello-world/","2025/01/31/測試/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };