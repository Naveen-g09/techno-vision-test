// ApartmentConfig.tsx
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

const ApartmentConfig: React.FC = () => {
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
    const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
    const [showPanel, setShowPanel] = useState<Checked>(false);
    const [position, setPosition] = React.useState("bottom");
    const [showDeluxeMarkup, setShowDeluxeMarkup] = useState(false);
    const [showSuperDeluxeMarkup, setShowSuperDeluxeMarkup] = useState(false);
    const [showLuxuryMarkup, setShowLuxuryMarkup] = useState(false);
    const [showSuperLuxuryMarkup, setShowSuperLuxuryMarkup] = useState(false);
    

  // State to store user-entered details
  const [userDetails, setUserDetails] = useState({
    unitCovered: "",
    plateCovered: "",
    numberOfFloors: "",
    // Add other details as needed
  });

  // Handler for updating user-entered details
  const handleInputChange = (field: string, value: string) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  // Handler for displaying user-entered details
  const handleDetailsButtonClick = () => {
    console.log('User Details:', userDetails);
    // You can further process or display the details as needed
  };

  // Handler for dropdown menu selection
  const handleDropdownSelection = (field: string, value: string) => {
    // Update user-entered details based on the dropdown selection
    handleInputChange(field, value);
    // You can add more logic here if needed
  };

    const [flatCovered, setFlatCovered] = useState('');
    const [floorPlateCovered, setFloorPlateCovered] = useState('');
    const [totalCoveredArea, setTotalCoveredArea] = useState('');
    const [numberOfFloors, setNumberOfFloors] = useState('');
    const [landShare, setLandShare] = useState<number | null>(null);

    const calculateLandShare = () => {
      // Check if all input values are provided
      if (flatCovered && totalCoveredArea) {
        const landShareValue = parseFloat(flatCovered) / parseFloat(totalCoveredArea);
        setLandShare(isNaN(landShareValue) ? null : landShareValue);
      }
    };
  
    const handleDetailsClick = () => {
      calculateLandShare();
    };
    const [selectedFacing, setSelectedFacing] = useState<string | undefined>(undefined);

    const [selectedCornerPlot, setSelectedCornerPlot] = useState<string | undefined>(undefined);


// Update the state when the dropdown selection changes
const handleCornerPlotChange = (value: string) => {
  setSelectedCornerPlot(value);
};


// Define state for floor level selection
const [selectedFloorLevel, setSelectedFloorLevel] = useState<string | null>(null);

// Function to calculate floor level factor
const calculateFloorLevelFactor = (floorLevel: string | null): number => {
  switch (floorLevel) {
    case "one":
      return 0;
    case "two":
      return -2;
    case "three":
      return -4;
    case "four":
      return -6;
    case "five":
      return -8;
    case "six":
      return -10;
    case "seven":
      return -12;
    case "eight":
      return -14;
    case "nine":
      return -16;
    case "ten":
      return -18;
    default:
      return 0;
  }
};

// Update the state when the dropdown selection changes
const handleFloorLevelChange = (value: string | null) => {
  setSelectedFloorLevel(value);
}

  return (
    <div>
     
     <Tabs defaultValue="apartment" className="w-[600px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="apartment">Apartment</TabsTrigger>
          <TabsTrigger value="bungalow">Bungalow</TabsTrigger>
        </TabsList>
        <TabsContent value="apartment">
          <Card className="w-[1000px]">
            <CardHeader>
              <CardTitle>Apartment</CardTitle>
              <CardDescription>
                Add details here to get a quotation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="space-y-1">

                {/* Select branch section */}

                <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Select Branch</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Remoteness Factor</Label>
              <Input id="name" placeholder="Enter Remoteness Factor" />
              <Label htmlFor="name">Base Builtup rate (raw)</Label>
              <Input id="name" placeholder="Enter Base built-up rate(raw)" />
              <Label htmlFor="name">Built-up rate with addition of floor</Label>
              <Input id="name" placeholder="Base Built-up rate (raw) with addition of floor" />
            </div>
            </div>
            </form>
      </CardContent>
            </Card>
        
      </div>
              <div className="space-y-1">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Apartment Type</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    
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
  checked={showDeluxeMarkup}
  onCheckedChange={setShowDeluxeMarkup}
>
  Deluxe Markup
</DropdownMenuCheckboxItem>

<DropdownMenuCheckboxItem
  checked={showSuperDeluxeMarkup}
  onCheckedChange={setShowSuperDeluxeMarkup}
>
  Super Deluxe Markup
</DropdownMenuCheckboxItem>

<DropdownMenuCheckboxItem
  checked={showLuxuryMarkup}
  onCheckedChange={setShowLuxuryMarkup}
>
  Luxury Markup
</DropdownMenuCheckboxItem>

<DropdownMenuCheckboxItem
  checked={showSuperLuxuryMarkup}
  onCheckedChange={setShowSuperLuxuryMarkup}>
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
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="unit-covered">Flat Covered</Label>
              <Input
                id="name"
                placeholder="One unit covered built up area (excluding parking)"
                value={flatCovered}
                onChange={(e) => setFlatCovered(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="plate-covered">Floor Plate covered</Label>
              <Input
                id="name"
                placeholder="floor plate covered built up area (excluding parking)"
                value={totalCoveredArea}
                onChange={(e) => setTotalCoveredArea(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="plate-covered">Total covered Area</Label>
              <Input id="name" placeholder="Total covered built up area of apartment (excluding parking)" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="floors">Number of Floors</Label>
              <Input id="name" placeholder="No. of Floors" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleDetailsClick}>Details</Button>
      </CardFooter>
      {landShare !== null && <h3>Land share per unit: {landShare}</h3>}
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
    <DropdownMenuRadioGroup value={selectedCornerPlot} onValueChange={handleCornerPlotChange}>
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
        <DropdownMenuRadioGroup value={selectedFacing} onValueChange={setSelectedFacing}>
  <DropdownMenuRadioItem value="east">East</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="west">West</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="North">North</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="South">South</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>

      </DropdownMenuContent>
    </DropdownMenu>
    
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="additional-area">Additional Built-up Area</Label>
              <Input id="name" placeholder="Additional/Semi-finished Builtup Area" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="additional-land-area">Additional Land Area</Label>
              <Input id="name" placeholder="Additional Land Area" />
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
              <Label htmlFor="current-land-rate">Current Land Rate</Label>
              <Input id="name" placeholder="Current land rate as per market value(Adding value)" />
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

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="total-area">Total land Area</Label>
              <Input id="name" placeholder="please enter development charge" />
            </div>

            <h3>Facing Factor: {selectedFacing}</h3>
{selectedCornerPlot !== null && (
  <h3>Corner Plot: {selectedCornerPlot === "yes" ? 1 : 0}</h3>
)}


<h3>Floor Level Factor: {calculateFloorLevelFactor(selectedFloorLevel)}%</h3>
            {/*<div className="flex flex-col space-y-1.5">
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
              <Label htmlFor="project-management">Project Management</Label>
              <Input id="name" placeholder="project management charges such as advertisments etc." />
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

          <Card>
      <CardHeader>
              <CardTitle>Total Value</CardTitle>
            </CardHeader>
            <CardContent>
      <h3>Current Land Price: </h3>
        <h3>Net Selling Land Price: </h3>
        <h3>Land Price: </h3>
        <h3>Base rate with floor addition: </h3>
        <h3>Base price: </h3>
        <h3>Sub Total: </h3>
        <h3>Corner Charge: </h3>
        <h3>Facing Charge: </h3>
        <h3>Grand Total:  </h3>
        </CardContent>
    </Card>



        </TabsContent>
        <TabsContent value="bungalow">
         
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default ApartmentConfig;