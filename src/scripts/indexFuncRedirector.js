function detectarDispositivo() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "/Violence-Page/src/views/indexCe.html";
    } else {
        window.location.href = "/Violence-Page/src/views/indexCo.html";
    }
}

detectarDispositivo();