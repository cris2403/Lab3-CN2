const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Lab3 - Azure Web App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                    background-color: #f0f0f0;
                }
                h1 { color: #0078d4; }
                .container {
                    background-color: white;
                    padding: 30px;
                    border-radius: 10px;
                    max-width: 600px;
                    margin: auto;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>✅ Laboratório 3 - Concluído!</h1>
                <p>A minha Web App Node.js está a funcionar no Azure!</p>
                <p>Alteração feita no VS Code e deploy automático via GitHub Actions.</p>
                <hr>
                <small>Azure App Service + GitHub CI/CD</small>
            </div>
        </body>
        </html>
    `);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Servidor a correr na porta ${port}`);
});