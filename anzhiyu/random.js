var posts=["post/21ba1eea.html","post/a1286495.html","post/e9c05029.html","post/d2407e80.html","post/901ce88d.html","post/44157eb0.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};