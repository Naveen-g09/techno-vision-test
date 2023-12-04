// ApartmentConfig.tsx
/* @jsxImportSource react */
"use client"; 
import React, { useState, useEffect } from 'react';
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
import 'tailwindcss/tailwind.css';
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
    const [additionalBuiltUpArea, setAdditionalBuiltUpArea] = useState<string>('');
    
const [additionalLandArea, setAdditionalLandArea] = useState<string>('');

// Handler for updating additional built-up area
const handleAdditionalBuiltUpAreaChange = (value: string) => {
  setAdditionalBuiltUpArea(value);
};

const [projectManagementPercentage, setProjectManagementPercentage] = useState<number | null>(null);
const handleProjectManagementPercentageChange = (value: string) => {
  setProjectManagementPercentage(parseFloat(value) || 0);
};

const [landSharePerUnit, setLandSharePerUnit] = useState<number | null>(null);
const [landPrice, setLandPrice] = useState<number | null>(null);
const [buildingPrice, setBuildingPrice] = useState<number | null>(null);
const [subtotal, setSubtotal] = useState<number | null>(null);
const [facingCharge, setFacingCharge] = useState<number | null>(null);
const [cornerCharge, setCornerCharge] = useState<number | null>(null);
const [fillingCharge, setFillingCharge] = useState<number | null>(null);
const [remotenessCharge, setRemotenessCharge] = useState<number | null>(null);
const [projectManagementCharge, setProjectManagementCharge] = useState<number | null>(null);
const [projectAdjustmentCharge, setProjectAdjustmentCharge] = useState<number | null>(null);
const [floorLevelCharges, setFloorLevelCharges] = useState<number | null>(null);
const [unitAdjustmentCharges, setUnitAdjustmentCharges] = useState<number | null>(null);
const [grandTotal, setGrandTotal] = useState<number | null>(null);
const [cornerFactor, setCornerFactor] = useState<number | null>(null);
const [remotenessFactor, setRemotenessFactor] = useState<number | null>(null);

    const [baseBuiltupRate, setBaseBuiltupRate] = useState('');
    const [builtupRateWithFloor, setBuiltupRateWithFloor] = useState('');

          // State to store company total
  const [companyTotal, setCompanyTotal] = useState<number>(0);
  // Function to update company total based on user selections
  const updateCompanyTotal = () => {
    let total = 0;
    // Add values based on selected options
    if (showStatusBar) total += 1000.00;
    if (showActivityBar) total += 200.00;
    if (showDeluxeMarkup) total += 200.00;
    if (showSuperDeluxeMarkup) total += 200.00;
    if (showLuxuryMarkup) total += 200.00;
    if (showSuperLuxuryMarkup) total += 200.00;

    // Update the companyTotal state
    setCompanyTotal(total);
  };

// Handler for updating user-entered details
const handleInputChange = (field: string, value: string) => {
  // Update state for the relevant input field
  switch (field) {
    case 'landRate':
      setLandRate(value);
      break;
    case 'currentLandRate':
      setCurrentLandRate(value);
      break;
    case 'landValueSellFactor':
      setLandValueSellFactor(value);
      break;
    // Add cases for other input fields
    default:
      break;
  }

  // Trigger calculation for net selling land rate
  calculateNetSellingLandRate();
};

  // Handler for dropdown menu selection
  const handleDropdownSelection = (field: string, value: string) => {
    // Update user-entered details based on the dropdown selection
    handleInputChange(field, value);
    // You can add more logic here if needed
  };

  // State to store user-entered details
  const [userDetails, setUserDetails] = useState({
    unitCovered: "",
    plateCovered: "",
    numberOfFloors: "",
    // Add other details as needed
  });

  // useEffect to run the updateCompanyTotal function whenever the selected options change
  useEffect(() => {
    updateCompanyTotal();
  }, [showStatusBar, showActivityBar, showDeluxeMarkup, showSuperDeluxeMarkup, showLuxuryMarkup, showSuperLuxuryMarkup, updateCompanyTotal]);  
  const [flatCovered, setFlatCovered] = useState('');
  const [floorPlateCovered, setFloorPlateCovered] = useState('');
  const [totalCoveredArea, setTotalCoveredArea] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState('');
  const calculateLandShare = () => {
    // Check if all input values are provided
    if (flatCovered && floorPlateCovered && totalCoveredArea && numberOfFloors) {
      const totalLandArea = parseFloat(totalArea);
      const flatCoveredArea = parseFloat(flatCovered);
      const floorPlateCoveredArea = parseFloat(floorPlateCovered);
      const totalCoveredAreaValue = parseFloat(totalCoveredArea);
      const numberOfFloorsValue = parseFloat(numberOfFloors);
  
      // Calculate the land share using the provided formula
      const landShareValue =
        (totalLandArea * flatCoveredArea + totalLandArea * floorPlateCoveredArea * numberOfFloorsValue) /
        totalCoveredAreaValue;
  
      setLandShare(isNaN(landShareValue) ? null : landShareValue);
    }
  };
  
    const [selectedCornerPlot, setSelectedCornerPlot] = useState<string | undefined>(undefined);


