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
import NeuSlider from "./components/Slider";
import NeuSwitch from "./components/Switch";
import NeuProgress from "./components/Progress";
import { NeuBadge } from "./components/Badge";
import Input from "./components/Input";
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from "./components/Tabs";

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
        <NeuBadge>Badge</NeuBadge>
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
              <NeuSlider />
              <NeuSlider variant={"secondary"} />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Progress Bars</CardTitle>
              <CardDescription>
                simple progress bars with different values and orientations to
                demonstrate the neumorphic design.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 h-36 flex gap-4">
              <NeuProgress orientation="vertical" max={100} value={25} />
              <NeuProgress
                orientation="vertical"
                variant="secondary"
                max={100}
                value={50}
              />
              <NeuProgress orientation="vertical" max={100} value={75} />
            </CardContent>
            <CardContent className="space-y-4">
              <NeuProgress orientation="horizontal" max={100} value={25} />
              <NeuProgress variant="secondary" max={100} value={50} />
              <NeuProgress orientation="horizontal" max={100} value={75} />
            </CardContent>
            <CardFooter className="space-y-2">
              <Input type="email"></Input>
              <Input></Input>
              <Input></Input>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <TabsRoot>
                <TabsList className="space-x-4">
                  <TabsTab value={"overview"}>Overview</TabsTab>
                  <TabsTab value={"user"}>User</TabsTab>
                </TabsList>
                <TabsPanel value={"overview"}>
                  <h2>this is overview</h2>
                  <p>more info about the overview</p>
                </TabsPanel>
                <TabsPanel value={"user"}>
                  <h2>this is user overview</h2>
                  <p>more info about the user overview</p>
                </TabsPanel>
              </TabsRoot>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
