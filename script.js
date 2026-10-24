
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll("section");

    function showSection(sectionId) {
        sections.forEach(function (section) {
            section.style.display =
                section.id === sectionId ? "block" : "none";
        });

        menuLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + sectionId
            );
        });
    }

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
            history.replaceState(null, "", "#" + sectionId);
        });
    });

    // Show the Home section when the website opens
    const initialSection = window.location.hash.substring(1);
    const sectionExists = Array.from(sections).some(
        section => section.id === initialSection
    );

    showSection(sectionExists ? initialSection : "home");
});
