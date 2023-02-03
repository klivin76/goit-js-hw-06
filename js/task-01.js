const listCategories = document.querySelector(`#categories`);
const listLiClasses = listCategories.querySelectorAll(`.item`);
console.log(`Number of categories: ${listLiClasses.length}`);
for (let listLiClass of listLiClasses) {
  console.log(`Category:`, listLiClass.firstElementChild.textContent);
  console.log(`Elements:`, listLiClass.lastElementChild.children.length);
};


