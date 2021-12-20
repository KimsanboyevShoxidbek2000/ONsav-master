window.addEventListener('scroll', function() {
    let Header = document.querySelector('.header')
    Header.classList.toggle('sticky' , window.scrollY > 200)

})

let Home = document.getElementById('Home');
let Shop = document.getElementById('Shop');
let Setting = document.getElementById('Setting');
let aboutWe = document.getElementById('about-we');

const homeMenu = document.getElementById('home-menu');
const shopMenu = document.getElementById('Shop-menu');
const settingMenu = document.getElementById('setting-menu');
const AboutWeMenu = document.getElementById('about-we-menu')



Home.addEventListener('mouseenter', () => {
      homeMenu.style.display = 'block'
});
homeMenu.addEventListener('mouseenter', () => {
    homeMenu.style.display = 'block'
});

Home.addEventListener('mouseleave', () => {
    homeMenu.style.display = 'none'
})

homeMenu.addEventListener('mouseleave', () => {
    homeMenu.style.display = 'none'
})

Shop.addEventListener('mouseenter', () => {
    shopMenu.style.display = 'block'
})

shopMenu.addEventListener('mouseenter', () => {
    shopMenu.style.display = 'block'
})

Shop.addEventListener('mouseleave', () => {
    shopMenu.style.display = "none"
})

shopMenu.addEventListener('mouseleave' , () => {
    shopMenu.style.display = 'none'
})

Setting.addEventListener('mouseenter', () => {
    settingMenu.style.display = 'block'
})

settingMenu.addEventListener('mouseenter', () => {
    settingMenu.style.display = 'block'
})

Setting.addEventListener('mouseleave', () => {
    settingMenu.style.display = 'none'
})
settingMenu.addEventListener('mouseleave', () => {
    settingMenu.style.display = 'none'
})

aboutWe.addEventListener('mouseenter', () => {
    AboutWeMenu.style.display = 'block'
})
AboutWeMenu.addEventListener('mouseenter', () => {
    AboutWeMenu.style.display = 'block'
})
aboutWe.addEventListener('mouseleave', () => {
    AboutWeMenu.style.display = 'none'
})
AboutWeMenu.addEventListener('mouseleave', () => {
    AboutWeMenu.style.display = 'none'

})

// for(i = 0 ; i < 10 , i++){

// }

