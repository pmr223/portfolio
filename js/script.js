function openNewPage(link) {
    // Substitua 'LINK_DA_NOVA_PAGINA' pelo link da nova página com mais fotos e vídeos
    window.location.href = link;
}

function showVideoPreview(element) {
    element.querySelector('.video-preview').style.filter = 'brightness(120%)';
}

function hideVideoPreview(element) {
    element.querySelector('.video-preview').style.filter = 'brightness(100%)';
}
