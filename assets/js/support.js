function toggleDetails(button) {
    const details = button.closest('article').querySelector('.details');
    details.classList.toggle('none');
}