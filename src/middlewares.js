import multer from "multer";
export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);

    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {};
    next();
};

// 로그인된 사용자만 접근할수있도록
export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    } else {
        return res.redirect("/login");
    }
};

// 로그인 하지않은 사용자만 접근할수있도록
export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        return res.redirect("/");
    }
};
export const uploadFiles = multer({ dest: "uploads/" });

export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
  });
  export const videoUpload = multer({
    dest: "uploads/videos/",
    limits: {
      fileSize: 10000000,
    },
  });