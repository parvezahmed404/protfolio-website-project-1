console.log("script running.....");
document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    const isSidebarOpen = sidebar.classList.toggle('sidebarGo');

    if (isSidebarOpen) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        },300);
        
    }
});
