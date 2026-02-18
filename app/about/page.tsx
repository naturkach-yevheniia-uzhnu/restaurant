import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-300 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="absolute top-0 right-[2em] inline-block mt-4 text-white hover:text-gray-200"
          >
            На головну ←
          </Link>
          <h1 className="text-5xl font-bold mb-4">Про систему</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ця система створена для онлайн-бронювання столів у ресторані. Вона
            допомагає гостям швидко обрати місце, а менеджеру керувати
            бронюваннями та столами.
          </p>
        </div>
      </section>

      {/* Основна інформація */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Навіщо потрібна система?
            </h2>
            <p className="text-gray-600 mb-4">
              Система дозволяє автоматизувати процес бронювання, зменшити
              навантаження на персонал і зробити сервіс зручнішим для гостей.
            </p>
            <p className="text-gray-600">
              Вона підходить для сучасних ресторанів, які хочуть працювати
              швидко та ефективно.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Основні функції
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc">
              <li> Онлайн-бронювання столів</li>
              <li> Управління столами ресторану</li>
              <li> Контроль статусів бронювання</li>
              <li> Ролі користувачів: гість та менеджер</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ролі */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Хто користується системою?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Гість
              </h3>
              <p className="text-gray-600">
                Обирає доступний стіл, створює бронювання та може скасувати його
                у разі потреби.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Менеджер ресторану
              </h3>
              <p className="text-gray-600">
                Контролює всі заявки, підтверджує бронювання та керує списком
                столів.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
