import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

// bcrypt는 일방향 
// rainbow table 공격을 막아줌
// 해쉬 적용한 값에서 원본으로 되돌아갈순없지만
// 같은 입력값이면 같은 해쉬값을 반환해줌(결정적 함수)
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User; 