import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => {
    return (
        <button className="btn-icon">
            <h3 className="btn-content">{text}</h3>
        </button>
    );
}

export default ButtonIcon;