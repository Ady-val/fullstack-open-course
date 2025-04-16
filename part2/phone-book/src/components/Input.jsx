const Input = ({label, value, onChange}) => {
  return (
    <div>
      {label}: <input value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}

export default Input