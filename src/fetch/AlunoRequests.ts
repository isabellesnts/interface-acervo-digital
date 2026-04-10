// Classe responsável por fazer requisições à API - aluno
class AlunoRequests {
    private serverUrl: string;
    private endpointAlunos: string;

    constructor() {
        this.serverUrl = 'http://localhost:3333';
        this.endpointAlunos = '/api/alunos';
    }

    async listarAlunos() {
        try {
            const response = await fetch(`${this.serverUrl}${this.endpointAlunos}`);

            if (!response.ok) {
                throw new Error('Não foi possível listar os alunos.');
            }

            return response.json();
        } catch (error) {
            console.error(`Erro ao fazer consulta à API: ${error}`);
            return null;
        }
    }
}

export default new AlunoRequests();
