document.addEventListener('click', function(event) {
    let target = event.target;
    let allExpCheckboxes = document.querySelectorAll('.expand-checkbox');
    let allRoomDropdowns = document.querySelectorAll('.room-dropdown');
    let allGuestDropdowns = document.querySelectorAll('.guest-dropdown');
    allExpCheckboxes.forEach(value => {
        if (!value.contains(target)) {
            value.querySelector('.expand-checkbox__heading').classList.remove('expand-checkbox__heading--open');
            value.querySelector('.expand-checkbox__list').classList.remove('expand-checkbox__list--open');
            event.stopPropagation();
        }
    })

    allRoomDropdowns.forEach(value => {
        if (!value.contains(target)) {
            value.querySelector('.room-dropdown__message').classList.remove('menu-open');
        }
    })
    allGuestDropdowns.forEach(value => {
        if (!value.contains(target)) {
            value.querySelector('.guest-dropdown__message').classList.remove('menu-open');
        }
    })
   
})

