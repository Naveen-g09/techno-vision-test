/* @jsxImportSource react */
"use client"; 
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { DropdownMenu,DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger,   DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem, } from "@/components/ui/dropdown-menu";

type Checked = boolean;

export default function Home() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  const [position, setPosition] = React.useState("bottom")

  return (
    <div>
      <Tabs defaultValue="apartment" className="w-[600px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="apartment">Apartment</TabsTrigger>
          <TabsTrigger value="bunglow">Bunglow</TabsTrigger>
        </TabsList>
        <TabsContent value="apartment">
          <Card>
            <CardHeader>
              <CardTitle>Apartment</CardTitle>
              <CardDescription>
                Add details here to get a quotation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Select Branch</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      Remoteness Factor
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showActivityBar}
                      onCheckedChange={setShowActivityBar}
                    >
                      Base Builtup rate (raw)
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Base Builtup rate (raw) with addition of floor
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-1">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Select Company</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                      disabled
                    >
                      Raw Markup
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showActivityBar}
                      onCheckedChange={setShowActivityBar}
                    
                    >
                      Economy Markup
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Deluxe Markup
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Super Deluxe Markup
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Luxury Markup
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Super Luxury Markup
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>

            {/* model section */}
            <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Select Model</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="unit-covered">Unit Covered</Label>
              <Input id="name" placeholder="One unit covered built up area (excluding parking)" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="plate-covered">Plate covered</Label>
              <Input id="name" placeholder="One plate covered built up area (excluding parking)" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="floors">Number of Floors</Label>
              <Input id="name" placeholder="No. of Floors" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Details</Button>
      </CardFooter>
    </Card>

            {/* project section */}
            <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="land-rate">Land rate</Label>
              <Input id="name" placeholder="Land rate at the time of purchase" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="current-land-rate"></Label>
              <Input id="name" placeholder="One plate covered built up area (excluding parking)" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="land-value">Land value sell factor</Label>
              <Input id="name" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="development-charge">Development Charge</Label>
              <Input id="name" placeholder="please enter development charge" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="legal-charge">Legal Charge</Label>
              <Input id="name" placeholder="please enter legal charge" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="adjustment-factor">Adjustment-Factor</Label>
              <Input id="name" placeholder="please enter adjustment factor" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="filling-rate">Filling Rate</Label>
              <Input id="name" placeholder="please enter filling-rate" />
            </div>

            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="development-charge">Development Charge</Label>
              <Input id="name" placeholder="please enter development charge" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="development-charge">Development Charge</Label>
              <Input id="name" placeholder="please enter development charge" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="development-charge">Development Charge</Label>
              <Input id="name" placeholder="please enter development charge" />
            </div> */}

            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="development-charge">Development Charge</Label>
              <Input id="name" placeholder="please enter development charge" />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="project-managment">Project Management</Label>
              <Input id="name" placeholder="project managment charges such as advertisments etc." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Details</Button>
      </CardFooter>
    </Card>


    {/* unit section */}
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Select Unit</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="adjustment-factor">Adjustment Factor</Label>
              <Input id="name" placeholder="Can be adjusted at unit level by Sales, requires approval" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="filling-depth">Filling Depth</Label>
              <Input id="name" placeholder="filling depth as per required in Feet unit" />
            </div>
            <div className="flex flex-col space-y-1.5">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Floor Level</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select your floor level</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="one">1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="two">2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="three">3</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="four">4</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="five">5</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="six">6</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="seven">7</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="eight">8</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="nine">9</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ten">10</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
            </div>
            <div className="flex flex-col space-y-1.5">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Corner-Plot</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="yes">Yes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="no">No</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
            </div>

            <div className="flex flex-col space-y-1.5">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Facing</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Facing Side based on Unit Selected</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="east">East</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="west">West</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="North">North</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="South">South</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Details</Button>
      </CardFooter>
    </Card>



            <CardFooter>
              <Button>Get Quotation</Button>
            </CardFooter>
          </Card>




        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Bunglow</CardTitle>
              <CardDescription>
                Enter details for bunglow here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>


      
    </div>
  );
}
