"use client"
import { TrashIcon } from '@heroicons/react/24/solid';
import { useFieldArray } from "react-hook-form";
import AlternativesArray from './alternatives-array';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

export default function FieldsArrayEdit({ control, register }) {
  const { fields, remove } = useFieldArray({
    control,
    name: "questions"
  });

  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState(fields[0].image);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image)
    }
  }, [image])

  const addImage = (event) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const removeImage = () => {
    setImage(undefined)
    hiddenFileInput.current.value = ""
  };

  const handleButtonClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id} className=" ">
              <div className="flex ml-2 my-2">
                <div className="flex flex-col w-full">
                  <input type="text" className="max-w-[512px] bg-white border border-slate-300 rounded-md py-2 px-3 mt-2
                shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm"
                    {...register(`questions[${index}].discipline`)}
                    placeholder="Disciplina"
                    defaultValue={item.discipline}
                  />

                  <select className="max-w-[256px] bg-white border border-slate-300 rounded-md py-2 px-3 mt-2
                shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm"
                    {...register(`questions[${index}].type`)}
                    placeholder="Tipo"
                    defaultValue={item.type}>
                    <option value="objetiva">Objetiva</option>
                    <option value="subjetiva">Subjetiva</option>
                  </select>

                  <textarea className="max-w-[1024px] bg-white border border-slate-300 rounded-md py-2 px-3
                shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm mt-2"
                    {...register(`questions[${index}].questioning`)}
                    placeholder="Pergunta"
                    defaultValue={item.questioning}
                    multiline="true"
                    rows={3}
                  />
                </div>

                {fields.length > 1 &&
                  <button
                    className="h-[42px] inline-flex items-center relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase 
              py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                             bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                               hover:shadow-lg hover:shadow-gray-500/20 
                               focus:opacity-[0.85] focus:shadow-none 
                               active:opacity-[0.85] active:shadow-none"
                    type="button"
                    onClick={() => remove(index)}>
                    Delete
                    <TrashIcon width={18} height={18} className="ml-1" />
                  </button>
                }
              </div>
              <div className="flex flex-col justify-center items-center ml-2 mt-6 w-full max-w-[1024px]">
                {image &&
                  (<Image
                    alt={item.questioning}
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                    priority
                  />)}
                <div className="mt-2">
                  <button
                    className="h-[42px] inline-flex items-center relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase 
                  py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                                 bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                                   hover:shadow-lg hover:shadow-gray-500/20 
                                   focus:opacity-[0.85] focus:shadow-none 
                                   active:opacity-[0.85] active:shadow-none mr-2"
                    type="button"
                    onClick={handleButtonClick}
                  >
                    adicionar imagem
                  </button>
                  <input className="hidden"
                    accept="image/*"
                    id="button-file"
                    onChange={addImage}
                    type="file"
                    ref={hiddenFileInput}
                  />
                  {image &&
                    <button
                      className="h-[42px] inline-flex items-center relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase 
                  py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                                 bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                                   hover:shadow-lg hover:shadow-gray-500/20 
                                   focus:opacity-[0.85] focus:shadow-none 
                                   active:opacity-[0.85] active:shadow-none"
                      type="button"
                      onClick={removeImage}
                    >
                      remover imagem
                    </button>}
                </div>
              </div>

              <div className="mt-6">
                {item.type === "subjetiva" ?
                  <textarea className="flex w-full max-w-[1024px] bg-white border border-slate-300 rounded-md py-2 px-3
                  shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm my-4"
                    {...register(`questions[${index}].answer`)}
                    placeholder="Resposta"
                    defaultValue={item.answer}
                    multiline="true"
                    rows={3}
                  />
                  :
                  <AlternativesArray
                    nestIndex={index} {...{ control, register }}
                  />
                }
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
