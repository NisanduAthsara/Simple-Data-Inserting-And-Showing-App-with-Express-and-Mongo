function getUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('user_add');
    
    if(myParam == 'true'){
        alert('Successfully User Added...!')
    }
}