import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "pig-iron",
    key: "PigIron",
    category: "Ferrous Metals",
    shortDescription:
      "Foundry and steel-grade pig iron with controlled silicon and sulfur for blast furnace and casting applications.",
    description:
      "SSL Group exports premium foundry and basic pig iron sourced from ISO-certified integrated steel plants. Our pig iron meets stringent chemistry requirements for automotive castings, ductile iron production, and steelmaking charge materials.",
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
          "ElectricArcFurnaces",
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
    category: "Alloying Materials",
    shortDescription:
      "Ferro manganese, ferro silicon, ferro chrome, and specialty alloys for steel deoxidation and alloying.",
    description:
      "Comprehensive ferro alloy portfolio for integrated steel plants and mini-mills. We supply low-carbon and high-carbon grades with batch traceability and sieve analysis documentation.",
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
        description:
          "Ferro Silicon is an alloy of iron and silicon used as a deoxidizer and alloying agent in steel manufacturing.It improves hardness, strength, and corrosion resistance of steel.",
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
        description:
          "Ferro Manganese improves hardness and strength of steel. It is used in carbon steel, alloy steel, stainless steel, foundries, and welding electrode manufacturing.",
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

  // {
  //   slug: "nobal-alloy",
  //   key: "NobalAlloy",
  //   category: "Specialty Alloys",
  //   shortDescription:
  //     "High-purity Nobal Alloy for grain refinement and micro-alloying in specialty steel grades.",
  //   description:
  //     "Precision Nobal Alloy with controlled titanium content for aerospace-grade steels, high-strength low-alloy applications, and critical casting operations requiring grain refinement.",
  //   image: "/images/products/NOBLE-ALLOYS3.png",
  //   imageAlt: "Nobal Alloys",
  //   featured: true,
  //   specification: [
  //     {
  //       key: "Ferro Molybdenum",
  //       value: "FeMo 60 / 65 / 70",
  //     },
  //     {
  //       key: "Ferro Vanadium",
  //       value: "FeV 50 / 60 / 80",
  //     },
  //     {
  //       key: "Ferro Tungsten",
  //       value: "FeW 70 / 75 / 80",
  //     },
  //   ],
  //   variants: [
  //     {
  //       id: 1,
  //       translationKey: "Ferro Molybdenum",
  //       image: "/images/products/molybdenum.jpg",
  //       description:
  //         "Ferro Molybdenum (FeMo) is a premium ferro alloy used to improve the strength, hardness, corrosion resistance, and heat resistance of alloy and stainless steels. It is widely used in steelmaking and engineering applications.",
  //       specifications: [
  //         {
  //           key: "FeMo",
  //           value: "60 – 70%",
  //         },
  //         {
  //           key: "Packing",
  //           value: "25 Kg Bags / 1 MT Jumbo Bags",
  //         },
  //         {
  //           key: "Standard",
  //           value: "ASTM / ISO Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],
  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Grade", "Mo", "Cu", "Si", "S", "P"],
  //           rows: [
  //             ["FeMo 60", "60% min", "0.50% max", "1.50% max", "0.10% max", "0.05% max"],
  //             ["FeMo 65", "65% min", "0.50% max", "1.50% max", "0.10% max", "0.05% max"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Silver Grey Metallic"],
  //             ["Shape", "Lumps"],
  //             ["Color", "Grey to Silver Grey"],
  //             ["Density", "Approx. 9.0–9.5 g/cm³"],
  //             ["Specific Gravity", "9.0–9.5"],
  //             ["Melting Point", "Approx. 1750–1850°C"],
  //             ["Magnetic Properties", "Slightly Magnetic"],
  //             ["Standard Size", "10–50 mm, 10–100 mm or as required"],
  //             ["Packing", "25 Kg Bags, 1 MT Jumbo Bags or Bulk"],
  //             ["Storage", "Store in a cool, dry and moisture-free environment"]
  //           ]
  //         },
  //       ],
  //       applications: [
  //         "Alloy Steel Manufacturing",
  //         "Stainless Steel Production",
  //         "Tool Steel Manufacturing",
  //         "Power Generation Equipment",
  //         "Aerospace Components",
  //       ],

  //       faq: [
  //         {
  //           question: "What is Ferro Molybdenum?",
  //           answer:
  //             "Ferro Molybdenum (FeMo) is an iron-molybdenum alloy used as an alloying agent in steel manufacturing. It enhances strength, hardness, corrosion resistance, and high-temperature performance."
  //         },
  //         {
  //           question: "Which grades of Ferro Molybdenum do you supply?",
  //           answer:
  //             "We supply FeMo 60 and FeMo 65 grades with consistent chemical composition to meet customer requirements."
  //         },
  //         {
  //           question: "What are the applications of Ferro Molybdenum?",
  //           answer:
  //             "Ferro Molybdenum is widely used in alloy steel, stainless steel, tool steel, high-speed steel, oil & gas equipment, power plants, and engineering industries."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, or bulk packing as per customer and export requirements."
  //         },
  //         {
  //           question: "Can you supply customized grades and specifications?",
  //           answer:
  //             "Yes. We supply Ferro Molybdenum in customized grades, particle sizes, and packaging according to customer specifications."
  //         },
  //         {
  //           question: "Do you export Ferro Molybdenum internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports Ferro Molybdenum to domestic and international markets with reliable sourcing, quality assurance, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 2,
  //       translationKey: "Ferro Vanadium",
  //       image: "/images/products/vanadium.jpg",
  //       description:
  //         "Ferro Vanadium (FeV) is a premium ferro alloy used as an alloying agent in the production of high-strength low-alloy (HSLA) steels, tool steels, and special alloy steels. It improves tensile strength, hardness, wear resistance, and fatigue performance. SSL Group supplies high-quality Ferro Vanadium sourced from trusted producers for domestic and international customers.",

  //       specifications: [
  //         {
  //           key: "FeV",
  //           value: "50 – 80%",
  //         },
  //         {
  //           key: "Packing",
  //           value: "25 Kg Bags / 1 MT Jumbo Bags",
  //         },
  //         {
  //           key: "Standard",
  //           value: "ASTM / ISO Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Grade", "V", "C", "Si", "P", "S"],
  //           rows: [
  //             ["FeV 50", "50% min", "0.50% max", "2.00% max", "0.08% max", "0.05% max"],
  //             ["FeV 60", "60% min", "0.50% max", "2.00% max", "0.08% max", "0.05% max"],
  //             ["FeV 80", "80% min", "0.50% max", "2.00% max", "0.08% max", "0.05% max"]
  //           ]
  //         },
  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Silver Grey Metallic"],
  //             ["Shape", "Lumps"],
  //             ["Color", "Grey to Silver Grey"],
  //             ["Density", "5.5–6.5 g/cm³"],
  //             ["Specific Gravity", "5.5–6.5"],
  //             ["Melting Point", "Approx. 1600–1700°C"],
  //             ["Magnetic Properties", "Slightly Magnetic"],
  //             ["Standard Size", "10–50 mm, 10–100 mm or as required"],
  //             ["Packing", "25 Kg Bags, 1 MT Jumbo Bags or Bulk"],
  //             ["Storage", "Store in a cool, dry and moisture-free environment"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "High-Strength Low-Alloy (HSLA) Steel",
  //         "Tool Steel Manufacturing",
  //         "Spring Steel Production",
  //         "Automotive Components",
  //         "Construction Steel",
  //         "Railway Components",
  //         "Aerospace Industry",
  //         "Engineering & Heavy Fabrication",
  //       ],

  //       faq: [
  //         {
  //           question: "What is Ferro Vanadium?",
  //           answer:
  //             "Ferro Vanadium (FeV) is an iron-vanadium alloy used as an alloying agent to improve the strength, toughness, wear resistance, and fatigue resistance of steel."
  //         },
  //         {
  //           question: "Which grades of Ferro Vanadium do you supply?",
  //           answer:
  //             "We supply FeV 50, FeV 60, and FeV 80 grades with consistent chemical composition to meet customer requirements."
  //         },
  //         {
  //           question: "What are the applications of Ferro Vanadium?",
  //           answer:
  //             "Ferro Vanadium is widely used in HSLA steel, tool steel, spring steel, construction steel, automotive components, railway equipment, and aerospace applications."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 25 Kg bags, 1 MT jumbo bags, or bulk packing according to customer and export requirements."
  //         },
  //         {
  //           question: "Can you supply customized specifications?",
  //           answer:
  //             "Yes. We supply Ferro Vanadium in customized grades, chemical compositions, particle sizes, and packaging based on customer requirements."
  //         },
  //         {
  //           question: "Do you export Ferro Vanadium internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports Ferro Vanadium to domestic and international markets with reliable sourcing, quality assurance, and timely delivery."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 3,
  //       translationKey: "Ferro Tungsten",
  //       image: "/images/products/tungsten.jpg",
  //       description:
  //         "Ferro Tungsten (FeW) is a premium ferro alloy used as an alloying agent in the production of high-speed steels, tool steels, and wear-resistant alloys. It enhances hardness, strength, toughness, heat resistance, and high-temperature performance. SSL Group supplies high-quality Ferro Tungsten sourced from trusted producers for domestic and international customers.",

  //       specifications: [
  //         {
  //           key: "FeW",
  //           value: "70 – 80%",
  //         },
  //         {
  //           key: "Packing",
  //           value: "25 Kg Bags / 1 MT Jumbo Bags",
  //         },
  //         {
  //           key: "Standard",
  //           value: "ASTM / ISO Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Grade", "W", "C", "Si", "P", "S"],
  //           rows: [
  //             ["FeW 70", "70% min", "0.50% max", "0.50% max", "0.05% max", "0.05% max"],
  //             ["FeW 75", "75% min", "0.50% max", "0.50% max", "0.05% max", "0.05% max"],
  //             ["FeW 80", "80% min", "0.50% max", "0.50% max", "0.05% max", "0.05% max"]
  //           ]
  //         },
  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Silver Grey Metallic"],
  //             ["Shape", "Lumps"],
  //             ["Color", "Grey to Silver Grey"],
  //             ["Density", "14.0–15.0 g/cm³"],
  //             ["Specific Gravity", "14.0–15.0"],
  //             ["Melting Point", "Approx. 1700–1800°C"],
  //             ["Magnetic Properties", "Slightly Magnetic"],
  //             ["Standard Size", "10–50 mm, 10–100 mm or as required"],
  //             ["Packing", "25 Kg Bags, 1 MT Jumbo Bags or Bulk"],
  //             ["Storage", "Store in a cool, dry and moisture-free environment"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "High-Speed Steel Manufacturing",
  //         "Tool Steel Production",
  //         "Wear-Resistant Alloys",
  //         "Mining Equipment",
  //         "Cutting Tools",
  //         "Aerospace Components",
  //         "Engineering Industries",
  //         "Heavy Machinery",
  //       ],

  //       faq: [
  //         {
  //           question: "What is Ferro Tungsten?",
  //           answer:
  //             "Ferro Tungsten (FeW) is an iron-tungsten alloy used to improve the hardness, wear resistance, toughness, and high-temperature strength of alloy steels."
  //         },
  //         {
  //           question: "Which grades of Ferro Tungsten do you supply?",
  //           answer:
  //             "We supply FeW 70, FeW 75, and FeW 80 grades to meet various industrial requirements."
  //         },
  //         {
  //           question: "What are the applications of Ferro Tungsten?",
  //           answer:
  //             "Ferro Tungsten is widely used in high-speed steel, tool steel, wear-resistant alloys, mining equipment, cutting tools, and aerospace applications."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 25 Kg bags, 1 MT jumbo bags, or bulk packing according to customer and export requirements."
  //         },
  //         {
  //           question: "Can you supply customized specifications?",
  //           answer:
  //             "Yes. We supply Ferro Tungsten in customized grades, chemical compositions, particle sizes, and packaging based on customer requirements."
  //         },
  //         {
  //           question: "Do you export Ferro Tungsten internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports Ferro Tungsten to domestic and international markets with reliable sourcing, quality assurance, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fecr.pdf"
  //         }
  //       ],
  //     },
  //   ]
  // },

  // {
  //   slug: "carbon-products",
  //   key: "CarbonProducts",
  //   category: "Carbon Materials",
  //   shortDescription:
  //     "Calcined petroleum coke, metallurgical coke, and carbon raisers for steel and foundry operations.",
  //   description:
  //     "Export-grade carbon products including CPC, GPC, and anthracite-based carbon raisers with low ash and volatile matter for EAF steelmaking and foundry cupola operations.",
  //   image: "/images/products/carbon-product.jpg",
  //   imageAlt: "Carbon Products",
  //   featured: true,
  //   specification: [
  //     {
  //       key: "Graphite Petroleum Coke",
  //       value: "98.5% – 99.9% FC",
  //     },
  //     {
  //       key: "Calcined Petroleum Coke",
  //       value: "98% – 99.5% FC",
  //     },
  //     {
  //       key: "Carbon Raiser",
  //       value: "85% – 99% FC",
  //     },
  //     {
  //       key: "Electrode Paste",
  //       value: "Standard Grade",
  //     },
  //   ],

  //   variants: [
  //     {
  //       id: 1,
  //       translationKey: "Injection Carbon",
  //       image: "/images/products/injection-carbon.jpg",
  //       description:
  //         "Injection Carbon is a high-purity carbon additive used in steelmaking and foundry applications to increase the carbon content of molten metal. It offers high fixed carbon, low ash, low sulfur, and excellent absorption efficiency, making it ideal for Electric Arc Furnaces (EAF), Induction Furnaces (IF), and Ladle Furnaces. SSL Group supplies premium-quality Injection Carbon sourced from trusted producers for domestic and international customers.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "98.5 – 99%",
  //         },
  //         {
  //           key: "Packing",
  //           value: "25 Kg Bags / 1 MT Jumbo Bags",
  //         },
  //         {
  //           key: "Standard",
  //           value: "ASTM / ISO Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Grade", "FC", "Ash", "VM", "S", "Moisture"],
  //           rows: [
  //             ["IC 98.5", "98.5% min", "0.50% max", "0.50% max", "0.05% max", "0.50% max"],
  //             ["IC 99", "99.0% min", "0.30% max", "0.30% max", "0.03% max", "0.30% max"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Carbon Granules"],
  //             ["Shape", "Granules / Powder"],
  //             ["Color", "Black"],
  //             ["Bulk Density", "0.75–1.00 g/cm³"],
  //             ["Particle Size", "0–1 mm, 1–3 mm, 1–5 mm or as required"],
  //             ["Packing", "25 Kg Bags, 1 MT Jumbo Bags or Bulk"],
  //             ["Storage", "Store in a cool, dry and moisture-free environment"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Electric Arc Furnaces (EAF)",
  //         "Induction Furnaces (IF)",
  //         "Ladle Furnaces",
  //         "Foundry Industry",
  //         "Cast Iron Production",
  //       ],

  //       faq: [
  //         {
  //           question: "What is Injection Carbon?",
  //           answer:
  //             "Injection Carbon is a high-purity carbon additive used to increase the carbon content of molten steel and cast iron during steelmaking and foundry operations."
  //         },
  //         {
  //           question: "Which grades of Injection Carbon do you supply?",
  //           answer:
  //             "We supply Injection Carbon with fixed carbon content ranging from 98.5% to 99%, suitable for various metallurgical applications."
  //         },
  //         {
  //           question: "What are the applications of Injection Carbon?",
  //           answer:
  //             "Injection Carbon is widely used in Electric Arc Furnaces (EAF), Induction Furnaces (IF), Ladle Furnaces, steel plants, and foundries."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, or bulk packing according to customer requirements."
  //         },
  //         {
  //           question: "Can you supply customized particle sizes?",
  //           answer:
  //             "Yes. We supply Injection Carbon in customized particle sizes and packaging based on customer specifications."
  //         },
  //         {
  //           question: "Do you export Injection Carbon internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports Injection Carbon to domestic and international markets with reliable sourcing and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 2,
  //       translationKey: "Charge Carbon",
  //       image: "/images/products/charge-carbon.jpg",
  //       description:
  //         "Charge Carbon is a high-quality carbon additive used in steelmaking and foundry industries to increase the carbon content of molten metal. It offers high fixed carbon, low ash, low sulfur, and excellent carbon recovery, making it suitable for induction furnaces, electric arc furnaces, and cast iron production. SSL Group supplies premium-quality Charge Carbon sourced from trusted producers for domestic and international customers.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "90 – 98%",
  //         },
  //         {
  //           key: "Packing",
  //           value: "25 Kg Bags / 1 MT Jumbo Bags",
  //         },
  //         {
  //           key: "Standard",
  //           value: "ASTM / ISO Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Grade", "FC", "Ash", "VM", "S", "Moisture"],
  //           rows: [
  //             ["CC 90", "90% min", "8.0% max", "1.5% max", "0.50% max", "0.50% max"],
  //             ["CC 95", "95% min", "4.0% max", "1.0% max", "0.30% max", "0.50% max"],
  //             ["CC 98", "98% min", "1.5% max", "0.50% max", "0.05% max", "0.30% max"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Carbon Granules"],
  //             ["Shape", "Granules / Lumps"],
  //             ["Color", "Black"],
  //             ["Bulk Density", "0.80–1.10 g/cm³"],
  //             ["Particle Size", "1–3 mm, 1–5 mm, 3–8 mm, 5–15 mm or as required"],
  //             ["Packing", "25 Kg Bags, 1 MT Jumbo Bags or Bulk"],
  //             ["Storage", "Store in a cool, dry and moisture-free environment"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Foundry Industry",
  //         "Cast Iron Production",
  //         "Induction Furnaces (IF)",
  //         "Electric Arc Furnaces (EAF)",
  //         "Carbon Adjustment in Molten Metal",
  //       ],

  //       faq: [
  //         {
  //           question: "What is Charge Carbon?",
  //           answer:
  //             "Charge Carbon is a high-purity carbon additive used to increase the carbon content of molten steel and cast iron during steelmaking and foundry operations."
  //         },
  //         {
  //           question: "Which grades of Charge Carbon do you supply?",
  //           answer:
  //             "We supply Charge Carbon with fixed carbon content ranging from 90% to 98%, suitable for various metallurgical applications."
  //         },
  //         {
  //           question: "What are the applications of Charge Carbon?",
  //           answer:
  //             "Charge Carbon is widely used in steel plants, foundries, induction furnaces, electric arc furnaces, and cast iron production."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, or bulk packing according to customer and export requirements."
  //         },
  //         {
  //           question: "Can you supply customized particle sizes?",
  //           answer:
  //             "Yes. We supply Charge Carbon in customized particle sizes and packaging based on customer specifications."
  //         },
  //         {
  //           question: "Do you export Charge Carbon internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports Charge Carbon to domestic and international markets with reliable sourcing, quality assurance, and timely delivery."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },
  //   ]
  // },

  // {
  //   slug: "carbide-ore",
  //   key: "CarbideOre",
  //   category: "Industrial Minerals",
  //   shortDescription:
  //     "High-grade carbide concentrate and ore for smelters and galvanizing supply chains.",
  //   description:
  //     "Direct export of carbide ore and concentrate with consistent carbide content, low impurities, and full assay certificates for smelter and galvanizing industry procurement.",
  //   image: "/images/products/Silicon-Carbide-1.jpg",
  //   imageAlt: "Carbon Products",
  //   featured: true,
  //   specification: [
  //     {
  //       key: "Graphite Petroleum Coke",
  //       value: "98.5% – 99.9% FC",
  //     },
  //     {
  //       key: "Calcined Petroleum Coke",
  //       value: "98% – 99.5% FC",
  //     },
  //     {
  //       key: "Carbon Raiser",
  //       value: "85% – 99% FC",
  //     },
  //     {
  //       key: "Electrode Paste",
  //       value: "Standard Grade",
  //     },
  //   ],

  //   variants: [
  //     {
  //       id: 1,
  //       translationKey: "Steel Shot",
  //       image: "/images/products/steel-shot.jpg",
  //       description:
  //         "Steel Shot is a high-carbon cast steel abrasive with spherical particles designed for shot blasting, shot peening, and surface preparation. It offers superior cleaning efficiency, long service life, and consistent performance across a wide range of industrial applications.",

  //       specifications: [
  //         {
  //           key: "Material",
  //           value: "High Carbon Cast Steel",
  //         },
  //         {
  //           key: "Hardness",
  //           value: "40–65 HRC",
  //         },
  //         {
  //           key: "Standard",
  //           value: "SAE J444 / ISO 11124",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Element", "Content"],
  //           rows: [
  //             ["Carbon (C)", "0.80 – 1.20%"],
  //             ["Silicon (Si)", "0.40 – 1.20%"],
  //             ["Manganese (Mn)", "0.60 – 1.20%"],
  //             ["Phosphorus (P)", "≤ 0.05%"],
  //             ["Sulphur (S)", "≤ 0.05%"],
  //             ["Iron (Fe)", "Balance"]
  //           ]
  //         },

  //         {
  //           title: "Particle Size Distribution (SAE J444)",
  //           headers: ["Grade", "Particle Size (mm)"],
  //           rows: [
  //             ["S780", "2.00 – 2.80"],
  //             ["S660", "1.70 – 2.40"],
  //             ["S550", "1.40 – 2.00"],
  //             ["S460", "1.20 – 1.70"],
  //             ["S390", "1.00 – 1.40"],
  //             ["S330", "0.85 – 1.20"],
  //             ["S280", "0.71 – 1.00"],
  //             ["S230", "0.60 – 0.85"],
  //             ["S170", "0.42 – 0.71"],
  //             ["S110", "0.30 – 0.50"],
  //             ["S70", "0.18 – 0.35"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Shape", "Angular"],
  //             ["Color", "Metallic Grey"],
  //             ["Hardness", "40–68 HRC"],
  //             ["Density", "7.2–7.6 g/cm³"],
  //             ["Microstructure", "Tempered Martensite"],
  //             ["Sizes Available", "G10 – G120"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a cool and dry place"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Surface Preparation",
  //         "Rust & Scale Removal",
  //         "Steel Plate Cleaning",
  //         "Shipbuilding Industry",
  //         "Bridge Maintenance",
  //         "Foundry Cleaning",
  //         "Heavy Fabrication",
  //         "Pipeline Surface Treatment",
  //         "Stone Cutting Industry",
  //         "Granite & Marble Processing"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Steel Grit?",
  //           answer:
  //             "Steel Grit is a high-carbon cast steel abrasive with angular particles used for aggressive surface cleaning and preparation."
  //         },
  //         {
  //           question: "What is the difference between Steel Shot and Steel Grit?",
  //           answer:
  //             "Steel Shot has spherical particles and is mainly used for shot peening and polishing, while Steel Grit has angular particles for fast cleaning, descaling, and surface profiling."
  //         },
  //         {
  //           question: "Which grades of Steel Grit are available?",
  //           answer:
  //             "We supply Steel Grit in grades ranging from G10 to G120 to suit different blasting requirements."
  //         },
  //         {
  //           question: "What industries use Steel Grit?",
  //           answer:
  //             "Steel Grit is widely used in shipbuilding, foundries, steel fabrication, bridge maintenance, railways, pipelines, and heavy engineering industries."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "Steel Grit is supplied in 25 Kg bags, 1 MT jumbo bags, or customized bulk packaging."
  //         },
  //         {
  //           question: "Do you export Steel Grit internationally?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Steel Grit worldwide with customized specifications and reliable logistics support."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 2,
  //       translationKey: "Steel Grit",
  //       image: "/images/products/steel-grit.jpg",
  //       description:
  //         "Steel Grit is a high-carbon cast steel abrasive with angular particles used for surface preparation, rust removal, descaling, and shot blasting. It offers high cleaning efficiency, excellent durability, and a uniform surface profile for industrial applications.",

  //       specifications: [
  //         {
  //           key: "Material",
  //           value: "High Carbon Cast Steel",
  //         },
  //         {
  //           key: "Hardness",
  //           value: "40–68 HRC",
  //         },
  //         {
  //           key: "Standard",
  //           value: "SAE J444 / ISO 11124-3",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Grade", "FC", "Ash", "VM", "S", "Moisture"],
  //           rows: [
  //             ["CC 90", "90% min", "8.0% max", "1.5% max", "0.50% max", "0.50% max"],
  //             ["CC 95", "95% min", "4.0% max", "1.0% max", "0.30% max", "0.50% max"],
  //             ["CC 98", "98% min", "1.5% max", "0.50% max", "0.05% max", "0.30% max"]
  //           ]
  //         },

  //         {
  //           title: "Particle Size Distribution",
  //           headers: ["Grade", "Particle Size (mm)"],
  //           rows: [
  //             ["G10", "2.50 – 2.00"],
  //             ["G12", "2.00 – 1.70"],
  //             ["G14", "1.70 – 1.40"],
  //             ["G16", "1.40 – 1.18"],
  //             ["G18", "1.18 – 1.00"],
  //             ["G25", "1.00 – 0.71"],
  //             ["G40", "0.71 – 0.42"],
  //             ["G50", "0.42 – 0.30"],
  //             ["G80", "0.30 – 0.18"],
  //             ["G120", "0.18 – 0.09"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Carbon Granules"],
  //             ["Shape", "Granules / Lumps"],
  //             ["Color", "Black"],
  //             ["Bulk Density", "0.80–1.10 g/cm³"],
  //             ["Particle Size", "1–3 mm, 1–5 mm, 3–8 mm, 5–15 mm or as required"],
  //             ["Packing", "25 Kg Bags, 1 MT Jumbo Bags or Bulk"],
  //             ["Storage", "Store in a cool, dry and moisture-free environment"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Foundry Industry",
  //         "Cast Iron Production",
  //         "Induction Furnaces (IF)",
  //         "Electric Arc Furnaces (EAF)",
  //         "Carbon Adjustment in Molten Metal",
  //       ],

  //       faq: [
  //         {
  //           question: "What is Charge Carbon?",
  //           answer:
  //             "Charge Carbon is a high-purity carbon additive used to increase the carbon content of molten steel and cast iron during steelmaking and foundry operations."
  //         },
  //         {
  //           question: "Which grades of Charge Carbon do you supply?",
  //           answer:
  //             "We supply Charge Carbon with fixed carbon content ranging from 90% to 98%, suitable for various metallurgical applications."
  //         },
  //         {
  //           question: "What are the applications of Charge Carbon?",
  //           answer:
  //             "Charge Carbon is widely used in steel plants, foundries, induction furnaces, electric arc furnaces, and cast iron production."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, or bulk packing according to customer and export requirements."
  //         },
  //         {
  //           question: "Can you supply customized particle sizes?",
  //           answer:
  //             "Yes. We supply Charge Carbon in customized particle sizes and packaging based on customer specifications."
  //         },
  //         {
  //           question: "Do you export Charge Carbon internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports Charge Carbon to domestic and international markets with reliable sourcing, quality assurance, and timely delivery."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 3,
  //       translationKey: "Stainless Steel Shot",
  //       image: "/images/products/stainless-steel-shot.jpg",
  //       description:
  //         "Stainless Steel Shot is a high-quality spherical abrasive made from chromium-nickel stainless steel. It is ideal for shot blasting, shot peening, and surface finishing applications, offering excellent corrosion resistance, long service life, and a clean, contamination-free surface finish.",

  //       specifications: [
  //         {
  //           key: "Material",
  //           value: "Chromium-Nickel Stainless Steel",
  //         },
  //         {
  //           key: "Hardness",
  //           value: "40 – 50 HRC",
  //         },
  //         {
  //           key: "Standard",
  //           value: "AMS 2431 / SAE J827 Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Element", "Content"],
  //           rows: [
  //             ["Chromium (Cr)", "17.00 – 20.00%"],
  //             ["Nickel (Ni)", "7.00 – 10.00%"],
  //             ["Carbon (C)", "≤ 0.15%"],
  //             ["Silicon (Si)", "≤ 1.50%"],
  //             ["Manganese (Mn)", "≤ 2.00%"],
  //             ["Phosphorus (P)", "≤ 0.05%"],
  //             ["Sulphur (S)", "≤ 0.03%"],
  //             ["Iron (Fe)", "Balance"]
  //           ]
  //         },

  //         {
  //           title: "Particle Size Distribution",
  //           headers: ["Grade", "Particle Size (mm)"],
  //           rows: [
  //             ["SS-100", "0.10 – 0.30"],
  //             ["SS-170", "0.30 – 0.60"],
  //             ["SS-230", "0.60 – 0.85"],
  //             ["SS-330", "0.85 – 1.20"],
  //             ["SS-390", "1.00 – 1.40"],
  //             ["SS-460", "1.20 – 1.70"],
  //             ["SS-550", "1.40 – 2.00"],
  //             ["SS-660", "1.70 – 2.40"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Shape", "Spherical"],
  //             ["Color", "Silver Metallic"],
  //             ["Hardness", "40 – 50 HRC"],
  //             ["Density", "7.6 – 7.9 g/cm³"],
  //             ["Microstructure", "Austenitic"],
  //             ["Sizes Available", "0.10 – 2.50 mm"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a clean and dry environment"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Shot Blasting",
  //         "Shot Peening",
  //         "Surface Finishing",
  //         "Deburring",
  //         "Aluminum Die Casting Cleaning",
  //         "Stainless Steel Component Cleaning",
  //         "Aerospace Industry",
  //         "Automotive Industry",
  //         "Medical Equipment Manufacturing",
  //         "Non-Ferrous Metal Surface Treatment"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Stainless Steel Shot?",
  //           answer:
  //             "Stainless Steel Shot is a spherical metallic blasting media made from chromium-nickel stainless steel. It provides excellent cleaning efficiency without contaminating the workpiece."
  //         },
  //         {
  //           question: "What are the advantages of Stainless Steel Shot?",
  //           answer:
  //             "It offers excellent corrosion resistance, long service life, low dust generation, high durability, and produces a bright, smooth surface finish."
  //         },
  //         {
  //           question: "Which industries use Stainless Steel Shot?",
  //           answer:
  //             "It is widely used in automotive, aerospace, foundry, aluminum die casting, stainless steel fabrication, medical equipment, and precision engineering industries."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Stainless Steel Shot in sizes ranging from 0.10 mm to 2.50 mm, with customized grades available upon request."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, or customized bulk packaging based on customer requirements."
  //         },
  //         {
  //           question: "Do you export Stainless Steel Shot?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Stainless Steel Shot worldwide with customized specifications, quality assurance, and reliable global logistics."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 4,
  //       translationKey: "Silicon Carbide Powder",
  //       image: "/images/products/silicon-carbide-powder.jpg",
  //       description:
  //         "Silicon Carbide Powder (SiC Powder) is a premium-quality synthetic abrasive material manufactured by the high-temperature reaction of silica sand and petroleum coke. It is known for its exceptional hardness, high thermal conductivity, excellent wear resistance, and outstanding chemical stability. Silicon Carbide Powder is widely used in refractory applications, abrasives, ceramics, metallurgy, lapping, polishing, and advanced engineering industries. Available in Black and Green grades, it delivers consistent particle size, high purity, and reliable performance for demanding industrial applications.",

  //       specifications: [
  //         {
  //           key: "Purity",
  //           value: "98% – 99.5%",
  //         },
  //         {
  //           key: "Hardness",
  //           value: "9.2 – 9.5 Mohs",
  //         },
  //         {
  //           key: "Standard",
  //           value: "FEPA / JIS / ISO Equivalent",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Component", "Content"],
  //           rows: [
  //             ["Silicon Carbide (SiC)", "98.0 – 99.5%"],
  //             ["Free Carbon (C)", "≤ 0.30%"],
  //             ["Silica (SiO₂)", "≤ 0.80%"],
  //             ["Iron (Fe₂O₃)", "≤ 0.30%"],
  //             ["Moisture", "≤ 0.20%"]
  //           ]
  //         },

  //         {
  //           title: "Particle Size Availability",
  //           headers: ["Grade", "Particle Size"],
  //           rows: [
  //             ["F24", "850 – 710 µm"],
  //             ["F36", "600 – 500 µm"],
  //             ["F46", "425 – 355 µm"],
  //             ["F60", "300 – 250 µm"],
  //             ["F80", "212 – 180 µm"],
  //             ["F120", "125 – 106 µm"],
  //             ["F220", "75 – 63 µm"],
  //             ["F320", "46 – 40 µm"],
  //             ["F500", "25 – 20 µm"],
  //             ["F1000", "9 – 7 µm"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black / Green Powder"],
  //             ["Shape", "Angular Powder"],
  //             ["Color", "Black or Green"],
  //             ["Hardness", "9.2 – 9.5 Mohs"],
  //             ["Specific Gravity", "3.20 g/cm³"],
  //             ["Bulk Density", "1.30 – 1.60 g/cm³"],
  //             ["Melting Point", "Approximately 2700°C"],
  //             ["Thermal Conductivity", "High"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a cool and dry place"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Grinding Wheels",
  //         "Abrasive Papers",
  //         "Sand Blasting",
  //         "Refractory Products",
  //         "Steel Manufacturing",
  //         "Foundry Industry",
  //         "Ceramic Manufacturing",
  //         "Lapping & Polishing",
  //         "Precision Grinding",
  //         "Semiconductor Industry",
  //         "Solar Wafer Cutting",
  //         "Advanced Engineering Components"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Silicon Carbide Powder?",
  //           answer:
  //             "Silicon Carbide Powder is a synthetic abrasive material known for its exceptional hardness, thermal conductivity, and wear resistance. It is widely used in abrasives, refractories, ceramics, and metallurgical applications."
  //         },
  //         {
  //           question: "What are the different grades available?",
  //           answer:
  //             "We supply Black and Green Silicon Carbide Powder in various FEPA grit sizes ranging from F24 to F1000 and customized grades as per customer requirements."
  //         },
  //         {
  //           question: "What industries use Silicon Carbide Powder?",
  //           answer:
  //             "Silicon Carbide Powder is widely used in steel plants, foundries, refractory manufacturers, ceramic industries, semiconductor production, abrasives, and precision engineering."
  //         },
  //         {
  //           question: "What are the advantages of Silicon Carbide Powder?",
  //           answer:
  //             "It offers high hardness, excellent thermal conductivity, superior wear resistance, chemical stability, and consistent particle size for demanding industrial applications."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, or customized bulk packaging according to customer requirements."
  //         },
  //         {
  //           question: "Do you export Silicon Carbide Powder?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Silicon Carbide Powder to domestic and international customers with customized specifications and timely delivery."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 5,
  //       translationKey: "Silicon Carbide Briquette",
  //       image: "/images/products/silicon-carbide-briquette.jpg",
  //       description:
  //         "Silicon Carbide Briquette is a high-performance metallurgical additive manufactured by compressing high-purity silicon carbide powder into briquette form. It is widely used in steelmaking, foundries, and cast iron production as a deoxidizer, reducing agent, and carburizing material. Silicon Carbide Briquette improves metal quality, enhances furnace efficiency, reduces slag formation, and increases silicon recovery. Its uniform composition, high mechanical strength, and low dust generation make it an ideal choice for modern metallurgical processes.",

  //       specifications: [
  //         {
  //           key: "SiC Content",
  //           value: "85% – 90%",
  //         },
  //         {
  //           key: "Shape",
  //           value: "Briquette",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Component", "Content"],
  //           rows: [
  //             ["Silicon Carbide (SiC)", "85 – 90%"],
  //             ["Free Carbon (C)", "6 – 10%"],
  //             ["Silica (SiO₂)", "≤ 3.0%"],
  //             ["Iron Oxide (Fe₂O₃)", "≤ 1.0%"],
  //             ["Moisture", "≤ 1.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Standard Briquette", "40–60 mm"],
  //             ["Medium Briquette", "30–50 mm"],
  //             ["Large Briquette", "50–80 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Briquette"],
  //             ["Shape", "Compressed Briquette"],
  //             ["Color", "Black"],
  //             ["Density", "2.6 – 3.2 g/cm³"],
  //             ["Hardness", "High"],
  //             ["Size", "40–60 mm or Customized"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a cool and dry place"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Electric Arc Furnaces (EAF)",
  //         "Induction Furnaces (IF)",
  //         "Foundry Industry",
  //         "Cast Iron Production",
  //         "Deoxidizing Agent",
  //         "Carburizing Agent",
  //         "Slag Reduction",
  //         "Ferro Alloy Production",
  //         "Metallurgical Industry"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Silicon Carbide Briquette?",
  //           answer:
  //             "Silicon Carbide Briquette is a compressed metallurgical additive made from high-purity silicon carbide powder. It is used as a deoxidizer, reducing agent, and carburizer in steelmaking and foundry applications."
  //         },
  //         {
  //           question: "What are the benefits of Silicon Carbide Briquette?",
  //           answer:
  //             "It improves silicon recovery, reduces slag formation, enhances furnace efficiency, minimizes dust generation, and improves the quality of molten metal."
  //         },
  //         {
  //           question: "Which industries use Silicon Carbide Briquette?",
  //           answer:
  //             "It is widely used in steel plants, foundries, cast iron manufacturing, ferro alloy production, and metallurgical industries."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply standard sizes ranging from 30 mm to 80 mm and can manufacture customized briquette sizes according to customer requirements."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 25 Kg bags, 1 MT jumbo bags, or customized bulk packaging based on customer requirements."
  //         },
  //         {
  //           question: "Do you export Silicon Carbide Briquette?",
  //           answer:
  //             "Yes. SSL Group exports high-quality Silicon Carbide Briquettes worldwide with customized specifications, quality assurance, and timely delivery."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 6,
  //       translationKey: "Calcium Carbide",
  //       image: "/images/products/calcium-carbide.jpg",
  //       description:
  //         "Calcium Carbide (CaC₂) is a high-quality industrial chemical widely used in steelmaking, metallurgy, chemical processing, and gas generation. It is primarily used as a desulfurizing and deoxidizing agent in molten steel and as a raw material for the production of acetylene gas. Calcium Carbide is known for its high reactivity, excellent purity, and consistent performance, making it an ideal choice for steel plants, foundries, chemical industries, and manufacturing applications.",

  //       specifications: [
  //         {
  //           key: "CaC₂ Content",
  //           value: "80% – 85%",
  //         },
  //         {
  //           key: "Gas Yield",
  //           value: "280 – 300 L/kg",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Component", "Content"],
  //           rows: [
  //             ["Calcium Carbide (CaC₂)", "80 – 85%"],
  //             ["Free Carbon (C)", "10 – 15%"],
  //             ["Calcium Oxide (CaO)", "≤ 3.0%"],
  //             ["Silicon Dioxide (SiO₂)", "≤ 1.0%"],
  //             ["Iron Oxide (Fe₂O₃)", "≤ 0.5%"],
  //             ["Phosphine (PH₃)", "≤ 0.08%"],
  //             ["Hydrogen Sulfide (H₂S)", "≤ 0.10%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Grade", "Lump Size"],
  //           rows: [
  //             ["Small", "7 – 15 mm"],
  //             ["Medium", "15 – 25 mm"],
  //             ["Standard", "25 – 50 mm"],
  //             ["Large", "50 – 80 mm"],
  //             ["Extra Large", "80 – 120 mm"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Grey to Black Lumps"],
  //             ["Shape", "Irregular Lumps"],
  //             ["Color", "Grey / Black"],
  //             ["Density", "2.10 – 2.30 g/cm³"],
  //             ["Melting Point", "Approximately 2160°C"],
  //             ["Gas Yield", "280 – 300 L/kg"],
  //             ["Packing", "50 Kg Steel Drums / 100 Kg Drums"],
  //             ["Storage", "Store in a cool, dry, airtight place away from moisture"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Ladle Desulfurization",
  //         "Deoxidizing Agent",
  //         "Foundry Industry",
  //         "Acetylene Gas Production",
  //         "Chemical Manufacturing",
  //         "Metal Cutting & Welding",
  //         "PVC & Chemical Intermediates",
  //         "Metallurgical Industry",
  //         "Ferro Alloy Production"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Calcium Carbide?",
  //           answer:
  //             "Calcium Carbide (CaC₂) is an industrial chemical used for steel desulfurization, deoxidation, and acetylene gas production. It is widely used in metallurgy and chemical manufacturing."
  //         },
  //         {
  //           question: "What is the gas yield of your Calcium Carbide?",
  //           answer:
  //             "Our Calcium Carbide offers a gas yield of approximately 280–300 liters per kilogram, depending on the grade."
  //         },
  //         {
  //           question: "What industries use Calcium Carbide?",
  //           answer:
  //             "It is extensively used in steel plants, foundries, chemical industries, welding, acetylene gas generation, and ferro alloy manufacturing."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Calcium Carbide in lump sizes ranging from 7 mm to 120 mm and can provide customized sizes upon request."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is packed in moisture-proof 50 Kg or 100 Kg steel drums. Customized packaging is available for export requirements."
  //         },
  //         {
  //           question: "Do you export Calcium Carbide internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Calcium Carbide worldwide with customized specifications, secure packaging, and timely delivery."
  //         }
  //       ],
  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/femn.pdf",
  //         },
  //       ],
  //     },
  //   ]
  // },

  // {
  //   slug: "coal",
  //   key: "Coal",
  //   category: "Industrial Minerals",
  //   shortDescription:
  //     "SSL Group supplies high-quality industrial coal with controlled moisture, ash content, and calorific value to ensure efficient combustion, reduced operating costs, and dependable performance across metallurgical and industrial applications.",
  //   description:
  //     "Coal is a naturally occurring carbon-rich fuel widely used in steel manufacturing, foundries, power generation, cement production, and various industrial heating applications.",
  //   image: "/images/products/coal.jpg",
  //   imageAlt: "Coal Products",
  //   featured: true,
  //   specification: [
  //     { key: "Fixed Carbon (FC)", value: "45 – 75%" },
  //     { key: "Ash Content", value: "8 – 25%" },
  //     { key: "Volatile Matter (VM)", value: "18 – 35%" },
  //     { key: "Moisture", value: "3 – 12%" },
  //     { key: "Sulphur (S)", value: "0.3 – 1.0%" },
  //   ],

  //   variants: [
  //     {
  //       id: 1,
  //       translationKey: "Anthracite",
  //       image: "/images/products/anthracite.jpg",
  //       description:
  //         "Anthracite Coal is a premium-grade, high-carbon coal known for its exceptional purity, low volatile matter, low sulfur content, and high calorific value. It is widely used as a carbon additive and reducing agent in steelmaking, foundries, ferro alloy production, and metallurgical industries. Anthracite provides excellent combustion efficiency, low ash generation, and consistent carbon recovery, making it an ideal material for industrial and energy applications.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "75 – 90%",
  //         },
  //         {
  //           key: "Ash",
  //           value: "8 – 15%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / Imported",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Fixed Carbon (FC)", "75 – 90%"],
  //             ["Ash", "8 – 15%"],
  //             ["Volatile Matter (VM)", "3 – 8%"],
  //             ["Sulphur (S)", "≤ 0.60%"],
  //             ["Moisture", "≤ 5%"],
  //             ["Phosphorus (P)", "≤ 0.05%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Anthracite Fines", "0 – 5 mm"],
  //             ["Anthracite Granules", "5 – 15 mm"],
  //             ["Anthracite Medium", "10 – 30 mm"],
  //             ["Anthracite Lumps", "30 – 80 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Glossy Lumps"],
  //             ["Shape", "Lumps / Granules"],
  //             ["Color", "Jet Black"],
  //             ["Calorific Value", "7000 – 8500 kcal/kg"],
  //             ["Bulk Density", "0.85 – 1.00 g/cm³"],
  //             ["Sizes Available", "0–5 mm, 5–15 mm, 10–30 mm, 30–80 mm"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags / Bulk"],
  //             ["Storage", "Store in a dry and covered place"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Foundry Industry",
  //         "Electric Arc Furnaces (EAF)",
  //         "Induction Furnaces (IF)",
  //         "Blast Furnace Operations",
  //         "Carbon Additive",
  //         "Ferro Alloy Production",
  //         "Recarburizer",
  //         "Power Plants",
  //         "Water Filtration Media",
  //         "Chemical Industry",
  //         "Cement Industry"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Anthracite Coal?",
  //           answer:
  //             "Anthracite is the highest grade of coal with high fixed carbon, low volatile matter, and excellent combustion efficiency. It is widely used in metallurgy and industrial applications."
  //         },
  //         {
  //           question: "What is Anthracite used for?",
  //           answer:
  //             "Anthracite is used as a carbon additive, reducing agent, fuel source, filtration media, and raw material in steelmaking, foundries, ferro alloy production, and power generation."
  //         },
  //         {
  //           question: "What are the advantages of Anthracite?",
  //           answer:
  //             "Anthracite offers high carbon content, low sulfur, low ash, high calorific value, clean burning, and excellent carbon recovery."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Anthracite in fines, granules, and lump sizes ranging from 0–5 mm to 30–80 mm. Customized sizes are available on request."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "Anthracite is supplied in 25 Kg bags, 1 MT jumbo bags, and bulk packaging to meet customer requirements."
  //         },
  //         {
  //           question: "Do you export Anthracite?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Anthracite Coal to customers worldwide with customized specifications, secure packaging, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 2,
  //       translationKey: "Steam Coal",
  //       image: "/images/products/steam-coal.jpg",
  //       description:
  //         "Steam Coal, also known as Thermal Coal, is a high-quality fuel used primarily for heat and power generation in industrial applications. It is widely utilized in power plants, cement industries, paper mills, brick kilns, textile industries, and boilers due to its high calorific value, consistent combustion, and reliable energy output. Steam Coal offers excellent thermal efficiency, low moisture content, and stable performance, making it an economical fuel for various industrial processes.",

  //       specifications: [
  //         {
  //           key: "Gross Calorific Value",
  //           value: "5000 – 7000 kcal/kg",
  //         },
  //         {
  //           key: "Ash",
  //           value: "8 – 20%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / Indonesia / South Africa",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Gross Calorific Value (GCV)", "5000 – 7000 kcal/kg"],
  //             ["Fixed Carbon (FC)", "35 – 55%"],
  //             ["Ash", "8 – 20%"],
  //             ["Volatile Matter (VM)", "20 – 35%"],
  //             ["Total Moisture", "8 – 15%"],
  //             ["Sulphur (S)", "≤ 1.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Steam Coal Fines", "0 – 10 mm"],
  //             ["Steam Coal Small", "10 – 25 mm"],
  //             ["Steam Coal Standard", "25 – 50 mm"],
  //             ["Steam Coal Large", "50 – 100 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Coal Lumps"],
  //             ["Shape", "Lumps"],
  //             ["Color", "Black"],
  //             ["Calorific Value", "5000 – 7000 kcal/kg"],
  //             ["Bulk Density", "0.80 – 0.95 g/cm³"],
  //             ["Sizes Available", "0–50 mm, 25–50 mm, 50–100 mm"],
  //             ["Packing", "1 MT Jumbo Bags / Bulk Vessel / Loose"],
  //             ["Storage", "Store in a dry and ventilated area"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Thermal Power Plants",
  //         "Industrial Boilers",
  //         "Cement Industry",
  //         "Paper Mills",
  //         "Sugar Mills",
  //         "Textile Industry",
  //         "Brick Kilns",
  //         "Food Processing Plants",
  //         "Chemical Industry",
  //         "Captive Power Generation"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Steam Coal?",
  //           answer:
  //             "Steam Coal, also known as Thermal Coal, is a fuel used to generate heat and electricity in boilers, furnaces, and power plants."
  //         },
  //         {
  //           question: "What industries use Steam Coal?",
  //           answer:
  //             "Steam Coal is widely used in power plants, cement manufacturing, paper mills, textile industries, sugar mills, brick kilns, and various industrial boilers."
  //         },
  //         {
  //           question: "What calorific value is available?",
  //           answer:
  //             "We supply Steam Coal with Gross Calorific Values (GCV) ranging from 5000 to 7000 kcal/kg, depending on customer requirements."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "Steam Coal is available in fines, small, standard, and large lump sizes, with customized sizing available upon request."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "We offer Steam Coal in 1 MT jumbo bags, loose bulk, and vessel shipments to meet domestic and export requirements."
  //         },
  //         {
  //           question: "Do you export Steam Coal internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Steam Coal to customers worldwide with customized specifications, quality assurance, and reliable logistics."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 3,
  //       translationKey: "PCI",
  //       image: "/images/products/pci.jpg",
  //       description:
  //         "Pulverized Coal Injection (PCI) Coal is a premium-grade metallurgical coal specially processed for injection into blast furnaces during ironmaking. It serves as a cost-effective substitute for metallurgical coke by providing high fixed carbon, excellent combustibility, and low ash content. PCI Coal improves furnace productivity, reduces coke consumption, enhances thermal efficiency, and lowers overall production costs. It is widely used in integrated steel plants and blast furnace operations worldwide.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "70 – 82%",
  //         },
  //         {
  //           key: "Volatile Matter",
  //           value: "18 – 28%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Metallurgical Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / Australia / Russia",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Fixed Carbon (FC)", "70 – 82%"],
  //             ["Ash", "8 – 12%"],
  //             ["Volatile Matter (VM)", "18 – 28%"],
  //             ["Total Moisture", "≤ 10%"],
  //             ["Sulphur (S)", "≤ 0.60%"],
  //             ["Phosphorus (P)", "≤ 0.05%"]
  //           ]
  //         },

  //         {
  //           title: "Available Grades",
  //           headers: ["Grade", "Application"],
  //           rows: [
  //             ["Standard PCI", "Blast Furnace Injection"],
  //             ["Low Ash PCI", "High-Efficiency Ironmaking"],
  //             ["Low Sulphur PCI", "Premium Steel Production"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Pulverized Powder"],
  //             ["Shape", "Fine Powder"],
  //             ["Color", "Black"],
  //             ["Calorific Value", "7000 – 7800 kcal/kg"],
  //             ["Bulk Density", "0.75 – 0.90 g/cm³"],
  //             ["Particle Size", "Typically <75 µm (customizable)"],
  //             ["Packing", "1 MT Jumbo Bags / Bulk"],
  //             ["Storage", "Store in a dry, covered area away from moisture"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Blast Furnace Ironmaking",
  //         "Integrated Steel Plants",
  //         "Pig Iron Production",
  //         "Metallurgical Industry",
  //         "Coke Replacement",
  //         "Energy Optimization",
  //         "Iron Ore Reduction",
  //         "Hot Metal Production",
  //         "Large Steel Manufacturing Facilities",
  //         "High-Efficiency Furnace Operations"
  //       ],

  //       faq: [
  //         {
  //           question: "What is PCI Coal?",
  //           answer:
  //             "PCI (Pulverized Coal Injection) Coal is a finely ground metallurgical coal injected into blast furnaces to partially replace coke and improve ironmaking efficiency."
  //         },
  //         {
  //           question: "What are the benefits of PCI Coal?",
  //           answer:
  //             "PCI Coal reduces coke consumption, lowers production costs, improves furnace productivity, enhances thermal efficiency, and supports stable blast furnace operation."
  //         },
  //         {
  //           question: "Which industries use PCI Coal?",
  //           answer:
  //             "PCI Coal is primarily used by integrated steel plants, blast furnace operators, and ironmaking facilities."
  //         },
  //         {
  //           question: "Can PCI Coal be supplied with customized specifications?",
  //           answer:
  //             "Yes. We supply PCI Coal with customized ash, sulphur, volatile matter, moisture, and particle size specifications based on customer requirements."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "PCI Coal is available in 1 MT jumbo bags and bulk shipments suitable for domestic and export markets."
  //         },
  //         {
  //           question: "Do you export PCI Coal internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports high-quality PCI Coal worldwide with consistent quality, customized specifications, and reliable logistics support."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 4,
  //       translationKey: "Coking Coal",
  //       image: "/images/products/cooking-coal.jpg",
  //       description:
  //         "Coking Coal, also known as Metallurgical Coal, is a premium-grade coal used in the production of metallurgical coke for blast furnace ironmaking. It possesses excellent coking properties, high carbon content, low ash, and controlled volatile matter, enabling the formation of strong coke capable of supporting the blast furnace burden. Coking Coal is an essential raw material for integrated steel plants, coke ovens, foundries, and ferro alloy industries, ensuring efficient iron and steel production with consistent quality.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "58 – 68%",
  //         },
  //         {
  //           key: "Ash",
  //           value: "8 – 12%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Metallurgical Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / Australia / USA / Canada",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Fixed Carbon (FC)", "58 – 68%"],
  //             ["Ash", "8 – 12%"],
  //             ["Volatile Matter (VM)", "20 – 28%"],
  //             ["Total Moisture", "≤ 10%"],
  //             ["Sulphur (S)", "≤ 0.80%"],
  //             ["Phosphorus (P)", "≤ 0.05%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Coking Coal Fines", "0 – 10 mm"],
  //             ["Small", "10 – 25 mm"],
  //             ["Standard", "25 – 50 mm"],
  //             ["Large", "50 – 100 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black Coal Lumps"],
  //             ["Shape", "Lumps"],
  //             ["Color", "Black"],
  //             ["Calorific Value", "7000 – 8000 kcal/kg"],
  //             ["Bulk Density", "0.80 – 0.95 g/cm³"],
  //             ["Caking Property", "Excellent"],
  //             ["Sizes Available", "0–50 mm, 25–50 mm, 50–100 mm"],
  //             ["Packing", "1 MT Jumbo Bags / Bulk"],
  //             ["Storage", "Store in a dry and covered area"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Metallurgical Coke Production",
  //         "Blast Furnace Ironmaking",
  //         "Integrated Steel Plants",
  //         "Steel Manufacturing",
  //         "Coke Oven Batteries",
  //         "Pig Iron Production",
  //         "Foundry Industry",
  //         "Ferro Alloy Manufacturing",
  //         "Heavy Engineering Industry",
  //         "Metallurgical Processes"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Coking Coal?",
  //           answer:
  //             "Coking Coal, or Metallurgical Coal, is a special grade of coal used to produce metallurgical coke, which is an essential fuel and reducing agent in blast furnace ironmaking."
  //         },
  //         {
  //           question: "How is Coking Coal different from Steam Coal?",
  //           answer:
  //             "Coking Coal has caking properties that allow it to soften, fuse, and form strong coke during carbonization, whereas Steam Coal is primarily used as a fuel for heat and power generation and does not form coke."
  //         },
  //         {
  //           question: "Which industries use Coking Coal?",
  //           answer:
  //             "Coking Coal is widely used in integrated steel plants, coke ovens, blast furnaces, foundries, ferro alloy manufacturing, and other metallurgical industries."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Coking Coal in fines, small, standard, and lump sizes, with customized sizing available to meet specific customer requirements."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 1 MT jumbo bags, bulk truckloads, rail wagons, or vessel shipments based on customer and export requirements."
  //         },
  //         {
  //           question: "Do you export Coking Coal internationally?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Coking Coal with customized specifications, reliable quality control, and efficient global logistics."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },
  //   ]
  // },

  // {
  //   slug: "limestone",
  //   key: "LimeStone",
  //   category: "Industrial Minerals",
  //   shortDescription:
  //     "Premium-quality Limestone with high calcium content, widely used in steel plants, cement manufacturing, construction, chemical processing, glass production, and water treatment applications.",
  //   description:
  //     "Limestone is a naturally occurring sedimentary rock primarily composed of calcium carbonate (CaCO₃). It is one of the most widely used industrial minerals due to its high calcium content, excellent fluxing properties, and chemical stability. Limestone is extensively used in steel manufacturing, cement production, glass making, chemical processing, construction, sugar refining, and water treatment. SSL Group supplies high-quality Limestone in various grades and sizes, ensuring consistent quality, reliable performance, and customized solutions for domestic and international industries.",
  //   image: "/images/products/limestone.jpg",
  //   imageAlt: "Limestone Products",
  //   featured: true,
  //   specification: [
  //     {
  //       key: "CaCO₃",
  //       value: "90 – 98%",
  //     },
  //     {
  //       key: "Size",
  //       value: "10–40 mm, 20–80 mm or Customized",
  //     },
  //     {
  //       key: "Packing",
  //       value: "1 MT Jumbo Bags / Bulk",
  //     },
  //     {
  //       key: "Origin",
  //       value: "India",
  //     },
  //   ],

  //   variants: [
  //     {
  //       id: 1,
  //       translationKey: "Steel Grade Limestone",
  //       image: "/images/products/steel-grade-limestone.jpg",
  //       description:
  //         "Steel Grade Limestone is a premium-quality, high-calcium limestone used as a flux in iron and steel manufacturing. It plays a vital role in removing impurities such as silica, phosphorus, and sulfur during the steelmaking process, forming a fluid slag that enhances metal quality and furnace efficiency. Carefully selected for its high calcium carbonate content and low silica and magnesium levels, Steel Grade Limestone is widely used in blast furnaces, basic oxygen furnaces (BOF), electric arc furnaces (EAF), and sinter plants.",

  //       specifications: [
  //         {
  //           key: "CaCO₃",
  //           value: "90 – 96%",
  //         },
  //         {
  //           key: "CaO",
  //           value: "50 – 54%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Steel Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Calcium Carbonate (CaCO₃)", "90 – 96%"],
  //             ["Calcium Oxide (CaO)", "50 – 54%"],
  //             ["Magnesium Oxide (MgO)", "≤ 3.5%"],
  //             ["Silicon Dioxide (SiO₂)", "≤ 2.5%"],
  //             ["Aluminium Oxide (Al₂O₃)", "≤ 1.0%"],
  //             ["Ferric Oxide (Fe₂O₃)", "≤ 1.0%"],
  //             ["Moisture", "≤ 1.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Limestone Chips", "10 – 20 mm"],
  //             ["Steel Grade Lumps", "20 – 40 mm"],
  //             ["Steel Grade Lumps", "30 – 80 mm"],
  //             ["Large Lumps", "50 – 100 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Grey to White Limestone Lumps"],
  //             ["Shape", "Natural Lumps"],
  //             ["Color", "Grey / White"],
  //             ["Specific Gravity", "2.65 – 2.75"],
  //             ["Bulk Density", "1.40 – 1.60 g/cm³"],
  //             ["Hardness", "3 Mohs"],
  //             ["Sizes Available", "10–40 mm, 20–50 mm, 30–80 mm"],
  //             ["Packing", "1 MT Jumbo Bags / Bulk"],
  //             ["Storage", "Store in a dry and covered area"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Blast Furnace Ironmaking",
  //         "Basic Oxygen Furnace (BOF)",
  //         "Electric Arc Furnace (EAF)",
  //         "Sinter Plants",
  //         "Steel Manufacturing",
  //         "Pig Iron Production",
  //         "Fluxing Agent",
  //         "Slag Formation",
  //         "Metallurgical Industry",
  //         "Ferro Alloy Production"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Steel Grade Limestone?",
  //           answer:
  //             "Steel Grade Limestone is a high-calcium limestone used as a flux in iron and steel production to remove impurities and improve slag formation."
  //         },
  //         {
  //           question: "Why is Steel Grade Limestone used in steelmaking?",
  //           answer:
  //             "It combines with silica, phosphorus, and sulfur impurities to form slag, improving steel quality and furnace efficiency."
  //         },
  //         {
  //           question: "Which industries use Steel Grade Limestone?",
  //           answer:
  //             "It is widely used in integrated steel plants, blast furnaces, electric arc furnaces, sinter plants, ferro alloy production, and metallurgical industries."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Steel Grade Limestone in 10–20 mm chips and 20–100 mm lump sizes. Customized sizing is also available."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 1 MT jumbo bags, bulk truckloads, rail wagons, or vessel shipments based on customer requirements."
  //         },
  //         {
  //           question: "Do you export Steel Grade Limestone?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Steel Grade Limestone with customized specifications, strict quality control, and reliable global logistics."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 2,
  //       translationKey: "Chemical Grade Limestone",
  //       image: "/images/products/chemical-grade-limestone.jpg",
  //       description:
  //         "Chemical Grade Limestone is a premium-quality, high-purity calcium carbonate (CaCO₃) material used as a raw material in chemical processing, glass manufacturing, sugar refining, paper production, water treatment, and other industrial applications. Its high calcium content, low silica, low iron, and excellent chemical stability make it ideal for industries requiring superior purity and consistent performance. SSL Group supplies Chemical Grade Limestone in customized sizes and specifications to meet diverse industrial requirements.",

  //       specifications: [
  //         {
  //           key: "CaCO₃",
  //           value: "97 – 99%",
  //         },
  //         {
  //           key: "CaO",
  //           value: "54 – 56%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Chemical Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Calcium Carbonate (CaCO₃)", "97 – 99%"],
  //             ["Calcium Oxide (CaO)", "54 – 56%"],
  //             ["Magnesium Oxide (MgO)", "≤ 1.5%"],
  //             ["Silicon Dioxide (SiO₂)", "≤ 1.0%"],
  //             ["Aluminium Oxide (Al₂O₃)", "≤ 0.30%"],
  //             ["Ferric Oxide (Fe₂O₃)", "≤ 0.20%"],
  //             ["Moisture", "≤ 0.50%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Powder", "200–500 Mesh"],
  //             ["Fine Chips", "5 – 10 mm"],
  //             ["Standard Chips", "10 – 20 mm"],
  //             ["Lumps", "20 – 80 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "White to Light Grey Limestone"],
  //             ["Shape", "Lumps / Chips / Powder"],
  //             ["Color", "White / Light Grey"],
  //             ["Specific Gravity", "2.65 – 2.75"],
  //             ["Bulk Density", "1.40 – 1.60 g/cm³"],
  //             ["Hardness", "3 Mohs"],
  //             ["Sizes Available", "Powder, 5–10 mm, 10–40 mm, 20–80 mm"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags / Bulk"],
  //             ["Storage", "Store in a dry and covered area"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Chemical Manufacturing",
  //         "Glass Industry",
  //         "Paper Industry",
  //         "Sugar Industry",
  //         "Water Treatment",
  //         "Lime Manufacturing",
  //         "Calcium Carbonate Production",
  //         "Paint Industry",
  //         "Ceramic Industry",
  //         "Plastic & Rubber Industry"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Chemical Grade Limestone?",
  //           answer:
  //             "Chemical Grade Limestone is a high-purity limestone with a high calcium carbonate content and low impurities, used in chemical processing and other industrial applications."
  //         },
  //         {
  //           question: "Which industries use Chemical Grade Limestone?",
  //           answer:
  //             "It is widely used in chemical manufacturing, glass production, paper mills, sugar refineries, water treatment, ceramics, paints, plastics, and rubber industries."
  //         },
  //         {
  //           question: "What are the advantages of Chemical Grade Limestone?",
  //           answer:
  //             "It offers high purity, excellent chemical stability, low silica and iron content, and consistent quality for demanding industrial processes."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Chemical Grade Limestone in powder, chips, and lump forms with customized sizes based on customer requirements."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is available in 25 Kg bags, 1 MT jumbo bags, and bulk shipments for domestic and export markets."
  //         },
  //         {
  //           question: "Do you export Chemical Grade Limestone?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Chemical Grade Limestone worldwide with customized specifications, strict quality control, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 3,
  //       translationKey: "Cement Grade Limestone",
  //       image: "/images/products/cement-grade-limestone.jpg",
  //       description:
  //         "Cement Grade Limestone is a high-quality sedimentary rock primarily composed of calcium carbonate (CaCO₃), specifically selected for cement manufacturing. It serves as the principal raw material in the production of clinker and Portland cement, providing the essential calcium required for cement formation. With its balanced chemical composition, low impurities, and consistent quality, Cement Grade Limestone ensures efficient kiln operation, improved clinker quality, and reliable cement production. SSL Group supplies premium Cement Grade Limestone in various sizes to meet the requirements of cement plants and construction material manufacturers.",

  //       specifications: [
  //         {
  //           key: "CaCO₃",
  //           value: "80 – 90%",
  //         },
  //         {
  //           key: "CaO",
  //           value: "44 – 50%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Cement Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Calcium Carbonate (CaCO₃)", "80 – 90%"],
  //             ["Calcium Oxide (CaO)", "44 – 50%"],
  //             ["Magnesium Oxide (MgO)", "≤ 5.0%"],
  //             ["Silicon Dioxide (SiO₂)", "8 – 15%"],
  //             ["Aluminium Oxide (Al₂O₃)", "2 – 5%"],
  //             ["Ferric Oxide (Fe₂O₃)", "1 – 3%"],
  //             ["Moisture", "≤ 2.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Limestone Chips", "10 – 20 mm"],
  //             ["Medium Lumps", "20 – 40 mm"],
  //             ["Large Lumps", "40 – 80 mm"],
  //             ["Crusher Feed", "50 – 100 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Grey Limestone Lumps"],
  //             ["Shape", "Lumps / Crushed Stone"],
  //             ["Color", "Grey"],
  //             ["Specific Gravity", "2.60 – 2.75"],
  //             ["Bulk Density", "1.40 – 1.60 g/cm³"],
  //             ["Hardness", "3 Mohs"],
  //             ["Sizes Available", "10–20 mm, 20–40 mm, 40–80 mm"],
  //             ["Packing", "1 MT Jumbo Bags / Bulk"],
  //             ["Storage", "Store in a dry and covered area"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Cement Manufacturing",
  //         "Clinker Production",
  //         "Portland Cement Plants",
  //         "Ready-Mix Concrete",
  //         "Construction Material Industry",
  //         "Infrastructure Projects",
  //         "Road Construction",
  //         "Building Materials",
  //         "Precast Concrete Manufacturing",
  //         "Industrial Cement Production"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Cement Grade Limestone?",
  //           answer:
  //             "Cement Grade Limestone is a high-quality limestone used as the primary raw material for clinker and cement production."
  //         },
  //         {
  //           question: "Which industries use Cement Grade Limestone?",
  //           answer:
  //             "It is widely used in cement plants, clinker manufacturing units, ready-mix concrete plants, and construction material industries."
  //         },
  //         {
  //           question: "Why is Cement Grade Limestone important?",
  //           answer:
  //             "It supplies the calcium required for clinker formation, helping produce high-strength and durable cement while improving kiln efficiency."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Cement Grade Limestone in chips and lump sizes ranging from 10 mm to 100 mm, with customized sizing available."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 1 MT jumbo bags, bulk truckloads, rail wagons, or vessel shipments depending on customer requirements."
  //         },
  //         {
  //           question: "Do you export Cement Grade Limestone?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Cement Grade Limestone worldwide with customized specifications, reliable quality assurance, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 4,
  //       translationKey: "Constuction Grade Limestone",
  //       image: "/images/products/construction-grade-limestone.jpg",
  //       description:
  //         "Construction Grade Limestone is a durable and versatile natural stone widely used as an aggregate and base material in construction and infrastructure projects. It is valued for its excellent strength, durability, workability, and cost-effectiveness. Construction Grade Limestone is extensively used in road construction, concrete production, railway ballast, building foundations, drainage systems, asphalt mixtures, and landscaping applications. SSL Group supplies high-quality Construction Grade Limestone in various sizes and specifications to meet the requirements of construction companies, infrastructure developers, and civil engineering projects.",

  //       specifications: [
  //         {
  //           key: "CaCO₃",
  //           value: "75 – 90%",
  //         },
  //         {
  //           key: "Compressive Strength",
  //           value: "80 – 180 MPa",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Construction Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Calcium Carbonate (CaCO₃)", "75 – 90%"],
  //             ["Calcium Oxide (CaO)", "42 – 50%"],
  //             ["Magnesium Oxide (MgO)", "≤ 5.0%"],
  //             ["Silicon Dioxide (SiO₂)", "5 – 15%"],
  //             ["Aluminium Oxide (Al₂O₃)", "1 – 4%"],
  //             ["Ferric Oxide (Fe₂O₃)", "0.5 – 3.0%"],
  //             ["Moisture", "≤ 2.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Crusher Dust", "0 – 6 mm"],
  //             ["Aggregate", "10 – 20 mm"],
  //             ["Aggregate", "20 – 40 mm"],
  //             ["Road Base", "40 – 75 mm"],
  //             ["Large Stones", "75 – 150 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Grey Crushed Stone / Lumps"],
  //             ["Shape", "Crushed Aggregate / Lumps"],
  //             ["Color", "Grey"],
  //             ["Specific Gravity", "2.60 – 2.75"],
  //             ["Bulk Density", "1.40 – 1.70 g/cm³"],
  //             ["Hardness", "3 Mohs"],
  //             ["Compressive Strength", "80 – 180 MPa"],
  //             ["Water Absorption", "≤ 2%"],
  //             ["Packing", "Bulk / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a dry area"]
  //           ]
  //         }
  //       ],

  //       applications: [
  //         "Road Construction",
  //         "Highway Projects",
  //         "Railway Ballast",
  //         "Concrete Manufacturing",
  //         "Building Foundations",
  //         "Bridges & Flyovers",
  //         "Drainage Systems",
  //         "Asphalt Production",
  //         "Infrastructure Projects",
  //         "Landscaping & Civil Engineering"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Construction Grade Limestone?",
  //           answer:
  //             "Construction Grade Limestone is a natural stone used as an aggregate and base material for roads, buildings, bridges, concrete, and other civil engineering projects."
  //         },
  //         {
  //           question: "Where is Construction Grade Limestone used?",
  //           answer:
  //             "It is widely used in highways, roads, railway ballast, concrete production, drainage systems, foundations, bridges, and infrastructure projects."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "We supply Construction Grade Limestone in crusher dust, aggregates, road base materials, and large stones, with customized sizes available on request."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in bulk, 1 MT jumbo bags, truckloads, or vessel shipments according to customer requirements."
  //         },
  //         {
  //           question: "What are the key advantages of Construction Grade Limestone?",
  //           answer:
  //             "It offers excellent strength, durability, weather resistance, good load-bearing capacity, and cost-effective performance for construction applications."
  //         },
  //         {
  //           question: "Do you export Construction Grade Limestone?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Construction Grade Limestone worldwide with customized specifications, strict quality control, and dependable logistics."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },
  //   ]
  // },

  // {
  //   slug: "natural-graphite",
  //   key: "NaturalGraphite",
  //   category: "Industrial Minerals",
  //   shortDescription:
  //     "Flake and amorphous natural graphite for refractories, batteries, and lubricant industries.",
  //   description:
  //     "Premium natural graphite with controlled flake size distribution, high carbon content, and low ash for refractory brick, EV battery anode precursors, and industrial lubricant manufacturing.",
  //   image: "/images/products/natural-graphite.jpg",
  //   imageAlt: "Limestone Products",
  //   featured: true,
  //   specification: [
  //     { key: "FixedCarbon", value: "85 – 97%" },
  //     { key: "Ash", value: "≤ 5%" },
  //     { key: "FlakeSize", value: "+50 to -200 mesh" },
  //     { key: "Moisture", value: "≤ 2%" },
  //     { key: "Types", value: "Flake / Amorphous" },
  //   ],
  //   variants: [
  //     {
  //       id: 1,
  //       translationKey: "Natural Graphite Lumps",
  //       image: "/images/products/natural-graphite-lumps (2).jpg",
  //       description:
  //         "Natural Graphite Lumps are high-quality naturally occurring crystalline carbon materials with excellent thermal conductivity, electrical conductivity, lubricating properties, and chemical stability. They are widely used in steelmaking, foundries, refractory manufacturing, batteries, lubricants, and carbon-based industrial applications. With high fixed carbon content and low impurity levels, Natural Graphite Lumps provide superior performance in metallurgical and industrial processes while ensuring consistent quality and reliable carbon recovery.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "85 – 98%",
  //         },
  //         {
  //           key: "Ash",
  //           value: "2 – 12%",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / Madagascar / China",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Fixed Carbon (FC)", "85 – 98%"],
  //             ["Ash", "2 – 12%"],
  //             ["Volatile Matter (VM)", "≤ 1.0%"],
  //             ["Moisture", "≤ 0.5%"],
  //             ["Sulphur (S)", "≤ 0.05%"],
  //             ["Silica (SiO₂)", "≤ 2.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Sizes",
  //           headers: ["Product", "Size"],
  //           rows: [
  //             ["Small Lumps", "10 – 30 mm"],
  //             ["Medium Lumps", "30 – 50 mm"],
  //             ["Large Lumps", "50 – 80 mm"],
  //             ["Extra Large Lumps", "80 – 100 mm"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Black to Dark Grey Lumps"],
  //             ["Shape", "Natural Lumps"],
  //             ["Color", "Black / Dark Grey"],
  //             ["Specific Gravity", "2.20 – 2.26 g/cm³"],
  //             ["Bulk Density", "0.80 – 1.10 g/cm³"],
  //             ["Hardness", "1 – 2 Mohs"],
  //             ["Sizes Available", "10–30 mm, 30–80 mm, 50–100 mm"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a cool, dry, and moisture-free environment"]
  //           ]
  //         },

  //         {
  //           title: "Available Grades",
  //           headers: ["Grade", "Fixed Carbon"],
  //           rows: [
  //             ["NG-85", "85%"],
  //             ["NG-90", "90%"],
  //             ["NG-94", "94%"],
  //             ["NG-96", "96%"],
  //             ["NG-98", "98%"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Foundry Industry",
  //         "Refractory Manufacturing",
  //         "Carbon Additive",
  //         "Battery Manufacturing",
  //         "Lubricants",
  //         "Friction Materials",
  //         "Carbon Brushes",
  //         "Conductive Coatings",
  //         "Paint & Coating Industry",
  //         "Chemical Industry",
  //         "Metallurgical Processes"
  //       ],

  //       faq: [
  //         {
  //           question: "What are Natural Graphite Lumps?",
  //           answer:
  //             "Natural Graphite Lumps are naturally occurring crystalline carbon materials used in metallurgical, refractory, foundry, battery, and industrial applications."
  //         },
  //         {
  //           question: "What industries use Natural Graphite Lumps?",
  //           answer:
  //             "They are widely used in steel plants, foundries, refractory manufacturing, batteries, lubricants, ferro alloys, and chemical industries."
  //         },
  //         {
  //           question: "What grades are available?",
  //           answer:
  //             "We supply Natural Graphite Lumps with fixed carbon ranging from 85% to 98% and can customize specifications according to customer requirements."
  //         },
  //         {
  //           question: "What sizes are available?",
  //           answer:
  //             "Natural Graphite Lumps are available in sizes from 10 mm to 100 mm, with customized sizing available on request."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 25 Kg bags, 1 MT jumbo bags, and bulk packaging according to customer requirements."
  //         },
  //         {
  //           question: "Do you export Natural Graphite Lumps?",
  //           answer:
  //             "Yes. SSL Group supplies and exports premium-quality Natural Graphite Lumps worldwide with customized specifications, reliable quality assurance, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 2,
  //       translationKey: "Natural Graphite Powder",
  //       image: "/images/products/natural-graphite-powder.jpg",
  //       description:
  //         "Natural Graphite Powder is a premium-grade crystalline carbon material produced by finely grinding high-purity natural graphite. It offers excellent electrical and thermal conductivity, superior lubricating properties, high chemical stability, and outstanding resistance to heat and corrosion. Natural Graphite Powder is widely used in steelmaking, foundries, refractory manufacturing, batteries, lubricants, friction materials, conductive coatings, and various metallurgical and industrial applications. SSL Group supplies high-quality Natural Graphite Powder in customized grades and particle sizes to meet diverse customer requirements.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "85 – 99%",
  //         },
  //         {
  //           key: "Particle Size",
  //           value: "100–500 Mesh",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / Madagascar / China",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Fixed Carbon (FC)", "85 – 99%"],
  //             ["Ash", "0.5 – 10%"],
  //             ["Volatile Matter (VM)", "≤ 1.0%"],
  //             ["Moisture", "≤ 0.5%"],
  //             ["Sulphur (S)", "≤ 0.05%"],
  //             ["Silica (SiO₂)", "≤ 2.0%"]
  //           ]
  //         },

  //         {
  //           title: "Available Particle Sizes",
  //           headers: ["Product", "Particle Size"],
  //           rows: [
  //             ["Fine Powder", "100 Mesh"],
  //             ["Medium Powder", "200 Mesh"],
  //             ["Standard Powder", "325 Mesh"],
  //             ["Ultra Fine Powder", "500 Mesh"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Fine Black Powder"],
  //             ["Shape", "Powder"],
  //             ["Color", "Black"],
  //             ["Specific Gravity", "2.20 – 2.26 g/cm³"],
  //             ["Bulk Density", "0.60 – 0.90 g/cm³"],
  //             ["Hardness", "1 – 2 Mohs"],
  //             ["Particle Size", "100, 200, 325, 500 Mesh or Customized"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a cool, dry, and moisture-free environment"]
  //           ]
  //         },

  //         {
  //           title: "Available Grades",
  //           headers: ["Grade", "Fixed Carbon"],
  //           rows: [
  //             ["NGP-85", "85%"],
  //             ["NGP-90", "90%"],
  //             ["NGP-94", "94%"],
  //             ["NGP-96", "96%"],
  //             ["NGP-98", "98%"],
  //             ["NGP-99", "99%"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "Steel Manufacturing",
  //         "Foundry Industry",
  //         "Refractory Manufacturing",
  //         "Carbon Additive",
  //         "Battery Manufacturing",
  //         "Lubricant Production",
  //         "Crucible Manufacturing",
  //         "Ferro Alloy Production",
  //         "Electrical Conductive Materials",
  //         "Chemical Industry",
  //         "Metallurgical Processes",
  //         "Carbon Products"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Natural Graphite Powder?",
  //           answer:
  //             "Natural Graphite Powder is a finely ground crystalline graphite with high carbon content, widely used in metallurgical, refractory, battery, lubricant, and industrial applications."
  //         },
  //         {
  //           question: "Which industries use Natural Graphite Powder?",
  //           answer:
  //             "It is used in steel plants, foundries, battery manufacturing, refractory industries, lubricants, friction materials, conductive coatings, paints, and chemical industries."
  //         },
  //         {
  //           question: "What mesh sizes are available?",
  //           answer:
  //             "We supply Natural Graphite Powder in 100, 200, 325, and 500 mesh sizes, with customized particle sizes available upon request."
  //         },
  //         {
  //           question: "What are the advantages of Natural Graphite Powder?",
  //           answer:
  //             "It provides high carbon purity, excellent thermal and electrical conductivity, superior lubrication, low ash, and excellent chemical stability."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 25 Kg bags, 1 MT jumbo bags, and customized bulk packaging according to customer requirements."
  //         },
  //         {
  //           question: "Do you export Natural Graphite Powder?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Natural Graphite Powder worldwide with customized specifications, reliable quality assurance, and timely delivery."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     },

  //     {
  //       id: 3,
  //       translationKey: "Expandable Graphite",
  //       image: "/images/products/expandable-graphite.jpg",
  //       description:
  //         "Expandable Graphite is a specially processed natural flake graphite treated to expand rapidly when exposed to high temperatures. Upon heating, the graphite expands into a worm-like structure, providing outstanding thermal insulation, fire resistance, sealing performance, and chemical stability. It is widely used in fire-retardant materials, gaskets, sealing products, thermal insulation, battery technologies, and refractory applications. SSL Group supplies premium-quality Expandable Graphite with customized expansion volumes, particle sizes, and carbon content to meet diverse industrial requirements.",

  //       specifications: [
  //         {
  //           key: "Fixed Carbon",
  //           value: "90 – 99%",
  //         },
  //         {
  //           key: "Expansion Volume",
  //           value: "150 – 350 ml/g",
  //         },
  //         {
  //           key: "Standard",
  //           value: "Industrial Grade",
  //         },
  //         {
  //           key: "Origin",
  //           value: "India / China",
  //         },
  //       ],

  //       technicalTables: [
  //         {
  //           title: "Chemical Composition",
  //           headers: ["Parameter", "Typical Value"],
  //           rows: [
  //             ["Fixed Carbon (FC)", "90 – 99%"],
  //             ["Ash", "0.5 – 5.0%"],
  //             ["Volatile Matter", "≤ 1.0%"],
  //             ["Moisture", "≤ 0.5%"],
  //             ["Sulphur (S)", "≤ 0.05%"],
  //             ["pH", "6.0 – 8.0"]
  //           ]
  //         },

  //         {
  //           title: "Available Particle Sizes",
  //           headers: ["Mesh Size", "Typical Application"],
  //           rows: [
  //             ["+50 Mesh", "Fire Protection"],
  //             ["+80 Mesh", "Sealing Materials"],
  //             ["+100 Mesh", "Gaskets"],
  //             ["+150 Mesh", "Thermal Insulation"],
  //             ["+300 Mesh", "Specialty Industrial Applications"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },

  //         {
  //           title: "Physical Properties",
  //           headers: ["Property", "Value"],
  //           rows: [
  //             ["Appearance", "Silver Grey Flakes"],
  //             ["Shape", "Flake"],
  //             ["Color", "Grey / Black"],
  //             ["Expansion Temperature", "180 – 300°C"],
  //             ["Expansion Volume", "150 – 350 ml/g"],
  //             ["Bulk Density", "0.30 – 0.60 g/cm³"],
  //             ["Particle Size", "+50 Mesh to +300 Mesh"],
  //             ["Packing", "25 Kg Bags / 1 MT Jumbo Bags"],
  //             ["Storage", "Store in a cool, dry, moisture-free area"]
  //           ]
  //         },

  //         {
  //           title: "Available Grades",
  //           headers: ["Grade", "Fixed Carbon"],
  //           rows: [
  //             ["EG-90", "90%"],
  //             ["EG-95", "95%"],
  //             ["EG-97", "97%"],
  //             ["EG-98", "98%"],
  //             ["EG-99", "99%"],
  //             ["Customized", "As per Customer Requirement"]
  //           ]
  //         },
  //       ],

  //       applications: [
  //         "Fire-Retardant Materials",
  //         "Intumescent Coatings",
  //         "Thermal Insulation",
  //         "Industrial Gaskets",
  //         "Sealing Materials",
  //         "Refractory Products",
  //         "Battery Manufacturing",
  //         "Heat Shields",
  //         "Automotive Components",
  //         "Petrochemical Industry",
  //         "Chemical Processing",
  //         "Building & Construction"
  //       ],

  //       faq: [
  //         {
  //           question: "What is Expandable Graphite?",
  //           answer:
  //             "Expandable Graphite is a specially treated natural graphite that rapidly expands when heated, forming a worm-like structure with excellent fire-resistant and insulating properties."
  //         },
  //         {
  //           question: "What is Expandable Graphite used for?",
  //           answer:
  //             "It is widely used in fire-retardant materials, intumescent coatings, gaskets, sealing products, thermal insulation, batteries, and refractory applications."
  //         },
  //         {
  //           question: "What expansion volumes are available?",
  //           answer:
  //             "We supply Expandable Graphite with expansion volumes ranging from 150 to 350 ml/g, with customized grades available upon request."
  //         },
  //         {
  //           question: "What particle sizes are available?",
  //           answer:
  //             "Expandable Graphite is available in +50, +80, +100, +150, and +300 mesh sizes, with customized sizing options."
  //         },
  //         {
  //           question: "What packing options are available?",
  //           answer:
  //             "The product is supplied in 25 Kg bags, 1 MT jumbo bags, and customized bulk packaging based on customer requirements."
  //         },
  //         {
  //           question: "Do you export Expandable Graphite?",
  //           answer:
  //             "Yes. SSL Group exports premium-quality Expandable Graphite worldwide with customized specifications, consistent quality, and reliable logistics."
  //         }
  //       ],

  //       downloads: [
  //         {
  //           title: "Technical Datasheet",
  //           file: "/downloads/fesi-datasheet.pdf",
  //         },

  //         {
  //           title: "MSDS",
  //           file: "/downloads/fesi-msds.pdf",
  //         },

  //         {
  //           title: "Test Certificate",
  //           file: "/downloads/fesi-test.pdf",
  //         },
  //       ],
  //     }
  //   ]
  // },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}


