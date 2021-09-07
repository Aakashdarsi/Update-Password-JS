let newPassword = document.getElementById('newPassword')
let newPasswordError = document.getElementById("newPasswordErrMsg");
let updatePassword = document.getElementById("confirmPassword");
let updatePasswordError = document.getElementById("confirmPasswordErrMsg");
let updateButton = document.getElementById("updateBtn");
let form_ele = document.getElementById("updatePasswordForm");
let newPasswordValidation = function() {
    if (newPassword.value === "") {
        newPasswordError.textContent = "Required***"
        newPasswordErrMsg.style.color = "red";
    } else {
        newPasswordErrMsg.textContent = "";
    }

}

let updatePasswordValidation = function() {
    let newPasswordValue = newPassword.value;
    let updatePasswordValue = updatePassword.value;
    if (newPasswordValue !== updatePasswordValue) {
        updatePasswordError.textContent = "Both should be same"
    } else {
        updatePasswordError.textContent = "";
    }

}
updatePassword.addEventListener("blur", function() {
    let newPasswordValue = newPassword.value;
    let updatePasswordVal = updatePassword.value;
    if (updatePasswordVal === "") {
        updatePasswordError.textContent = "Required*";
        updatePasswordError.style.color = "red";
    } else {
        updatePasswordError.textContent = "";
    }
})
updatePasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    newPasswordValidation();
    updatePasswordValidation();
})
newPassword.addEventListener("blur", newPasswordValidation);
updatePassword.addEventListener("blur", updatePasswordValidation)