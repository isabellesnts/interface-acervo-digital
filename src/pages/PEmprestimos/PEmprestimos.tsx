import type { JSX } from "react";
import type EmprestimoDTO from "../../dto/EmprestimoDTO";

function PEmprestimos(): JSX.Element {
    // Dados fictícios
    const emprestimosFicticios: EmprestimoDTO[] = [
        {
            id_emprestimo: 1,
            aluno: {
                id_aluno: 101,
                nome: "João",
                sobrenome: "Silva",
                email: "joao.silva@email.com",
                ra: "2023001"
            },
            livro: {
                id_livro: 1,
                titulo: "Clean Code",
                autor: "Robert C. Martin"
            },
            data_emprestimo: new Date("2024-03-01"),
            data_devolucao: new Date("2024-03-15"),
            status_emprestimo: "Devolvido",
            status_emprestimo_registro: true
        },
        {
            id_emprestimo: 2,
            aluno: {
                id_aluno: 102,
                nome: "Maria",
                sobrenome: "Santos",
                email: "maria.santos@email.com",
                ra: "2023002"
            },
            livro: {
                id_livro: 2,
                titulo: "Design Patterns",
                autor: "Gang of Four"
            },
            data_emprestimo: new Date("2024-03-10"),
            status_emprestimo: "Em andamento",
            status_emprestimo_registro: true
        },
        {
            id_emprestimo: 3,
            aluno: {
                id_aluno: 103,
                nome: "Pedro",
                sobrenome: "Oliveira",
                email: "pedro.oliveira@email.com",
                ra: "2023003"
            },
            livro: {
                id_livro: 3,
                titulo: "The Pragmatic Programmer",
                autor: "David Thomas"
            },
            data_emprestimo: new Date("2024-02-20"),
            data_devolucao: new Date("2024-03-05"),
            status_emprestimo: "Devolvido",
            status_emprestimo_registro: true
        },
        {
            id_emprestimo: 4,
            aluno: {
                id_aluno: 104,
                nome: "Ana",
                sobrenome: "Costa",
                email: "ana.costa@email.com",
                ra: "2023004"
            },
            livro: {
                id_livro: 4,
                titulo: "Refactoring",
                autor: "Martin Fowler"
            },
            data_emprestimo: new Date("2024-03-05"),
            status_emprestimo: "Atrasado",
            status_emprestimo_registro: true
        }
    ];

    const formatarData = (data: Date): string => {
        return new Date(data).toLocaleDateString('pt-BR');
    };

    const getStatusColor = (status: string | undefined) => {
        switch (status) {
            case "Devolvido":
                return "bg-green-100 text-green-800";
            case "Em andamento":
                return "bg-blue-100 text-blue-800";
            case "Atrasado":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestão de Empréstimos</h1>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-slate-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">ID</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Aluno</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">RA</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Livro</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Autor</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Em.</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Devolução</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {emprestimosFicticios.map((emprestimo) => (
                                <tr key={emprestimo.id_emprestimo} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{emprestimo.id_emprestimo}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {emprestimo.aluno.nome} {emprestimo.aluno.sobrenome}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{emprestimo.aluno.ra}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{emprestimo.livro.titulo}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{emprestimo.livro.autor}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {formatarData(emprestimo.data_emprestimo)}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {emprestimo.data_devolucao ? formatarData(emprestimo.data_devolucao) : "Pendente"}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(emprestimo.status_emprestimo)}`}>
                                            {emprestimo.status_emprestimo}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                    <p>Total de empréstimos: <span className="font-semibold">{emprestimosFicticios.length}</span></p>
                </div>
            </div>
        </div>
    );
}

export default PEmprestimos;
