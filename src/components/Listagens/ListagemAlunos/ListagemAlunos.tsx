import {type JSX } from "react";

interface Aluno {
    id: number;
    ra: string;
    nome: string;
    email: string;
    telefone: string;
}

function ListagemAlunos(): JSX.Element {
    const alunosFicticios: Aluno[] = [
        {
            id: 1,
            ra: "2023001",
            nome: "João Silva",
            email: "joao.silva@example.com",
            telefone: "(11) 99999-9999"
        },
        {
            id: 2,
            ra: "2023002",
            nome: "Maria Oliveira",
            email: "maria.oliveira@example.com",
            telefone: "(11) 88888-8888"
        },
        {
            id: 3,
            ra: "2023003",
            nome: "Pedro Santos",
            email: "pedro.santos@example.com",
            telefone: "(11) 77777-7777"
        },
        {
            id: 4,
            ra: "2023004",
            nome: "Ana Costa",
            email: "ana.costa@example.com",
            telefone: "(11) 66666-6666"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestão de Alunos</h1>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-slate-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">ID</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">RA</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Nome</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">E-mail</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Telefone</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {alunosFicticios.map((aluno) => (
                                <tr key={aluno.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{aluno.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{aluno.ra}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{aluno.nome}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{aluno.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{aluno.telefone}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-2">
                                            <a 
                                                href="#" 
                                                className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-semibold hover:bg-blue-600 transition-colors"
                                            >
                                                Editar
                                            </a>
                                            <a 
                                                href="#" 
                                                className="px-3 py-1 bg-gray-500 text-white rounded text-xs font-semibold hover:bg-gray-600 transition-colors"
                                            >
                                                Detalhes
                                            </a>
                                            <a 
                                                href="#" 
                                                className="px-3 py-1 bg-red-500 text-white rounded text-xs font-semibold hover:bg-red-600 transition-colors"
                                            >
                                                Deletar
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                    <p>Total de alunos: <span className="font-semibold">{alunosFicticios.length}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ListagemAlunos;