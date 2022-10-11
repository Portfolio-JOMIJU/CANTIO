const label = document.querySelectorAll('.label');
label.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.optionItem');
        clickLabel(lb, optionItems);
    })
});
const clickLabel = (lb, optionItems) => {

    // ****************** 추가된 부분 START
    // 내가 아닌 다른 select 닫기 
    label.forEach(function(itemLb){
        if(lb !== itemLb) {
            itemLb.parentNode.classList.remove('active')
        }
    })
    // ****************** 추가된 부분 END

    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}


const handleClose = e => {
    // select 가 아닌경우 닫기 
    if(!e.target.classList.contains('label') && !e.target.classList.contains('optionItem')) {
        label.forEach(function(lb){
            lb.parentNode.classList.remove('active')
        })
    } 
}

window.addEventListener('click', e => handleClose(e))