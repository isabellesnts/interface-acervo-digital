import type AlunoDTO from "../dto/AlunoDTO";

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

    async enviarFormularioAluno(formAluno: AlunoDTO): Promise<boolean> {
        try {
            const token = localStorage.getItem('token');
            const respostaAPI = await fetch(`${this.serverUrl}${this.endpointAlunos}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${token}`
                },
                body: JSON.stringify(formAluno)
            });

            if(!respostaAPI.ok) throw new Error(`Erro ${respostaAPI.status}: ${respostaAPI.statusText}`);

            console.info(`${respostaAPI.status}: ${respostaAPI.statusText}`);

            return true;
        } catch (error) {
            console.error(`Erro ao fazer consulta à API. ${error}`);
            return false;
        }
    }

    async async (formAluno: AlunoDTO): Promise<boolean> {
    try {
        const token = localStorage.getItem('token');
        const respostaAPI = await fetch(`${this.serverUrl}${this.endpointAlunos}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${token}`
            },
            body: JSON.stringify(formAluno)
        });

        if (!respostaAPI.ok) throw new Error(`Erro ${respostaAPI.status}: ${respostaAPI.statusText}`);
        return true;
    } catch (error) {
        console.error(`Erro ao fazer consulta à API. ${error}`);
        return false;
    }
}
}

export default new AlunoRequests();
