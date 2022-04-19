
import { useState } from 'react' //Hooks
import TextField from '@mui/material/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const Login = () => {
    //State
    //Props
    //Ciclos de vida
    const [formData, setFormData] = useState({ email : '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Envio de formulario: ", formData)
    }

    const handleChange = (e) => {
        console.log(e.target.name)

        setFormData({ 
            ...formData,
            [e.target.name] : e.target.value 
        })
    }

    return(
        //JSX
        <div>
            <h2>Ingresar: </h2>
            <ValidatorForm onSubmit={handleSubmit} >
                <TextValidator id="outlined-basic" 
                    label="Correo Electronico" 
                    variant="outlined" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    validators={['required', 'isEmail']}
                    errorMessages={['Este campo es obligatorio', 'No es un mail valido']}
                />
                <TextValidator id="outlined-basic" 
                    label="Contraseña" 
                    variant="outlined" 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    validators={['required']}
                    errorMessages={['Este campo es obligatorio']}
                />
                <button type="submit">Ingresar</button>
            </ValidatorForm>
        </div>
    )
}

export default Login

