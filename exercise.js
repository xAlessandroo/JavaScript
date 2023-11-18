const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user){
  const userJSON = JSON.stringify(user);
  const stored = localStorage.setItem("user", userJSON);
  console.log(`User ${stored} saved!`);
}

saveUser(user);

function getUser(){
  const userJSON = localStorage.getItem("user");
  const savedUser = JSON.parse(userJSON);
  console.log(savedUser);
}

getUser();

