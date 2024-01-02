import React from 'react'
import MUISwitch from "@mui/material/Switch"

export default function Switch(props) {
    const {checked, onChange} = props
  return (
    <>
      <MUISwitch checked= {checked} onChange={onChange} />
    </>
  )
}