// Update the state when the dropdown selection changes
const handleCornerPlotChange = (value: string) => {
  setSelectedCornerPlot(value);
};



// state for face selection

const [selectedFacing, setSelectedFacing] = useState<string | undefined>(undefined);
  const [facingFactor, setFacingFactor] = useState<number | null>(null);

  useEffect(() => {
    updateCompanyTotal();
  }, [showStatusBar, showActivityBar, showDeluxeMarkup, showSuperDeluxeMarkup, showLuxuryMarkup, showSuperLuxuryMarkup, updateCompanyTotal, selectedFacing]);
  // ... other functions

  const handleLandRateChange = (value: string) => {
    setLandRate(value);
    // Add other logic if needed
  };
  
  const handleCurrentLandRateChange = (value: string) => {
    setCurrentLandRate(value);
    // Add other logic if needed
  };

  // Function to handle facing selection
  const calculateFacingFactor = (facing: string) => {
    // Calculate facing factor based on the selected value
    const facingPercentageMap: { [key: string]: number } = {
      east: 0.05,   // 5%
      west: 0.04,   // 4%
      north: 0.03,  // 3%
      south: 0.02,  // 2%
    };
  
    setFacingFactor(facingPercentageMap[facing] || 0);
  };
  
  const calculateCornerFactor = (corner: string) => {
    setCornerFactor(corner === "yes" ? 1 : 0);
  };

// Define state for floor level selection
const [selectedFloorLevel, setSelectedFloorLevel] = useState<string | undefined>(undefined);

const [floorLevelHeightFactor, setFloorLevelHeightFactor] = useState<number>(0);

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
  setSelectedFloorLevel(value !== null ? value : undefined);


  // Calculate and store the corresponding height factor
  const heightFactor = calculateFloorLevelFactor(value);
  setFloorLevelHeightFactor(heightFactor);
}
// State variables for land details and project management
const [landRate, setLandRate] = useState('');
const [currentLandRate, setCurrentLandRate] = useState('');
const [landValueSellFactor, setLandValueSellFactor] = useState('');
const [developmentCharge, setDevelopmentCharge] = useState('');
const [legalCharge, setLegalCharge] = useState('');
const [adjustmentFactor, setAdjustmentFactor] = useState('');
const [totalArea, setTotalArea] = useState('');
const [projectManagement, setProjectManagement] = useState('');

// State variable for calculated net selling land rate
const [netSellingLandRate, setNetSellingLandRate] = useState<number | null>(null);

const handleFillingChargeChange = (value: string) => {
  // Assuming 'value' is the user input for filling depth
  const fillingDepth = parseFloat(value) || 0;


  setFillingCharge(isNaN(fillingChargeValue) ? null : fillingChargeValue);
};

// Handler for calculating net selling land rate
const calculateNetSellingLandRate = () => {
  // Provide default values for inputs if they are not provided
  const defaultedLandRate = landRate === '' ? 0 : parseFloat(landRate);
  const defaultedCurrentLandRate = currentLandRate === '' ? 0 : parseFloat(currentLandRate);
  const defaultedDevelopmentCharge = developmentCharge === '' ? 200 : parseFloat(developmentCharge);
  const defaultedLegalCharge = legalCharge === '' ? 200 : parseFloat(legalCharge);

  // Calculate net selling land rate using default or provided values
  const netSellingRate =
    parseFloat(landValueSellFactor) *
    (defaultedCurrentLandRate + defaultedLandRate) +
    defaultedDevelopmentCharge +
    defaultedLegalCharge;

  // Set the calculated value or null if NaN
  setNetSellingLandRate(isNaN(netSellingRate) ? null : netSellingRate);
};

