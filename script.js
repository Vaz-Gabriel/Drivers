const marcaSelect = document.getElementById("marca");
const modelosDiv = document.getElementById("modelos");
const themeToggle = document.getElementById("theme-toggle");

// DETECTA WINDOWS
const is64bits = navigator.userAgent.includes("Win64") || navigator.userAgent.includes("x64");

// DRIVERS
const drivers = {
    Bematech: [
        {
            nome: "Bematech MP4200TH",
            x64: "Bematech/Bematech MP4200.exe",
            x86: "Bematech/Bematech MP4200.exe"
        },
        {
            nome: "Bematech MP2500TH",
            x64: "Bematech/Bematech MP2500.exe",
            x86: "Bematech/Bematech MP2500.exe"
        },

        {
            nome: "Bematech ADV",
            x64: "Bematech/Bematech ADV.exe",
            x86: "Bematech/Bematech ADV.exe"
        },

        {
            nome: "Bematech HS",
            x64: "Bematech/Bematech HS.exe",
            x86: "Bematech/Bematech HS.exe"
        }
    ],

    Daruma: [
        {
            nome: "DARUMA DR-700",
            x64: "Daruma/Daruma DR-700.exe",
            x86: "Daruma/Daruma DR-700.exe"
        },

        {
            nome: "DARUMA DR-800",
            x64: "Daruma/Daruma DR-800.exe",
            x86: "Daruma/Daruma DR-800.exe"
        }
    ],

    Elgin: [
        {
            nome: "ELGIN I9",
            x64: "Elgin/Elgin I9.exe",
            x86: "Elgin/Elgin I9.exe"
        },

        {
            nome: "ELGIN I8",
            x64: "Elgin/Elgin I8.exe",
            x86: "Elgin/Elgin I8.exe"
        }
    ],

    Epson: [
        {
            nome: "EPSON TM-T20X",
            x64: "Epson/Epson TM T20X.exe",
            x86: "Epson/Epson TM T20X.exe"
        }
    ],

    Sweda: [
        {
            nome: "SWEDA SI-300",
            x64: "Sweda/Sweda SI-300.exe",
            x86: "Sweda/Sweda SI-300.exe"

        }
    ]
    
};

// MARCA SELECIONADA
marcaSelect.addEventListener("change", () => {
    const marca = marcaSelect.value;
    modelosDiv.innerHTML = "";

    if (!drivers[marca]) return;

    drivers[marca].forEach(modelo => {
        const file = is64bits ? modelo.x64 : modelo.x86;

        const div = document.createElement("div");
        div.className = "model";

        div.innerHTML = `
            <span>${modelo.nome}</span>
            <a class="download-btn"
               href="${file}"
               download="${file.split("/").pop()}">
               Baixar
            </a>
        `;

        modelosDiv.appendChild(div);
    });
});

// ANO
document.getElementById("ano").textContent = new Date().getFullYear();

// TEMA
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
});
