export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero секція */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-300 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/about"
            className="absolute top-0 right-[2em] inline-block mt-4 text-white hover:text-gray-200"
          >
            Про систему →
          </a>

          <h1 className="text-5xl font-bold mb-4">
            Ресторан — система бронювання столів
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Система призначена для онлайн-бронювання столів у ресторані.
            Адміністратор керує столами та підтверджує бронювання, а гість може
            обирати доступний стіл на певну дату і час.
          </p>
          <button className="bg-white text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Почати
          </button>
        </div>
      </section>

      {/* Секція можливостей */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Можливості системи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Картка 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Управління столами
              </h3>
              <p className="text-gray-600">
                Менеджер може створювати, редагувати та видаляти столи, задавати
                місткість, локацію та доступність.
              </p>
            </div>

            {/* Картка 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Онлайн-бронювання столів
              </h3>
              <p className="text-gray-600">
                Гість може вибрати стіл, вказати дату, час і кількість гостей та
                створити бронювання зі статусом pending.
              </p>
            </div>

            {/* Картка 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4"></div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Контроль бронювань і статусів
              </h3>
              <p className="text-gray-600">
                Менеджер підтверджує або скасовує будь-які бронювання, а гість
                може переглядати та скасовувати лише свої активні бронювання.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Секція "Як працює система" */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url('/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Як працює система
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Крок 1 */}
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                1. Вибір столу
              </h3>
              <p className="text-gray-600">
                Користувач обирає доступний стіл відповідно до кількості гостей.
              </p>
            </div>

            {/* Крок 2 */}
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                2. Створення бронювання
              </h3>
              <p className="text-gray-600">
                Гість вказує дату та час, після чого бронювання надсилається на
                підтвердження.
              </p>
            </div>

            {/* Крок 3 */}
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                3. Підтвердження менеджером
              </h3>
              <p className="text-gray-600">
                Адміністратор підтверджує заявку або скасовує її за потреби.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секція ролей користувачів */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Ролі користувачів у системі
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Роль гостя */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Гість
              </h3>
              <p className="text-gray-600">
                Може переглядати доступні столи, створювати бронювання та
                скасовувати свої активні заявки.
              </p>
            </div>

            {/* Роль менеджера */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Менеджер ресторану
              </h3>
              <p className="text-gray-600">
                Керує столами, контролює всі бронювання та підтверджує або
                відхиляє заявки гостей.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
