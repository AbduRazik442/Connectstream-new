
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  CheckCheck,
  Users,
  MessageSquare,
  TrendingUp,
  ShoppingBag,
  Zap,
  Clock,
  ArrowUpRight,
  CircleCheck,
  BarChart3,
  Bot,
  Phone,
  CreditCard,
  Gift,
  ShieldCheck,
  FileText,
} from "lucide-react";
import "./FeatureDemo.css";

const conversations = [
  {
    name: "Sarah Johnson",
    message: "Thank you! That looks perfect.",
    time: "10:42 AM",
    avatar: "SJ",
    color: "green",
  },
  {
    name: "Michael Chen",
    message: "Can you share the product details?",
    time: "10:35 AM",
    avatar: "MC",
    color: "purple",
  },
  {
    name: "Emma Wilson",
    message: "I'd like to place an order.",
    time: "10:18 AM",
    avatar: "EW",
    color: "orange",
  },
];

function InboxDemo() {
  return (
    <div className="demo-window inbox-demo">
      <div className="demo-topbar">
        <div className="demo-brand">
          <span className="demo-brand-icon">C</span>
          <span>ConnectStream</span>
        </div>
        <div className="demo-topbar-right">
          <span className="demo-online-dot" />
          <span>Workspace online</span>
          <MoreHorizontal size={19} />
        </div>
      </div>

      <div className="inbox-layout">
        <aside className="inbox-rail">
          <MessageSquare size={19} />
          <Users size={19} />
          <BarChart3 size={19} />
          <Zap size={19} />
        </aside>

        <div className="conversation-list">
          <div className="conversation-heading">
            <div>
              <strong>Inbox</strong>
              <span>All conversations</span>
            </div>
            <MoreHorizontal size={18} />
          </div>

          <div className="demo-search">
            <Search size={14} />
            Search conversations
          </div>

          {conversations.map((person) => (
            <div
              className={`conversation-item ${
                person.name === "Sarah Johnson" ? "selected" : ""
              }`}
              key={person.name}
            >
              <div className={`demo-avatar ${person.color}`}>
                {person.avatar}
              </div>
              <div className="conversation-info">
                <strong>{person.name}</strong>
                <span>{person.message}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-panel">
          <div className="chat-header">
            <div className="demo-avatar green">SJ</div>
            <div>
              <strong>Sarah Johnson</strong>
              <span>Online</span>
            </div>
            <MoreHorizontal size={18} />
          </div>

          <div className="chat-messages">
            <span className="chat-date">Today</span>

            <div className="chat-bubble incoming">
              Hi! I'm interested in your premium collection.
              <small>10:38 AM</small>
            </div>

            <div className="chat-bubble outgoing">
              Absolutely! I'd be happy to help you.
              <small>10:40 AM <CheckCheck size={12} /></small>
            </div>

            <div className="chat-bubble incoming">
              Thank you! That looks perfect.
              <small>10:42 AM</small>
            </div>
          </div>

          <div className="chat-input">
            <Paperclip size={15} />
            <span>Type a message...</span>
            <Smile size={15} />
            <Send size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BroadcastDemo() {
  return (
    <div className="demo-window analytics-demo">
      <div className="demo-dashboard-header">
        <div>
          <span className="demo-mini-label">CAMPAIGN OVERVIEW</span>
          <h4>Broadcast performance</h4>
        </div>
        <span className="demo-period">Last 30 days</span>
      </div>

      <div className="demo-stats-grid">
        <div className="demo-stat-card">
          <span>Messages sent</span>
          <strong>24,850</strong>
          <small><TrendingUp size={13} /> +18.4%</small>
        </div>

        <div className="demo-stat-card">
          <span>Delivery rate</span>
          <strong>98.6%</strong>
          <small><TrendingUp size={13} /> +4.2%</small>
        </div>

        <div className="demo-stat-card">
          <span>Engagement</span>
          <strong>76.2%</strong>
          <small><TrendingUp size={13} /> +12.8%</small>
        </div>
      </div>

      <div className="demo-chart-card">
        <div className="demo-chart-heading">
          <strong>Campaign engagement</strong>
          <span>Weekly performance</span>
        </div>

        <div className="demo-bars">
          {[42, 65, 50, 82, 61, 92, 74, 100, 78, 88, 68, 95].map(
            (height, index) => (
              <div className="demo-bar-wrapper" key={index}>
                <div
                  className="demo-bar"
                  style={{ height: `${height}%` }}
                />
              </div>
            )
          )}
        </div>
        <div className="demo-chart-labels">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

function AutomationDemo() {
  return (
    <div className="demo-window automation-demo">
      <div className="demo-dashboard-header">
        <div>
          <span className="demo-mini-label">AUTOMATION BUILDER</span>
          <h4>Customer journey</h4>
        </div>
        <span className="demo-live-status">● Active</span>
      </div>

      <div className="workflow-canvas">
        <div className="workflow-node trigger">
          <span className="workflow-icon"><Zap size={17} /></span>
          <div>
            <strong>Trigger</strong>
            <span>New customer message</span>
          </div>
          <CircleCheck size={16} />
        </div>

        <div className="workflow-connector" />

        <div className="workflow-node action">
          <span className="workflow-icon"><Bot size={17} /></span>
          <div>
            <strong>AI Assistant</strong>
            <span>Understand intent</span>
          </div>
          <CircleCheck size={16} />
        </div>

        <div className="workflow-connector" />

        <div className="workflow-node condition">
          <span className="workflow-icon"><Users size={17} /></span>
          <div>
            <strong>Assign to team</strong>
            <span>Route conversation</span>
          </div>
          <CircleCheck size={16} />
        </div>
      </div>

      <div className="workflow-footer">
        <span><CircleCheck size={14} /> Workflow running smoothly</span>
        <span>View workflow <ArrowUpRight size={13} /></span>
      </div>
    </div>
  );
}

function CommerceDemo() {
  return (
    <div className="demo-window commerce-demo">
      <div className="demo-dashboard-header">
        <div>
          <span className="demo-mini-label">COMMERCE OVERVIEW</span>
          <h4>Customer storefront</h4>
        </div>
        <ShoppingBag size={21} />
      </div>

      <div className="commerce-summary">
        <div>
          <span>Total orders</span>
          <strong>1,284</strong>
        </div>
        <div>
          <span>Revenue</span>
          <strong>₹8.42L</strong>
        </div>
      </div>

      <div className="commerce-products">
        <div className="commerce-product">
          <div className="product-placeholder product-one">
            <ShoppingBag size={28} />
          </div>
          <div>
            <strong>Premium Collection</strong>
            <span>Popular product</span>
            <b>₹2,499</b>
          </div>
          <ArrowUpRight size={17} />
        </div>

        <div className="commerce-product">
          <div className="product-placeholder product-two">
            <Gift size={28} />
          </div>
          <div>
            <strong>Loyalty Rewards</strong>
            <span>Customer rewards</span>
            <b>1,250 points</b>
          </div>
          <ArrowUpRight size={17} />
        </div>
      </div>
    </div>
  );
}

function GenericDemo({ feature }) {
  const iconMap = {
    "personal-assistant": Bot,
    templates: FileText,
    "ai-intelligence": Bot,
    payments: CreditCard,
    "calls-hub": Phone,
    contacts: Users,
    analytics: BarChart3,
    team: Users,
    supervisor: ShieldCheck,
    "loyalty-hub": Gift,
    products: ShoppingBag,
    "team-inbox": MessageSquare,
    broadcast: TrendingUp,
    flows: Zap,
  };

  const Icon = iconMap[feature.id] || Zap;

  return (
    <div className="demo-window generic-demo">
      <div className="generic-demo-icon">
        <Icon size={32} />
      </div>

      <span className="demo-mini-label">CONNECTSTREAM WORKSPACE</span>

      <h4>{feature.name}</h4>

      <p>{feature.description}</p>

      <div className="generic-demo-progress">
        <span />
      </div>

      <div className="generic-demo-footer">
        <span><CircleCheck size={14} /> Connected experience</span>
        <span><ArrowUpRight size={14} /></span>
      </div>
    </div>
  );
}

function FeatureDemo({ feature }) {
  const demoMap = {
    "team-inbox": InboxDemo,
    broadcast: BroadcastDemo,
    flows: AutomationDemo,
    products: CommerceDemo,
    "loyalty-hub": CommerceDemo,
  };

  const DemoComponent = demoMap[feature.id] || GenericDemo;

  return (
    <div className="feature-demo-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="feature-demo-animation"
        >
          <DemoComponent feature={feature} />
        </motion.div>
      </AnimatePresence>

      <div className="demo-floating-card">
        <span className="demo-floating-icon">
          <TrendingUp size={18} />
        </span>
        <div>
          <strong>Connected & growing</strong>
          <span>Your business, in sync.</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureDemo;