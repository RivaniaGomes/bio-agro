// Bio Agro Landing Page - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    setupSmoothScrolling();
    setupFormValidation();
    setupAnimations();
    setupPhoneMask();
    setupWhatsAppIntegration();
}

// Smooth Scrolling para links âncora
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Validação e submissão do formulário
function setupFormValidation() {
    const form = document.getElementById('pre-cadastro');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validação em tempo real
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
    
    // Submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove erro anterior
        clearFieldError(e);
        
        // Validações específicas
        switch(field.name) {
            case 'nome':
                if (!value) {
                    showFieldError(field, 'Nome é obrigatório');
                    return false;
                }
                if (value.length < 3) {
                    showFieldError(field, 'Nome deve ter pelo menos 3 caracteres');
                    return false;
                }
                break;
                
            case 'telefone':
                if (!value) {
                    showFieldError(field, 'Telefone é obrigatório');
                    return false;
                }
                if (!isValidPhone(value)) {
                    showFieldError(field, 'Telefone inválido. Use formato: (XX) XXXXX-XXXX');
                    return false;
                }
                break;
                
            case 'residuo':
                if (!value) {
                    showFieldError(field, 'Selecione o tipo de resíduo');
                    return false;
                }
                break;
                
            case 'municipio':
                if (!value) {
                    showFieldError(field, 'Município é obrigatório');
                    return false;
                }
                if (value.length < 2) {
                    showFieldError(field, 'Município deve ter pelo menos 2 caracteres');
                    return false;
                }
                break;
        }
        
        return true;
    }
    
    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField({ target: field })) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function submitForm() {
        try {
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Mostrar loading no botão
            showButtonLoading(submitButton);
            
            // Enviar dados via EmailJS ou Netlify Forms
            submitToEmailJS(data)
                .then(() => {
                    showSuccessMessage();
                    form.reset();
                    trackEvent('submit_success', 'Form', 'Pre Cadastro');
                    
                    // Integração com WhatsApp
                    setTimeout(() => {
                        sendToWhatsApp(data);
                    }, 1000);
                })
                .catch((error) => {
                    console.error('Erro ao enviar formulário:', error);
                    showErrorMessage('Erro ao enviar formulário. Tente novamente ou entre em contato via WhatsApp.');
                    trackEvent('submit_error', 'Form', error.message || 'Unknown error');
                })
                .finally(() => {
                    hideButtonLoading(submitButton);
                });
                
        } catch (error) {
            console.error('Erro crítico no formulário:', error);
            showErrorMessage('Erro inesperado. Por favor, entre em contato via WhatsApp.');
            hideButtonLoading(submitButton);
            trackEvent('submit_critical_error', 'Form', error.message || 'Critical error');
        }
    }
    
    // Função para enviar via EmailJS (substitua pelos seus dados)
    function submitToEmailJS(data) {
        return new Promise((resolve, reject) => {
            // Simular envio por enquanto - substitua pela implementação real do EmailJS
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
            //     .then(resolve)
            //     .catch(reject);
            
            // Simulação temporária
            setTimeout(() => {
                if (Math.random() > 0.1) { // 90% sucesso
                    resolve({ status: 200, text: 'OK' });
                } else {
                    reject(new Error('Falha na simulação de envio'));
                }
            }, 1500);
        });
    }
    
    function showErrorMessage(message) {
        // Criar modal de erro
        const modal = document.createElement('div');
        modal.className = 'error-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="error-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Ops! Algo deu errado</h3>
                <p>${message}</p>
                <div class="modal-buttons">
                    <button class="btn-primary" onclick="closeErrorModal()">
                        <i class="fas fa-whatsapp"></i>
                        FALAR NO WHATSAPP
                    </button>
                    <button class="btn-secondary" onclick="closeErrorModal()">
                        TENTAR NOVAMENTE
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Fechar modal automaticamente após 10 segundos
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 10000);
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove erro anterior
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Adiciona nova mensagem de erro
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(e) {
        const field = e.target;
        field.classList.remove('error');
        
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function showButtonLoading(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENVIANDO...';
        button.disabled = true;
        button.dataset.originalText = originalText;
    }
    
    function hideButtonLoading(button) {
        button.innerHTML = button.dataset.originalText;
        button.disabled = false;
    }
    
    function showSuccessMessage() {
        // Criar modal de sucesso
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Sucesso!</h3>
                <p>Seu pré-cadastro foi realizado com sucesso! Em breve um de nossos especialistas entrará em contato.</p>
                <button class="btn-primary" onclick="closeModal()">
                    <i class="fas fa-whatsapp"></i>
                    FALAR NO WHATSAPP
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Fechar modal automaticamente após 5 segundos
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 5000);
    }
}

