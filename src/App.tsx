import Button from "./components/Button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/Card";
import Neucheckbox from "./components/Checkbox";
import Nav from "./components/Nav";
import NeuSwitch from "./components/Switch";

function App() {
  return (
    <main>
      <Nav />
      <div className="space-x-2 space-y-2">
        <Button>Submit</Button>
        <Button variant={"primary"}>Submit</Button>
        <Button variant={"destructive"}>Cancel</Button>
        <Button variant={"warning"}>Warning</Button>

        <Button variant={"primary"} disabled>
          Warning
        </Button>
        <div className="m-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a description for the card.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>this is a list item 1</li>
                <li>this is a list item 2</li>
                <li>this is a list item 3</li>
              </ul>
            </CardContent>
            <CardFooter>
              <NeuSwitch />
              <Neucheckbox />
              <Neucheckbox disabled />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
