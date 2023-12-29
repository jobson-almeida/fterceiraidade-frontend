import React from 'react';
import { useFieldArray } from 'react-hook-form';

export default function AlternativesArray({ nestIndex, control, register }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `questions.${nestIndex}.alternatives`
  });

  return (
    <>
      {fields.map((item, k) => {
        return (
          <div key={item.id} className="ml-2 my-1 w-full inline-flex h-[38px]">

            <input type="text" className=" bg-white w-full max-w-[896px] border border-slate-300 rounded-md py-2 px-3
                shadow-sm
                focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm"
              {...register(`questions[${nestIndex}].alternatives[${k}]`)}
              defaultValue={item.alternatives}
            />

            <button
              className="h-[38px] w-[112px] items-center relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase 
            py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                           bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                             hover:shadow-lg hover:shadow-gray-500/20 
                             focus:opacity-[0.85] focus:shadow-none 
                             active:opacity-[0.85] active:shadow-none mx-2"
              type="button"
              onClick={() => remove(k)}>
              Delete
            </button>
          </div>
        );
      })}

      <button
        className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase 
        py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                       bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                         hover:shadow-lg hover:shadow-gray-500/20 
                         focus:opacity-[0.85] focus:shadow-none 
                         active:opacity-[0.85] active:shadow-none mx-5 my-2"
        type="button"
        onClick={() =>
          append("alternativa")
        }
      >
        alternativa
      </button>

    </>
  );
};
