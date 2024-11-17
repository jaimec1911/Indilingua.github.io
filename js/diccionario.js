document.getElementById("translate_button").addEventListener("click", function () {
    const text = document.getElementById("text_to_translate").value;
    const sourceLang = document.getElementById("source_language").value;
    const targetLang = document.getElementById("target_language").value;

    if (text.trim() === "") {
        document.getElementById("result_text").textContent = "Por favor, ingresa el texto a traducir.";
        return;
    }

    const baseURL = "https://translate.google.com/#view=home&op=translate";
    const url = `${baseURL}&sl=${sourceLang}&tl=${targetLang}&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "width=600,height=400");
});

document.getElementById("voice_button").addEventListener("click", function () {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "es-ES"; 

    recognition.start();

    recognition.onstart = function () {
        document.getElementById("result_text").textContent = "Escuchando...";
    };

    recognition.onspeechend = function () {
        recognition.stop();
    };

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("text_to_translate").value = transcript;
        document.getElementById("result_text").textContent = "Texto dictado añadido.";
    };

    recognition.onerror = function () {
        document.getElementById("result_text").textContent = "No se pudo captar el audio. Inténtalo nuevamente.";
    };
});
