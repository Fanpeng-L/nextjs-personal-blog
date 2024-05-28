import Image from "next/image";
import spinner from "../../../../public/Loading/spinner.gif";

export default function loading() {
  return (
    <main className="max-w-4xl mx-auto flex flex-col justify-center items-center p-6 m-6">
      <h1 className="text-5xl mb-6">Loading...</h1>
      <Image alt="loading" src={spinner} width={100} height={100} />
    </main>
  );
}
