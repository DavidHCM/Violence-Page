function detectarDispositivo() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "indexCe.html";
    } else {
        window.location.href = "indexCo.html";
    }
}

detectarDispositivo();