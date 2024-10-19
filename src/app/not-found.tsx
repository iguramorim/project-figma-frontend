import Error from "@/assets/svg/Error";
import BtnRota from "@/components/intro/BtnRota";

export default function notFound() {
  return (
    <section className="max-w-screen-xl mx-auto p-5 min-h-screen flex items-center">
      <div className="flex items-center max-sm:flex-col justify-between gap-5 w-full">
        <div className="max-w-screen-sm flex flex-col gap-6">
          <h1 className="text-2xl sm:text-7xl">Página em construnção</h1>

          <BtnRota href="/">Voltar</BtnRota>
        </div>

        <figure className="w-full max-w-screen-sm">
          <Error />
        </figure>
      </div>
    </section>
  );
}
