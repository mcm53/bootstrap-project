function loadPage(name) {
    var content = $("#content");
    content.html(
        "<div class=\"loader\"><i class=\"fa fa-spinner fa-spin\"></i></div>"
    );

    var url = "./pages/" + name.replace(/[^A-z0-9]/g, "") + ".html";
    content.load(url, function(response, status) {
        if (status == "error") {
            content.html(
                "<p class=\"text-center\">Unable to load page, try a different page.</p>"
            );
        }
        else {
            $(".nav-item").removeClass("active");
            $(".nav-item." + name).addClass("active");
        }

        hookAnchors();
    });
}


function hookAnchors() {
    $("a[page]").click(function(e) {
        loadPage(e.target.getAttribute("page"));
        e.preventDefault();
        return false;
    });
}


var page = document.URL.includes("#") ? document.URL.split("#")[1] : null;
loadPage(page || "home");
