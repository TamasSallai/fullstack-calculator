import './ServerButton.css'

type Props = {
  label: string
  onClick: () => void
}

const ServerButton = ({ label, onClick }: Props) => {
  return (
    <button className="server-button" onClick={onClick}>
      {label}
    </button>
  )
}

export default ServerButton
