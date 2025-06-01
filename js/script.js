document.addEventListener('DOMContentLoaded', function() {
    const certificateGrid = document.getElementById('certificate-grid');
    const numberOfCertificates = 8; // Jumlah total sertifikat
    const thumbnailExtension = '.jpg'; // Asumsi format thumbnail adalah JPG
    const pdfExtension = '.pdf';
    const toggleButton = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    for (let i = 1; i <= numberOfCertificates; i++) {
        const certificateName = `cert${i}`;
        const thumbnailPath = `img/${certificateName}${thumbnailExtension}`;
        const pdfPath = `img/${certificateName}${pdfExtension}`;
        const altText = `Sertifikat ${i}`;

        const certificateItem = document.createElement('div');
        certificateItem.classList.add('certificate-item');

        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank'; // Membuka PDF di tab baru

        const img = document.createElement('img');
        img.src = thumbnailPath;
        img.alt = altText;

        link.appendChild(img);
        certificateItem.appendChild(link);
        certificateGrid.appendChild(certificateItem);
    }

    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
        // Tutup menu setelah klik link (hanya untuk mobile)
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("show");
            }
        });
    });
});

