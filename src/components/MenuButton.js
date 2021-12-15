import Button from "@restart/ui/esm/Button";
import "./MenuButton.css";

function MenuButton(props) {
  return (
    <Button href={props.href} className="font-link MenuButton">
      {props.text}
    </Button>
  );
}

export default MenuButton;
