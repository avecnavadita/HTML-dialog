function showLogin(){
    // 1 find the dialog box (DOM)-document object modal
    // since getElements returns a collection, we only take the first element using 0 as index
    const el = document.getElementsByTagName('dialog')[0];
    // 2 add open attribute to the dialog
    el.setAttribute("open", "");
}