const categories = document.querySelector('#categories');
const categoryItems = categories.querySelectorAll('.item');
console.log(`Kategori sayısı: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('ul li').length;
  
    console.log(`Kategori: ${title}`);
    console.log(`Eleman sayısı: ${itemCount}`);
  });