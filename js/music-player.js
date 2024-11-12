window.addEventListener("DOMContentLoaded", function() {
  // 这里插入网易云音乐 iframe 到页面的某个位置
  const musicContainer = document.createElement("div");
  musicContainer.innerHTML = `
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86"
            src="//music.163.com/outchain/player?type=2&id=4947481285&auto=1&height=66">
        </iframe>`;
  document.body.appendChild(musicContainer);  // 将播放器插入到页面底部
});
