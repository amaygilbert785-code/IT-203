function login() {
    var user = document.getElementById("username");
    var pass = document.getElementById("password");

    if (user.value === "" || pass.value === "") {
        alert("Please enter username and password!");

        user.classList.add("error");
        pass.classList.add("error");

        user.classList.remove("success");
        pass.classList.remove("success");
    } else {
        alert("Login successful!");

        user.classList.add("success");
        pass.classList.add("success");

        user.classList.remove("error");
        pass.classList.remove("error");
    }
}
let data = [];

document.getElementById("saveBtn").addEventListener("click", function () {

    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    if (fname === "" || lname === "" || age === "" || email === "") {
        alert("Alam mo naman kung paano mag input diba");
        return;
    }

    data.push([fname, mname, lname, age, email]);

    let table = document.getElementById("output");
    let row = table.insertRow();

    row.insertCell(0).innerText = fname;
    row.insertCell(1).innerText = mname;
    row.insertCell(2).innerText = lname;
    row.insertCell(3).innerText = age;
    row.insertCell(4).innerText = email;

    // clear inputs
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
});

