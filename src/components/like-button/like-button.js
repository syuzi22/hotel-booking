let likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(node => {
    node.addEventListener('click', function(){
        let isLiked = node.classList.contains('like-button_clicked');
        let counter = node.querySelector('.like-button__counter');
        if(!counter) {
            throw new Error('counter container not found');
        }
        let counterValue = +counter.textContent;
        if (!isLiked) {
            node.classList.add('like-button_clicked');
            counterValue++
        }else {
            node.classList.remove('like-button_clicked');
            counterValue--;
        }
        counter.textContent = counterValue;
    })
})