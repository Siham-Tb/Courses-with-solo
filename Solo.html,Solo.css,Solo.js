```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع عرض ملفات PDF</title>
Solo welcom you😐
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .pdf-list {
            margin-top: 30px;
        }
        .pdf-item {
            background: #f9f9f9;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-right: 4px solid #4CAF50;
        }
        .pdf-item a {
            color: #0066cc;
            text-decoration: none;
            font-weight: bold;
        }
        .pdf-item a:hover {
            text-decoration: underline;
        }
        .pdf-name {
            color: #333;
        }
        .download-btn {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            font-size: 14px;
        }
        .download-btn:hover {
            background: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>قائمة ملفات PDF</h1>
        
        <div class="pdf-list">
            <!-- القائمة ستظهر هنا -->
            <div class="pdf-item">
                <span class="pdf-name">domendè un gmail</span>
                <a href="https://drive.google.com/file/d/1Fa5E429b1SXWZYXkoS3SZHqJycCLAhcs/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">chapitre 1</span>
                <a href="https://drive.google.com/file/d/1If2EJ1qh7Ra1XYhLeL2nNqY0peSHQ6Uu/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">chapitre 2</span>
                <a href="https://drive.google.com/file/d/1If4TORI2bckgwCZrKZTNxnY2udiWNwzV/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">Chapitre 3</span>
                <a href="https://drive.google.com/file/d/1IjI3l3EXnDgrFgtjEOVTYgbyWfHOuEtU/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">chapitre 4</span>
                <a href="https://drive.google.com/file/d/1IhxQZtGML9C6ls825pU9QksrjpMs4tMM/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">chpitre 5</span>
                <a href="https://drive.google.com/file/d/1IqrSKTKr4tgoXdWCf1Vn6M3HISDj-wCj/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">Chapitre 6</span>
                <a href="https://drive.google.com/file/d/1Iff07BCWCmEhyPfKpMGCkFct7ovRyiWy/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
            
            <div class="pdf-item">
                <span class="pdf-name">Chapitre 7</span>
                <a href="https://drive.google.com/file/d/1IqBQicfgK9vTdMtaApM9J4D-_4J3YhY3/view?usp=drivesdk" class="download-btn" target="_blank">عرض الملف</a>
            </div>
        </div>
    </div>
</body>
</html>
