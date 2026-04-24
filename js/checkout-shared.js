const baseLinks = {
    up1: "https://pay.pag-certo.online/c/dd831a0e-7e80-48bc-8f63-7631232e5c63", // Verifique
    up2: "https://pay.pag-certo.online/c/7d81e609-f20b-441e-9797-8e41f484df90", // Prossiga
    up3: "https://pay.pag-certo.online/c/3a6d1f2c-e296-4428-b0e3-e62c1199baad", // Cadastro
    up4: "https://pay.pag-certo.online/c/08b00c87-e8a2-4921-8273-1921ba1bce4b", // Pendente
    up5: "https://pay.pag-certo.online/c/ef405c69-e8b7-455d-b77d-acc5fb620177", // Ativar Conta
    up6: "https://pay.pag-certo.online/c/ecdf1577-6883-40fd-9f32-b9e71ca36823", // Registro
    up7: "https://pay.pag-certo.online/c/df4a9426-d0a1-4da3-a6b3-0a12d501a4d5", // Acréscimo
    up8: "https://pay.pag-certo.online/c/012fe7fa-6339-4bbe-8120-16c4abbb4c7e", // Documento
    up9: "https://pay.pag-certo.online/c/80d5144f-7fce-4c07-8953-7b8e288a1070", // Aplicativo
    up10:"https://pay.pag-certo.online/c/2ac9daf1-beeb-4b73-969a-879dd8273cfc", // Abertura
    up11:"https://pay.pag-certo.online/c/b0368ea3-a985-4a23-9f4d-530aa9a395d1", // Consultoria
    up12:"https://pay.pag-certo.online/c/4d8133f1-7753-44fd-afaa-65dee1344499"  // Administrativo
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
