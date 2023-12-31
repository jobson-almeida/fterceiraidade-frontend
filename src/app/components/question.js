"use client"
import FieldsArrayEdit from './field-array-edit';
import { useForm, useFormState } from 'react-hook-form';
/*
async function getQuestion(id) {
  const response = await fetch(`http://localhost:3000/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  const t = await response.json()
  console.log(t)
  return t
}
*/

import { getQuestion } from "../utils/get-question"


export const preload = (id) => {
  void getQuestion(id)
}

const teste = async (data) => {
  await getQuestion(data);
}

export default function Question({ id }) {
  /*  const response = await fetch(`http://localhost:3000/api/questions/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
      cache: "no-cache"
    })
    const question = await response.json()*/


  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues
  } = useForm({
    defaultValues: null
  });

  const { dirtyFields } = useFormState({
    control
  });

  if (!dirtyFields || !dirtyFields.type) {
    throw new Error("Falhou")
  } else {
    console.log(getValues())
  }

  const onSubmit = (v) => console.log("data", v);


  {/* <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsArrayEdit
        {...{ control, register }}
      />

      <div className="flex flex-row justify-end max-w-[1024px]">
        <button className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase
    py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
                   bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                     hover:shadow-lg hover:shadow-gray-500/20
                     focus:opacity-[0.85] focus:shadow-none
                     active:opacity-[0.85] active:shadow-none mr-1"
          type="button"
          onClick={() => reset(data)}>
          reset
        </button>
        <button type="submit"
          className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase
        py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
        bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
        hover:shadow-lg hover:shadow-gray-500/20
        focus:opacity-[0.85] focus:shadow-none
        active:opacity-[0.85] active:shadow-none ml-1">
          salvar
        </button>
      </div>
  </form> */}
  //return <>{question.questions[0].id}</>
  return <>question.questions[0].id</>
} 
