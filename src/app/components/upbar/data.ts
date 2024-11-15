export type MenuItem = {
  name: string;
  href?: string;
  items?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    name: "Products",
    items: [
      {
        name: "Hardware",
        items: [
          {
            name: "Gaming and Creating",
            items: [
              {
                name: "GeForce Graphics Cards",
                href: "/products/hardware/gaming-and-creating/geforce-graphics-cards",
              },
              {
                name: "Laptops",
                href: "/products/hardware/gaming-and-creating/laptops",
              },
              {
                name: "G-SYNC Monitors",
                href: "/products/hardware/gaming-and-creating/g-sync-monitors",
              },
              {
                name: "Studio",
                href: "/products/hardware/gaming-and-creating/studio",
              },
              {
                name: "SHIELD TV",
                href: "/products/hardware/gaming-and-creating/shield-tv",
              },
              {
                name: "RTX AI PCs",
                href: "/products/hardware/gaming-and-creating/rtx-ai-pcs",
              },
            ],
          },
          {
            name: "Laptops and Workstations",
            items: [
              {
                name: "Laptops",
                href: "/products/hardware/laptops-and-workstations/laptops",
              },
              {
                name: "NVIDIA RTX in Desktop Workstations",
                href: "/products/hardware/laptops-and-workstations/nvidia-rtx-in-desktop-workstations",
              },
              {
                name: "NVIDIA RTX in Professional Laptops",
                href: "/products/hardware/laptops-and-workstations/nvidia-rtx-in-professional-laptops",
              },
              {
                name: "NVIDIA RTX-Powered AI Workstations",
                href: "/products/hardware/laptops-and-workstations/nvidia-rtx-powered-ai-workstations",
              },
            ],
          },
          {
            name: "Cloud and Data Center",
            items: [
              {
                name: "Overview",
                href: "/products/hardware/cloud-and-data-center/overview",
              },
              {
                name: "Grace CPU",
                href: "/products/hardware/cloud-and-data-center/grace-cpu",
              },
              {
                name: "DGX Platform",
                href: "/products/hardware/cloud-and-data-center/dgx-platform",
              },
              {
                name: "EGX Platform",
                href: "/products/hardware/cloud-and-data-center/egx-platform",
              },
              {
                name: "IGX Platform",
                href: "/products/hardware/cloud-and-data-center/igx-platform",
              },
              {
                name: "HGX Platform",
                href: "/products/hardware/cloud-and-data-center/hgx-platform",
              },
              {
                name: "NVIDIA MGX",
                href: "/products/hardware/cloud-and-data-center/nvidia-mgx",
              },
              {
                name: "NVIDIA OVX",
                href: "/products/hardware/cloud-and-data-center/nvidia-ovx",
              },
              {
                name: "DRIVE Sim",
                href: "/products/hardware/cloud-and-data-center/drive-sim",
              },
            ],
          },
          {
            name: "Networking",
            items: [
              {
                name: "Overview",
                href: "/products/hardware/networking/overview",
              },
              {
                name: "DPUs and SuperNICs",
                href: "/products/hardware/networking/dpus-and-supernics",
              },
              {
                name: "Ethernet",
                href: "/products/hardware/networking/ethernet",
              },
              {
                name: "InfiniBand",
                href: "/products/hardware/networking/infiniband",
              },
            ],
          },
          {
            name: "GPUs",
            items: [
              {
                name: "GeForce",
                href: "/products/hardware/gpus/geforce",
              },
              {
                name: "NVIDIA RTX / Quadro",
                href: "/products/hardware/gpus/nvidia-rtx-quadro",
              },
              {
                name: "Data Center",
                href: "/products/hardware/gpus/data-center",
              },
            ],
          },
          {
            name: "Embedded Systems",
            items: [
              {
                name: "Jetson",
                href: "/products/hardware/embedded-systems/jetson",
              },
              {
                name: "DRIVE AGX",
                href: "/products/hardware/embedded-systems/drive-agx",
              },
              {
                name: "Clara AGX",
                href: "/products/hardware/embedded-systems/clara-agx",
              },
            ],
          },
        ],
      },
      {
        name: "Software",
        items: [
          {
            name: "Application Frameworks",
            items: [
              { name: "AI Inference - Triton" },
              { name: "Automotive - DRIVE" },
              { name: "Cloud-AI Video Streaming - Maxine" },
              { name: "Computational Lithography - cuLitho" },
              { name: "Cybersecurity - Morpheus" },
              { name: "Data Analytics - RAPIDS" },
              { name: "Generative AI - NeMo" },
              { name: "Healthcare - Clara" },
              { name: "High-Performance Computing" },
              { name: "Intelligent Video Analytics - Metropolis" },
              { name: "Logistics and Route Optimization - cuOpt" },
              { name: "Metaverse Applications - Omniverse" },
              { name: "Recommender Systems - Merlin" },
              { name: "Robotics - Isaac" },
              { name: "Speech AI - Riva" },
              { name: "Telecommunications - Aerial" },
            ],
          },
          {
            name: "Apps and Tools",
            items: [
              { name: "Application Catalog" },
              { name: "NGC Catalog" },
              { name: "NVIDIA NGC" },
              { name: "3D Workflows - Omniverse" },
              { name: "Data Center" },
              { name: "GPU Monitoring" },
              { name: "NVIDIA App for Enterprise" },
              { name: "NVIDIA RTX Desktop Manager" },
              { name: "RTX Accelerated Creative Apps" },
              { name: "Video Conferencing" },
              { name: "AI Workbench" },
            ],
          },
          {
            name: "Gaming and Creating",
            items: [
              { name: "GeForce NOW Cloud Gaming" },
              { name: "GeForce Experience" },
              { name: "NVIDIA Broadcast App" },
              { name: "Animation - Machinima" },
              { name: "Modding - RTX Remix" },
              { name: "Studio" },
            ],
          },
          {
            name: "Infrastructure",
            items: [
              { name: "AI Enterprise Suite" },
              { name: "Cloud Native Support" },
              { name: "Cluster Management" },
              { name: "IO Acceleration" },
              { name: "Networking" },
              { name: "Virtual GPU" },
            ],
          },
          {
            name: "Cloud Services",
            items: [
              { name: "Base Command" },
              { name: "BioNeMo" },
              { name: "DGX Cloud" },
              { name: "NeMo" },
              { name: "Edify" },
              { name: "Private Registry" },
              { name: "Omniverse" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Solutions",
    items: [
      {
        name: "Artificial Intelligence",
        items: [
          { name: "Overview" },
          { name: "AI Platform" },
          { name: "AI Inference" },
          { name: "AI Workflows" },
          { name: "Conversational AI" },
          { name: "Custom Models" },
          { name: "Cybersecurity" },
          { name: "Data Analytics" },
          { name: "Generative AI" },
          { name: "Machine Learning" },
          { name: "Prediction and Forecasting" },
          { name: "Speech AI" },
        ],
      },
      {
        name: "Data Center and Cloud Computing",
        items: [
          { name: "Overview" },
          { name: "Accelerated Computing for Enterprise IT" },
          { name: "Cloud Computing" },
          { name: "Colocation" },
          { name: "MLOps" },
          { name: "Networking" },
          { name: "Virtualization" },
        ],
      },
      {
        name: "Design and Simulation",
        items: [
          { name: "Overview" },
          { name: "Digital Twin Development" },
          { name: "Rendering and Visualization" },
          { name: "Robotics Simulation" },
          { name: "Vehicle Simulation" },
        ],
      },
      {
        name: "Robotics and Edge Computing",
        items: [
          { name: "Overview" },
          { name: "Robotics" },
          { name: "Edge Computing" },
          { name: "Vision AI" },
        ],
      },
      {
        name: "High-Performance Computing",
        items: [
          { name: "Overview" },
          { name: "HPC and AI" },
          { name: "Scientific Visualization" },
          { name: "Simulation and Modeling" },
          { name: "Quantum Computing" },
        ],
      },
      {
        name: "Self-Driving Vehicles",
        items: [
          { name: "Overview" },
          { name: "In-Vehicle Computing" },
          { name: "Infrastructure" },
        ],
      },
    ],
  },
  {
    name: "Industries",
    items: [
      {
        name: "Industries",
        items: [
          { name: "Overview" },
          { name: "Architecture, Engineering, Construction & Operations" },
          { name: "Automotive" },
          { name: "Consumer Internet" },
          { name: "Energy" },
          { name: "Financial Services" },
          { name: "Gaming" },
          { name: "Global Public Sector" },
          { name: "Healthcare and Life Sciences" },
          { name: "Higher Education and Research" },
          { name: "Industrial" },
          { name: "Manufacturing" },
          { name: "Media and Entertainment" },
          { name: "Restaurants and Quick-Service" },
          { name: "Retail and Consumer Packaged Goods" },
          { name: "Robotics" },
          { name: "Smart Cities and Spaces" },
          { name: "Supercomputing" },
          { name: "Telecommunications" },
          { name: "US Public Sector" },
        ],
      },
    ],
  },
  {
    name: "For You",
    items: [
      {
        name: "Creatives/Designers",
        href: "/for-you/creatives-designers",
      },
      {
        name: "Data Scientists",
        href: "/for-you/data-scientists",
      },
      {
        name: "Developers",
        href: "/for-you/developers",
      },
      {
        name: "Executives",
        href: "/for-you/executives",
      },
      {
        name: "Gamers",
        href: "/for-you/gamers",
      },
      {
        name: "ISVs",
        href: "/for-you/isvs",
      },
      {
        name: "IT Professionals",
        href: "/for-you/it-professionals",
      },
      {
        name: "Researchers",
        href: "/for-you/researchers",
      },
      {
        name: "Roboticists",
        href: "/for-you/roboticists",
      },
      {
        name: "Startups",
        href: "/for-you/startups",
      },
    ],
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Drivers",
    href: "/drivers",
  },
  {
    name: "Support",
    href: "/support",
  },
];
