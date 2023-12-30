"use client"
import React from 'react';
import FieldsArrayEdit from './field-array-edit';
import { useForm } from 'react-hook-form';

export default function QuestionOne({ data }) {
  const {
    control,
    register,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: data
  });

  const onSubmit = (v) => console.log("data", v);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

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
      </form>
    </>
  )
} 
