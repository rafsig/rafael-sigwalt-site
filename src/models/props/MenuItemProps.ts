export default interface MenuItemProps{
    text:string;
    target:string;
    onSelectSection:React.Dispatch<React.SetStateAction<string>>;
}