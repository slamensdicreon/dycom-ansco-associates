/**
 * Contact + Locations content.
 * EDITORS: add/remove office locations in `locations` (rendered as cards on /contact/locations/).
 */

export type Location = { name: string; street: string; cityStateZip: string };

/** Request Type choices from the original Gravity Form; the chosen label is sent as `subject`. */
export const requestTypes = ["Customer Service", "General Inquiries", "Subcontractor"] as const;

export const usStates: string[] = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "U.S. Virgin Islands", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Armed Forces Americas", "Armed Forces Europe", "Armed Forces Pacific"];

export const locationsIntro =
  "Our locations are operating offices and not open to the public. For assistance, please fill out the form above to get in touch.";

/** Google Maps embed of HQ, as on the original contact page. */
export const hqMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.114769049871!2d-84.2988729235705!3d34.05522232309257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5950c2d4d209f%3A0x18f57e6d50d3b57b!2s200%20North%20Point%20Center%20E%20Suite%20400%2C%20Alpharetta%2C%20GA%2030022!5e0!3m2!1sen!2sus!4v1726405178725!5m2!1sen!2sus";

export const locations: Location[] = [
  { name: "Headquarters", street: "200 North Point Center East, Suite 400", cityStateZip: "Alpharetta, GA 30022" },
  { name: "Aiken", street: "1025 Richland Ave.", cityStateZip: "Aiken, SC 29801" },
  { name: "Alpharetta", street: "4800 Atlanta Hwy.", cityStateZip: "Alpharetta, GA 30006" },
  { name: "Anderson", street: "514 Carson Road", cityStateZip: "Anderson, SC 29621" },
  { name: "Apopka", street: "5551 West Ponkan Road", cityStateZip: "Apopka, FL 32712" },
  { name: "Asheville", street: "47 Rutherford Rd.", cityStateZip: "Candler, NC 28715" },
  { name: "Augusta", street: "390 Tower Rd", cityStateZip: "Augusta, GA 30907" },
  { name: "Baxley", street: "2120 Golden Isle West", cityStateZip: "Baxley, GA 31513" },
  { name: "Berkeley", street: "8893 Frost Avenue", cityStateZip: "Berkeley, MO 63134" },
  { name: "Billings", street: "4025 1st Avenue South", cityStateZip: "Billings, MT 59101" },
  { name: "Caldwell", street: "3520 Arthur Street", cityStateZip: "Caldwell, ID 83605" },
  { name: "Chamblee", street: "3646 Clemson Dr.", cityStateZip: "Chamblee, GA 30341" },
  { name: "Chapel Hill", street: "2611 Highway 54 West", cityStateZip: "Chapel Hill, NC 27514" },
  { name: "Charleston", street: "7385 Cross County Road", cityStateZip: "Charleston, SC 29418" },
  { name: "Charlotte", street: "1131 Amble Drive", cityStateZip: "Charlotte, NC 28206" },
  { name: "Clarkston", street: "696 Park North Blvd.", cityStateZip: "Clarkston, GA 30021" },
  { name: "Columbia", street: "1826 Holland Street", cityStateZip: "Columbia, SC 29169" },
  { name: "Covington", street: "57 N. Hwy 11", cityStateZip: "Social Circle, GA 30025" },
  { name: "Denver", street: "11585 East 53rd Avenue Units A & B", cityStateZip: "Denver, CO 80239" },
  { name: "Dublin", street: "717 Bass Lane", cityStateZip: "Dublin, GA 31021" },
  { name: "Florence", street: "1518 N. Douglas Street", cityStateZip: "Florence, SC 29501" },
  { name: "Fort Worth", street: "4801 Parker Henderson Rd", cityStateZip: "Fort Worth, TX 76119" },
  { name: "Gainesville", street: "1602 Fullenwider Rd.", cityStateZip: "Gainesville, GA 30507" },
  { name: "Greensboro East", street: "406 Pine Street", cityStateZip: "Greensboro, NC 27401" },
  { name: "Greensboro West", street: "6-C Oak Branch Drive", cityStateZip: "Greensboro, NC 27407" },
  { name: "Greenville", street: "43 Sentell Road", cityStateZip: "Greenville, SC 29611" },
  { name: "Houston North", street: "140 Cypress Station Dr, Suite 217", cityStateZip: "Houston, TX 77090" },
  { name: "Houston South", street: "12301 Amelia Dr", cityStateZip: "Houston, TX 77045" },
  { name: "Houston West", street: "11335 Cutten Road", cityStateZip: "Houston, TX 77066" },
  { name: "Irving", street: "4405 Reese Dr", cityStateZip: "Irving, TX 75063" },
  { name: "Jonesboro", street: "9236 Poston Rd.", cityStateZip: "Jonesboro, GA 30236" },
  { name: "LaGrange", street: "677 Hudson Rd", cityStateZip: "LaGrange, GA 30204" },
  { name: "Lawrenceville", street: "830 Petty Rd.", cityStateZip: "Lawrenceville, GA 30043" },
  { name: "Lenoir", street: "4120 Briarcliff Lane", cityStateZip: "Lenoir, NC 28645" },
  { name: "Lincolnton", street: "2574 North Aspen St.", cityStateZip: "Lincolnton, NC 28092" },
  { name: "Lithia Springs", street: "11020 Veterans Memorial Highway", cityStateZip: "Lithia Springs, GA 30122" },
  { name: "Longwood", street: "1425 West 434 State Road, Suite 102", cityStateZip: "Longwood, FL 32750" },
  { name: "Lumberton", street: "1227 US Hwy 74 West", cityStateZip: "Lumberton, NC 28360" },
  { name: "Macon", street: "225 Allied Industrial Blvd", cityStateZip: "Macon, GA 31206" },
  { name: "Marietta", street: "401 Marble Mill Rd.", cityStateZip: "Marietta, GA 30060" },
  { name: "Ocala", street: "4320 Florida 40", cityStateZip: "Ocala, FL 34482" },
  { name: "Raleigh", street: "226 Highway 70 East", cityStateZip: "Raleigh, NC 27529" },
  { name: "Rome", street: "29 Shorter Ind. Blvd. NW", cityStateZip: "Rome, GA 30165" },
  { name: "Salt Lake City", street: "1820 West 1500 South", cityStateZip: "Salt Lake City, UT 84104" },
  { name: "Savannah", street: "1230 Dean Forest Road", cityStateZip: "Savannah, GA 31405" },
  { name: "Spartanburg", street: "9008 Fairforest Road", cityStateZip: "Spartanburg, SC 29301" },
  { name: "Statesville", street: "142 National Dr.", cityStateZip: "Statesville, NC 28625" },
  { name: "Tucker", street: "4381 Bibb Boulevard", cityStateZip: "Tucker, GA 30084" },
  { name: "Wilmington", street: "104 Crowatan Road", cityStateZip: "Castle Hayne, NC 28429" },
  { name: "Winston-Salem", street: "805 Robie St.", cityStateZip: "Winston-Salem, NC 27107" },
];
