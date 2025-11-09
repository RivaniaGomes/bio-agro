/**
 * CONFIGURAÇÃO EMAILJS - BIO AGRO
 * 
 * 1. Cadastre-se em https://www.emailjs.com/
 * 2. Crie um serviço de email
 * 3. Crie um template
 * 4. Substitua as configurações abaixo
 */

// Configuração do EmailJS
const EMAIL_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID', // Ex: 'service_abc123'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Ex: 'template_xyz456'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Ex: 'user_def789'
};

// Inicialização do EmailJS (adicione no início do arquivo main.js)
function initEmailJS() {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

// Função de envio real (substitua a simulação no main.js)
function submitToEmailJS(data) {
    return emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
            to_email: 'contato@bioagro.com.br', // Seu email
            from_name: data.nome,
            from_phone: data.telefone,
            residue_type: data.residuo,
            municipality: data.municipio || 'Não informado',
            message: `Novo pré-cadastro de ${data.nome} para coleta de ${data.residuo}`,
            reply_to: data.telefone
        }
    );
}

// Template do EmailJS (copie para o painel do EmailJS):
/*
ASSUNTO: Novo Pré-Cadastro Bio Agro - {{from_name}}

CORPO DO EMAIL:
Novo pré-cadastro recebido através do site!

DADOS DO CLIENTE:
Nome: {{from_name}}
Telefone: {{from_phone}}
Tipo de Resíduo: {{residue_type}}
Município: {{municipality}}

MENSAGEM:
{{message}}

Data: {{current_date}}

---
Bio Agro - Transformando resíduos em recursos
*/

// Exemplo de integração com Google Sheets (alternativa)
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

function submitToGoogleSheets(data) {
    return fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: data.nome,
            telefone: data.telefone,
            residuo: data.residuo,
            municipio: data.municipio,
            timestamp: new Date().toISOString()
        })
    });
}

// Exemplo de integração com Netlify Forms (se usando Netlify)
/*
No HTML, adicione no formulário:
<form name="bio-agro-leads" method="POST" data-netlify="true" hidden>
    <input type="text" name="nome">
    <input type="tel" name="telefone">
    <input type="text" name="residuo">
    <input type="text" name="municipio">
</form>

No JavaScript:
function submitToNetlify(data) {
    return fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'form-name': 'bio-agro-leads',
            ...data
        })
    });
}
*/