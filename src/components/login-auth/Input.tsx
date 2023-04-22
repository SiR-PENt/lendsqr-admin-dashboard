type Input = {
    placeholder: string,
    value: string,
    type: string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export default function Input({ placeholder, value, onChange, type }: Input) {

    return (  
            <input 
             placeholder={placeholder}
             value={value}
             type={type}
             onChange={(e) => onChange(e.target.value)}
            />     
    )
}