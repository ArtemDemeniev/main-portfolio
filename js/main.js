// const getBackdrop = document.querySelector('.backdrop')
// const getOpen = document.querySelector('.socials__link-phone')
// const closeModal = document.querySelector('.btn')
// const modal =document.querySelector('.modal')

// const toggleModal = function () {
//     getBackdrop.classList.toggle('is-hidden')
// }
// getOpen.addEventListener('click', toggleModal)
// closeModal.addEventListener('click', toggleModal)


const tabBtn  = document.querySelectorAll('.tab-btn');
const tabItem = document.querySelectorAll('.tab-item');
const btnActive = document.querySelector('.active-btn')

tabBtn.forEach(function(item){
    item.addEventListener('click', function(){
        const currentBtn = item;

        tabBtn.forEach(function(item){
            item.classList.remove('active-btn')

        })

        currentBtn.classList.add('active-btn')
    })
})