// Máscara para telefone
function setupPhoneMask() {
    const phoneInput = document.getElementById('telefone');
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 2) {
                value = value.replace(/(\d{0,2})/, '($1');
            } else if (value.length <= 7) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
        }
        
        e.target.value = value;
    });
}

// Validação de telefone
function isValidPhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10 || cleanPhone.length === 11;
}

// Animações de entrada
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll(
        '.passo, .card-problema, .card-solucao, .depoimento, .formulario-card'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Integração com WhatsApp
function setupWhatsAppIntegration() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    // Adicionar evento de clique no botão flutuante
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    }
    
    // Converter links de telefone para WhatsApp
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    });
}

function sendToWhatsApp(formData) {
    const message = formatWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/5521975629640?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openWhatsApp(customMessage = null) {
    const defaultMessage = `Olá! Gostaria de conhecer a proposta da Bio Agro para o descarte de resíduos do meu galpão.`;
    const message = customMessage || defaultMessage;
    const whatsappUrl = `https://wa.me/5521975629640?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function formatWhatsAppMessage(data) {
    return `*Novo Pré-Cadastro Bio Agro* 🌱

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*Tipo de Resíduo:* ${data.residuo}
*Volume Mensal:* ${data.volume ? data.volume + ' kg/mês' : 'Não informado'}
*Município:* ${data.municipio || 'Não informado'}

Enviado através da landing page em ${new Date().toLocaleString('pt-BR')}`;
}

// Função global para fechar modal
function closeModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.remove();
    }
    openWhatsApp('Olá! Acabei de fazer o pré-cadastro no site e gostaria de saber mais sobre a proposta da Bio Agro.');
}

// Função global para fechar modal de erro
function closeErrorModal() {
    const modal = document.querySelector('.error-modal');
    if (modal) {
        modal.remove();
    }
}

// Efeitos do header ao fazer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(247, 248, 240, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(247, 248, 240, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Analytics e tracking (opcional)
function trackEvent(action, category = 'Bio Agro', label = '') {
    // Integração com Google Analytics ou similar
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Eventos de tracking
document.addEventListener('click', function(e) {
    // Track button clicks
    if (e.target.matches('.btn-primary, .btn-form')) {
        trackEvent('click', 'Button', e.target.textContent.trim());
    }
    
    // Track WhatsApp clicks
    if (e.target.closest('.whatsapp-float')) {
        trackEvent('click', 'WhatsApp', 'Float Button');
    }
    
    // Track phone clicks
    if (e.target.matches('a[href^="tel:"]')) {
        trackEvent('click', 'Phone', 'Call Button');
    }
});

// Form submission tracking
document.getElementById('pre-cadastro').addEventListener('submit', function() {
    trackEvent('submit', 'Form', 'Pre Cadastro');
});

// Scroll tracking
let scrollTracked = false;
window.addEventListener('scroll', function() {
    if (!scrollTracked && window.scrollY > document.body.scrollHeight * 0.5) {
        trackEvent('scroll', 'Engagement', '50% Page');
        scrollTracked = true;
    }
});



// Performance optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});