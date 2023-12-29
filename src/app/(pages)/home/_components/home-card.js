import Image from "next/image";
import Link from "next/link";

export default function HomeCard({ data }) {
    return (
        <div className="relative flex flex-col w-full max-w-[440px]">
            <div className="relative shadow-md bg-white flex flex-col bg-clip-border rounded-xl">
                <div className="my-10 mx-2">
                    <Link href={`/home/${data.id}`}>
                        <Image
                            src={data.image}
                            alt={data.description}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex flex-grow" />
                <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-200" />
            </div>
        </div>
    )
}