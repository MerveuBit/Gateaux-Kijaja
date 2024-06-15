const searchIcon=document.querySelector('.search-icon')
const searchForm=document.querySelector('.search-form')
const menuIcon=document.querySelector('.menu-icon')
const navbar=document.querySelector('.navbar')
let isSearchFormVisible = false; // Indicateur pour suivre la visibilité

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle("active");
let isSearchFormVisible = !isSearchFormVisible; // Basculer l'indicateur de visibilité

  if (isSearchFormVisible) {
    searchForm.style.display = 'block'; // Afficher le formulaire de recherche
  } else {
    searchForm.style.display = 'none'; // Masquer le formulaire de recherche
  }
  cartItemsContainer.classList.remove("active");
  navbar.classList.remove("active");
});

menuIcon.addEventListener("click",() => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    if (navbar.classList.contains('active')) {
        // Changer l'icône en "xmark"
        menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Remplacer le contenu de l'icône
    
        // Récupérer l'attribut href de l'icône cliquée (en supposant qu'il s'agisse d'un lien)
        const clickedLinkHref = menuIcon.querySelector('a').href;
        window.location.href = clickedLinkHref; // Naviguer vers la section liée
      } else {
        // Rechanger l'icône en icône de menu originale
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Remplacer le contenu de l'icône
      }
    

})

const cartIcon=document.querySelector('.cart-icon')
const cartItemsContainer=document.querySelector('.cart-items-container')
cartIcon.addEventListener("click",() => {

    cartItemsContainer.classList.toggle("active");
    let iscartItemsContainerVisible = !iscartItemsContainerVisible ; // Basculer l'indicateur de visibilité

  if (iscartItemsContainerVisible ) {
    cartItemsContainer.style.display = 'block'; // Afficher le formulaire de recherche
  } else {
    cartItemsContainer.style.display = 'none'; // Masquer le formulaire de recherche
  }
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
})