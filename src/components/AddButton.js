import addButtonImg from '../image/icons/addbutton.svg';

export function AddButton({ backgroundColor, onClick }) {
    const bgColor = backgroundColor ? backgroundColor : "black";
    return (
        <img src={addButtonImg} onClick={onClick}>
        </img>
    );
}