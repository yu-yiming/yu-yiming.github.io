function main() {
    const btnLangSwitch : HTMLButtonElement = document.querySelector("#button");
    const zhDiv : HTMLDivElement = document.querySelector("#zh");
    const enDiv : HTMLDivElement = document.querySelector("#en");

    let isZh = true;

    btnLangSwitch.onclick = () => {
        if (isZh) {
            zhDiv.style.display = "none";
            enDiv.style.display = "block";
        } else {
            zhDiv.style.display = "block";
            enDiv.style.display = "none";
        }
        isZh = !isZh;
    }

}

window.onload = main;