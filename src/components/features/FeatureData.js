
import {
  MessageSquare,
  UserRound,
  Megaphone,
  FileText,
  Workflow,
  BrainCircuit,
  Package,
  HeartHandshake,
  CreditCard,
  Phone,
  Users,
  ChartNoAxesCombined,
  UserCog,
  ShieldCheck,
} from "lucide-react";

export const featureGroups = [
  {
    id: "conversations",
    title: "Conversations",
    subtitle: "Every conversation, beautifully connected.",
    features: [
      {
        id: "team-inbox",
        name: "Team Inbox",
        description:
          "Manage all your WhatsApp conversations in one collaborative inbox. Assign chats, track responses and never miss a customer.",
        icon: MessageSquare,
        status: null,
      },
      {
        id: "personal-assistant",
        name: "Personal Assistant",
        description:
          "Give every customer a more personal experience with intelligent conversation assistance.",
        icon: UserRound,
        status: null,
      },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Work smarter. Respond faster. Grow further.",
    features: [
      {
        id: "broadcast",
        name: "Broadcast",
        description:
          "Reach thousands of customers through targeted WhatsApp campaigns.",
        icon: Megaphone,
        status: null,
      },
      {
        id: "templates",
        name: "Templates",
        description:
          "Create and manage approved WhatsApp message templates with ease.",
        icon: FileText,
        status: null,
      },
      {
        id: "flows",
        name: "Flows",
        description:
          "Build automated customer journeys with powerful no-code workflows.",
        icon: Workflow,
        status: null,
      },
      {
        id: "ai-intelligence",
        name: "AI Intelligence",
        description:
          "Bring AI-powered intelligence into your customer conversations.",
        icon: BrainCircuit,
        status: "Beta",
      },
    ],
  },
  {
    id: "commerce",
    title: "Commerce",
    subtitle: "Turn conversations into conversions.",
    features: [
      {
        id: "products",
        name: "Products",
        description:
          "Showcase your products and make shopping effortless through WhatsApp.",
        icon: Package,
        status: null,
      },
      {
        id: "loyalty-hub",
        name: "Loyalty Hub",
        description:
          "Build lasting customer relationships through rewards and loyalty experiences.",
        icon: HeartHandshake,
        status: "New",
      },
      {
        id: "payments",
        name: "Payments",
        description:
          "Make customer transactions simpler with integrated payment experiences.",
        icon: CreditCard,
        status: "Beta",
      },
      {
        id: "calls-hub",
        name: "Calls Hub",
        description:
          "Bring customer calling experiences into your connected communication ecosystem.",
        icon: Phone,
        status: "Beta",
      },
    ],
  },
  {
    id: "management",
    title: "Management",
    subtitle: "Complete visibility. Total control.",
    features: [
      {
        id: "contacts",
        name: "Contacts",
        description:
          "Organize customer information and build a unified customer database.",
        icon: Users,
        status: null,
      },
      {
        id: "analytics",
        name: "Analytics",
        description:
          "Understand performance with actionable business insights.",
        icon: ChartNoAxesCombined,
        status: null,
      },
      {
        id: "team",
        name: "Team",
        description:
          "Manage team members, assignments and collaboration.",
        icon: UserCog,
        status: null,
      },
      {
        id: "supervisor",
        name: "Supervisor",
        description:
          "Monitor team performance and maintain operational visibility.",
        icon: ShieldCheck,
        status: null,
      },
    ],
  },
];