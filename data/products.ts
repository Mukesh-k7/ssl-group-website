import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "pig-iron",
    key: "PigIron",
    category: "ferrousMetals",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/pig-iron.png",
    imageAlt: "Pig Iron",
    featured: true,
    specification: [
      {
        key: "FoundryPigIron",
        value: "FC:3.50–4.50%, Si:1.00–3.00%",
      },
      {
        key: "BasicPigIron",
        value: "FC:3.80–4.50%, Si:≤1.25%",
      },
      {
        key: "NodularPigIron",
        value: "FC:3.60–4.30%, Si:1.20–2.20%",
      },
      {
        key: "SteelPigIron",
        value: "FC:3.80–4.50%, Si:0.50–1.50%",
      },

    ],
    variants: [
      {
        id: 1,
        translationKey: "FoundryGradePigIron",
        image: "/images/products/Foundary-Grade.jpg",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],
        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "C", "Si", "Mn", "P", "S"],
            rows: [
              ["L1", "3.50–4.50%", "3.20–3.60%", "0.40–0.80%", "0.08% max", "0.04% max"],
              ["L2", "3.50–4.50%", "2.80–3.20%", "0.40–0.80%", "0.08% max", "0.04% max"],
              ["L3", "3.50–4.50%", "2.40–2.80%", "0.40–0.80%", "0.08% max", "0.04% max"],
              ["L4", "3.50–4.50%", "2.00–2.40%", "0.40–0.80%", "0.08% max", "0.04% max"],
              ["L5", "3.50–4.50%", "1.60–2.00%", "0.40–0.80%", "0.08% max", "0.04% max"],
              ["L6", "3.50–4.50%", "1.20–1.60%", "0.40–0.80%", "0.08% max", "0.04% max"],
              ["L5–L6 Low Mn", "3.50–4.50%", "1.00–2.00%", "0.099% max", "0.08% max", "0.04% max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "Grey Metallic"],
              ["Shape", "Pig / Blocks"],
              ["Color", "Dark Grey"],
              ["Density", "6.9–7.3 g/cm³"],
              ["Specific Gravity", "6.9–7.3"],
              ["Melting Point", "1150–1250°C"],
              ["Standard Weight", "10–20 Kg per Pig"],
              ["Packing", "Loose, Bulk, or 1 MT Jumbo Bags"],
              ["Storage", "Store in a dry and covered area"]
            ]
          },
        ],
        applications: [
          "GreyIronCastings",
          "AutomotiveComponents",
          "MachinePartsManufacturing",
          "PipePipeFittings",
          "ManholeCoversDrainageCastings",
          "AgriculturalEquipment",
          "EngineeringIndustrialCastings",
          "FoundryIndustry",
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },
        ],

        faq: [
          {
            question: "WhatIsFoundryPigIronQuestion",
            answer: "WhatIsFoundryPigIronAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ]
      },

      {
        id: 2,
        translationKey: "BasicGradePigIron",
        image: "/images/products/Basic-Grade.jpg",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue",
          },
          {
            key: "Packing",
            value: "PackingValue",
          },
          {
            key: "Standard",
            value: "StandardValue",
          },
          {
            key: "Origin",
            value: "OriginValue",
          },
        ],
        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "C", "Si", "Mn", "P", "S"],
            rows: [
              ["Low Mn", "3.50–4.50%", "1.20% max", "0.099% max", "0.08% max", "0.05% max"],
              ["PL1 / PL2", "3.50–4.50%", "0.60–1.20%", "0.40–0.80%", "0.08% max", "0.05% max"]
            ]
          },
          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "Grey Metallic"],
              ["Shape", "Pig / Blocks"],
              ["Color", "Dark Grey"],
              ["Density", "6.9–7.3 g/cm³"],
              ["Specific Gravity", "6.9–7.3"],
              ["Melting Point", "1150–1250°C"],
              ["Standard Weight", "10–20 Kg per Pig"],
              ["Packing", "Loose, Bulk, or 1 MT Jumbo Bags"],
              ["Storage", "Store in a dry and covered area"]
            ]
          },
        ],

        applications: [
          "SteelMaking",
          "ElectricArcFurnace",
          "InductionFurnaces",
          "SteelFoundries",
          "AlloySteelProduction",
          "CarbonSteelManufacturing",
          "CastingIndustry",
          "EngineeringApplications"
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],

        faq: [
          {
            question: "WhatIsBasicPigIronQuestion",
            answer: "WhatIsBasicPigIronAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },

          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },

          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ]
      },

      {
        id: 3,
        translationKey: "SteelGradePigIron",
        image: "/images/products/Steel-Grade.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "C", "Si", "Mn", "P", "S"],
            rows: [
              ["SG-1", "3.80–4.50%", "0.50–1.20%", "0.30–1.00%", "0.15% Max", "0.05% Max"],
              ["SG-2", "3.80–4.50%", "0.70–1.50%", "0.30–1.00%", "0.20% Max", "0.05% Max"]
            ]
          },
          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "PigBlocks"],
              ["Color", "DarkGrey"],
              ["Density", "6.9–7.3 g/cm³"],
              ["SpecificGravity", "6.9–7.3"],
              ["MeltingPoint", "1150–1250°C"],
              ["StandardWeight", "10–20 Kg per Pig"],
              ["Packing", "Loose, Bulk, or 1 MT Jumbo Bags"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "ElectricArcFurnaces",
          "InductionFurnaces",
          "CarbonSteelProduction",
          "AlloySteelManufacturing",
          "FoundryIndustry",
          "EngineeringApplications",
          "CastingIndustry"
        ],

        faq: [
          {
            question: "WhatIsSteelPigIronQuestion",
            answer: "WhatIsSteelPigIronAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],
      },

      {
        id: 4,
        translationKey: "NodularPigIron",
        image: "/images/products/Nodular-Grade.jpg",
        description:
          "Nodular Grade Pig Iron, also known as SG Grade Pig Iron, is a premium-quality raw material used in the production of ductile (SG) iron castings. It is characterized by low sulfur and phosphorus content, excellent melting characteristics, and a controlled chemical composition, ensuring superior mechanical properties and consistent casting performance. SSL Group supplies high-quality Nodular Grade Pig Iron sourced from trusted producers for domestic and international customers.",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "C", "Si", "Mn", "P", "S"],
            rows: [
              ["N1", "3.60–4.30%", "1.20–2.20%", "0.20–0.60%", "0.08% Max", "0.02% Max"],
              ["N2", "3.60–4.30%", "1.50–2.50%", "0.20–0.60%", "0.08% Max", "0.02% Max"]
            ]
          },
          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "PigBlocks"],
              ["Color", "DarkGrey"],
              ["Density", "6.9–7.3 g/cm³"],
              ["SpecificGravity", "6.9–7.3"],
              ["MeltingPoint", "1150–1250°C"],
              ["StandardWeight", "10–20 Kg per Pig"],
              ["Packing", "Loose, Bulk, or 1 MT Jumbo Bags"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "DuctileIronCastings",
          "AutomotiveComponents",
          "PipePipeFittings",
          "ValvesPumps",
          "MachineComponents",
          "AgriculturalEquipment",
          "EngineeringCastings",
          "FoundryIndustry"
        ],

        faq: [
          {
            question: "WhatIsNodularPigIronQuestion",
            answer: "WhatIsNodularPigIronAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],
      },
    ],
  },

  {
    slug: "ferro-alloys",
    key: "FerroAlloys",
    category: "alloyingMaterials",
    shortDescription: "ShortDescription",
    description: "Description",
    imageAlt: "Ferro Alloys",
    image: "/images/products/ferro-alloys-1.jpg",
    featured: true,

    specification: [
      {
        key: "FeMn",
        value: "70 – 75%",
      },
      {
        key: "FeSi",
        value: "70 – 75%",
      },
      {
        key: "FeCr",
        value: "60 – 70%",
      },

      {
        key: "FeSiMn",
        value: "70 – 75%",
      },
    ],
    variants: [
      {
        id: 1,
        translationKey: "FerroSilicon",
        image: "/images/products/ferro-silicon-1.webp",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],
        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Si",
              "Al",
              "C",
              "P",
              "S",
            ],
            rows: [
              [
                "FeSi 45 %",
                "45% min",
                "2% max",
                "0.20% max",
                "0.03% max",
                "0.02% max",
              ],
              [
                "FeSi 65 %",
                "65% min",
                "1.5% max",
                "0.15% max",
                "0.03% max",
                "0.02% max",
              ],
              [
                "FeSi 75 %",
                "75% min",
                "1% max",
                "0.10% max",
                "0.02% max",
                "0.02% max",
              ],

              [
                "FeSi 75 % Low Al",
                "75% min",
                "1% max",
                "0.10% max",
                "0.02% max",
                "0.02% max",
              ],

              [
                "FeSi 75 % High Purity",
                "75% min",
                "1% max",
                "0.10% max",
                "0.02% max",
                "0.02% max",
              ],
            ],
          },

          {
            title: "PhysicalProperties",
            headers: [
              "Property",
              "Value",
            ],
            rows: [
              ["Appearance", "Silver Grey"],
              ["Shape", "Lumps"],
              ["Size", "1-3 mm / 3-10 mm / 10-50 mm / 10-100 mm As For Customer Requirements"],
              ["Density", "6.8 g/cm³"],
              ["Packing", "1 MT Jumbo Bag"],
            ],
          },
        ],
        applications: [
          "SteelMaking",
          "Deoxidizer",
          "FoundryIndustry",
          "CastIron",
          "AlloySteel",
          "StainlessSteel",
          "WeldingElectrodes",
          "MetalManufacturing"
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],

        faq: [
          {
            question: "WhatIsFerroSiliconQuestion",
            answer: "WhatIsFerroSiliconAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
      },

      {
        id: 2,
        translationKey: "FerroManganese",
        image: "/images/products/ferro-manganese.jpg",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Mn", "C", "Si", "P", "S"],
            rows: [
              ["HC FeMn", "75–80%", "6–8%", "≤1.5%", "≤0.30%", "≤0.03%"]
            ]
          },
          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "7.2–7.4 g/cm³"],
              ["SpecificGravity", "7.3"],
              ["MeltingPoint", "1240–1300°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "AlloySteel",
          "CarbonSteel",
          "FoundryIndustry",
          "RailwayComponents",
          "EngineeringComponents",
          "ConstructionSteel",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsFerroManganeseQuestion",
            answer: "WhatIsFerroManganeseAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "FerroChrome",
        image: "/images/products/ferro-chrome-2.webp",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Cr", "C", "Si", "P", "S"],

            rows: [
              ["High Carbon FeCr", "60–68%", "6–8%", "≤3.0%", "≤0.04%", "≤0.03%"],
              ["Low Carbon FeCr", "65–70%", "≤0.10%", "≤1.5%", "≤0.03%", "≤0.03%"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "6.8–7.2 g/cm³"],
              ["SpecificGravity", "7.0"],
              ["MeltingPoint", "1550–1650°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "StainlessSteel",
          "AlloySteel",
          "ToolSteel",
          "FoundryIndustry",
          "WearResistantSteel",
          "EngineeringComponents",
          "MetalManufacturing",
          "SpecialSteels"
        ],

        faq: [
          {
            question: "WhatIsFerroChromeQuestion",
            answer: "WhatIsFerroChromeAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],
      },

      {
        id: 4,
        translationKey: "FerroSiliconManganese",
        image: "/images/products/ferro-silicon-manganese-2.webp",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Si", "Mg", "Ca", "RE", "Fe"],

            rows: [
              ["FeSiMg 5-8", "42–48%", "5–8%", "0.5–2.0%", "1–2%", "Balance"],
              ["FeSiMg 8-10", "42–48%", "8–10%", "0.5–2.0%", "1–2%", "Balance"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "3.8–4.5 g/cm³"],
              ["SpecificGravity", "4.2"],
              ["MeltingPoint", "1200–1300°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "AlloySteel",
          "StructuralSteel",
          "ConstructionSteel",
          "FoundryIndustry",
          "EngineeringComponents",
          "RailwayComponents",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsFerroSiliconMagnesiumQuestion",
            answer: "WhatIsFerroSiliconMagnesiumAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],
      },

      {
        id: 5,
        translationKey: "FerroSiliconMagnesium",
        image: "/images/products/ferro-silicon-magnesium-3.webp",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Si", "Mg", "Ca", "RE", "Fe"],

            rows: [
              ["FeSiMg 5-8", "42–48%", "5–8%", "0.5–2.0%", "1–2%", "Balance"],
              ["FeSiMg 8-10", "42–48%", "8–10%", "0.5–2.0%", "1–2%", "Balance"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "3.8–4.5 g/cm³"],
              ["SpecificGravity", "4.2"],
              ["MeltingPoint", "1200–1300°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "DuctileIron",
          "NodularCastIron",
          "FoundryIndustry",
          "CastIronProduction",
          "SteelMaking",
          "AutomotiveComponents",
          "EngineeringCastings",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsFerroSiliconMagnesiumQuestion",
            answer: "WhatIsFerroSiliconMagnesiumAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],
      },

      {
        id: 6,
        translationKey: "Inoculants",
        image: "/images/products/inoculants.jpg",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Si", "Ca", "Al", "Ba", "Fe"],

            rows: [
              ["FeSi 75 Inoculant", "72–75%", "0.5–1.5%", "≤1.5%", "0–2%", "Balance"],
              ["Ba Inoculant", "70–75%", "0.5–1.5%", "≤1.5%", "2–6%", "Balance"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "6.5–7.0 g/cm³"],
              ["SpecificGravity", "6.8"],
              ["MeltingPoint", "1200–1300°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "GreyCastIron",
          "DuctileIron",
          "FoundryIndustry",
          "CastIronProduction",
          "AutomotiveCastings",
          "EngineeringCastings",
          "PipeCastings",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsInoculantsQuestion",
            answer: "WhatIsInoculantsAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],

      },
    ],

  },

  {
    slug: "coal",
    key: "Coal",
    category: "industrialMinerals",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/coal.jpg",
    imageAlt: "Coal Products",
    featured: true,
    specification: [
      { key: "FixedCarbon", value: "45 – 75%" },
      { key: "AshContent", value: "8 – 25%" },
      { key: "VolatileMatter", value: "18 – 35%" },
      { key: "Moisture", value: "3 – 12%" },
      { key: "Sulphur", value: "0.3 – 1.0%" },
    ],

    variants: [
      {
        id: 1,
        translationKey: "Anthracite",
        image: "/images/products/anthracite.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "FC", "Ash", "VM", "Moisture", "Sulfur"],

            rows: [
              ["AC 85", "85% Min", "12% Max", "6% Max", "1.0% Max", "0.5% Max"],
              ["AC 90", "90% Min", "8% Max", "5% Max", "1.0% Max", "0.4% Max"],
              ["AC 95", "95% Min", "5% Max", "3% Max", "0.8% Max", "0.3% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black"],
              ["Shape", "Lumps"],
              ["Color", "Black"],
              ["Density", "1.4–1.6 g/cm³"],
              ["SpecificGravity", "1.5"],
              ["CalorificValue", "7000–8500 Kcal/kg"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "CarbonAdditive",
          "MetallurgicalIndustry",
          "WaterFiltration",
          "PowerGeneration",
          "ChemicalIndustry",
          "IndustrialHeating"
        ],

        faq: [
          {
            question: "WhatIsAnthraciteQuestion",
            answer: "WhatIsAnthraciteAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "SteamCoal",
        image: "/images/products/steam-coal.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "GCV", "Ash", "VM", "Moisture", "Sulfur"],

            rows: [
              ["5500 GCV", "5500 Kcal/kg", "18% Max", "28% Max", "10% Max", "0.8% Max"],
              ["6000 GCV", "6000 Kcal/kg", "15% Max", "26% Max", "9% Max", "0.7% Max"],
              ["6500 GCV", "6500 Kcal/kg", "12% Max", "24% Max", "8% Max", "0.6% Max"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black"],
              ["Shape", "Lumps"],
              ["Color", "Black"],
              ["Density", "1.2–1.5 g/cm³"],
              ["SpecificGravity", "1.3"],
              ["CalorificValue", "5500–6500 Kcal/kg"],
              ["Packing", "Loose Bulk / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "PowerGeneration",
          "CementIndustry",
          "SteelIndustry",
          "PaperIndustry",
          "TextileIndustry",
          "IndustrialBoilers",
          "BrickKilns",
          "ChemicalIndustry"
        ],

        faq: [
          {
            question: "WhatIsSteamCoalQuestion",
            answer: "WhatIsSteamCoalAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "PulverizedCoalInjection",
        image: "/images/products/pci.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "FC", "Ash", "VM", "Moisture", "Sulfur"],

            rows: [
              ["PCI 70", "70% Min", "10% Max", "20% Max", "1.0% Max", "0.6% Max"],
              ["PCI 75", "75% Min", "8% Max", "18% Max", "1.0% Max", "0.5% Max"],
              ["PCI 80", "80% Min", "6% Max", "16% Max", "0.8% Max", "0.4% Max"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black"],
              ["Shape", "Fine Powder"],
              ["Color", "Black"],
              ["Density", "0.8–1.1 g/cm³"],
              ["SpecificGravity", "1.2"],
              ["ParticleSize", "75–200 Microns"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "BlastFurnace",
          "SteelMaking",
          "IronMaking",
          "MetallurgicalIndustry",
          "FoundryIndustry",
          "FuelSubstitution",
          "IndustrialHeating",
          "EnergyEfficiency"
        ],

        faq: [
          {
            question: "WhatIsPulverizedCoalInjectionQuestion",
            answer: "WhatIsPulverizedCoalInjectionAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 4,
        translationKey: "CokingCoal",
        image: "/images/products/cooking-coal.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "FC", "Ash", "VM", "Moisture", "Sulfur"],

            rows: [
              ["Prime Hard", "86% Min", "9% Max", "22% Max", "8% Max", "0.6% Max"],
              ["Medium Coking", "82% Min", "10% Max", "24% Max", "9% Max", "0.7% Max"],
              ["Semi Soft", "78% Min", "12% Max", "26% Max", "10% Max", "0.8% Max"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black"],
              ["Shape", "Lumps"],
              ["Color", "Black"],
              ["Density", "1.3–1.5 g/cm³"],
              ["SpecificGravity", "1.35"],
              ["CalorificValue", "6800–7800 Kcal/kg"],
              ["Packing", "Loose Bulk / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "BlastFurnace",
          "CokeManufacturing",
          "SteelMaking",
          "IronMaking",
          "MetallurgicalIndustry",
          "FoundryIndustry",
          "IndustrialFuel",
          "ChemicalIndustry"
        ],

        faq: [
          {
            question: "WhatIsCokingCoalQuestion",
            answer: "WhatIsCokingCoalAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },
    ]
  },

  {
    slug: "nobal-alloy",
    key: "NobalAlloy",
    category: "specialtyAlloys",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/NOBLE-ALLOYS3.png",
    imageAlt: "Nobal Alloys",
    featured: true,
    specification: [
      {
        key: "FerroMolybdenum",
        value: "FeMo 60 / 65 / 70",
      },
      {
        key: "FerroVanadium",
        value: "FeV 50 / 60 / 80",
      },
      {
        key: "FerroTungsten",
        value: "FeW 70 / 75 / 80",
      },
    ],
    variants: [
      {
        id: 1,
        translationKey: "FerroMolybdenum",
        image: "/images/products/molybdenum.jpg",
        description: "Description",
        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Mo", "C", "Si", "P", "S"],
            rows: [
              ["FeMo 60", "60–65%", "≤0.10%", "≤1.5%", "≤0.05%", "≤0.08%"],
              ["FeMo 70", "70–75%", "≤0.10%", "≤1.5%", "≤0.05%", "≤0.08%"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "9.0–9.5 g/cm³"],
              ["SpecificGravity", "9.3"],
              ["MeltingPoint", "1700–1900°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "StainlessSteel",
          "AlloySteel",
          "ToolSteel",
          "HighSpeedSteel",
          "EngineeringComponents",
          "OilGasIndustry",
          "PowerPlants",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsFerroMolybdenumQuestion",
            answer: "WhatIsFerroMolybdenumAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "FerroVanadium",
        image: "/images/products/vanadium.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "V", "C", "Si", "P", "S"],

            rows: [
              ["FeV 50", "48–55%", "≤0.50%", "≤2.0%", "≤0.05%", "≤0.05%"],
              ["FeV 80", "78–82%", "≤0.50%", "≤2.0%", "≤0.05%", "≤0.05%"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "5.5–6.5 g/cm³"],
              ["SpecificGravity", "6.1"],
              ["MeltingPoint", "1600–1750°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "HighStrengthSteel",
          "ToolSteel",
          "SpringSteel",
          "AlloySteel",
          "AutomotiveIndustry",
          "AerospaceIndustry",
          "ConstructionSteel",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsFerroVanadiumQuestion",
            answer: "WhatIsFerroVanadiumAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "FerroTungsten",
        image: "/images/products/tungsten.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "W", "C", "Si", "P", "S"],

            rows: [
              ["FeW 70", "70–75%", "≤0.30%", "≤0.50%", "≤0.03%", "≤0.03%"],
              ["FeW 80", "75–80%", "≤0.30%", "≤0.50%", "≤0.03%", "≤0.03%"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Lumps"],
              ["Color", "SilverGrey"],
              ["Density", "14.0–15.5 g/cm³"],
              ["SpecificGravity", "15.0"],
              ["MeltingPoint", "2600–2800°C"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "ToolSteel",
          "HighSpeedSteel",
          "AlloySteel",
          "MiningEquipment",
          "AerospaceIndustry",
          "EngineeringComponents",
          "WearResistantParts",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsFerroTungstenQuestion",
            answer: "WhatIsFerroTungstenAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fecr.pdf"
          }
        ],
      },
    ]
  },

  {
    slug: "carbon-products",
    key: "CarbonProducts",
    category: "carbonMaterials",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/carbon-product.jpg",
    imageAlt: "Carbon Products",
    featured: true,
    specification: [
      {
        key: "GraphitePetroleumCoke",
        value: "98.5% – 99.9% FC",
      },
      {
        key: "CalcinedPetroleumCoke",
        value: "98% – 99.5% FC",
      },
      {
        key: "CarbonRaiser",
        value: "85% – 99% FC",
      },
      {
        key: "ElectrodePaste",
        value: "Standard Grade",
      },
    ],

    variants: [
      {
        id: 1,
        translationKey: "InjectionCarbon",
        image: "/images/products/injection-carbon.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "FC", "Ash", "VM", "Moisture", "S"],

            rows: [
              ["IC 98", "98% Min", "1.0% Max", "0.8% Max", "0.5% Max", "0.05% Max"],
              ["IC 99", "99% Min", "0.5% Max", "0.5% Max", "0.3% Max", "0.03% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black"],
              ["Shape", "Granules"],
              ["Color", "Black"],
              ["Density", "1.8–2.2 g/cm³"],
              ["SpecificGravity", "2.0"],
              ["Particle Size", "0.2–1 mm"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "CastIronProduction",
          "ElectricArcFurnace",
          "InductionFurnace",
          "CarbonAdjustment",
          "MetallurgicalIndustry",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsInjectionCarbonQuestion",
            answer: "WhatIsInjectionCarbonAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "ChargeCarbon",
        image: "/images/products/charge-carbon.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "FC", "Ash", "VM", "Moisture", "S"],

            rows: [
              ["CC 95", "95% Min", "3.0% Max", "1.0% Max", "0.5% Max", "0.10% Max"],
              ["CC 98", "98% Min", "1.5% Max", "0.8% Max", "0.5% Max", "0.05% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black"],
              ["Shape", "Granules"],
              ["Color", "Black"],
              ["Density", "1.8–2.2 g/cm³"],
              ["SpecificGravity", "2.0"],
              ["Particle Size", "1–10 mm"],
              ["Packing", "Loose / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "CastIronProduction",
          "InductionFurnace",
          "ElectricArcFurnace",
          "CarbonAddition",
          "MetallurgicalIndustry",
          "MetalManufacturing"
        ],

        faq: [
          {
            question: "WhatIsChargeCarbonQuestion",
            answer: "WhatIsChargeCarbonAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },
    ]
  },

  {
    slug: "carbide-ore",
    key: "CarbideOre",
    category: "industrialMinerals",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/Silicon-Carbide-1.jpg",
    imageAlt: "Carbon Products",
    featured: true,
    specification: [
      {
        key: "CalciumCarbide",
        value: "75-80% Min",
      },
      {
        key: "FixedCarbon",
        value: "10-15%",
      },
      {
        key: "AshContent",
        value: "3-5%",
      },
      {
        key: "Moisture",
        value: "0.5% Max",
      },
      {
        key: "Size",
        value: "10–30 mm, 25–50 mm, 50–80 mm",
      },
    ],

    variants: [
      {
        id: 1,
        translationKey: "SteelShot",
        image: "/images/products/steel-shot.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "C", "Si", "Mn", "S", "P"],

            rows: [
              ["S230", "0.85–1.20%", "0.40–1.20%", "0.60–1.20%", "≤0.05%", "≤0.05%"],
              ["S330", "0.85–1.20%", "0.40–1.20%", "0.60–1.20%", "≤0.05%", "≤0.05%"],
              ["S460", "0.85–1.20%", "0.40–1.20%", "0.60–1.20%", "≤0.05%", "≤0.05%"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Spherical"],
              ["Color", "DarkGrey"],
              ["Hardness", "40–52 HRC"],
              ["Density", "7.4 g/cm³"],
              ["SpecificGravity", "7.4"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "ShotBlasting",
          "SurfacePreparation",
          "MetalCleaning",
          "FoundryIndustry",
          "SteelIndustry",
          "AutomotiveIndustry",
          "Shipbuilding",
          "EngineeringComponents"
        ],

        faq: [
          {
            question: "WhatIsSteelShotQuestion",
            answer: "WhatIsSteelShotAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "SteelGrit",
        image: "/images/products/steel-grit.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "C", "Si", "Mn", "S", "P"],

            rows: [
              ["G18", "0.80–1.20%", "0.40–1.20%", "0.60–1.20%", "≤0.05%", "≤0.05%"],
              ["G25", "0.80–1.20%", "0.40–1.20%", "0.60–1.20%", "≤0.05%", "≤0.05%"],
              ["G40", "0.80–1.20%", "0.40–1.20%", "0.60–1.20%", "≤0.05%", "≤0.05%"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Angular"],
              ["Color", "DarkGrey"],
              ["Hardness", "40–65 HRC"],
              ["Density", "7.4 g/cm³"],
              ["SpecificGravity", "7.4"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SurfacePreparation",
          "RustRemoval",
          "ShotBlasting",
          "SteelFabrication",
          "Shipbuilding",
          "BridgeConstruction",
          "FoundryIndustry",
          "EngineeringComponents"
        ],

        faq: [
          {
            question: "WhatIsSteelGritQuestion",
            answer: "WhatIsSteelGritAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "StainlessSteelShot",
        image: "/images/products/stainless-steel-shot.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Cr", "Ni", "C", "Si", "Mn"],
            rows: [
              ["SS 304", "18–20%", "8–10.5%", "≤0.08%", "≤1.00%", "≤2.00%"],
              ["SS 430", "16–18%", "≤0.75%", "≤0.12%", "≤1.00%", "≤1.00%"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "GreyMetallic"],
              ["Shape", "Spherical"],
              ["Color", "SilverGrey"],
              ["Hardness", "200–600 HV"],
              ["Density", "7.6–7.9 g/cm³"],
              ["SpecificGravity", "7.8"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SurfaceFinishing",
          "ShotPeening",
          "Deburring",
          "Descaling",
          "AerospaceIndustry",
          "AutomotiveIndustry",
          "MedicalEquipment",
          "PrecisionEngineering"
        ],

        faq: [
          {
            question: "WhatIsStainlessSteelShotQuestion",
            answer: "WhatIsStainlessSteelShotAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },

      {
        id: 4,
        translationKey: "SiliconCarbidePowder",
        image: "/images/products/silicon-carbide-powder.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "SiC", "FC", "Fe₂O₃", "Moisture"],

            rows: [
              ["SiC 88", "88% Min", "3.0% Max", "1.5% Max", "0.5% Max"],
              ["SiC 90", "90% Min", "2.5% Max", "1.2% Max", "0.5% Max"],
              ["SiC 95", "95% Min", "2.0% Max", "1.0% Max", "0.3% Max"],
              ["SiC 98", "98% Min", "1.0% Max", "0.5% Max", "0.3% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "BlackGreen"],
              ["Shape", "Powder"],
              ["Color", "Black"],
              ["Hardness", "9.5 Mohs"],
              ["Density", "3.2 g/cm³"],
              ["SpecificGravity", "3.2"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "RefractoryIndustry",
          "AbrasiveManufacturing",
          "CeramicIndustry",
          "MetallurgicalIndustry",
          "Deoxidizer",
          "CarbonAdditive"
        ],

        faq: [
          {
            question: "WhatIsSiliconCarbidePowderQuestion",
            answer: "WhatIsSiliconCarbidePowderAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },

      {
        id: 5,
        translationKey: "SiliconCarbideBriquette",
        image: "/images/products/silicon-carbide-briquette.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "SiC", "FC", "Fe₂O₃", "Moisture"],

            rows: [
              ["SiC 88", "88% Min", "3.0% Max", "1.5% Max", "0.5% Max"],
              ["SiC 90", "90% Min", "2.5% Max", "1.2% Max", "0.5% Max"],
              ["SiC 95", "95% Min", "2.0% Max", "1.0% Max", "0.3% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "BlackGrey"],
              ["Shape", "Briquette"],
              ["Color", "DarkGrey"],
              ["Density", "2.4–2.8 g/cm³"],
              ["SpecificGravity", "2.6"],
              ["Hardness", "9.5 Mohs"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "RefractoryIndustry",
          "Deoxidizer",
          "CarbonAddition",
          "InductionFurnace",
          "ElectricArcFurnace",
          "MetallurgicalIndustry"
        ],

        faq: [
          {
            question: "WhatIsSiliconCarbideBriquetteQuestion",
            answer: "WhatIsSiliconCarbideBriquetteAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },

      {
        id: 6,
        translationKey: "CalciumCarbide",
        image: "/images/products/calcium-carbide.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "CaC₂", "Gas Yield", "PH₃", "H₂S"],

            rows: [
              ["CaC₂ 80", "80% Min", "280 L/Kg Min", "0.08% Max", "0.10% Max"],
              ["CaC₂ 85", "85% Min", "295 L/Kg Min", "0.08% Max", "0.10% Max"],
              ["CaC₂ 88", "88% Min", "300 L/Kg Min", "0.08% Max", "0.10% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "GreyBlack"],
              ["Shape", "Lumps"],
              ["Color", "GreyBlack"],
              ["Density", "2.2 g/cm³"],
              ["SpecificGravity", "2.2"],
              ["ParticleSize", "25–80 mm"],
              ["Packing", "50 Kg Steel Drums"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "AcetyleneGasProduction",
          "Desulphurization",
          "ChemicalIndustry",
          "MetallurgicalIndustry",
          "WeldingIndustry",
          "IndustrialManufacturing"
        ],

        faq: [
          {
            question: "WhatIsCalciumCarbideQuestion",
            answer: "WhatIsCalciumCarbideAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],
        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/femn.pdf",
          },
        ],
      },
    ]
  },

  {
    slug: "limestone",
    key: "LimeStone",
    category: "industrialMinerals",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/limestone.jpg",
    imageAlt: "Limestone Products",
    featured: true,
    specification: [
      {
        key: "CalciumCarbonate",
        value: "90 – 98%",
      },

      {
        key: "CalciumOxide",
        value: "50–55%",
      },

      {
        key: "MagnesiumOxide",
        value: "90 – 98%",
      },

      {
        key: "Silica",
        value: "50–55%",
      },
    ],

    variants: [
      {
        id: 1,
        translationKey: "SteelGradeLimestone",
        image: "/images/products/steel-grade-limestone.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "CaCO₃", "CaO", "MgO", "SiO₂", "Size"],

            rows: [
              ["LS-90", "90% Min", "50% Min", "3% Max", "5% Max", "10–40 mm"],
              ["LS-92", "92% Min", "51% Min", "2.5% Max", "4% Max", "20–50 mm"],
              ["LS-95", "95% Min", "53% Min", "2% Max", "3% Max", "30–80 mm"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "WhiteGrey"],
              ["Shape", "Lumps"],
              ["Color", "WhiteGrey"],
              ["Density", "2.6–2.8 g/cm³"],
              ["SpecificGravity", "2.7"],
              ["Hardness", "3 Mohs"],
              ["Packing", "Loose Bulk / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "BlastFurnace",
          "BOFConverter",
          "ElectricArcFurnace",
          "FluxMaterial",
          "IronMaking",
          "MetallurgicalIndustry",
          "FoundryIndustry"
        ],

        faq: [
          {
            question: "WhatIsSteelGradeLimestoneQuestion",
            answer: "WhatIsSteelGradeLimestoneAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "ChemicalGradeLimestone",
        image: "/images/products/chemical-grade-limestone.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "CaCO₃", "CaO", "MgO", "SiO₂", "Fe₂O₃"],

            rows: [
              ["CG-95", "95% Min", "53% Min", "1.5% Max", "2.5% Max", "0.30% Max"],
              ["CG-97", "97% Min", "54% Min", "1.0% Max", "2.0% Max", "0.20% Max"],
              ["CG-98", "98% Min", "55% Min", "0.8% Max", "1.5% Max", "0.15% Max"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "WhiteGrey"],
              ["Shape", "LumpsPowder"],
              ["Color", "WhiteGrey"],
              ["Density", "2.6–2.8 g/cm³"],
              ["SpecificGravity", "2.7"],
              ["Hardness", "3 Mohs"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "ChemicalIndustry",
          "GlassIndustry",
          "PaperIndustry",
          "SugarIndustry",
          "PaintIndustry",
          "WaterTreatment",
          "CalciumCarbonateProduction",
          "IndustrialMinerals"
        ],

        faq: [
          {
            question: "WhatIsChemicalGradeLimestoneQuestion",
            answer: "WhatIsChemicalGradeLimestoneAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "CementGradeLimestone",
        image: "/images/products/cement-grade-limestone.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "CaCO₃", "CaO", "MgO", "SiO₂", "Size"],

            rows: [
              ["CG-80", "80% Min", "44% Min", "4.0% Max", "12% Max", "10–40 mm"],
              ["CG-85", "85% Min", "47% Min", "3.5% Max", "10% Max", "20–50 mm"],
              ["CG-90", "90% Min", "50% Min", "3.0% Max", "8% Max", "30–80 mm"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "WhiteGrey"],
              ["Shape", "Lumps"],
              ["Color", "WhiteGrey"],
              ["Density", "2.6–2.8 g/cm³"],
              ["SpecificGravity", "2.7"],
              ["Hardness", "3 Mohs"],
              ["Packing", "Loose Bulk / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "CementManufacturing",
          "ClinkerProduction",
          "ConstructionIndustry",
          "ReadyMixConcrete",
          "InfrastructureProjects",
          "BuildingMaterials",
          "IndustrialMinerals",
          "LimeProduction"
        ],

        faq: [
          {
            question: "WhatIsCementGradeLimestoneQuestion",
            answer: "WhatIsCementGradeLimestoneAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 4,
        translationKey: "ConstuctionGradeLimestone",
        image: "/images/products/construction-grade-limestone.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "CaCO₃", "CaO", "MgO", "SiO₂", "Size"],

            rows: [
              ["CG-75", "75% Min", "42% Min", "5% Max", "15% Max", "10–20 mm"],
              ["CG-80", "80% Min", "45% Min", "4% Max", "12% Max", "20–40 mm"],
              ["CG-85", "85% Min", "48% Min", "3% Max", "10% Max", "40–80 mm"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "WhiteGrey"],
              ["Shape", "Lumps"],
              ["Color", "WhiteGrey"],
              ["Density", "2.6–2.8 g/cm³"],
              ["SpecificGravity", "2.7"],
              ["Hardness", "3 Mohs"],
              ["Packing", "Loose Bulk / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "RoadConstruction",
          "BuildingConstruction",
          "ConcreteProduction",
          "AsphaltMix",
          "RailwayBallast",
          "InfrastructureProjects",
          "Aggregates",
          "CivilEngineering"
        ],

        faq: [
          {
            question: "WhatIsConstructionGradeLimestoneQuestion",
            answer: "WhatIsConstructionGradeLimestoneAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },
    ]
  },

  {
    slug: "natural-graphite",
    key: "NaturalGraphite",
    category: "industrialMinerals",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/natural-graphite.jpg",
    imageAlt: "Limestone Products",
    featured: true,
    specification: [
      { key: "FixedCarbon", value: "85 – 97%" },
      { key: "Ash", value: "≤ 5%" },
      { key: "FlakeSize", value: "+50 to -200 mesh" },
      { key: "Moisture", value: "≤ 2%" },
      { key: "Types", value: "Flake / Amorphous" },
    ],
    variants: [
      {
        id: 1,
        translationKey: "NaturalGraphiteLumps",
        image: "/images/products/natural-graphite-lumps (2).jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Fixed Carbon", "Ash", "Moisture", "Volatile Matter"],

            rows: [
              ["FC 85", "85% Min", "13% Max", "0.5% Max", "1.5% Max"],
              ["FC 90", "90% Min", "8% Max", "0.5% Max", "1.5% Max"],
              ["FC 95", "95% Min", "4% Max", "0.3% Max", "1.0% Max"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black Grey"],
              ["Shape", "Lumps"],
              ["Color", "Black Grey"],
              ["Density", "2.1–2.3 g/cm³"],
              ["Specific Gravity", "2.2"],
              ["Hardness", "1–2 Mohs"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "RefractoryIndustry",
          "CarbonAdditive",
          "BatteryIndustry",
          "LubricantManufacturing",
          "MetallurgicalIndustry",
          "ChemicalIndustry"
        ],

        faq: [
          {
            question: "WhatIsNaturalGraphiteLumpsQuestion",
            answer: "WhatIsNaturalGraphiteLumpsAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "NaturalGraphitePowder",
        image: "/images/products/natural-graphite-powder.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",

            headers: ["Grade", "Fixed Carbon", "Ash", "Moisture", "Particle Size"],

            rows: [
              ["FC 85", "85% Min", "13% Max", "0.5% Max", "100–325 Mesh"],
              ["FC 90", "90% Min", "8% Max", "0.5% Max", "100–325 Mesh"],
              ["FC 95", "95% Min", "4% Max", "0.3% Max", "200–500 Mesh"]
            ]
          },

          {
            title: "PhysicalProperties",

            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black Grey"],
              ["Shape", "Powder"],
              ["Color", "Black Grey"],
              ["Density", "2.1–2.3 g/cm³"],
              ["Specific Gravity", "2.2"],
              ["Mesh Size", "100–500 Mesh"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "SteelMaking",
          "FoundryIndustry",
          "RefractoryIndustry",
          "CarbonAdditive",
          "BatteryIndustry",
          "LubricantManufacturing",
          "FrictionMaterials",
          "ChemicalIndustry"
        ],

        faq: [
          {
            question: "WhatIsNaturalGraphitePowderQuestion",
            answer: "WhatIsNaturalGraphitePowderAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "ExpandableGraphite",
        image: "/images/products/expandable-graphite.jpg",
        description: "Description",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Packing",
            value: "PackingValue"
          },
          {
            key: "Standard",
            value: "StandardValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: ["Grade", "Fixed Carbon", "Expansion Volume", "Moisture", "Particle Size"],

            rows: [
              ["EG 95", "95% Min", "200 ml/g", "0.5% Max", "50 Mesh"],
              ["EG 97", "97% Min", "250 ml/g", "0.5% Max", "80 Mesh"],
              ["EG 99", "99% Min", "300 ml/g", "0.3% Max", "100 Mesh"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Black Grey"],
              ["Shape", "Flakes"],
              ["Color", "Black Grey"],
              ["Density", "2.2 g/cm³"],
              ["Specific Gravity", "2.2"],
              ["Expansion Temperature", "180–300°C"],
              ["Packing", "25 Kg Bags / 1 MT Jumbo Bag"],
              ["Storage", "StoreDryCoveredArea"]
            ]
          }
        ],

        applications: [
          "FireResistantMaterials",
          "ThermalInsulation",
          "GasketsSeals",
          "BatteryIndustry",
          "RefractoryIndustry",
          "ChemicalIndustry",
          "SteelMaking",
          "EnvironmentalProtection"
        ],

        faq: [
          {
            question: "WhatIsExpandableGraphiteQuestion",
            answer: "WhatIsExpandableGraphiteAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/fesi-datasheet.pdf",
          },

          {
            title: "MSDS",
            file: "/downloads/fesi-msds.pdf",
          },

          {
            title: "Test Certificate",
            file: "/downloads/fesi-test.pdf",
          },
        ],
      }
    ]
  },

  {
    slug: "steel-products",
    key: "SteelProducts",
    category: "industrialMinerals",
    shortDescription: "ShortDescription",
    description: "Description",
    image: "/images/products/steel-product.jpg",
    imageAlt: "Steels Products",
    featured: true,
    specification: [
      { key: "Material", value: "Structural Steel" },
      { key: "Grade", value: "IS 2062 E250 / E350" },
      { key: "Standard", value: "ASTM, EN, IS" },
      { key: "Length", value: "6 – 12 m" },
      { key: "Surface", value: "Hot Rolled" },
      { key: "Shape", value: "I-Beam, H-Beam, Channel, Angle" },
      { key: "YieldStrength", value: "250 – 350 MPa" },
      { key: "Applications", value: "Buildings, Bridges & Industrial Structures" },
    ],
    variants: [
      {
        id: 1,
        translationKey: "SteelBillets",
        image: "/images/products/billets.jpg",
        description: "SteelBilletsDescription",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Size",
            value: "SizeValue"
          },
          {
            key: "Length",
            value: "LengthValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Carbon",
              "Manganese",
              "Silicon",
              "Sulphur",
              "Phosphorus"
            ],

            rows: [
              ["IS2062", "0.23% Max", "1.50% Max", "0.40% Max", "0.045% Max", "0.045% Max"],
              ["ASTM A36", "0.26% Max", "0.80–1.20%", "0.40% Max", "0.050% Max", "0.040% Max"],
              ["SAE 1020", "0.18–0.23%", "0.30–0.60%", "0.15–0.35%", "0.050% Max", "0.040% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Solid Steel Billets"],
              ["Shape", "Square"],
              ["Color", "Grey Metallic"],
              ["Density", "7.85 g/cm³"],
              ["Length", "6–12 m"],
              ["Size", "100×100 mm – 200×200 mm"],
              ["Packing", "Steel Strapped Bundles"],
              ["Storage", "Store in Dry Covered Area"]
            ]
          }
        ],

        applications: [
          "RollingMills",
          "RebarManufacturing",
          "WireRodProduction",
          "StructuralSteel",
          "ForgingIndustry",
          "EngineeringComponents",
          "AutomotiveIndustry",
          "ConstructionIndustry"
        ],

        faq: [
          {
            question: "WhatIsSteelBilletsQuestion",
            answer: "WhatIsSteelBilletsAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "SteelBilletsGradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "SteelBilletsApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "SteelBilletsPackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "SteelBilletsCustomizationAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "SteelBilletsExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/steel-billets-datasheet.pdf",
          },
          {
            title: "MSDS",
            file: "/downloads/steel-billets-msds.pdf",
          },
          {
            title: "Test Certificate",
            file: "/downloads/steel-billets-test-certificate.pdf",
          },
        ],
      },

      {
        id: 2,
        translationKey: "SteelBloom",
        image: "/images/products/steel-blooms.jpg",
        description: "SteelBloomDescription",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Size",
            value: "SizeValue"
          },
          {
            key: "Length",
            value: "LengthValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Carbon",
              "Manganese",
              "Silicon",
              "Sulphur",
              "Phosphorus"
            ],

            rows: [
              ["IS2062", "0.23% Max", "1.50% Max", "0.40% Max", "0.045% Max", "0.045% Max"],
              ["ASTM A36", "0.26% Max", "0.80–1.20%", "0.40% Max", "0.050% Max", "0.040% Max"],
              ["SAE 1020", "0.18–0.23%", "0.30–0.60%", "0.15–0.35%", "0.050% Max", "0.040% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],
            rows: [
              ["Appearance", "Solid Steel Bloom"],
              ["Shape", "Square / Rectangular"],
              ["Color", "Grey Metallic"],
              ["Density", "7.85 g/cm³"],
              ["Length", "6–12 m"],
              ["Size", "200×200 mm – 400×400 mm"],
              ["Packing", "Steel Strapped Bundles"],
              ["Storage", "Store in Dry Covered Area"]
            ]
          }
        ],

        applications: [
          "RailwayTracks",
          "StructuralSteel",
          "SeamlessPipeManufacturing",
          "HeavyForging",
          "EngineeringComponents",
          "ConstructionIndustry",
          "HeavyMachinery",
          "RollingMills"
        ],

        faq: [
          {
            question: "WhatIsSteelBloomQuestion",
            answer: "WhatIsSteelBloomAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/steel-bloom-datasheet.pdf",
          },
          {
            title: "MSDS",
            file: "/downloads/steel-bloom-msds.pdf",
          },
          {
            title: "Test Certificate",
            file: "/downloads/steel-bloom-test-certificate.pdf",
          },
        ],
      },

      {
        id: 3,
        translationKey: "SteelPlates",
        image: "/images/products/steel-plates.jpg",
        description: "SteelPlatesDescription",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Thickness",
            value: "ThicknessValue"
          },
          {
            key: "Width",
            value: "WidthValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Carbon",
              "Manganese",
              "Silicon",
              "Sulphur",
              "Phosphorus"
            ],

            rows: [
              ["IS2062 E250", "0.23% Max", "1.50% Max", "0.40% Max", "0.045% Max", "0.045% Max"],
              ["ASTM A36", "0.26% Max", "0.80–1.20%", "0.40% Max", "0.050% Max", "0.040% Max"],
              ["ASTM A516 Gr.70", "0.27% Max", "0.85–1.20%", "0.40% Max", "0.035% Max", "0.035% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Flat Steel Plates"],
              ["Shape", "Rectangular"],
              ["Color", "Grey Metallic"],
              ["Density", "7.85 g/cm³"],
              ["Thickness", "5–200 mm"],
              ["Width", "1000–3000 mm"],
              ["Packing", "Steel Strapped Bundles"],
              ["Storage", "Store in Dry Covered Area"]
            ]
          }
        ],

        applications: [
          "ShipBuilding",
          "BridgeConstruction",
          "PressureVessels",
          "Boilers",
          "HeavyEngineering",
          "IndustrialFabrication",
          "OilAndGasIndustry",
          "ConstructionIndustry"
        ],

        faq: [
          {
            question: "WhatIsSteelPlatesQuestion",
            answer: "WhatIsSteelPlatesAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/steel-plates-datasheet.pdf",
          },
          {
            title: "MSDS",
            file: "/downloads/steel-plates-msds.pdf",
          },
          {
            title: "Test Certificate",
            file: "/downloads/steel-plates-test-certificate.pdf",
          },
        ],
      },

      {
        id: 4,
        translationKey: "SteelTubes",
        image: "/images/products/steel-pipes-tubes.jpg",
        description: "SteelTubesDescription",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "OuterDiameter",
            value: "OuterDiameterValue"
          },
          {
            key: "WallThickness",
            value: "WallThicknessValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Carbon",
              "Manganese",
              "Silicon",
              "Sulphur",
              "Phosphorus"
            ],

            rows: [
              ["ASTM A53", "0.30% Max", "1.20% Max", "0.30% Max", "0.05% Max", "0.05% Max"],
              ["ASTM A106", "0.35% Max", "0.29–1.06%", "0.10% Min", "0.035% Max", "0.035% Max"],
              ["IS 1239", "0.20% Max", "1.30% Max", "0.35% Max", "0.045% Max", "0.045% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Steel Tubes"],
              ["Shape", "Round / Square / Rectangular"],
              ["Color", "Grey Metallic"],
              ["Density", "7.85 g/cm³"],
              ["OuterDiameter", "15–600 mm"],
              ["WallThickness", "2–25 mm"],
              ["Packing", "Steel Strapped Bundles"],
              ["Storage", "Store in Dry Covered Area"]
            ]
          }
        ],

        applications: [
          "ConstructionIndustry",
          "StructuralFramework",
          "MechanicalEngineering",
          "AutomotiveIndustry",
          "OilAndGasIndustry",
          "WaterDistribution",
          "IndustrialFabrication",
          "InfrastructureProjects"
        ],

        faq: [
          {
            question: "WhatIsSteelTubesQuestion",
            answer: "WhatIsSteelTubesAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/steel-tubes-datasheet.pdf",
          },
          {
            title: "MSDS",
            file: "/downloads/steel-tubes-msds.pdf",
          },
          {
            title: "Test Certificate",
            file: "/downloads/steel-tubes-test-certificate.pdf",
          }
        ]
      },

      {
        id: 5,
        translationKey: "ColdRolledCoils",
        image: "/images/products/cold-rolls-coils.jpg",
        description: "ColdRolledCoilsDescription",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Thickness",
            value: "ThicknessValue"
          },
          {
            key: "Width",
            value: "WidthValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Carbon",
              "Manganese",
              "Silicon",
              "Sulphur",
              "Phosphorus"
            ],

            rows: [
              ["CR1", "0.12% Max", "0.60% Max", "0.03% Max", "0.030% Max", "0.030% Max"],
              ["CR2", "0.10% Max", "0.50% Max", "0.03% Max", "0.030% Max", "0.030% Max"],
              ["ASTM A1008", "0.15% Max", "0.60% Max", "0.03% Max", "0.030% Max", "0.030% Max"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Cold Rolled Steel Coils"],
              ["Shape", "Coil"],
              ["Color", "Grey Metallic"],
              ["Density", "7.85 g/cm³"],
              ["Thickness", "0.30–3.00 mm"],
              ["Width", "600–1500 mm"],
              ["Packing", "Export Standard Packing"],
              ["Storage", "Store in Dry Covered Area"]
            ]
          }
        ],

        applications: [
          "AutomotiveIndustry",
          "HomeAppliances",
          "ElectricalEquipment",
          "FurnitureManufacturing",
          "IndustrialFabrication",
          "ConstructionIndustry",
          "SteelProcessing",
          "EngineeringComponents"
        ],

        faq: [
          {
            question: "WhatIsColdRolledCoilsQuestion",
            answer: "WhatIsColdRolledCoilsAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/cold-rolled-coils-datasheet.pdf",
          },
          {
            title: "MSDS",
            file: "/downloads/cold-rolled-coils-msds.pdf",
          },
          {
            title: "Test Certificate",
            file: "/downloads/cold-rolled-coils-test-certificate.pdf",
          }
        ]
      },

      {
        id: 6,
        translationKey: "TMTBars",
        image: "/images/products/tmt-baars.jpg",
        description: "TMTBarsDescription",

        specifications: [
          {
            key: "Grade",
            value: "GradeValue"
          },
          {
            key: "Diameter",
            value: "DiameterValue"
          },
          {
            key: "Length",
            value: "LengthValue"
          },
          {
            key: "Origin",
            value: "OriginValue"
          }
        ],

        technicalTables: [
          {
            title: "ChemicalComposition",
            headers: [
              "Grade",
              "Carbon",
              "Manganese",
              "Sulphur",
              "Phosphorus",
              "YieldStrength"
            ],

            rows: [
              ["Fe 500", "0.30% Max", "1.50% Max", "0.055% Max", "0.055% Max", "500 MPa"],
              ["Fe 550", "0.30% Max", "1.50% Max", "0.055% Max", "0.055% Max", "550 MPa"],
              ["Fe 600", "0.30% Max", "1.50% Max", "0.055% Max", "0.055% Max", "600 MPa"]
            ]
          },

          {
            title: "PhysicalProperties",
            headers: ["Property", "Value"],

            rows: [
              ["Appearance", "Ribbed Steel Bars"],
              ["Shape", "Round"],
              ["Color", "Grey Metallic"],
              ["Density", "7.85 g/cm³"],
              ["Diameter", "8–40 mm"],
              ["Length", "12 m Standard"],
              ["Packing", "Steel Strapped Bundles"],
              ["Storage", "Store in Dry Covered Area"]
            ]
          }
        ],

        applications: [
          "ResidentialConstruction",
          "CommercialBuildings",
          "Bridges",
          "Highways",
          "IndustrialStructures",
          "InfrastructureProjects",
          "Dams",
          "MetroRailProjects"
        ],

        faq: [
          {
            question: "WhatIsTMTBarsQuestion",
            answer: "WhatIsTMTBarsAnswer"
          },
          {
            question: "GradesQuestion",
            answer: "GradesAnswer"
          },
          {
            question: "ApplicationsQuestion",
            answer: "ApplicationsAnswer"
          },
          {
            question: "PackingQuestion",
            answer: "PackingAnswer"
          },
          {
            question: "CustomizedQuestion",
            answer: "CustomizedAnswer"
          },
          {
            question: "ExportQuestion",
            answer: "ExportAnswer"
          }
        ],

        downloads: [
          {
            title: "Technical Datasheet",
            file: "/downloads/tmt-bars-datasheet.pdf",
          },
          {
            title: "MSDS",
            file: "/downloads/tmt-bars-msds.pdf",
          },
          {
            title: "Test Certificate",
            file: "/downloads/tmt-bars-test-certificate.pdf",
          }
        ]
      },
    ]
  },

];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}


