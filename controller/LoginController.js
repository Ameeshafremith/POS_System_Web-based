$("#login_btn").click(function () {
    let user = $("#username").val();
    let pass = $("#password").val();

    if (user === "Amee" && pass === "1") {
        $("#login_section").hide();
        $("#dashboard_section").show();
    } else {
        alert("Invalid Login");
    }
});