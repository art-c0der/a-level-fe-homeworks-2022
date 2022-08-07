function openInstrument(button, instrument) {
    Array.from(document.getElementsByClassName("tab_content")).forEach(tabContent => {
        tabContent.classList.add("hide-tab");
    });

    Array.from(document.getElementsByClassName("tab_links")).forEach(tabLink => {
        tabLink.className = tabLink.className.replace("active", "");
    });

    document.getElementById(instrument).classList.remove("hide-tab");
    button.classList.add("active-button");
}

export default () => {
    Array.from(document.getElementsByClassName('tab_links')).forEach(element => {
        element.addEventListener('click', (event) => {
            openInstrument(event.currentTarget, element.getAttribute('aria-tab-id'));
        });
    });
    document.getElementById("defaultOpen").click();
}
