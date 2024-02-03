function openNewPage() {
    // Substitua 'LINK_DA_NOVA_PAGINA' pelo link da nova página com mais fotos e vídeos
    window.location.href = 'LINK_DA_NOVA_PAGINA';
}

function showVideoPreview(element) {
    element.querySelector('.video-preview').style.filter = 'brightness(70%)';
}

function hideVideoPreview(element) {
    element.querySelector('.video-preview').style.filter = 'brightness(100%)';
}
