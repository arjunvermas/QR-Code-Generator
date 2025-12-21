# QR Code Generator

A simple and elegant QR code generator with both Python CLI and Web Interface implementations. Generate QR codes instantly for URLs, text, or any data you need to encode.

![QR Code Generator](https://img.shields.io/badge/QR%20Code-Generator-black?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- **Two Implementations**: Choose between Python CLI or Web Interface
- **Instant Generation**: Create QR codes in seconds
- **Clean Design**: Modern, minimalist user interface
- **Download Support**: Save QR codes as PNG images
- **Responsive**: Works perfectly on desktop and mobile devices
- **No Backend Required**: Web version runs entirely in the browser
- **High Error Correction**: Ensures QR codes work even if partially damaged

## 🚀 Getting Started

### Python Version

#### Prerequisites

- Python 3.x
- pip package manager

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/heeccker/QRC-Generator.git
cd QRC-Generator
```

2. Install required dependencies:
```bash
pip install qrcode[pil]
```

#### Usage

Run the Python script:
```bash
python qrcode_generator.py
```

Enter your URL or text when prompted, and the QR code will be saved as `qrcode.png`.

### Web Version

#### Prerequisites

- Any modern web browser
- No installation required!

#### Usage

1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. Enter your URL or text in the input field
4. Click "Generate QR Code"
5. Download your QR code by clicking the download button

**Live Demo**: Simply open `index.html` locally or host it on any web server.

## 📁 Project Structure

```
QRC-Generator/
├── qrcode_generator.py   # Python CLI version
├── index.html            # Web interface HTML
├── index.css             # Styling for web interface
├── index.js              # JavaScript logic
└── README.md             # Project documentation
```

## 🛠️ Technologies Used

### Python Version
- **qrcode**: Python library for generating QR codes
- **PIL/Pillow**: Image processing library

### Web Version
- **HTML5**: Structure and markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Client-side logic
- **QRCode.js**: JavaScript QR code generation library

## 💡 Features Breakdown

### Python CLI
- Simple command-line interface
- Outputs PNG file directly
- Minimal dependencies
- Perfect for automation and scripts

### Web Interface
- Beautiful modern UI with dark theme
- Real-time QR code generation
- One-click download functionality
- Keyboard shortcuts (Enter to generate, Ctrl/Cmd + Enter)
- Responsive design for all devices
- Smooth animations and transitions
- Empty state handling

## 🎨 Customization

### Python Version
You can customize the QR code by modifying the `qrcode.QRCode()` parameters in the script:
```python
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
```

### Web Version
The web interface uses fixed settings optimized for quality:
- **Size**: 300x300 pixels
- **Color**: Black on white background
- **Error Correction**: High level (Level H)

## 📝 Examples

### Python CLI Example
```bash
$ python qrcode_generator.py
Enter the URL: https://github.com/heeccker/QRC-Generator
QR Code was generated
```

### Web Interface
1. Open the web interface
2. Type or paste: `https://github.com/heeccker/QRC-Generator`
3. Click "Generate QR Code"
4. Download the generated QR code

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**heeccker**
- GitHub: [@heeccker](https://github.com/heeccker)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

## 📞 Contact

If you have any questions or suggestions, feel free to open an issue on GitHub.

---

**Built with ❤️ using Python, HTML, CSS & JavaScript**
