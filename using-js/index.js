// ================================
// MODERN QR CODE GENERATOR
// ================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============= GET DOM ELEMENTS =============
    const textInput = document.getElementById('textInput');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const qrcodeDiv = document.getElementById('qrcode');
    const qrSection = document.getElementById('qrSection');
    
    // Variable to store the current QR code instance
    let currentQRCode = null;
    
    showEmptyState();
    
    // ============= EVENT LISTENERS =============
    
    // Generate QR Code when button is clicked
    generateBtn.addEventListener('click', generateQRCode);
    
    // Also generate when Enter key is pressed in input
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateQRCode();
        }
    });
    
    // Download QR Code when download button is clicked
    downloadBtn.addEventListener('click', downloadQRCode);
    
    // ============= FUNCTIONS =============
    
    /**
     * Shows an empty state message when no QR code is generated
     */
    function showEmptyState() {
        qrcodeDiv.innerHTML = '<div class="empty-message">Your QR code will appear here</div>';
        downloadBtn.style.display = 'none';
    }
    
    /**
     * Generates the QR code based on user input and options
     */
    function generateQRCode() {
        // Get input values
        const text = textInput.value.trim();
        const color = '#000000'; // Fixed black color
        const size = 300; // Fixed medium size
        
        // Validate input
        if (!text) {
            alert('⚠️ Please enter some text or URL to generate QR code');
            textInput.focus();
            return;
        }
        
        // Clear previous QR code
        qrcodeDiv.innerHTML = '';
        
        // Add generating animation
        generateBtn.classList.add('generating');
        
        // Small delay to show animation
        setTimeout(() => {
            try {
                // Create new QR code instance
                currentQRCode = new QRCode(qrcodeDiv, {
                    text: text,
                    width: size,
                    height: size,
                    colorDark: color,
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H // High error correction
                });
                
                downloadBtn.style.display = 'block';
                
                generateBtn.classList.remove('generating');
                
            } catch (error) {
                console.error('❌ Error generating QR code:', error);
                alert('Error generating QR code. Please try again.');
                showEmptyState();
                generateBtn.classList.remove('generating');
            }
        }, 300);
    }
    
    
    function downloadQRCode() {
        // Find the canvas or image element
        const canvas = qrcodeDiv.querySelector('canvas');
        const img = qrcodeDiv.querySelector('img');
        
        if (canvas) {
            // If canvas exists, convert it to blob and download
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                downloadImage(url, 'qrcode.png');
                URL.revokeObjectURL(url); // Clean up
            });
        } else if (img) {
            // If image exists, download it directly
            downloadImage(img.src, 'qrcode.png');
        } else {
            alert('⚠️ No QR code to download. Please generate one first.');
        }
    }
    
    /**
     * Helper function to trigger download
     * @param {string} url - The URL of the image to download
     * @param {string} filename - The filename for the downloaded file
     */
    function downloadImage(url, filename) {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Visual feedback
        const originalText = downloadBtn.textContent;
        downloadBtn.textContent = '✓ Downloaded!';
        downloadBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        
        setTimeout(() => {
            downloadBtn.textContent = originalText;
            downloadBtn.style.background = '';
        }, 2000);
    }
    
    // ============= ADDITIONAL FEATURES =============
    
    /**
     * Adds keyboard shortcut support (Ctrl/Cmd + Enter to generate)
     */
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            generateQRCode();
        }
    });
    
    /**
     * Auto-focus on input when page loads
     */
    textInput.focus();
    
    // Log initialization
    
});