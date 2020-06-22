const buildingJson = "../data/buildings.json";

let selectedFloor;
let wholeFloor = false;

// function getData(data) {
// 	return fetch(data)
// 		.then(function(response) {
// 			// 	.then(response => response.json())
// 			// 	.then(json => console.log("json", json));
// 		}
// 	)
// } // getData

let buildingData;

doFloorData(buildingJson);

const stackplanEls = document.querySelectorAll(".grid-item-stackplan"); // array of ol parent nodes

function doFloorData(jsonFile) {
	// getData(data).then(function(response) {
	// fetch("../json/buildings.json") // or buildingJson?
	// 	.then(response => response.json())
	// 	.then(json => console.log("json", json));
	fetch(jsonFile)
		.then(response => {
			if (!response.ok) {
				throw new Error("uh-oh! HTTP error " + response.status + "!");
			}
			return response.json()
		})
		.then(json => {
			buildingData = json;
			json.forEach((building, ixBuilding) => {
				const buildingEl = document.createElement("ol");
				buildingEl.setAttribute("class", "stackplan " + building.building + "-tower");
				const floors = [];
				floors.length = building.floorCount;

				for (ixFloor = 0; ixFloor < floors.length; ixFloor++) { // floor 1, !floor 0
					const floorEl = document.createElement("li");
					floorEl.setAttribute("class", "floor" + "-" + (ixFloor + 1));
					// ixFloor of all floors; ixFloorWithData == floorData.availNowSquareFeet
					building.floorData.forEach((floor, ixFloorWithData) => {
						// 'floorData' in buildings.json only holds *available* space,
						// ERGO build & append spans only per 'availNow', 'availOnDate';
						if (floor.floorNumber == ixFloor + 1) {
							const availNowEl = document.createElement("span");
							const availOnDateEl = document.createElement("span");
							if (floor.availNow) {
								availNowEl.classList.add("available-now");
								availNowEl.innerHTML = '<a href="#" title="floor ' + floor.floorNumber + '">' + floor.availNowSquareFeet + '</a>';
								floorEl.appendChild(availNowEl);
								availNowEl.addEventListener("click", () => showSpecs(floor));
							}
							if (floor.availOnDate) {
								availOnDateEl.classList.add("available-date");
								availOnDateEl.innerHTML =
									floor.availOnDateSquareFeet +
									" RSF AVAIL " +
									floor.availOnDateMonth +
									"/" +
									floor.availOnDateYear;
								floorEl.appendChild(availOnDateEl);
							}
							floor.availNow && !floor.availOnDate && floor.availNowPercent !== "100" ? availNowEl.classList.add("half") : null;
						} // if (floor.floorNumber == ixFloor + 1) {
					})
					buildingEl.appendChild(floorEl);
				} // for (ixFloor = 0; ...
				stackplanEls[ixBuilding].appendChild(buildingEl);
			}) // json.forEach((building ...
		}) // .then(json => ...
} // floorData

function showSpecs(floor) { // event handlers added in floorData
	let floorNumber = document.querySelector(".floor-spec-floor-number");
	let floorRsf = document.querySelector(".floor-spec-rsf");
	let workstations = document.querySelector("#spec-workstations");
	let privateOffices = document.querySelector("#spec-private-offices");
	let partnerOffices = document.querySelector("#spec-partner-offices");
	let conferenceRooms = document.querySelector("#spec-conference-rooms");
	let receptionMailRoom = document.querySelector("#spec-reception-mail-room");
	let total = document.querySelector("#spec-total");

	floorNumber.innerHTML = floor.floorNumber + floorNumberSuffix(floor.floorNumber) + " floor";
	floorRsf.innerHTML = floor.availNowSquareFeet;
	workstations.innerHTML = floor.workstations;
	privateOffices.innerHTML = floor.privateOffices;
	partnerOffices.innerHTML = floor.partnerOffices;
	conferenceRooms.innerHTML = floor.conferenceRooms;
	receptionMailRoom.innerHTML = floor.receptionMailRoom;

	function floorNumberSuffix(flNum) {
		const suffixes = {
			"0": "th",
			"1": "st",
			"2": "nd",
			"3": "rd",
			"4": "th",
			"5": "th",
			"6": "th",
			"7": "th",
			"8": "th",
			"9": "th",
			"12": "th",
		}
		if (flNum.toString().slice(-2) == "12") {
			return suffixes[12];
		}
		else {
			let lastDigit = flNum.toString().slice(-1);
			return (suffixes[lastDigit]);
		}
	} // floorNumberSuffix

	floor.availNow && floor.availNowPercent == 100 ? wholeFloor = true : wholeFloor = false;
	floorPlans(floor);
} // showSpecs();



// .floorplan-default & .floorplan-image-wrapper swapped if wholeFloor (CSS)
function floorPlans(floor) {
	selectedFloor = floor.floorNumber;

	const elFloorPlanWrapper = document.querySelector(".grid-item-floorplan-wrapper");
	const floorPlanLinksDiv = document.querySelector(".floorplan-links-wrapper");
	const floorPlanLinks = document.querySelectorAll(".floorplan-links li");
	const elFloorPlanImage = document.querySelector(".floorplan-image");

	resetFloorPlan();

	function resetFloorPlan() {
		floorPlanLinks.forEach(function(el, ix, arr) {
			el.classList.remove("selected");
		});
		elFloorPlanImage.classList.remove("on");
		elFloorPlanImage.setAttribute("src", "");
	}

	if (wholeFloor) {
		floorPlanLinksDiv.classList.add("on");

		floorPlanLinks.forEach(function(el, ix, arr) {
			el.addEventListener("click", () => swapFloorPlanImages(el, selectedFloor));
		});
		function swapFloorPlanImages(link, selectedFloor) {
			let selectedClass = link.className.replace("floorplan-", "").replace(" selected", "");
			let selFloorPlanImg = "../img/floorplans/floorplan_" + selectedClass + "_870x1689.jpg"; // e.g.,
			floorPlanLinks.forEach(function(el, ix, arr) {
				el.classList.remove("selected");
			});
			link.classList.add("selected");
			elFloorPlanImage.setAttribute("src", selFloorPlanImg);
			elFloorPlanImage.classList.add("on");
		} // floorPlanImages

		elFloorPlanWrapper.classList.add('whole-floor'); // css to swap
	}

	else {
		floorPlanLinksDiv.classList.remove("on");
		elFloorPlanWrapper.classList.remove('whole-floor'); // css to swap
	}



} // floorPlans
