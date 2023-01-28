# wetube

# SET UP
* node v14.15.1
* babel
* nodemon
* morgan - request logger middleware
* mongoose
* bcrypt
* express-session
* connect-mongo
* dotenv
* fetch
# Templates
* pug

# Wetube Route
/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

# @3
* video CRUD, search 구현
    * schema model validation
    * find, findById
    * exist, findById 차이점
    * 비동기 처리 async await
    * params, query
    * schema static functio(middleware)
    * Reqular Expression

# @4
* 회원가입, 로그인
    * Hashing
        * bycrypt
    * Session & Cookie (stateless 해결)
        * session은 object니까 원하는 아무거나 추가 가능
        * sessionStore
        * localsMiddleware
* 깃헙 로그인
    * 1단계
        * 사용자를 깃헙으로 보낸다.
        * 여러가지 설정가능(scope 설정을 통해 받고싶은 정보도 추가)
    * 2단계
        * 깃헙에서 사용자를 사이트로 redirect 
    * 3단계
        * access_token을 갖고 깃헙 API에 접근