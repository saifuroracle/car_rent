
/* Toggle the sidebar */

const sidebarToggleBtn = document.querySelector('.toggle-sidebar')
const sidebar = document.querySelector('.sidebar')

sidebarToggleBtn.onclick = function(){
    sidebar.classList.toggle('sidebar--mobile-active')
}

/* Show/Hide widget content */

const widgets = document.querySelectorAll('.widget')

widgets.forEach(function (widget){
    widget.addEventListener('click',function(e){
        if(e.target.classList.contains('widget_title')) {
            e.target.classList.toggle('widget_title-active')
            e.target.nextElementSibling.classList.toggle('widget_body-hidden')
        }
    })
})

/* Type of checkbox */

const checkBoxAny = document.querySelector('#all')
const topCheckBoxes = document.querySelectorAll('[data-location-param]')

/* Click on All will remove the active class for all buttons  */ 

checkBoxAny.addEventListener('change', function(){
    if(checkBoxAny.checked) {
        topCheckBoxes.forEach(function(item){
            item.checked = false
        })
    } 
})

/* Click on button that is not equal with All will remove the active class for ALL */ 
topCheckBoxes.forEach(function(item){
    item.addEventListener('change', function(){
        if(checkBoxAny.checked){

        checkBoxAny.checked = false

        }
    })
})