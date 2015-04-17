var lifecycles_begin = function()
{
	// Generate land

	// Generate species

	var kingdoms = [];

	// Mass in kg, lifespan in years
	kingdoms.push(new Kingdom("animal",   {biomass: [0.1,    5000    ], lifespan: [0.01,  150   ]}));
	kingdoms.push(new Kingdom("plant",    {biomass: [0.1,   10000    ], lifespan: [1,    1000   ]}));
	kingdoms.push(new Kingdom("bacteria", {biomass: [0.001,     0.002], lifespan: [0.001,   0.01]}));


	var species = [];

	species.push(new Species(kingdoms));
	species.push(new Species(kingdoms));
	species.push(new Species(kingdoms));
	species.push(new Species(kingdoms));


	// Spawn populations to cover the planet
	//

	// Show population event (death/birth)
};
