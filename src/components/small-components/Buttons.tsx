interface Props {
    text: string,
    type?: "button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    addIcon?: boolean,
}

export const PrimaryButton = ({ text, type="button", onClick }: Props) => {
    return (
        <div className='relative inline-block'>
            <button 
                className='base primary'
                type={type}
                onClick={onClick}
                >{text}
            </button>
        </div>
    )
}