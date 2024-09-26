const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connnection Successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  address: [
    {
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  const user1 = new User({
    username: "sherlockholmes",
    address: [
      {
        location: "233b DownTown",
        city: "London",
      },
    ],
    
  });
  user1.address.push({
    location:"2B Hiqh sqaure",
    city:"London"
  });
    let result = await user1.save();
    console.log(result);
};

addUser();
