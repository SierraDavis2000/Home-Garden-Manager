const {Plant} = require('../models')

const plantData = [
    
    {
        id: 1,
        common_name: "Aloe Vera",
        latin_name: "Aloe vera",
        watering_schedule: "Only When the Soil is Dry (1-3 Weeks)",
        soil_type: "A Well-Draining Potting Mix is Required",
        light_req: "Lots of Direct Sunlight",
        fertilizer_req: "Only Once a Season",
        space_req: "Requires Sufficient Space for Frequent Propagation",
        indoor_outdoor: "indoor",
        pest_info: "Common Pests: Red Spider Mites, Mealybugs, Snoutbeetles, and Gallmites",
        pet_care: "This Plant Can be Poisonious for Both Cats and Dogs When Consumed", 
        user_id: null
    }, 
    {
        id:2,
        common_name: "Begonia",
        latin_name: "genus Begonia", 
        watering_schedule: "Only When the Soil Begins to Dry Out (Approx. Once a Week)",
        soil_type: "Use Light Potting Soil With Extra Perlite",
        light_req: "Needs Bright and Indirect Sunlight",
        fertilizer_req: "Only When Growing and Flowering (Approx. Once a Month",
        space_req: "Most Stay Within the Average Size of Their Initial Placement",
        indoor_outdoor: "indoor",
        pest_info: "Common Pests: Spider Mites, Mealybugs, Thrips, Scales, Snails, and Slugs",
        pet_care: "Undergrowth Can Be Toxic to Most Pets When Consumed",
        user_id: null
    },
    {
        id: 3,
        common_name: "Bird of Paradise Plant",
        latin_name: "Strelitzia Reginae", 
        watering_schedule: "When the Top Layer of the Soil Becomes Dry",
        soil_type: "Needs a Slightly Acidic to Neutral Potting Mix",
        light_req: "Needs Bright Light and Some Direct Sunlight",
        fertilizer_req: "About Once a Month, No Feeding in the Winter",
        space_req: "Will Grow Very Tall Instead of Spread Out",
        indoor_outdoor: "indoor",
        pest_info: "Common Pests: Spider Mites, Mealybugs, and Scales",
        pet_care: "Mildly Toxic to Cats and Dogs in Stem, Root, and Flower Areas", 
        user_id: null
    },
    {
        id: 4, 
        common_name: "Hyacinth",
        latin_name: "genus Hyacinthus", 
        watering_schedule: "Needs Constant Watering So That the Soil Stays Wet",
        soil_type: "Loose and Well Drained Soils Required",
        light_req: "Needs a Good and Strong Light Source",
        fertilizer_req: "Feed With a Weak Solution Every Third Watering",
        space_req: "N/A",
        indoor_outdoor: "Both",
        pest_info: "Common Pests: Small Insects and Rodents",
        pet_care: "Only Plant Bulbs are Toxic", 
        user_id: null
    },
    {
        id: 5, 
        common_name: "Cucumber",
        latin_name: "Cucumis sativus", 
        watering_schedule: "About 1 in of Water a Week ",
        soil_type: "Needs Warm and Well Drained Soil with a Neutral pH",
        light_req: "Abundant and Direct Sunlighgt",
        fertilizer_req: "Requires Regular Feedings - Frequency Depends on Grow Area",
        space_req: "Plant Seedlings about 36 to 60 in Apart, Vines Require a Trellis",
        indoor_outdoor: "Outdoor",
        pest_info: "Common Pests: Slugs and Beetles",
        pet_care: "N/A", 
        user_id: null
    },
    {
        id: 6,
        common_name: "Tomatoes",
        latin_name: "Solanum lycopersicum", 
        watering_schedule: "About 1 in of Water a Week ",
        soil_type: "Needs Warm and Well Drained Soil with a Slightly Acidic pH",
        light_req: "Abundant and Direct Sunlight",
        fertilizer_req: "Requires Regular Feedings During Growing Season",
        space_req: "Plant Seedlings Need to Be Evenly Spaced Apart, Vines Require a Trellis",
        indoor_outdoor: "Outdoor",
        pest_info: "Common Pests: Mites, Slugs, and Beetles",
        pet_care: "N/A", 
        user_id: null
    },
    {
        id: 7,
        common_name: "Butternut Squash",
        latin_name: "Cucurbita moschata 'Butternut'", 
        watering_schedule: "About 1 in of Water a Week ",
        soil_type: "Needs Warm and Well Drained Soil With Compost Introduced",
        light_req: "Abundant and Direct Sunlight",
        fertilizer_req: "Requires Regular Feedings, Continuous Release Fertilizer is Recommended",
        space_req: "Need Sufficient Space to Allow for Broad Leaves and Minimize Cooling Effect",
        indoor_outdoor: "Outdoor",
        pest_info: "Common Pests: Squash Vine Borers, Squash Bugs, and Cucumber Beetles",
        pet_care: "N/A", 
        user_id: null
    },
    {
        id: 8,
        common_name: "Boston Fern",
        latin_name: "Nephrolepis exaltata", 
        watering_schedule: "Enough to Keep the Soils Constantly Moist (At Least Once a Week)",
        soil_type: "Needs a Light, Moist and Well Draining Soil",
        light_req: "A Bright Spot Away From Harsh Sunlight",
        fertilizer_req: "Use a General Purpose Fertilizer Once Every Couple Months",
        space_req: "Space Required for Rapid and Regular Growth, Can Grow Quite Tall",
        indoor_outdoor: "Indoor",
        pest_info: "Common Pests: Caterpillars, Mealybugs, False Spider Mites, Scales and Thrips",
        pet_care: "N/A", 
        user_id: null
    },
    {
        id: 9,
        common_name: "Croton",
        latin_name: "Codiaeum variegatum pictum", 
        watering_schedule: "Enough to Keep the Soils Constantly Moist (At Least Once a Week)",
        soil_type: "Needs a Light, Moist and Well Draining Soil",
        light_req: "A Bright Spot Away From Harsh Sunlight",
        fertilizer_req: "Use a General Purpose Fertilizer Once Every Couple Months",
        space_req: "Space Required for Rapid and Regular Growth, Can Grow Quite Tall",
        indoor_outdoor: "Indoor",
        pest_info: "Common Pests: Caterpillars, Mealybugs, False Spider Mites, Scales and Thrips",
        pet_care: "N/A", 
        user_id: null
    },
 //madigascar jewel 
]

const seedPlants = () => Plant.bulkCreate(plantData);

module.exports = seedPlants;