import { useState } from "react";

export default function SimpleRow({ data, click, check }) {
  const [checked, setChecked] = useState(check);

  const handleChange = id => () => {
    setChecked(!checked);
  }

  const selectRow = (id) => {
    click(id)
  }

  return (
    <>
      <div className="justify-center flex items-center border-b border-slate-100 px-4 py-3  ">
        <input className="my-1" type="checkbox" checked={checked} onChange={handleChange(data.id)} />
      </div>
      <div onClick={() => selectRow(data.id)} className="cursor-pointer justify-start flex items-center w-full pr-4 py-3 border-b border-slate-100   ">{data.name}</div>
    </>
  )
}