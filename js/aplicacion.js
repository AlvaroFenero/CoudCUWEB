function isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function showQrOrButton() {
    var ctaContainer = document.getElementById('ctaContainer');

    if (isMobileDevice() && window.innerWidth <= 768) {
        // Es un dispositivo móvil con ancho de ventana menor o igual a 768 pixels, mostrar el botón de descarga
        var downloadButton = document.createElement('a');
        downloadButton.href = 'https://m.apkpure.com/es/mediafire/com.mediafire.android'; // Reemplaza con la ruta de descarga de tu aplicación
        downloadButton.className = 'cta';
        downloadButton.textContent = 'Descargar App';
        ctaContainer.appendChild(downloadButton);
    } else {
        // Es una computadora o un dispositivo móvil con ancho de ventana mayor a 768 pixels, mostrar el código QR
        var qrCode = document.createElement('img');
        qrCode.src = 'images/QR.png'; // Reemplaza con la ruta a tu código QR
        qrCode.alt = 'Código QR';
        ctaContainer.appendChild(qrCode);
    }
}

window.onload = showQrOrButton;
