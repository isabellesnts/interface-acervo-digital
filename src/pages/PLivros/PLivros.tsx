import type { JSX } from "react";
import type LivroDTO from "../../dto/LivroDTO";

function PLivros(): JSX.Element {
    // Dados fictícios
    const livrosFicticios: LivroDTO[] = [
        {
            id_livro: 1,
            titulo: "Clean Code",
            autor: "Robert C. Martin",
            editora: "Prentice Hall",
            ano_publicacao: "2008",
            isbn: "978-0132350884",
            quant_total: 5,
            quant_disponivel: 3,
            quant_aquisicao: 5,
            valor_aquisicao: 89.99,
            status_livro: true
        },
        {
            id_livro: 2,
            titulo: "Design Patterns",
            autor: "Gang of Four",
            editora: "Addison-Wesley",
            ano_publicacao: "1994",
            isbn: "978-0201633610",
            quant_total: 3,
            quant_disponivel: 1,
            quant_aquisicao: 3,
            valor_aquisicao: 54.99,
            status_livro: true
        },
        {
            id_livro: 3,
            titulo: "The Pragmatic Programmer",
            autor: "David Thomas",
            editora: "Addison-Wesley",
            ano_publicacao: "1999",
            isbn: "978-0135957059",
            quant_total: 4,
            quant_disponivel: 2,
            quant_aquisicao: 4,
            valor_aquisicao: 65.00,
            status_livro: true
        },
        {
            id_livro: 4,
            titulo: "Refactoring",
            autor: "Martin Fowler",
            editora: "Addison-Wesley",
            ano_publicacao: "2018",
            isbn: "978-0134757599",
            quant_total: 2,
            quant_disponivel: 0,
            quant_aquisicao: 2,
            valor_aquisicao: 72.50,
            status_livro: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Acervo de Livros</h1>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-slate-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">ID</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Título</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Autor</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Editora</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Ano</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">ISBN</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Total</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Disponível</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Valor</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {livrosFicticios.map((livro) => (
                                <tr key={livro.id_livro} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-900">{livro.id_livro}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{livro.titulo}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{livro.autor}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{livro.editora}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{livro.ano_publicacao}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{livro.isbn}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{livro.quant_total}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            livro.quant_disponivel > 0 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {livro.quant_disponivel}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">R$ {livro.valor_aquisicao.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            livro.status_livro 
                                                ? 'bg-blue-100 text-blue-800' 
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {livro.status_livro ? 'Ativo' : 'Inativo'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                    <p>Total de livros: <span className="font-semibold">{livrosFicticios.length}</span></p>
                </div>
            </div>
        </div>
    );
}

export default PLivros;
