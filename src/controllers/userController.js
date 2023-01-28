import User from "../models/User";


export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location } = req.body;
    const pageTitle = "Join";
    if (password !== password2) {
        return res.render("join", {
            pageTitle,
            errorMessage: "Password confirmation does not match.",
        });
    }

    // $or operator를 통해 조건이 들어있는 배열을 쓰고
    // 어떤 조건이 하나라도 true면 true
    const exists = await User.exists({ $or: [{ username }, { email }] });
    if (exists) {
        return res.render("join", {
            pageTitle,
            // username이랑 email 중 누가 틀렸는지 특정 X
            errorMessage: "This username/email is already taken.",
        });
    }
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");