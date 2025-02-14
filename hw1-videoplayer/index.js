const fileInput = document.getElementById('file')
const videoPlayer = document.getElementById('video')

fileInput.addEventListener('change', handleVideo)

function handleVideo() {
    const file = this.files[0]
    const fileUrl = window.URL.createObjectURL(file)
    videoPlayer.setAttribute('src', fileUrl)
}


