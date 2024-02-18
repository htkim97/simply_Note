import { Button, DropdownMenu} from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { FaAngleDown } from "react-icons/fa6";

export default function Sort() {
  return(
    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <Button variant="solid" size="3">
                Options
                <FaAngleDown/>
            </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
            <DropdownMenu.Item>최근생성순</DropdownMenu.Item>
            <DropdownMenu.Item>최근수정순</DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}