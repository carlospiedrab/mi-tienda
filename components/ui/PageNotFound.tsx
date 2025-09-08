import Link from "next/link";

export default function PageNotFound({error} : {error: string}) {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className="text-9xl">404</h2>
        <p className="font-semibold text-xl">{error}</p>
        <p className="font-light">
            <Link href="/" className="font-normal hover:underline transition-all">
            Regresar
            </Link>
        </p>
      </div>
    </div>
  );
}