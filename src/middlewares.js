// res를 출력했을때, locals가 있음
// pug랑 express가 서로 locals를 공유 할수있도록 설정되어있으니
// res.render에 넣지않아도 pug로 값을 전달할수있다.
export const localsMiddleware = (req, res, next) => {
    // localsMiddleware가 session middleware 다음에 
    // 오기 때문에 req.session을 받을수있다.
   
    // if(req.session.loggedIn) {
    //     res.locals.loggedIn = true;
    // } 아래와 같은 코드
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user;
    next();
  }; 