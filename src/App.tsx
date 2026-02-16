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
import Textarea from "./components/Textarea";
import Select from "./components/Select";
import { RadioGroup, RadioItem } from "./components/Radio";
import NeuAvatar from "./components/Avatar";
import { Alert, AlertDescription, AlertTitle } from "./components/Alert";
import { Stat, StatLabel, StatValue } from "./components/Stat";
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from "./components/Tabs";
import { ChevronDown, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

function App() {
  const [isPlayer, setIsPlaying] = useState(false);
  return (
    <main>
      <Nav />
      <section className="max-w-4xl mx-auto px-8 py-12 text-center">
        <h1 className="md:text-3xl text-xl font-semibold tracking-tight">
          Beautify components with Neomorphism
        </h1>
        <p className="mt-1 md:text-lg text-sm text-muted-foreground">
          Explore a collection of beautifully designed components using the
          Neomorphism design style. Built with Base UI and Tailwind CSS.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Variants, sizes, and shapes.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="destructive">Destructive</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" shape="circle" aria-label="Play">
                <Play className="h-5 w-5" />
              </Button>
              <Button disabled>Disabled</Button>
            </CardContent>
            <CardFooter className="flex items-center gap-3">
              <NeuBadge>Badge</NeuBadge>
              <NeuBadge>New</NeuBadge>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Text fields with focus states.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Username" />
              <Input placeholder="Disabled" disabled />
            </CardContent>
            <CardFooter className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Neucheckbox />
                <span className="text-sm">Accept</span>
              </div>
              <div className="flex items-center gap-2">
                <NeuSwitch />
                <span className="text-sm">Notify</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sliders</CardTitle>
              <CardDescription>Primary and secondary tracks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <NeuSlider />
              <NeuSlider variant="secondary" />
            </CardContent>
            <CardFooter className="space-y-3">
              <NeuProgress max={100} value={35} />
              <NeuProgress variant="secondary" max={100} value={70} />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Selected state and panels.</CardDescription>
            </CardHeader>
            <CardContent>
              <TabsRoot defaultValue="overview">
                <TabsList className="gap-2">
                  <TabsIndicator />
                  <TabsTab value="overview">Overview</TabsTab>
                  <TabsTab value="details">Details</TabsTab>
                </TabsList>
                <TabsPanel value="overview">
                  <p className="text-sm text-muted-foreground">
                    Quick summary and top highlights.
                  </p>
                </TabsPanel>
                <TabsPanel value="details">
                  <p className="text-sm text-muted-foreground">
                    Extra specs and secondary info.
                  </p>
                </TabsPanel>
              </TabsRoot>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Textarea & Select</CardTitle>
              <CardDescription>Essential form primitives.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="Leave a note..." />
              <div className="relative">
                <Select defaultValue="daily">
                  <option value="daily">Daily summary</option>
                  <option value="weekly">Weekly summary</option>
                  <option value="monthly">Monthly summary</option>
                </Select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <ChevronDown />
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
              <CardDescription>Single-choice selections.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup>
                <RadioItem name="plan" value="starter" label="Starter" />
                <RadioItem name="plan" value="pro" label="Pro" />
                <RadioItem name="plan" value="team" label="Team" />
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
              <CardDescription>Image and fallback states.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <NeuAvatar
                size="sm"
                src="https://i.pinimg.com/1200x/af/91/1b/af911b8119ee0cc0d44c031be361a802.jpg"
                alt="Avatar"
              />
              <NeuAvatar
                size="md"
                src="https://i.pinimg.com/1200x/af/91/1b/af911b8119ee0cc0d44c031be361a802.jpg"
                alt="Avatar"
              />
              <NeuAvatar size="lg" fallback="NM" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Status messaging styles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>
                  Neumorphic surfaces stay subtle.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Everything saved correctly.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>Some fields need attention.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
              <CardDescription>Dashboard-style metrics.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-3">
              <Stat>
                <StatLabel>Plays</StatLabel>
                <StatValue>2.4K</StatValue>
              </Stat>
              <Stat>
                <StatLabel>Likes</StatLabel>
                <StatValue>340</StatValue>
              </Stat>
              <Stat>
                <StatLabel>Shares</StatLabel>
                <StatValue>78</StatValue>
              </Stat>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 xl:col-span-2">
            <CardHeader>
              <CardTitle>Music Player</CardTitle>
              <CardDescription>
                Enjoy your favorite tunes with a sleek and modern interface.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8 flex flex-col justify-center items-center">
                <img
                  className={`w-56 h-56 rounded-full shadow-raised border-4 border-border ${isPlayer ? "animate-spin" : ""}`}
                  src="https://i.pinimg.com/1200x/af/91/1b/af911b8119ee0cc0d44c031be361a802.jpg"
                  alt="gatto"
                />
                <div className="text-center space-y-2">
                  <CardTitle>Feel good inc.</CardTitle>
                  <CardDescription>Monker</CardDescription>
                </div>
                <div className="w-full max-w-md">
                  <NeuProgress max={100} value={45} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>0:00</span>
                    <span>3:45</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <Button
                    aria-label="Previous Track"
                    size="icon"
                    shape="circle"
                    variant="primary"
                  >
                    <SkipBack className="w-6 h-6" />
                  </Button>
                  <Button
                    className="w-20 h-20"
                    size="icon"
                    shape="circle"
                    variant="primary"
                    aria-label={isPlayer ? "Pause" : "Play"}
                    onClick={() => setIsPlaying(!isPlayer)}
                  >
                    {isPlayer ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </Button>
                  <Button size="icon" shape="circle" variant="primary">
                    <SkipForward className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
