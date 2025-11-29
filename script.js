// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    
    // 移动端菜单切换
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 平滑滚动 (点击导航链接平滑跳转到对应区域)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // 点击后关闭手机菜单

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 可以在这里添加更多交互，例如游戏卡片的动态效果
    console.log("绘星记梦工作室网站已就绪！");
});
