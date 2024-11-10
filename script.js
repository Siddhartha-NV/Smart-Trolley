<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Payment QR Code Generator</title>
    <link rel="stylesheet" href="style.css">
    <!-- Include QRCode Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
</head>
<body>
    <nav>
        <img src="assets/logo.png" alt="Smart Trolley Logo" class="logo">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="scanner.html">Product Scanner</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="payment.html">Payment</a></li>
            <li><a href="admin.html">Admin Dashboard</a></li>
            <li><a href="generateQR.html">Generate QR</a></li>
        </ul>
    </nav>

    <section>
        <h2>Generate Payment QR Code</h2>
        <form id="paymentForm">
            <label for="amount">Enter Payment Amount ($):</label>
            <input type="number" id="amount" placeholder="Enter amount" required>
            
            <label for="userId">Enter User ID:</label>
            <input type="text" id="userId" placeholder="User ID" required>
            
            <button type="button" onclick="generatePaymentQR()">Generate QR Code</button>
        </form>
        
        <div id="qrCodeContainer">
            <h3>Scan to Pay</h3>
            <div id="qrCode"></div>
        </div>
    </section>

    <script>
        function generatePaymentQR() {
            // Get input values
            const amount = document.getElementById('amount').value;
            const userId = document.getElementById('userId').value;

            // Validate inputs
            if (amount.trim() === '' || userId.trim() === '' || amount <= 0) {
                alert("Please enter a valid amount and user ID.");
                return;
            }

            // Prepare payment info
            const paymentInfo = {
                userId: userId,
                amount: amount,
                currency: 'USD',
                timestamp: new Date().toISOString(),
            };

            // Convert payment info to a string format (you can change this structure based on your payment gateway)
            const paymentData = JSON.stringify(paymentInfo);
            
            // Clear previous QR code
            const qrCodeContainer = document.getElementById('qrCode');
            qrCodeContainer.innerHTML = '';

            // Generate a new QR code
            const qrCode = new QRCode(qrCodeContainer, {
                text: paymentData,
                width: 200,
                height: 200,
                colorDark: "#006d77",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        }
    </script>
</body>
</html>
