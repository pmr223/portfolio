function openNewPage() {
    // Substitua 'LINK_DA_NOVA_PAGINA' pelo link da nova página com mais fotos e vídeos
    window.location.href = 'https://pmr223.github.io/projeto1/hybrid-animation.html';
}

function showVideoPreview(element) {
    element.querySelector('.video-preview').style.filter = 'brightness(70%)';
}

function hideVideoPreview(element) {
    element.querySelector('.video-preview').style.filter = 'brightness(100%)';
}
