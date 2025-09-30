# Deploy na Hostinger

## Pré-requisitos
- Conta na Hostinger com suporte a Docker (VPS ou Cloud)
- Acesso SSH ao servidor
- Docker e Docker Compose instalados no servidor

## Passos para Deploy

### 1. Conectar ao servidor via SSH
```bash
ssh usuario@seu-servidor.hostinger.com
```

### 2. Clonar o repositório
```bash
git clone seu-repositorio.git
cd nome-do-projeto
```

### 3. Build e iniciar os containers
```bash
docker-compose up -d --build
```

### 4. Verificar se está rodando
```bash
docker-compose ps
docker-compose logs -f
```

### 5. Configurar domínio
Na Hostinger, aponte seu domínio para o IP do servidor na porta 80.

## Atualizar a aplicação

```bash
git pull origin main
docker-compose down
docker-compose up -d --build
```

## Comandos úteis

- Parar containers: `docker-compose down`
- Ver logs: `docker-compose logs -f web`
- Reiniciar: `docker-compose restart`
- Rebuild: `docker-compose up -d --build`

## Deploy alternativo (sem Docker)

Se sua Hostinger não suporta Docker, você pode fazer deploy dos arquivos estáticos:

### 1. Build local
```bash
npm install
npm run build
```

### 2. Upload da pasta `dist`
Faça upload do conteúdo da pasta `dist/` para o diretório `public_html` na Hostinger via FTP ou File Manager.

### 3. Configurar .htaccess
Crie um arquivo `.htaccess` na pasta public_html:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
</IfModule>
```

## Troubleshooting

- **Porta já em uso**: Mude a porta no docker-compose.yml (ex: "8080:80")
- **Erros de permissão**: Use `sudo` nos comandos docker
- **Build falha**: Verifique se tem memória suficiente no servidor
