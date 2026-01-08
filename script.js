let qrcode = null;

const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrSection = document.getElementById('qr-section');
const qrcodeDiv = document.getElementById('qrcode');
const downloadBtn = document.getElementById('download-btn');

generateBtn.addEventListener('click', generateQRCode);
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateQRCode();
    }
});

downloadBtn.addEventListener('click', downloadQRCode);

function generateQRCode() {
    const text = textInput.value.trim();

    if (!text) {
        alert('텍스트 또는 URL을 입력해주세요!');
        return;
    }

    qrcodeDiv.innerHTML = '';

    qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    qrSection.classList.add('show');
}

function downloadQRCode() {
    const canvas = qrcodeDiv.querySelector('canvas');

    if (!canvas) {
        alert('먼저 QR코드를 생성해주세요!');
        return;
    }

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = url;
    link.click();
}
