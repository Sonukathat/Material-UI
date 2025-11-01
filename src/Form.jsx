import {TextField} from "@mui/material"

function Form() {
  return (
    <>
        <form action="">
            <TextField name="name" type="text" placeholder="name" variant="outlined"/>
            <br />
            <TextField name="email" type="email" placeholder="email" variant="outlined"/>
            <br />
            <TextField name="password" type="password" placeholder="password" variant="outlined"/>
        </form>
    </>
  )
}

export default Form
