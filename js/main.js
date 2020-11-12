const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select Tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add Border To Current Tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show Class
    tabContentItem.classList.add('show');
    console.log(`${this.id}kjhkjhkj`);
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen For Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));
