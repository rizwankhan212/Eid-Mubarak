function showGreeting() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        document.getElementById("greeting").innerHTML = "Please enter your name!";
    } else {
        document.getElementById("greeting").innerHTML = `Wishing you and your family a blessed Eid ul-Fitr, ${name}. from Rizwan. 🎉!`;
    }
}
