// 功能特性数据类型
export interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// 使用步骤数据类型
export interface Step {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// 统计数据类型
export interface Stat {
  value: string;
  label: string;
}

// 导航链接类型
export interface NavLink {
  label: string;
  href: string;
}

// 聊天消息类型
export interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
}
