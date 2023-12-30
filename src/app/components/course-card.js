import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import PencilSquareIcon from '@heroicons/react/24/solid/PencilSquareIcon';
import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';
import Link from 'next/link';

export default function CourseCard({ data }) {
    return (
        <div className="relative flex flex-col w-full max-w-[440px]">
            <div className="relative shadow-md bg-white   flex flex-col bg-clip-border rounded-xl">

                <div className="my-10 mx-2">
                    <p className="font-bold text-2xl leading-5 text-center mb-4" >
                        {data.name}
                    </p>
                    <p className="text-center text-base font-normal">
                        {data.description}
                    </p>
                </div>

                <div className="flex flex-grow" />
                <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-200" />

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center p-2 gap-2">
                        <div className="cursor-pointer">
                            <Link href="/courses/chart">
                                <ChartBarIcon className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="cursor-pointer">
                            <Link href="/questions">
                                <PencilSquareIcon className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="cursor-pointer">
                            <Link href={`/courses/${data.id}`}>
                                <PencilIcon className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="cursor-pointer">
                            <TrashIcon className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center p-2">
                            <UserIcon className="w-6 h-6 self-center" />
                            <p className="text-[14px] leading-6 font-normal self-center">
                                625
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}