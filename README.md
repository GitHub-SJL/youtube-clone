# wetube

# SET UP
* node v14.15.1
* babel
* nodemon
* morgan - request logger middleware
* mongoose
* bcrypt
* express-session
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
