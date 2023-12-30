import React, { useState } from 'react';
import Collapse from './structural/collapse';
import Link from 'next/link';
import { PencilIcon, TrashIcon, ChartBarIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import blank from '../../../public/assets/images/blank.png'
import Image from 'next/image';

export default function QuestionCard({ checkable = true, deletable = true, valiant = false, question }) {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  let questions_assessments = []

  const disable = question.type === "subjetiva" && !question.image;

  const toggleOpen = () => {
    setOpen((cur) => !cur)
  }

  const handleChange = id => () => {
    setChecked(!checked);

    const ISSERVER = typeof window === "undefined";
    if (checked === false) {
      if (!ISSERVER && localStorage.getItem("questions_assessments") === null) {
        localStorage.setItem('questions_assessments', JSON.stringify([id]));
      }
      else if (!ISSERVER && localStorage.getItem("questions_assessments") !== null) {
        questions_assessments.push(...JSON.parse(localStorage.getItem("questions_assessments")), id)
        localStorage.setItem('questions_assessments', JSON.stringify(questions_assessments));
      }
    } else {
      questions_assessments = []
      questions_assessments.push(...JSON.parse(localStorage.getItem("questions_assessments")))
      const filtered = questions_assessments.filter((value) => value !== id)
      localStorage.setItem('questions_assessments', JSON.stringify(filtered));
    }
  }

  return (
    <div className="w-full max-w-[1024px] py-2  ">
      <div className="shadow-md bg-white bg-clip-border rounded-xl p-2">
        <div className="font-normal text-base pb-2">
          {question.questioning} {String(question.discipline).toLowerCase()}
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center justify-center h-full py-2 gap-2">

            {checkable &&
              <div>
                <input type="checkbox" checked={checked} onChange={handleChange(question.id)} />
              </div>}
            <div>
              <Link href={`/questions/${question.id}`}>
                <PencilIcon width={20} height={20} className="cursor-pointer" />
              </Link>
            </div>
            <div>
              <Link href={`/questions/chart`}>
                <ChartBarIcon width={20} height={20} className="cursor-pointer" />
              </Link>
            </div>
            {deletable &&
              <div>
                <Link href={`/questions/${question.id}`}>
                  <TrashIcon width={20} height={20} className="cursor-pointer" />
                </Link>
              </div>
            }
            <div>
              <div className="font-semibold inline-flex">disciplina: </div> {question.discipline}
            </div>
            <div>
              <div className="font-semibold inline-flex">tipo:</div> {question.type}
            </div>
            <div>
              {valiant && (<>
                <div className="font-semibold inline-flex">valor:</div>
                <input type="text" className="bg-white w-full max-w-[72px] border border-slate-300 rounded-md py-2 px-3 ml-1
                shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm"
                  defaultValue={question.value}
                /></>)}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row items-center gap-2">
              <button
                className="select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:opacity-[0.9] active:shadow-none"
                disabled={disable}
                type="button"
                onClick={toggleOpen}
              >
                {open ?
                  (<ChevronUpIcon width={20} height={20} className="" />) : (<ChevronDownIcon width={20} height={20} className="" />)
                }
              </button>
            </div>
          </div>
        </div>

        <Collapse open={open}>
          {question.image && (
            <div className="flex flex-col justify-center items-center max-w-[1024px]">
              <Image
                className="mt-2"
                src={blank}
                alt={question.questioning}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto"
                }}
                priority
              />
            </div>)}

          <div className="text-sm p-2">
            {question.alternatives.length > 0
              ? (
                <div className="text-sm">
                  {question.alternatives.map((item, index) => {
                    return (<p key={index}>{item}</p>);
                  })}
                </div>
              ) : (<div />)}
          </div>
        </Collapse>

      </div>
    </div>
  );
};


