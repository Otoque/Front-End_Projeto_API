// CRIE: src/pages/Perfil.jsx

export default function Perfil() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8">

          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              NT
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Nicolas Tavares
              </h1>

              <p className="text-gray-500 text-lg">
                Aluno - Portal de Horas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">Matrícula</p>
              <h3 className="text-2xl font-semibold">202500123</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">Curso</p>
              <h3 className="text-2xl font-semibold">
                Análise e Desenvolvimento de Sistemas
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">Semestre</p>
              <h3 className="text-2xl font-semibold">1º Semestre</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">E-mail</p>
              <h3 className="text-xl font-semibold">
                nicolas@email.com
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">Horas Concluídas</p>
              <h3 className="text-2xl font-semibold text-blue-600">
                72h
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">Meta Total</p>
              <h3 className="text-2xl font-semibold text-green-600">
                120h
              </h3>
            </div>

          </div>

          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
              Editar Perfil
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}