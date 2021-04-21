// displays the dialog 
function showLogin(){
    // 1 find the dialog box (DOM)-document object modal
    // since getElements returns a collection, we only take the first element using 0 as index
    const el = document.getElementsByTagName('dialog')[0];
    // 2 add open attribute to the dialog
    el.setAttribute("open", "");
    // el.classList.toggle("elDialog");
    console.log('hello');
}

// hides the dialog 
function hideLogin(){
    // 1 find the dialog box 
    const dialog = document.getElementsByTagName('dialog')[0];
    // 2 remove open attribute from dialog box
    dialog.removeAttribute("open");
}