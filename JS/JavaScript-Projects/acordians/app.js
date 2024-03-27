const heads = document.getElementsByClassName('head');

for (let head of heads) {
    head.addEventListener('click', () => {
        const container = head.parentNode;
        const icon = container.querySelector('.icon');
        const content = container.querySelector('.content');

        // Toggle the 'active' class on the content
        content.classList.toggle("active");

        // Toggle the rotation of the icon
        const isContentVisible = content.classList.contains("active");
        icon.style.transform = isContentVisible ? "rotate(180deg)" : "rotate(0deg)";
    });
}
