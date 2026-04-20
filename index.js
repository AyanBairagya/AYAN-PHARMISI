let currentRole = "";

// Open User/Admin choice
function openChoice(role) {
    currentRole = role;
    document.getElementById("choiceTitle").innerText = role.toUpperCase() + " Panel";
    showPopup("choicePopup");
}

// Open signup
function openSignup() {
    closePopup();
    document.getElementById("signupTitle").innerText = currentRole.toUpperCase() + " Signup";

    if (currentRole === "admin") {
        document.getElementById("pharmacyKey").style.display = "block";
    } else {
        document.getElementById("pharmacyKey").style.display = "none";
    }

    showPopup("signupPopup");
}

// Open login
function openLogin() {
    closePopup();
    document.getElementById("loginTitle").innerText = currentRole.toUpperCase() + " Login";
    showPopup("loginPopup");
}

// Show popup
function showPopup(id) {
    document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";
}

// Close popup
function closePopup() {
    document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
}

// Signup logic
function signup() {
    let id = document.getElementById("signupId").value;
    let pass = document.getElementById("signupPass").value;

    let key = document.getElementById("pharmacyKey").value;

    if (localStorage.getItem(currentRole)) {
        alert("Account already exists");
        return;
    }

    if (currentRole === "admin" && key !== "ayan9378") {
        alert("Invalid pharmacy key");
        return;
    }

    localStorage.setItem(currentRole, JSON.stringify({id, pass}));
    alert("Signup successful!");
    closePopup();
}

// Login logic




function login() {
    let id = document.getElementById("loginId").value;
    let pass = document.getElementById("loginPass").value;

    let data = JSON.parse(localStorage.getItem(currentRole));

    if (!data) {
        alert("Please create an account");
        return;
    }

    if (data.id === id && data.pass === pass) {
        alert("Login successful!");

        // ✅ Redirect only if USER
        if (currentRole === "user") {
            window.location.href = "products.html";
        }

        // (Optional) redirect admin to another page
        if (currentRole === "admin") {
            window.location.href = "pharmisi.html";
        }

    } else {
        alert("Invalid credentials");
    }
}