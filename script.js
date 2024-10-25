// Kamu bisa menambahkan interaksi JavaScript di sini jika diperlukan.
// Misalnya, animasi smooth scroll ketika link ditekan.

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});