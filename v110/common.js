function generateUniqueId() {
    // Usando um timestamp combinado com um número aleatório para garantir unicidade
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 5);
    return `${timestamp}${randomString}`;
}
