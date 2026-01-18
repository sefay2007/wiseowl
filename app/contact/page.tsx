import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <p className="text-sm font-medium text-gray-500 mb-4">
                Contact us
              </p>

              <h1 className="text-4xl font-semibold text-gray-900 mb-6">
                Need help?
              </h1>

              <p className="text-gray-600 max-w-md mb-8">
                Do you have questions or need advice? Don’t hesitate to contact us.
                We’re here to help you and provide expert guidance.
              </p>

              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  support@wiseowl.com
                </p>

                <p>
                  <span className="font-medium">Mon – Fri:</span>{" "}
                  09:00 – 18:00
                </p>

                <p>
                  <span className="font-medium">Sat – Sun:</span>{" "}
                  10:00 – 14:00
                </p>
              </div>
            </div>

            <div className="bg-[#F2F6F7] rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-gray-700 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="text-gray-700 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="text-gray-700 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
