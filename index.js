var SnoopyButton = document.getElementById("snoopyButton");
var snoopyAlert = function() {
window.alert("Hello, brief briefing that is really brief \"Hello, Snoopy fans!!!\".");
}

SnoopyButton.addEventListener("click", snoopyAlert);
var useridinput = document.getElementById("username");
var cname = "user-id";
var cvalue = useridinput.value;
var cookieSet = function (cname, cvalue) {
document.cookie = cname + "=" + cvalue;
};
var cookieBtn = document.getElementById("cookieBtn");
cookieBtn.addEventListener("click", cookieSet(cname, cvalue));



