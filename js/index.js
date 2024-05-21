// Bài 1
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
function getError(field) {
  var fieldArr = field.split(".");
  if (field.includes(".")) {
    return console.log("Bài 1: ", errors[fieldArr[0]][fieldArr[1]]);
  }
  return console.log("Bài 1: ", errors[fieldArr].required);
}

getError("email");
document.write("<p>Bài 1: ở console</p>");
console.log("");
// Bài 2
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  var arr = customers.map(function (customer) {
    customer.shortName =
      customer.name.split(" ").slice(0, 1) +
      " " +
      customer.name.split(" ").slice(-1);
    return customer;
  });
  customers.sort(function (a, b) {
    if (a.age < b.age) {
      return -1;
    }
  });
  return customers;
}
const result = createCustomers(customers);
console.log("Bài 2: ", result);
document.write("<p>Bài 2: ở console</p>");
console.log("");
// bài 3:
document.write("<p>Bài 3: ở console</p>");
const data = [];
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    return console.log("Bài 3: Vui lòng nhập đầy đủ thông tin");
  }
  return data.push({
    name: name,
    password: password,
    email: email,
    role: "user",
  });
}
function handleLogin(email, password) {
  if (!password || !email) {
    return console.log("Vui lòng nhập đầy đủ thông tin đăng nhập");
  }
  var userData = data.filter(function (user) {
    if (user.email.includes(email) && user.password.includes(password)) {
      return user;
    }
  });
  if (userData.length === 0) {
    return "Thông tin đăng nhập không hợp lệ";
  }
  return userData;
}
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

console.log("Bài 3: data =", data);
var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log("       dataLogin = ", dataLogin);