// Handler for displaying user-entered details
const handleDetailsButtonClick = () => {
  console.log('User Details:', userDetails);
  // You can further process or display the details as needed

  // Trigger calculation for net selling land rate
  calculateNetSellingLandRate();
};
const [fillingDepth, setFillingDepth] = useState<number>(0);
const [landShare, setLandShare] = useState<number | null>(null);
const [fillingRate, setFillingRate] = useState<number | null>(null);

// ...

const fillingChargeValue = (landShare || 0) * (fillingRate || 0) * fillingDepth;


// Handler for "Get Quotation" button
const handleGetQuotation = () => {
  // Trigger calculation for net selling land rate
  calculateNetSellingLandRate();
  calculateLandShare();
  if (landShare !== null) {
    console.log('Land share per unit:', landShare);}
  
    
        // Calculate land price based on the provided formula
        const netSellingLandRateValue = netSellingLandRate || 400; // Use default value if null
        const landShareValue = landShare || 0;
    
        const additionalLandAreaValue = parseFloat(additionalLandArea) || 0;
        const landPriceValue = netSellingLandRateValue * (landShareValue + additionalLandAreaValue);
    
        setLandPrice(isNaN(landPriceValue) ? null : landPriceValue);
        
    // Calculate building price based on the provided formula
    const flatCoveredValue = parseFloat(flatCovered) || 0;
    const companyTotalValue = companyTotal || 0;
    const additionalBuiltUpAreaValue = parseFloat(additionalBuiltUpArea) || 0;


    const buildingPriceValue = flatCoveredValue * companyTotalValue + additionalBuiltUpAreaValue;

    setBuildingPrice(isNaN(buildingPriceValue) ? null : buildingPriceValue);
    

    // Display the calculated values in the console for now
    console.log('Land Price:', landPrice);
    console.log('Building Price:', buildingPrice);

    
  // Calculate Subtotal
  const subtotalValue = landPriceValue + buildingPriceValue;
  setSubtotal(isNaN(subtotalValue) ? null : subtotalValue);

  //calculate corner-charge
  const cornerFactor = selectedCornerPlot === "yes" ? 1 : 0;
  const cornerChargeValue = (subtotalValue * cornerFactor) / 100;
  setCornerCharge(isNaN(cornerChargeValue) ? null : cornerChargeValue);

  // //calculate facing-charge
  // calculateFacingFactor(selectedFacing || ''); // Pass the selected facing value
  // calculateCornerFactor(selectedCornerPlot || ''); // Pass the selected corner value
  if (selectedFacing !== undefined) {
    calculateFacingFactor(selectedFacing);
  }

  const projectManagementPercentage = parseFloat(projectManagement);

  if (isNaN(projectManagementPercentage)) {
    // Handle the case where projectManagement is not a valid number
    console.error('Invalid project management percentage');
    return;
  }
// Calculate Project Management Charge based on entered percentage
const projectManagementChargeValue = (subtotalValue * (projectManagementPercentage / 100)).toFixed(2);
const parsedProjectManagementCharge = isNaN(parseFloat(projectManagementChargeValue)) ? null : parseFloat(projectManagementChargeValue);
setProjectManagementCharge(parsedProjectManagementCharge);

  // Calculate floor level charges
  const floorLevelChargesValue = (subtotalValue * floorLevelHeightFactor) / 100;
  setFloorLevelCharges(isNaN(floorLevelChargesValue) ? null : floorLevelChargesValue);

    // Calculate Unit Adjustment Charges based on the provided formula
    const unitAdjustmentChargesValue: number | null =
    ((subtotalValue as unknown) as number) * ((adjustmentFactor as unknown) as number) / 100;
  
  setUnitAdjustmentCharges(isNaN(unitAdjustmentChargesValue) ? null : unitAdjustmentChargesValue);

  // Calculate grand-total
  const grandTotalValue =
    (subtotalValue || 0) +
    (cornerChargeValue || 0) +
    (facingCharge || 0) +
    (fillingChargeValue || 0) +
    (remotenessCharge || 0) +
    (parsedProjectManagementCharge || 0) +
    (projectAdjustmentCharge || 0) +
    (unitAdjustmentChargesValue || 0);

setGrandTotal(isNaN(grandTotalValue) ? null : grandTotalValue);
}

  return (
    <div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16 flex flex-wrap justify-around gap-8">
            {/* <div className="flex flex-wrap space-y-1"> */}
              {/* Select branch section */}
              
              <div className="w-full md:w-[48%] lg:w-[30%]">
              <Card>
  <CardHeader>
    <CardTitle>Select Branch</CardTitle>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
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
            onCheckedChange={setShowSuperLuxuryMarkup}
          >
            Super Luxury Markup
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
              </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="remoteness-factor">Remoteness Factor</Label>
          <Input
            id="remoteness-factor"
            placeholder="Enter Remoteness Factor"
            value={remotenessFactor !== null ? remotenessFactor.toString() : ''}
            onChange={(e) => setRemotenessFactor(parseFloat(e.target.value) || 0)}
          />

          <Label htmlFor="base-builtup-rate">Base Builtup rate (raw)</Label>
          <Input
            id="base-builtup-rate"
            placeholder="Enter Base built-up rate(raw)"
            value={baseBuiltupRate}
            onChange={(e) => setBaseBuiltupRate(e.target.value)}
          />

          <Label htmlFor="builtup-rate-with-floor">Built-up rate with addition of floor</Label>
          <Input
            id="builtup-rate-with-floor"
            placeholder="Base Built-up rate (raw) with addition of floor"
            value={builtupRateWithFloor}
            onChange={(e) => setBuiltupRateWithFloor(e.target.value)}
          />
        </div>
      </div>
    </form>
  </CardContent>
</Card>
</div>

              {/* model section */}
<Card className="w-full md:w-[48%] lg:w-[30%]">
  <CardHeader>
    <CardTitle>Select Model</CardTitle>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="flat-covered">Flat Covered</Label>
          <Input
            id="flat-covered"
            placeholder="One unit covered built up area (excluding parking)"
            value={flatCovered}
            onChange={(e) => setFlatCovered(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="floor-plate-covered">Floor Plate covered</Label>
          <Input
            id="floor-plate-covered"
            placeholder="Floor plate covered built up area (excluding parking)"
            value={floorPlateCovered}
            onChange={(e) => setFloorPlateCovered(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="total-covered-area">Total covered Area</Label>
          <Input
            id="total-covered-area"
            placeholder="Total covered built up area of apartment (excluding parking)"
            value={totalCoveredArea}
            onChange={(e) => setTotalCoveredArea(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="number-of-floors">Number of Floors</Label>
          <Input
            id="number-of-floors"
            placeholder="No. of Floors"
            value={numberOfFloors}
            onChange={(e) => setNumberOfFloors(e.target.value)}
          />
        </div>
      </div>
    </form>
  </CardContent>
</Card>
            {/* unit section */}
              <div className="w-full md:w-[48%] lg:w-[30%]">
              <Card>
                <CardHeader>
                  <CardTitle>Select Unit</CardTitle>
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
  <Input
    id="filling-depth"
    placeholder="Filling depth as per required in Feet unit"
    onChange={(e) => handleFillingChargeChange(e.target.value)}
  />
</div>
            <div className="flex flex-col space-y-1.5">
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Floor Level</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select your floor level</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedFloorLevel} onValueChange={handleFloorLevelChange}>
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
<div className="flex flex-col space-y-1.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Facing</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Facing Side based on Unit Selected</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={selectedFacing} onValueChange={calculateFacingFactor}>
            <DropdownMenuRadioItem value="east">East</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="west">West</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="north">North</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="south">South</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div className="flex flex-col space-y-1.5">
  <Label htmlFor="additionalBuiltUpAreaValue">Additional Built-up Area</Label>
  <Input
    id="additionalBuiltUpAreaValue"
    placeholder="Additional/Semi-finished Builtup Area"
    value={additionalBuiltUpArea}
    onChange={(e) => handleAdditionalBuiltUpAreaChange(e.target.value)}
  />
</div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="additional-land-area">Additional Land Area</Label>
              <Input id="name" placeholder="Additional Land Area" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>

{/* project section */}
<div className="w-full md:w-[48%] lg:w-[30%]">
<Card className="w-[500px]">
  <CardHeader>
    <CardTitle>Project Details</CardTitle>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="land-rate">Land rate</Label>
          <Input
            id="land-rate"
            placeholder="Land rate at the time of purchase"
            value={landRate}
            onChange={(e) => setLandRate(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="current-land-rate">Current Land Rate</Label>
          <Input
            id="current-land-rate"
            placeholder="Current land rate as per market value(Adding value)"
            value={currentLandRate}
            onChange={(e) => setCurrentLandRate(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="land-value">Land value sell factor</Label>
          <Input
            id="land-value"
            placeholder="Enter land value sell factor"
            value={landValueSellFactor}
            onChange={(e) => setLandValueSellFactor(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="development-charge">Development Charge</Label>
          <Input
            id="development-charge"
            placeholder="Enter development charge"
            value={developmentCharge}
            onChange={(e) => setDevelopmentCharge(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="legal-charge">Legal Charge</Label>
          <Input
            id="legal-charge"
            placeholder="Enter legal charge"
            value={legalCharge}
            onChange={(e) => setLegalCharge(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="adjustment-factor">Adjustment-Factor</Label>
          <Input
            id="adjustment-factor"
            placeholder="Enter adjustment factor"
            value={adjustmentFactor}
            onChange={(e) => setAdjustmentFactor(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="filling-depth">Filling Depth</Label>
          <Input
            id="filling-depth"
            placeholder="Filling depth as per required in Feet unit"
            value={fillingDepth}
            onChange={(e) => setFillingDepth(parseFloat(e.target.value) || 0)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="total-area">Total land Area</Label>
          <Input
            id="total-area"
            placeholder="Enter total land area"
            value={totalArea}
            onChange={(e) => setTotalArea(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="project-management">Project Management %</Label>
          <Input
            id="project-management"
            placeholder="project management charges such as advertisements etc. in %"
            value={projectManagement}
            onChange={(e) => setProjectManagement(e.target.value)}
          />
        </div>
      </div>
    </form>
  </CardContent>
</Card>
</div>

<Button onClick={handleGetQuotation} className="w-full">Get Quotation</Button>

          <Card className='W-full'>
      <CardHeader>
              <CardTitle>Total Value</CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
            <h3 className='mt-4 text-lg font-semibold'>Company Total: INR {companyTotal.toFixed(2)}</h3>
            {landShare !== null && <h3 className="mt-4 text-lg font-semibold">Land share per unit: {landShare}</h3>}
    {facingFactor !== null && <h3 className="mt-4 text-lg font-semibold">Facing Factor: {facingFactor * 100}%</h3>}

    {selectedCornerPlot !== undefined && (
      <h3 className="mt-4 text-lg font-semibold">Corner Plot Factor: {selectedCornerPlot === "yes" ? 1 : 0}</h3>
    )}

    <h3 className="mt-4 text-lg font-semibold">Floor Level Factor: {floorLevelHeightFactor}%</h3>

    <h3 className="mt-4 text-lg font-semibold">Net selling land rate: {netSellingLandRate !== null ? netSellingLandRate : 'N/A'}</h3>
<h3 className="mt-4 text-lg font-semibold">Land Price: {landPrice}</h3>

{buildingPrice !== null && <h3 className="mt-4 text-lg font-semibold">Building Price: {buildingPrice}</h3>}

{subtotal !== null && <h3 className="mt-4 text-lg font-semibold">Subtotal: {subtotal}</h3>}
{cornerCharge !== null && <h3 className="mt-4 text-lg font-semibold">Corner Charge: {cornerCharge}</h3>}

<h3 className="mt-4 text-lg font-semibold">Facing Charge: {facingFactor !== null && subtotal !== null ? subtotal * facingFactor : 'N/A'}</h3>

{fillingCharge !== null && <h3 className="mt-4 text-lg font-semibold">Filling Charge: {fillingCharge}</h3>}
{remotenessCharge !== null && <h3 className="mt-4 text-lg font-semibold">Remoteness Charge: {remotenessCharge}</h3>}
{projectManagementCharge !== null && <h3 className="mt-4 text-lg font-semibold">Project Adjustment Charge: {projectManagementCharge}</h3>}

{floorLevelCharges !== null && <h3 className="mt-4 text-lg font-semibold">Floor Level Charges: {floorLevelCharges}</h3>}
{unitAdjustmentCharges !== null && <h3 className="mt-4 text-lg font-semibold">Unit Adjustment Charges: {unitAdjustmentCharges}</h3>}

{grandTotal !== null && <h3 className="mt-6 text-2xl font-bold text-blue-950">Grand Total: {grandTotal}</h3>}

        </CardContent>
    </Card>

    </div>
  );
};

export default ApartmentConfig;