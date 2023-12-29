'use client';
import React, { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import validateUUID from '../../utils/validateUUID';

const translate = (value) => {
  const pages = [{
    value: "assessments",
    translate: "avaliações"
  },
  {
    value: "classrooms",
    translate: "turmas"
  },
  {
    value: "courses",
    translate: "cursos"
  },
  {
    value: "home",
    translate: "home"
  },
  {
    value: "questions",
    translate: "questões"
  },
  {
    value: "students",
    translate: "alunos"
  },
  {
    value: "teachers",
    translate: "professores"
  },
  {
    value: "register",
    translate: "registro"
  },
  {
    value: "chart",
    translate: "gráfico"
  }]
  const result = pages.filter((item) => item.value === value)
  return result[0] ? result[0].translate : result.translate
}

export function AddressBar() {
  const pathname = usePathname();
  const count = pathname
    .split('/')
    .slice(0).length - 1

  return (
    <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
      <div className="flex gap-x-1 text-sm font-medium">
        {pathname && (
          <>
            {pathname
              .split('/')
              .slice(0)
              .map((segment, index) => {
                return (
                  <Fragment key={index}>
                    {index < count && pathname.length > 1 &&
                      (<Link
                        //prefetch={process.env.NODE_ENV == "development" && false}
                        href={String(index === 0 ? pathname[index] : pathname[0] + segment)}
                      >
                        {segment.length === 0 ? "fterceiraidade" : translate(segment)}
                      </Link>)}
                    {index === count && pathname.length > 1 &&
                      (<span className=" ">{pathname.length > 1 ? validateUUID(segment) === false && translate(segment) : "fterceiraidade"}</span>)}
                    {index === count && pathname.length === 1 &&
                      (
                        <>
                          <span className=" ">{"fterceiraidade"}</span>
                          <span className=" ">
                            <ChevronRightIcon width={12} height={12}
                              className="flex flex-col justify-center items-center h-full"
                            />
                          </span>
                        </>
                      )}

                    {segment.length >= 0 && validateUUID(segment) === false && index >= 0 && count >= 1 && pathname.length > 1 &&
                      <span className=" ">
                        <ChevronRightIcon width={12} height={12}
                          className="flex flex-col justify-center items-center h-full"
                        />
                      </span>}
                  </Fragment>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}
